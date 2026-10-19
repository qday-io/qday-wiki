---
title: 基礎設施
draft: false
---

# 基礎設施

**RPC**——公開的 JSON-RPC 端點（QDay Aevum 測試網為 `https://rpc-test.qday.info` 及 `wss://rpc-test.qday.info`；QDay 主網端點將於上線時公佈）提供完整的以太坊 JSON-RPC API。開發者可以直接連接 MetaMask、Foundry、Hardhat 及任何其他 EVM 工具。

**區塊瀏覽器**——QDay Aevum 測試網區塊瀏覽器（`https://explorer-test.qday.info`，驗證 API 為 `https://explorer-test.qday.info/api`）提供交易搜尋、地址檢視、合約驗證及代幣追蹤功能。它建基於 Blockscout，支援與以太坊主網區塊瀏覽器相同的驗證流程。

**索引器**——高效能的事件索引器追蹤代幣轉帳、DEX 交易、支付事件及 AI 代理操作。應用程式可以透過 GraphQL API 查詢已索引的數據，而無需重播鏈上歷史。

**水龍頭**——測試網水龍頭（`https://faucet.qday.info`）分發 QDay Aevum 測試網 Gas 代幣 tQDAY，供開發及測試使用。你亦可以透過文件內置水龍頭（[取得測試網代幣](/guide/start/faucet)）領取。
