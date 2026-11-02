---
title: 整體架構
draft: false
---

# 整體架構

QDay Aevum 是一個以 Polygon CDK 構建的 EVM 兼容 Layer 2，並透過 **Abelian Plus Node** 與 Abelian Layer 1（PoW）整合。此架構將 L2 執行、批次驗證、驗證者共識及狀態承諾分開處理：

- **以 CDK 為基礎的 L2 執行**——`cdk-erigon`（Sequencer）執行交易並產生 L2 區塊；`cdk-node`（Sequence Sender）將區塊打包成批次並提交至 Rollup 合約。
- **Abelian Plus Node**——Reth（為 Rollup 合約提供 EVM 執行）、Lighthouse（共識客戶端）、**Committer**（將最終狀態根提交至 Abelian），以及 **Abelian Node**（連接至原生 Abelian 鏈）。Abelian 本身沒有智能合約，因此 Rollup 合約在 Abelian Plus Node 的 EVM 環境中運行。
- **多驗證者批次驗證**——多個獨立驗證者檢查每個批次，並透過 M-of-N 門檻達成一致。

```
┌────────────────────────────────────────┐
│         Infrastructure                 │
│   Docker / K8s / PostgreSQL / Redis    │
└──────────────────┬─────────────────────┘
                   │
                   ▼
     ┌─────────────┐
     │ cdk-erigon  │  L2 execution (Sequencer)
     └─────┬───────┘
           │ L2 blocks
           ▼
     ┌─────────────┐
     │  cdk-node   │  Sequence Sender
     └─────┬───────┘
           │ batches
           ▼
┌────────────────────────────────────────┐
│         Abelian Plus Node              │
│  reth + lighthouse (DA Node)           │
│  Rollup contracts (batch records)      │
│  Committer · Abelian Node              │
└──────────┬─────────────────▲───────────┘
           │ batch records   │ finalized
           ▼                 │ state root
┌────────────────────────────┴───────────┐
│   Independent validators (M-of-N)      │
│   batch data consistency +             │
│   state transition verification        │
└────────────────────────────────────────┘
                   │
                   ▼  Committer submits finalized state root
            Abelian Chain (L1, PoW)
```
