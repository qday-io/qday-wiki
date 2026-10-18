---
title: 部署架構
draft: false
---

# 部署架構

各組件按依賴順序部署。每個階段的詳細設定將在營運者文件中說明，該文件稍後發佈。

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
