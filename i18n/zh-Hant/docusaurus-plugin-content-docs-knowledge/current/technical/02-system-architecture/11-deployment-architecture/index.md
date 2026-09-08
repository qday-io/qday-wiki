---
title: 部署架構
draft: false
---

# 部署架構

各元件依相依順序部署。各階段的詳細設定請參閱[節點營運者指南](/Knowledge/technical/operator-guide)。

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
