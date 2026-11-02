---
title: Network Topology
draft: false
---

# Network Topology

QDay Aevum operates across four logical layers:

**Client Layer** — Wallets, dApps, and RPC clients connect to the QDAY Node (cdk-erigon) JSON-RPC endpoint. The RPC Gateway load-balances requests across multiple read replicas.

**L2 Execution Layer** — `cdk-erigon` acts as both the Sequencer and the full node. It maintains the EVM state, the transaction pool (TxPool), and produces L2 blocks.

**Abelian Plus Node / Verification Layer** — The Abelian Plus Node provides data availability using `reth` (EVM execution for Rollup contracts) and `lighthouse` (consensus client). The Rollup contracts, which record batch information, run in this EVM environment. Multiple independent validators verify each batch against these records and the L2 transaction data, and agree through an M-of-N threshold.

**L1 Commitment Layer** — The Committer submits QDay's finalized state root to the Abelian blockchain through the Abelian Node. This anchors QDay Aevum's state to Abelian's quantum-resistant PoW chain. Abelian records the commitment; it does not itself re-verify every L2 transaction or enforce the validator threshold.
