import { lookupArchive } from "@subsquid/archive-registry";
import * as ss58 from "@subsquid/ss58";
import { toHex } from "@subsquid/util-internal-hex";
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
} from "@subsquid/substrate-processor";
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import { In } from "typeorm";
import * as azSmartContractMetaDataHub from "./abi/az_smart_contract_metadata_hub";
import { Rating, Record } from "./model/generated";

const CONTRACT_ADDRESS_SS58 =
  "5En4kRj71Vt1D3cQFaNebc35Eo9dWqSeeEALemyjVnGkxEuw";
const CONTRACT_ADDRESS = toHex(ss58.decode(CONTRACT_ADDRESS_SS58).bytes);
const SS58_PREFIX = ss58.decode(CONTRACT_ADDRESS_SS58).prefix;

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive("aleph-zero-testnet", { release: "FireSquid" }),
  })
  .addContractsContractEmitted(CONTRACT_ADDRESS, {
    data: {
      event: { args: true },
    },
  } as const);

type Item = BatchProcessorItem<typeof processor>;
type Ctx = BatchContext<Store, Item>;

// 1. I need to search by smart_contract_address & environment
// 2. I need to be able to get the user rating during the search
processor.run(new TypeormDatabase(), async (ctx) => {
  const records = extractCreateRecords(ctx);
  const rateEvent = extractRateEvents(ctx);

  const formattedRecords = records.map((record) => {
    const formattedRecord = new Record({
      id: record.id,
      smartContractAddress: record.smart_contract_address,
      url: record.url,
      environment: record.environment,
      likes: 1,
      dislikes: 0,
      submitter: record.submitter,
      enabled: true,
      timestamp: record.timestamp,
      block: record.block,
    });

    return formattedRecord;
  });

  await ctx.store.insert(formattedRecords);

  formattedRecords.forEach(async (record) => {
    await ctx.store.save(
      new Rating({
        id: `${record.id}-${record.submitter}`,
        recordId: record.id,
        user: record.submitter,
        rating: 1,
      }),
    );
  });

  // 2. Handle toggleEvents
  const toggleEvents = extractToggleEvents(ctx);
  toggleEvents.forEach(async (toggleEvent) => {
    // https://docs.subsquid.io/basics/store/postgres/typeorm-store/
    let record = await ctx.store.get(Record, toggleEvent.record_id);
    if (record) {
      record.enabled = toggleEvent.enabled;
      await ctx.store.save(record);
    }
  });

  // 3. Handle rateEvents
  rateEvent.forEach(async (rateEvent) => {
    // Update record
    let record = await ctx.store.get(Record, rateEvent.record_id);
    if (record) {
      if (rateEvent.new_user_rating == -1) {
        record.dislikes += 1;
      }
      if (rateEvent.new_user_rating == 1) {
        record.likes += 1;
      }
      if (rateEvent.previous_user_rating == -1) {
        record.dislikes -= 1;
      }
      if (rateEvent.previous_user_rating == 1) {
        record.likes -= 1;
      }
      await ctx.store.save(record);

      // Create or update rating
      let rating = await ctx.store.findOneBy(Rating, {
        recordId: record.id,
        user: rateEvent.user,
      });
      if (!rating) {
        rating = new Rating({
          id: `${record.id}-${record.submitter}`,
          recordId: record.id,
          user: rateEvent.user,
          rating: rateEvent.new_user_rating,
        });
      } else {
        rating.rating = rateEvent.new_user_rating;
      }
      await ctx.store.save(rating);
    }
  });
});

interface createRecord {
  id: string;
  smart_contract_address: string;
  url: string;
  submitter: string;
  environment: number;
  block: number;
  timestamp: Date;
}

interface rateEvent {
  record_id: string;
  previous_user_rating: number;
  new_user_rating: number;
  user: string;
}

interface toggleEvent {
  record_id: string;
  enabled: boolean;
}

function extractCreateRecords(ctx: Ctx): createRecord[] {
  const records: createRecord[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === CONTRACT_ADDRESS
      ) {
        const event = azSmartContractMetaDataHub.decodeEvent(
          item.event.args.data,
        );
        if (event.__kind === "Create") {
          records.push({
            id: String(event.id),
            smart_contract_address: ss58
              .codec(SS58_PREFIX)
              .encode(event.smartContractAddress),
            url: event.url,
            submitter: ss58.codec(SS58_PREFIX).encode(event.submitter),
            environment: event.environment,
            block: block.header.height,
            timestamp: new Date(block.header.timestamp),
          });
        }
      }
    }
  }
  return records;
}

function extractRateEvents(ctx: Ctx): rateEvent[] {
  const rateEvents: rateEvent[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === CONTRACT_ADDRESS
      ) {
        const event = azSmartContractMetaDataHub.decodeEvent(
          item.event.args.data,
        );
        if (event.__kind === "Rate") {
          rateEvents.push({
            record_id: String(event.id),
            previous_user_rating: event.previousUserRating,
            new_user_rating: event.newUserRating,
            user: ss58.codec(SS58_PREFIX).encode(event.user),
          });
        }
      }
    }
  }
  return rateEvents;
}

function extractToggleEvents(ctx: Ctx): toggleEvent[] {
  const toggleEvents: toggleEvent[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === CONTRACT_ADDRESS
      ) {
        const event = azSmartContractMetaDataHub.decodeEvent(
          item.event.args.data,
        );
        if (event.__kind === "Toggle") {
          toggleEvents.push({
            record_id: String(event.id),
            enabled: event.enabled,
          });
        }
      }
    }
  }
  return toggleEvents;
}
