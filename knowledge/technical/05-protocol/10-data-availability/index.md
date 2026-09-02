---
title: Data Availability
draft: false
---

# Data Availability

**Abelian Plus Node** — The DA layer for QDAY2 is the Abelian Plus Node, running `reth` (Ethereum execution client) and `lighthouse` (Ethereum consensus client). The DA Node hosts the zkEVM contracts and stores all rollup data — batches, proofs, and state roots.

**DA Commitment** — Every batch submitted to `zkRollupManager` includes a DA commitment (hash of batch data). The Aggregator must be able to retrieve the full batch data from the DA Node to generate a proof.

**Record Contracts** — On-chain contracts on the DA layer store: Batch Metadata (batch number, hash, timestamp), Status Root (post-proof state root), and Commit Result (success/failure of the Committer's write to Abelian Chain).
