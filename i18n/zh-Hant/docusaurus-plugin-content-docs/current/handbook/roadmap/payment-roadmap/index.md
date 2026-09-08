---
title: QDAY 支付路線圖
sidebar_label: QDAY 支付路線圖
---

# QDAY 支付路線圖

QDay 的**支付網路**（第 1.5 階段）：以 USD8 作為記帳單位、提供商家使用的閘道，以及服務一般人與 **AI Agent** 的支付軌道。日常 dApp 的 Gas 仍以 QDAY 支付；**由 Agent 發起**的支付則設計為以 USD8 計費。

## 目標

在 QDay 上建立一個全球支付層，服務對象包括：

- 商家與支付處理商（線上商店與 Agent 驅動的結帳）
- 微支付與按請求計費的 API
- 訂閱制與串流式付款
- 在消費額度內自行付款、無需人工逐筆點選的 Agent

產品背景：[為什麼選擇 QDay](/guide/handbook/why-qday)。開發者 API：[在 QDay 上建構 — SDK](/guide/handbook/build-on-qday#sdk) 與 [Payment SDK](/Knowledge/technical/developer-guide/payment-development)。

## 支付里程碑表

與網路 [QDAY 路線圖](/guide/handbook/roadmap/qday-roadmap) 對齊：

| 里程碑 | 目標時程 | 解鎖內容 |
|---|---|---|
| USD8 與 Swap / Bridge（第 1 階段） | 貫穿第 1 階段主網 | 轉移與交易 USD8；部分流程可手動付款 |
| 第 1.5 階段開發啟動 | 2026 Q1 | 支付閘道、發票、Webhook |
| 第 1.5 階段測試網 | 2026 Q3 | 商家與 Agent 在 Aevum / 測試網上試用整套堆疊 |
| 第 1.5 階段主網 | 2027 Q1 | 正式營運的支付網路 |
| 原生 PQC 帳戶（第 2 階段） | 2027 | QR 帳戶上線後，同一套支付 API 可直接沿用 |

## 第 1.5 階段的用途

| 組件 | 角色 |
|---|---|
| **USD8** | 原生美元錨定穩定幣；商務與 Agent 的主要貨幣 |
| **支付閘道（Payment Gateway）** | 無需自行撰寫結算合約即可建立付款請求的 API |
| **發票（Invoice）** | 金額、幣別、到期時間、中繼資料；可由錢包或 Agent 支付 |
| **訂閱（Subscription）** | 透過每期的會話金鑰額度進行週期性付款 |
| **串流（Streaming）** | 以存款為基礎的持續流量（每秒代幣數） |
| **Agent 支付** | 會話金鑰：單筆上限、每日上限、允許的收款方名單、到期時間 |
| **Webhook** | 發票付款完成或串流停止時的簽章通知 |

架構說明：[支付架構](/Knowledge/technical/system-architecture/payment-architecture) 與 [支付生態系](/Knowledge/technical/ecosystem/payment-ecosystem)。

## 如何跟進

1. 在 QDay 上持有 USD8（[Swap](/guide/handbook/user-guide/swap)、[跨鏈 / 轉換](/guide/handbook/user-guide#qday-bridge)）。
2. 測試網閘道公布後，整合 `@qday-io/sdk/payments`（[開發者指南](/Knowledge/technical/developer-guide/payment-development)）。
3. 若為 Agent 商務，請使用智慧帳戶與會話金鑰（`@qday-io/sdk/aa`、`@qday-io/sdk/agent`）。
4. 僅使用官方 Portal 與文件網址；支付 Webhook 必須驗證簽章。

**帳本**的 PQC 進度請見 [QDAY PQC 路線圖](/guide/handbook/roadmap/pqc-roadmap)。在第 2 階段的 QR 合約問世之前，第 1.5 階段的支付合約仍運行於第 1 階段的 EVM 帳戶之上。
