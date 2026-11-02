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
