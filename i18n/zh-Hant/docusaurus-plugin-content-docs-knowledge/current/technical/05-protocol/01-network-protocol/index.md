---
title: 網路協定
draft: false
---

# 網路協定

**傳輸層** — `cdk-erigon` 使用 Ethereum DevP2P 協定進行節點之間的點對點通訊。新區塊與交易透過 Ethereum 標準 gossip 協定（eth/66、eth/67）傳播。

**JSON-RPC** — QDAY2 提供完全相容 Ethereum 的 JSON-RPC 介面（`eth_*`、`net_*`、`web3_*`）。任何能與 Ethereum 節點溝通的工具（MetaMask、ethers.js、viem、Foundry cast）都能直接連接 QDAY2，無需修改。

**排序器 API** — 排序器另外提供一組內部 API，供 Sequence Sender（`cdk-node`）同步新產生的區塊。此 API 不對外公開。
