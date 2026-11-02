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
① Abelian Plus Node (reth + lighthouse — DA Node; Abelian Node)
    │
    ▼
② Rollup contracts (in the Abelian Plus Node's EVM environment)
    │
    ├─── ③ QDAY Node (cdk-erigon / Sequencer)
    │         │
    │         ▼
    │    ④ cdk-node (Sequence Sender)
    │
    ├─── ⑤ Validators (batch verification, M-of-N)
    │
    └─── ⑥ Committer (finalized state root → Abelian)
              │
              ▼
         ⑦ External Services (RPC Gateway / Explorer / Indexer / Wallet)
```
