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
import { Group, GroupUser } from "./model/generated";

const CONTRACT_ADDRESS_SS58 =
  "5EHMGoUrkSHCBqLYmAMbzBeXJwZzeGLVXgpWw585j8ciyrte";
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

// 1. The aim is to get groups for an account
processor.run(new TypeormDatabase(), async (ctx) => {
  const groups = extractGroups(ctx);
  const groupsUpdate = extractGroupsUpdate(ctx);

  // 1. Create new groups
  const newGroups = groups.map((group) => {
    return new Group({
      id: group.id,
      name: group.name,
      enabled: true,
    });
  });
  await ctx.store.insert(newGroups);

  // 2. Update groups
  groupsUpdate.forEach(async (group) => {
    await ctx.store.save(
      new Group({ id: group.id, name: group.name, enabled: group.enabled }),
    );
  });

  // 3. Create new group users
  const groupUsers = await extractGroupUsers(ctx);
  const newGroupUsers = groupUsers.map((groupUser) => {
    return new GroupUser({
      id: groupUser.id,
      group: groupUser.group,
      accountId: groupUser.account_id,
      role: groupUser.role,
    });
  });
  await ctx.store.insert(newGroupUsers);

  // 4. Update group users
  const groupUsersUpdate = await extractGroupUsersUpdate(ctx);
  groupUsersUpdate.forEach(async (groupUser) => {
    await ctx.store.save(
      new GroupUser({
        id: groupUser.id,
        group: groupUser.group,
        accountId: groupUser.account_id,
        role: groupUser.role,
      }),
    );
  });

  // 5. Delete group users
  const groupUsersDestroy = extractGroupUsersDestroy(ctx);
  if (groupUsersDestroy.length) {
    await ctx.store.remove(GroupUser, groupUsersDestroy);
  }
});

interface groupEvent {
  id: string;
  name: string;
  enabled: boolean;
}

interface groupUserEvent {
  id: string;
  group: Group;
  account_id: string;
  role: string;
}

function extractGroups(ctx: Ctx): groupEvent[] {
  const groups: groupEvent[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === CONTRACT_ADDRESS
      ) {
        const event = azGroups.decodeEvent(item.event.args.data);
        if (event.__kind === "Create") {
          groups.push({
            id: String(event.id),
            name: event.name,
            enabled: true,
          });
        }
      }
    }
  }
  return groups;
}

function extractGroupsUpdate(ctx: Ctx): groupEvent[] {
  const groups: groupEvent[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === CONTRACT_ADDRESS
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

async function extractGroupUsers(ctx: Ctx): Promise<groupUserEvent[]> {
  const groupUsers: groupUserEvent[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === CONTRACT_ADDRESS
      ) {
        const event = azGroups.decodeEvent(item.event.args.data);
        if (event.__kind === "GroupUserCreate") {
          let group = await ctx.store.get(Group, String(event.groupId));
          if (group) {
            groupUsers.push({
              id: `${event.groupId}-${ss58
                .codec(SS58_PREFIX)
                .encode(event.user)}`,
              group,
              account_id: ss58.codec(SS58_PREFIX).encode(event.user),
              role: event.role.__kind,
            });
          }
        }
      }
    }
  }
  return groupUsers;
}

async function extractGroupUsersUpdate(ctx: Ctx): Promise<groupUserEvent[]> {
  const groupUsers: groupUserEvent[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === CONTRACT_ADDRESS
      ) {
        const event = azGroups.decodeEvent(item.event.args.data);
        if (event.__kind === "GroupUserUpdate") {
          let group = await ctx.store.get(Group, String(event.groupId));
          if (group) {
            groupUsers.push({
              id: `${event.groupId}-${ss58
                .codec(SS58_PREFIX)
                .encode(event.user)}`,
              group,
              account_id: ss58.codec(SS58_PREFIX).encode(event.user),
              role: event.role.__kind,
            });
          }
        }
      }
    }
  }
  return groupUsers;
}

function extractGroupUsersDestroy(ctx: Ctx): string[] {
  const groupUserIds: string[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === CONTRACT_ADDRESS
      ) {
        const event = azGroups.decodeEvent(item.event.args.data);
        if (event.__kind === "GroupUserDestroy") {
          groupUserIds.push(
            `${event.groupId}-${ss58.codec(SS58_PREFIX).encode(event.user)}`,
          );
        }
      }
    }
  }
  return groupUserIds;
}
