/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Blonks,
  Blonks_Approval,
  Blonks_ApprovalForAll,
  Blonks_OwnershipTransferred,
  Blonks_Transfer,
} from "generated";

Blonks.Approval.handler(async ({ event, context }) => {
  const entity: Blonks_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    approved: event.params.approved,
    tokenId: event.params.tokenId,
  };

  context.Blonks_Approval.set(entity);
});

Blonks.ApprovalForAll.handler(async ({ event, context }) => {
  const entity: Blonks_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.Blonks_ApprovalForAll.set(entity);
});

Blonks.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: Blonks_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Blonks_OwnershipTransferred.set(entity);
});

Blonks.Transfer.handler(async ({ event, context }) => {
  const entity: Blonks_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.Blonks_Transfer.set(entity);
});
