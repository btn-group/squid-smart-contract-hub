import { lookupArchive } from "@subsquid/archive-registry"
import * as ss58 from "@subsquid/ss58"
import {toHex} from "@subsquid/util-internal-hex"
import {BatchContext, BatchProcessorItem, SubstrateBatchProcessor} from "@subsquid/substrate-processor"
import {Store, TypeormDatabase} from "@subsquid/typeorm-store"
import {In} from "typeorm"
import * as azSmartContractMetaDataHub from "./abi/az_smart_contract_metadata_hub"
import {Account, Rating, Record} from "./model/generated"

const CONTRACT_ADDRESS_SS58 = '5Cj6X4aJ99zc7xtgVwC4znMcK7ZHsXgvJtgrTiCcnfztWmtn'
const CONTRACT_ADDRESS = toHex(ss58.decode(CONTRACT_ADDRESS_SS58).bytes)
const SS58_PREFIX = ss58.decode(CONTRACT_ADDRESS_SS58).prefix

const processor = new SubstrateBatchProcessor()
    .setDataSource({
        archive: lookupArchive("aleph-zero-testnet", { release: "FireSquid" })
    })
    .addContractsContractEmitted(CONTRACT_ADDRESS, {
        data: {
            event: {args: true}
        }
    } as const)

type Item = BatchProcessorItem<typeof processor>
type Ctx = BatchContext<Store, Item>

// 1. I need to search by smart_contract_address & environment
// 2. I need to be able to get the user rating during the search 
processor.run(new TypeormDatabase(), async ctx => {
    const records = extractCreateRecords(ctx)
 
    const accountIds = new Set<string>()
    records.forEach(record => {
        accountIds.add(record.submitter)
    })
 
    // ?
    const accountsMap = await ctx.store.findBy(Account, {
        id: In([...accountIds])
    }).then(accounts => {
        return new Map(accounts.map(account => [account.id, account]))
    })
 
    const formattedRecords = records.map(record => {
        const formattedRecord = new Record({
            id: record.id,
            smart_contract_address: record.smart_contract_address,
            url: record.url,
            environment: record.environment,
            likes: 1,
            dislikes: 0,
            submitter: record.submitter,
            enabled: true,
            timestamp: record.timestamp,
            block: record.block
        })

        // Add to accountsMap if it doesn't exist
        if (!accountsMap.get(record.submitter)) {
            accountsMap.set(record.submitter, new Account({id: record.submitter}))
        }

        return record
    })
 
    await ctx.store.save([...accountsMap.values()])
    await ctx.store.insert(formattedRecords)

    // 2. Handle toggleEvents
    const toggleEvent = extractToggleEvents(ctx)
    toggleEvent.each(toggleEvent => {
        // https://docs.subsquid.io/basics/store/postgres/typeorm-store/
        let record = await ctx.store.get(Record, toggleEvent.record_id)
        record.enabled = toggleEvent.enabled
        await ctx.store.save(record)
    })

    // 3. Handle rateEvents
    const rateEvent = extractRateEvents(ctx)

})
 
interface createRecord {
    id: bigint
    smart_contract_address: string
    submitter: string
    environment: number
    block: number
    timestamp: Date
}

interface toggleEvent {
    record_id: bigint
    enabled: boolean
}
 
function extractCreateRecords(ctx: Ctx): createRecord[] {
    const records: createRecord[] = []
    for (const block of ctx.blocks) {
        for (const item of block.items) {
            if (item.name === 'Contracts.ContractEmitted' && item.event.args.contract === CONTRACT_ADDRESS) {
                const event = azSmartContractMetaDataHub.decodeEvent(item.event.args.data)
                if (event.__kind === 'Create') {
                    records.push({
                        id: event.id
                        smart_contract_address: ss58.codec(SS58_PREFIX).encode(event.smart_contract_address),
                        submitter: ss58.codec(SS58_PREFIX).encode(event.submitter),
                        environment: event.environment,
                        block: block.header.height,
                        timestamp: new Date(block.header.timestamp)
                    })
                }
            }
        }
    }
    return records
}

function extractToggleEvents(ctx: Ctx): toggleEvent[] {
    const toggleEvents: toggleEvent[] = []
    for (const block of ctx.blocks) {
        for (const item of block.items) {
            if (item.name === 'Contracts.ContractEmitted' && item.event.args.contract === CONTRACT_ADDRESS) {
                const event = azSmartContractMetaDataHub.decodeEvent(item.event.args.data)
                if (event.__kind === 'Toggle') {
                    toggleEvents.push({
                        record_id: event.id,
                        enabled: event.enabled
                    })
                }
            }
        }
    }
    return toggleEvents
} 
