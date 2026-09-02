---
title: Network Topology
draft: false
---

# Network Topology

QDAY2 operates across four logical layers:

**Client Layer** — Wallets, dApps, and RPC clients connect to the QDAY Node (cdk-erigon) JSON-RPC endpoint. The RPC Gateway load-balances requests across multiple read replicas.

**L2 Execution Layer** — `cdk-erigon` acts as both the Sequencer and the full node. It maintains the EVM state, the transaction pool (TxPool), and produces L2 blocks.

**DA / Settlement Layer** — The Abelian Plus Node provides data availability using `reth` (execution) and `lighthouse` (consensus). All zkEVM contracts — `PolygonZkEVMBridge`, `PolygonRollupManager`, `GlobalExitRoot`, and `Verifier` — are deployed here.

**L1 Record Layer** — The Committer writes batch status roots and rollup summaries directly to the Abelian blockchain. This is the quantum-resistant anchor for all QDAY2 state.
