---
title: Batch Verification Protocol
draft: false
---

# Batch Verification Protocol

QDay Aevum verifies state transitions with multiple independent validators and an M-of-N threshold, rather than with ZK validity proofs.

## Batch

The Sequence Sender (`cdk-node`) collects L2 blocks from `cdk-erigon` and packs them into a Batch. Batches are submitted to the Rollup contracts via `sequenceBatches()`. Each batch includes: list of encoded transactions, state root before execution, timestamp, and a forced batch flag.

## Batch Record

The Rollup contracts record the batch information in the EVM environment of the Abelian Plus Node (`reth` + `lighthouse`). Abelian itself has no smart contracts.

## Batch Data Consistency

Each validator compares the batch information recorded by the Rollup contracts with the corresponding L2 transaction data. A mismatch means the record and the transactions QDay processed are inconsistent.

## State Transition Verification

Each validator independently executes the batch's state transitions and compares the resulting state root with the expected state root. Correct results depend on validators using the same protocol rules, having access to the transaction data, and identifying the state commitment associated with each batch.

## M-of-N Agreement

N is the total number of participating validators; M is the minimum number of approvals required. A batch satisfies the approval requirement when at least M validators agree on its validity, subject to the protocol's acceptance and finalization rules.

## State Commitment

After the batch is finalized, the Committer submits QDay's finalized state root to the Abelian Chain through the Abelian Node.
