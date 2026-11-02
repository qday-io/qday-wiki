---
title: Consensus & Settlement
draft: false
---

# Consensus & Settlement

QDay Aevum is a Polygon CDK-based Layer 2 on top of Abelian's Proof-of-Work Layer 1. It does not replace Abelian's PoW consensus: batches are verified by multiple independent validators that agree through an M-of-N threshold, and the finalized state root is committed to Abelian.

**L2 Soft Confirmation** — When `cdk-erigon` includes a transaction in a block, that transaction has soft confirmation. It is immediately visible on-chain and can be used as a dependency for subsequent transactions. Reorganizations can occur until a batch is finalized.

**Batch Finality** — A transaction's batch is finalized when the required M-of-N validators have approved it (batch data consistency and state transition verification) and the protocol's acceptance and finalization rules are met.

**L1 Commitment** — After finalization, the Committer submits the finalized state root to the Abelian Chain, anchoring QDay's state to Abelian's PoW chain and lattice-based cryptography. Abelian records the commitment; it does not itself re-verify every L2 transaction or enforce the validator threshold.

**Abelian Plus Node** — The Abelian Plus Node runs `reth` (EVM execution for the Rollup contracts) and `lighthouse` (consensus client), together with the Committer and an Abelian Node that connects to the native Abelian chain.
