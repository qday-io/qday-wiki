---
title: AI 生態系
draft: false
---

# AI 生態系

**Agent SDK** — `@qday-io/sdk/agent` 提供用於建立、部署與管理鏈上 AI Agent 的基礎元件。Agent 透過 ERC-4337 智慧帳戶運作，並使用會話金鑰進行授權。

**MCP 伺服器** — QDAY2 的 AI Agent 透過 MCP（Model Context Protocol）伺服器連接外部 AI 推論。任何相容 MCP 的 AI 供應商都可作為 Agent 的推理後端接入。

**Intent Registry（意圖註冊表）** — 一個鏈上註冊表，使用者可在其中宣告高階意圖（目標 + 約束條件）。Intent Engine 負責解讀意圖，並將其轉換為具體的交易序列。

**Agent 市集** — *（第二階段推出）* 一個經過策展的預建 Agent 策略市集（收益最佳化、自動再平衡、訂閱管理、DeFi 套利），使用者可將其部署至自己的智慧帳戶。
