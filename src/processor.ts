import { lookupArchive } from "@subsquid/archive-registry";
import * as ss58 from "@subsquid/ss58";
import { toHex } from "@subsquid/util-internal-hex";
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
} from "@subsquid/substrate-processor";
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import * as azGroups from "./abi/az_groups";
import * as azSmartContractHub from "./abi/az_smart_contract_hub";
import { Group, GroupUser, SmartContract } from "./model/generated";

const GROUPS_CONTRACT_ADDRESS_SS58 =
  "5HMYuwaZt2F9L7VaS89Z8w4EZ2Azu2SoFthaeE6YTHEBD7dg";
const GROUPS_CONTRACT_ADDRESS = toHex(ss58.decode(GROUPS_CONTRACT_ADDRESS_SS58).bytes);
const SMART_CONTRACT_HUB_CONTRACT_ADDRESS_SS58 =
  "5DHxiJXTEtgf4yuSMw8mhnwjTn11ME77wwBSU6rVjg8bszKQ";
const SMART_CONTRACT_HUB_CONTRACT_ADDRESS = toHex(ss58.decode(SMART_CONTRACT_HUB_CONTRACT_ADDRESS_SS58).bytes);
const SS58_PREFIX = ss58.decode(GROUPS_CONTRACT_ADDRESS_SS58).prefix;

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive("aleph-zero", { release: "FireSquid" }),
  })
  .addContractsContractEmitted(GROUPS_CONTRACT_ADDRESS, {
    data: {
      event: { args: true },
    },
  } as const)
  .addContractsContractEmitted(SMART_CONTRACT_HUB_CONTRACT_ADDRESS, {
    data: {
      event: { args: true },
    },
  } as const);

type Item = BatchProcessorItem<typeof processor>;
type Ctx = BatchContext<Store, Item>;

// 1. The aim is to get groups for an account
processor.run(new TypeormDatabase(), async (ctx) => {
  const groups = extractGroups(ctx);
  const groupsUpdate = extractGroupsUpdate(ctx);
  const smartContracts = await extractSmartContracts(ctx);
  const smartContractsUpdate = await extractSmartContractsUpdate(ctx);

  // 1. Create new groups
  const newGroups = groups.map((group) => {
    return new Group({
      id: group.id,
      name: group.name,
      enabled: true,
      createdAt: group.created_at
    });
  });
  await ctx.store.insert(newGroups);

  // 2. Update groups
  for (const gu of groupsUpdate) {
    const group = await ctx.store.get(Group, gu.id);
    if (group) {
      group.name = gu.name;
      group.enabled = gu.enabled;
      await ctx.store.save(
        group
      );
    }
  }

  // 3. Process group user events (needs to be done this way as group users can be destroyed)
  const groupUserEvents = await extractGroupUserEvents(ctx);
  for (const groupUserEvent of groupUserEvents) {
    if (groupUserEvent.action == 'destroy') {
      await ctx.store.remove(GroupUser, groupUserEvent.id);
    } else {
      await ctx.store.save(
        new GroupUser({
          id: groupUserEvent.id,
          group: groupUserEvent.group,
          accountId: groupUserEvent.accountId,
          role: groupUserEvent.role,
        }),
      );
    }
  };

  // 6. Create new smart contracts
  const newSmartContracts = smartContracts.map((smartContract) => {
    return new SmartContract({
      id: smartContract.id,
      address: smartContract.address,
      chain: smartContract.chain,
      caller: smartContract.caller,
      enabled: true,
      azeroId: smartContract.azeroId,
      abiUrl: smartContract.abiUrl,
      contractUrl: smartContract.contractUrl,
      wasmUrl: smartContract.wasmUrl,
      auditUrl: smartContract.auditUrl,
      group: smartContract.group,
      projectName: smartContract.projectName,
      projectWebsite: smartContract.projectWebsite,
      github: smartContract.github,
      createdAt: smartContract.created_at
    });
  });
  await ctx.store.insert(newSmartContracts);

  // 7. Update smart contracts
  for (const smartContractUpdate of smartContractsUpdate) {
    const smartContract = await ctx.store.get(SmartContract, String(smartContractUpdate.id));
    if (smartContract) {
      smartContract.enabled = smartContractUpdate.enabled;
      smartContract.azeroId = smartContractUpdate.azeroId;
      smartContract.auditUrl = smartContractUpdate.auditUrl;
      smartContract.group = smartContractUpdate.group;
      smartContract.projectName = smartContractUpdate.projectName;
      smartContract.projectWebsite = smartContractUpdate.projectWebsite;
      smartContract.github = smartContractUpdate.github;
      await ctx.store.save(
        smartContract
      );
    }
  };
});

interface GroupEvent {
  id: string;
  name: string;
  enabled: boolean;
  created_at?: Date;
}

interface GroupUserEvent {
  id: string;
  group: Group;
  accountId: string;
  role: string;
  action: string;
}

interface SmartContractCreateEvent {
  id: string,
  address: string,
  chain: number,
  caller: string,
  azeroId: string,
  abiUrl: string,
  contractUrl?: string,
  wasmUrl?: string,
  auditUrl?: string,
  group?: Group,
  projectName?: string,
  projectWebsite?: string,
  github?: string,
  created_at: Date
}

interface SmartContractUpdate {
  id: string,
  enabled: boolean,
  azeroId: string,
  auditUrl?: string,
  group?: Group,
  projectName?: string,
  projectWebsite?: string,
  github?: string,
}

function extractGroups(ctx: Ctx): GroupEvent[] {
  const groups: GroupEvent[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === GROUPS_CONTRACT_ADDRESS
      ) {
        const event = azGroups.decodeEvent(item.event.args.data);
        if (event.__kind === "Create") {
          groups.push({
            id: String(event.id),
            name: event.name,
            enabled: true,
            created_at: new Date(block.header.timestamp),
          });
        }
      }
    }
  }
  return groups;
}

function extractGroupsUpdate(ctx: Ctx): GroupEvent[] {
  const groups: GroupEvent[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === GROUPS_CONTRACT_ADDRESS
      ) {
        const event = azGroups.decodeEvent(item.event.args.data);
        if (event.__kind === "Update") {
          groups.push({
            id: String(event.id),
            name: event.name,
            enabled: event.enabled,
          });
        }
      }
    }
  }
  return groups;
}

async function extractGroupUserEvents(ctx: Ctx): Promise<GroupUserEvent[]> {
  const groupUsers: GroupUserEvent[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === GROUPS_CONTRACT_ADDRESS
      ) {

        const event = azGroups.decodeEvent(item.event.args.data);
        if (event.__kind === "GroupUserCreate") {
          const group = await ctx.store.get(Group, String(event.groupId));
          if (group) {
            groupUsers.push({
              id: `${event.groupId}-${ss58
                .codec(SS58_PREFIX)
                .encode(event.user)}`,
              group,
              accountId: ss58.codec(SS58_PREFIX).encode(event.user),
              role: event.role.__kind,
              action: "create"
            });
          }
        } else if (event.__kind === "GroupUserUpdate") {
          const group = await ctx.store.get(Group, String(event.groupId));
          if (group) {
            groupUsers.push({
              id: `${event.groupId}-${ss58
                .codec(SS58_PREFIX)
                .encode(event.user)}`,
              group,
              accountId: ss58.codec(SS58_PREFIX).encode(event.user),
              role: event.role.__kind,
              action: "update"
            });
          }
        } else if (event.__kind === "GroupUserDestroy") {
          const group = await ctx.store.get(Group, String(event.groupId));
          if (group) {
            groupUsers.push({
              id: `${event.groupId}-${ss58
                .codec(SS58_PREFIX)
                .encode(event.user)}`,
              group,
              accountId: ss58.codec(SS58_PREFIX).encode(event.user),
              role: "destroy",
              action: "destroy"
            });
          }
        }
      }
    }
  }
  return groupUsers;
}

async function extractSmartContracts(ctx: Ctx): Promise<SmartContractCreateEvent[]> {
  const smartContracts: SmartContractCreateEvent[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === SMART_CONTRACT_HUB_CONTRACT_ADDRESS
      ) {
        const event = azSmartContractHub.decodeEvent(item.event.args.data);
        if (event.__kind === "Create") {
          const group = await ctx.store.get(Group, String(event.groupId));
          smartContracts.push({
            id: String(event.id),
            address: ss58.codec(SS58_PREFIX).encode(event.smartContractAddress),
            chain: event.chain,
            caller: ss58.codec(SS58_PREFIX).encode(event.caller),
            azeroId: event.azeroId,
            abiUrl: event.abiUrl,
            contractUrl: event.contractUrl,
            wasmUrl: event.wasmUrl,
            auditUrl: event.auditUrl,
            group,
            projectName: event.projectName,
            projectWebsite: event.projectWebsite,
            github: event.github,
            created_at: new Date(block.header.timestamp),
          });
        }
      }
    }
  }
  return smartContracts;
}

async function extractSmartContractsUpdate(ctx: Ctx): Promise<SmartContractUpdate[]> {
  const smartContractsUpdate: SmartContractUpdate[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === SMART_CONTRACT_HUB_CONTRACT_ADDRESS
      ) {
        const event = azSmartContractHub.decodeEvent(item.event.args.data);
        if (event.__kind === "Update") {
          const group = await ctx.store.get(Group, String(event.groupId));
          smartContractsUpdate.push({
            id: String(event.id),
            enabled: event.enabled,
            azeroId: event.azeroId,
            auditUrl: event.auditUrl,
            group,
            projectName: event.projectName,
            projectWebsite: event.projectWebsite,
            github: event.github,
          });
        }
      }
    }
  }
  return smartContractsUpdate;
}
