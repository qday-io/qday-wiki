---
title: QDAY 支付路線圖
sidebar_label: QDAY 支付路線圖
---

# QDAY 支付路線圖

:::note[2027 年第一季推出]
QDay SDK（`@qday-io/sdk`）與 CLI（`@qday-io/cli`）將於 2027 年第一季推出，目前尚未在 npm 上發佈。本頁的程式碼展示的是計劃中的 API。
:::

QDay 的**支付網絡**（第 1.5 階段）：以 USD8 作為記帳單位、為商戶而設的支付閘道，以及服務個人與 **AI 代理**的支付通道。日常 dApp 的 Gas 仍以 QDAY 支付；**由 AI 代理發起**的支付則設計為以 USD8 支付手續費。

## 目標 {/* #goal */}

在 QDay 上建立一個全球支付層，服務：

- 商戶及支付處理商（店舖及由 AI 代理驅動的結帳）
- 微支付及按請求計費的 API
- 訂閱及串流付款
- 在消費限額內自行付款、無需人手逐筆點擊確認交易的 AI 代理

產品背景：[為甚麼選擇 QDay](/guide/handbook/why-qday)。開發者 API：[在 QDay 上開發——SDK](/guide/handbook/build-on-qday#sdks)及[支付 SDK](/Knowledge/technical/developer-guide/payment-development)。

## 支付里程碑表 {/* #payment-milestone-table */}

與網絡的 [QDAY 路線圖](/guide/handbook/roadmap/qday-roadmap)一致：

| 里程碑 | 目標時間 | 帶來的功能 |
|---|---|---|
| USD8 及 Swap / Bridge（第 1 階段） | 直至第 1 階段主網 | 轉移及交易 USD8；部分流程可手動付款 |
| 第 1.5 階段開發啟動 | 2026 Q1 | 支付閘道、發票、webhook |
| 第 1.5 階段測試網 | 2026 Q3 | 在 Aevum 測試網上進行 Polygon CDK 升級；x402 facilitator、AI 代理錢包及穩定幣 Paymaster 將於 2027 年第一季隨 QDay 主網推出 |
| 第 1.5 階段主網 | 2027 Q1 | 正式運作的支付網絡 |
| 原生 PQC 帳戶（第 2 階段） | 2027 | 抗量子帳戶推出後可使用同一套支付 API |

## 第 1.5 階段的用途 {/* #what-phase-15-is-for */}

| 組件 | 角色 |
|---|---|
| **USD8** | 原生美元錨定穩定幣；商業活動及 AI 代理的主要貨幣 |
| **Payment Gateway**（支付閘道） | 無需自行撰寫結算合約即可建立付款請求的 API |
| **Invoice**（發票） | 金額、貨幣、到期時間、元數據；可由錢包或 AI 代理支付 |
| **Subscription**（訂閱） | 透過會話密鑰（Session Key）的每期限額進行定期付款 |
| **Streaming**（串流） | 以存款為基礎的持續付款流（每秒若干代幣） |
| **Agent payment**（AI 代理支付） | 會話密鑰：單筆上限、每日上限、收款人白名單、到期時間 |
| **Webhooks** | 發票付款完成或串流停止時發出的已簽名通知 |

架構說明：[支付架構](/Knowledge/technical/system-architecture/payment-architecture)及[支付生態系統](/Knowledge/technical/ecosystem/payment-ecosystem)。

## 如何跟進 {/* #how-to-follow-along */}

1. 熟悉 USD8：目前可透過 [QDay Swap](/guide/handbook/user-guide/swap) 在 QDay Origin 主網上取得；tUSD8 是 Aevum 測試網上的測試版本（請參閱[代幣清單](/Knowledge/reference/tokens)）。
2. 測試網支付閘道公佈後，整合 `@qday-io/sdk/payments`（[開發者指南](/Knowledge/technical/developer-guide/payment-development)）。
3. 如屬 AI 代理商業活動，請使用智能帳戶及會話密鑰（`@qday-io/sdk/aa`、`@qday-io/sdk/agent`）。
4. 只使用官方 Portal 及文件網址；支付 webhook 必須驗證簽名。

**帳本**的 PQC 載於 [QDay 後量子路線圖](/guide/handbook/roadmap/pqc-roadmap)。在第 2 階段的抗量子合約出現之前，第 1.5 階段的支付合約仍運行於第 1 階段的 EVM 帳戶之上。
