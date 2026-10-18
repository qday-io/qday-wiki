---
title: Deployment Architecture
draft: false
---

# Deployment Architecture

Components are deployed in dependency order. Detailed per-phase configuration will be covered in operator documentation, which will be published later.

```
Infrastructure (Docker / K8s / PostgreSQL / Redis / Monitoring)
    │
    ▼
① Abelian Plus Node (reth + lighthouse) — DA Node
    │
    ▼
② zkEVM Contracts (RollupManager / Bridge / GlobalExitRoot / Verifier)
    │
    ├─── ③ QDAY Node (cdk-erigon / Sequencer)
    │         │
    │         ▼
    │    ④ cdk-node (Sequence Sender)
    │
    ├─── ⑤ zk Prover
    │         │
    │         ▼
    │    ⑥ Aggregator
    │
    ├─── ⑦ Committer
    │
    └─── ⑧ Record Contracts
              │
              ▼
         ⑨ External Services (RPC Gateway / Explorer / Indexer / Wallet)
```
