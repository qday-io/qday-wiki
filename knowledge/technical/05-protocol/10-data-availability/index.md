---
title: Data Availability
draft: false
---

# Data Availability

**Abelian Plus Node** — The DA Node infrastructure for QDay Aevum is the Abelian Plus Node, which integrates `reth` (EVM execution for the Rollup contracts) and `lighthouse` (consensus client). The Rollup contracts run in this EVM environment and record batch information.

**Data for verification** — Validators need the batch records and the corresponding L2 transaction data to check batch data consistency and re-execute state transitions. Data availability is therefore one of the conditions QDay's batch verification depends on.

**State commitment** — Once a batch is finalized, the Committer submits the finalized state root to the Abelian Chain through the Abelian Node.
