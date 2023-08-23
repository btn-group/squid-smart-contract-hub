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
import * as simpleDex from "./abi/simple_dex";
import { SimpleDexState, SwapPair, Token } from "./model/generated";

const CONTRACT_ADDRESS_SS58 =
  "5DGxNnuvZaCRcEQPQaJDFsqPRBvouH4cNZSpE6ERX7VJBnHn";
const CONTRACT_ADDRESS = toHex(ss58.decode(CONTRACT_ADDRESS_SS58).bytes);
const SS58_PREFIX = ss58.decode(CONTRACT_ADDRESS_SS58).prefix;

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive("aleph-zero", { release: "FireSquid" }),
  })
  .addContractsContractEmitted(CONTRACT_ADDRESS, {
    data: {
      event: { args: true },
    },
  } as const);

type Item = BatchProcessorItem<typeof processor>;
type Ctx = BatchContext<Store, Item>;

processor.run(new TypeormDatabase(), async (ctx) => {
  // 1. Find or initialize SimpleDexState
  let simpleDexState = await ctx.store.get(SimpleDexState, CONTRACT_ADDRESS_SS58);
  if (!simpleDexState) {
    simpleDexState = new SimpleDexState({
      id: CONTRACT_ADDRESS_SS58,
      swapFeePercentage: 0,
      halted: false
    })
  }

  // 2. Extract SwapPairs
  const swapPairs = extractSwapPairs(ctx);

  // 3. Extract Halt state
  const haltStateInArray = extractHaltState(ctx);
  if (haltStateInArray.length) {
    simpleDexState.halted = haltStateInArray[0];
  }

  // 4. Extract swap fee percentage
  // There is no event for this

  // 5. Extract tokens
  const tokens = extractTokens(ctx);

  // 6. Process SwapPairs
  const formattedSwapPairs = swapPairs.map((swapPair) => {
    const formattedSwapPair = new SwapPair({
      id: swapPair.id,
      simpleDexStateId: CONTRACT_ADDRESS_SS58,
      from: swapPair.from,
      to: swapPair.to,
      enabled: swapPair.enabled
    });

    return formattedSwapPair;
  });

  await ctx.store.insert(formattedSwapPairs);

  // 7. Process tokens
  const formattedTokens = tokens.map((token) => {
    const formattedToken = new Token({
      id: token.id,
      simpleDexStateId: CONTRACT_ADDRESS_SS58,
      balanceUpdatedTimestamp: token.balance_updated_timestamp,
      balanceUpdatedBlock: token.balance_updated_block
    });

    return formattedToken;
  });

  await ctx.store.insert(formattedTokens);

  // 8. Save SimpleDexState
  await ctx.store.save(simpleDexState);
});

interface swapPair {
  id: string;
  from: string;
  to: string;
  enabled: boolean;
}

interface token {
  id: string;
  balance_updated_block: number;
  balance_updated_timestamp: Date;
}

function extractSwapPairs(ctx: Ctx): swapPair[] {
  const swapPairIds = [];
  const swapPairsInObject: {[key: string]: swapPair} = {};
  const swapPairs: swapPair[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === CONTRACT_ADDRESS
      ) {
        const event = simpleDex.decodeEvent(
          item.event.args.data,
        );
        if (event.__kind === "SwapPairAdded" || event.__kind === "SwapPairRemoved") {
          let id = `${ss58
              .codec(SS58_PREFIX)
              .encode(event.pair.from)}-${ss58
              .codec(SS58_PREFIX)
              .encode(event.pair.to)}`;
          if (!swapPairsInObject[id]) {
            swapPairIds.push(id)
          }
          swapPairsInObject[id] = {
            id: `${ss58
              .codec(SS58_PREFIX)
              .encode(event.pair.from)}-${ss58
              .codec(SS58_PREFIX)
              .encode(event.pair.to)}`,
            from: ss58
              .codec(SS58_PREFIX)
              .encode(event.pair.from),
            to: ss58
              .codec(SS58_PREFIX)
              .encode(event.pair.to),
            enabled: event.__kind === "SwapPairAdded",
          };
        }
      }
    }
  }
  for (const id of swapPairIds) {
    swapPairs.push(swapPairsInObject[id])
  }
  return swapPairs;
}

function extractHaltState(ctx: Ctx): boolean[] {
  const haltState: boolean[] = [];
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === CONTRACT_ADDRESS
      ) {
        const event = simpleDex.decodeEvent(
          item.event.args.data,
        );
        if (event.__kind === "Halted" || event.__kind === "Resumed") {
          haltState[0] = event.__kind === "Halted"
        }
      }
    }
  }
  return haltState;
}

function extractTokens(ctx: Ctx): token[] {
  const tokenIds = [];
  const tokensInObject: {[key: string]: token} = {};
  const tokens: token[] = [];

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (
        item.name === "Contracts.ContractEmitted" &&
        item.event.args.contract === CONTRACT_ADDRESS
      ) {
        const event = simpleDex.decodeEvent(
          item.event.args.data,
        );
        let id;
        if (event.__kind === "Swapped") {
          id = ss58.codec(SS58_PREFIX).encode(event.tokenIn);
          if (!tokensInObject[id]) {
            tokenIds.push(id)
          }
          tokensInObject[id] = {
            id,
            balance_updated_block: block.header.height,
            balance_updated_timestamp: new Date(block.header.timestamp),
          };
          id = ss58.codec(SS58_PREFIX).encode(event.tokenOut);
          if (!tokensInObject[id]) {
            tokenIds.push(id)
          }
          tokensInObject[id] = {
            id,
            balance_updated_block: block.header.height,
            balance_updated_timestamp: new Date(block.header.timestamp),
          };
        }
        if (event.__kind === "Withdrawn") {
          id = ss58.codec(SS58_PREFIX).encode(event.token);
          if (!tokensInObject[id]) {
            tokenIds.push(id)
          }
          tokensInObject[id] = {
            id: ss58.codec(SS58_PREFIX).encode(event.token),
            balance_updated_block: block.header.height,
            balance_updated_timestamp: new Date(block.header.timestamp),
          };
        }
      }
    }
  }
  for (const id of tokenIds) {
    tokens.push(tokensInObject[id])
  }
  return tokens;
}
