---
title: 網絡協議
draft: false
---

# 網絡協議

**傳輸層**——`cdk-erigon` 使用以太坊 DevP2P 協議進行節點之間的點對點通訊。新區塊與交易透過以太坊標準 gossip 協議（eth/66、eth/67）傳播。

**JSON-RPC**——QDay Aevum 提供完全兼容以太坊的 JSON-RPC 介面（`eth_*`、`net_*`、`web3_*`）。任何能與以太坊節點溝通的工具（MetaMask、ethers.js、viem、Foundry cast）都能直接連接 QDay Aevum，無需修改。

**排序器 API**——排序器另外提供一組內部 API，供 Sequence Sender（`cdk-node`）同步新產生的區塊。此 API 不對外公開。
