---
title: AI 生態系統
draft: false
---

# AI 生態系統

:::note[計劃中——2027 年第一季]
AI 代理技術堆疊及 QDay SDK（`@qday-io/sdk`）/ CLI（`@qday-io/cli`）將於 2027 年第一季隨 QDay 主網推出，目前尚未上線；SDK 亦尚未在 npm 上發佈。
:::

**Agent SDK**——`@qday-io/sdk/agent` 將提供建立、部署及管理鏈上 AI 代理的基本組件。AI 代理將透過 ERC-4337 智能帳戶運作，並使用會話密鑰（Session Key）進行授權。

**MCP 伺服器**——QDay 的 AI 代理將透過 MCP（Model Context Protocol，模型上下文協議）伺服器連接外部 AI 推理服務。任何兼容 MCP 的 AI 供應商都將可以接入，作為 AI 代理的推理後端。

**意圖登記冊（Intent Registry）**——計劃中的鏈上登記冊，用戶可在此宣告高層次的意圖（目標 + 限制條件）。意圖引擎（Intent Engine）解讀這些意圖，並將其轉換為具體的交易序列。

**代理市集（Agent Marketplace）**——*（將於第 2 階段推出）* 經篩選的預建 AI 代理策略市集（收益優化、自動重新平衡、訂閱管理、DeFi 套利），用戶可將其部署至自己的智能帳戶。
