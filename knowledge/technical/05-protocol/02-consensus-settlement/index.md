---
title: Consensus & Settlement
draft: false
---

# Consensus & Settlement

QDAY2 uses a **PoS-over-PoW** consensus design: a Proof-of-Stake validator network operates on top of Abelian's Proof-of-Work Layer 1.

**L2 Soft Confirmation** — When `cdk-erigon` includes a transaction in a block, that transaction has soft confirmation. It is immediately visible on-chain and can be used as a dependency for subsequent transactions. Reorganizations can occur until a batch is finalized.

**Batch Finality** — A transaction achieves L2 batch finality when the Aggregator submits a valid ZK proof for its batch to `zkRollupManager.verifyBatches()`. At this point the state root is immutable at the DA layer.

**L1 Finality** — After the Committer writes the batch status root to the Abelian Chain, the transaction has full L1 finality anchored by Abelian's lattice-based cryptographic security.

**CometBFT Integration** — QDAY2 integrates CometBFT (formerly Tendermint) for distributed state machine replication across DA nodes, providing Byzantine fault-tolerant consensus among the validator set.
