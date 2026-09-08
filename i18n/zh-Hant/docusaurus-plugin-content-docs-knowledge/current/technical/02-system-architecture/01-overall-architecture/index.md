---
title: 整體架構
draft: false
---

# 整體架構

QDAY2 是建構於 Abelian Layer 1 之上的模組化 ZK rollup 堆疊。系統在 Polygon CDK 架構的基礎上，加入三項 QDAY 專屬的擴充：**Abelian Plus Node**（DA + 紀錄層）、**Committer**（L1 同步服務），以及 **Record Contracts**（Abelian 上的鏈上批次中繼資料儲存）。

```
┌────────────────────────────────────────┐
│         Infrastructure                 │
│   Docker / K8s / PostgreSQL / Redis    │
└──────────────────┬─────────────────────┘
                   │
                   ▼
┌────────────────────────────────────────┐
│         Abelian Plus Node              │
│         reth + lighthouse              │
│   (DA Node + Record Contracts)         │
└──────────────────┬─────────────────────┘
                   │
                   ▼
┌────────────────────────────────────────┐
│         zkEVM Contracts                │
│  RollupManager / Bridge / GlobalExitRoot│
└──────────┬───────────────┬─────────────┘
           │               │
     ┌─────▼──────┐  ┌─────▼──────┐
     │ cdk-erigon │  │ zk Prover  │
     │ (Sequencer)│  │            │
     └─────┬──────┘  └─────▲──────┘
           │               │
           ▼               │
     ┌─────────────┐       │
     │  cdk-node   │───────┘
     │ Seq. Sender │
     └─────┬───────┘
           │
           ▼
     ┌─────────────┐       ┌─────────────────┐
     │  Aggregator │──────►│ Record Contracts │
     └─────┬───────┘       └─────────────────┘
           │
           ▼
     ┌─────────────┐
     │  Committer  │
     └─────┬───────┘
           │
           ▼
     Abelian Chain (L1)
```
