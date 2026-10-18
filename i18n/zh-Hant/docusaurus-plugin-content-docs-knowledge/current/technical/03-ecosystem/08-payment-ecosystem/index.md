---
title: 支付生態系統
draft: false
---

# 支付生態系統

**USD8**——與美元錨定的穩定幣（18 位小數），是 QDay 支付層的主要貨幣，用於發票、訂閱及 AI 代理小額支付。在 QDay Aevum 測試網上以 **tUSD8** 的形式提供。

| 代幣 | 網絡 | 地址 |
|-------|---------|---------|
| tUSD8 | QDay Aevum 測試網（`44005`） | `0x456569838f1d43009A91ebA4263147Afd7233483` |
| USD8 | QDay 主網（`44002`） | 上線時公佈 |

**手續費**——一般的網絡 Gas 以 QDAY 支付（測試網上為 tQDAY）。個別應用程式可能以其他代幣收取手續費：在 Agent Payment 應用（將於 2027 年第一季隨 QDay 主網推出）中，手續費將以 USD8 支付。

**支付閘道（Payment Gateway）** *（計劃中——將於 2027 年第一季隨 QDay 主網推出）*——用於建立發票、管理訂閱、串流付款及接收 webhook 的開發者 API 與 SDK。整合範例請參閱[開發者指南](/Knowledge/technical/developer-guide/getting-started)。

**AI 代理支付（Agent Payments）** *（計劃中——將於 2027 年第一季隨 QDay 主網推出）*——AI 代理將能使用受會話密鑰（Session Key）限制的 USD8 付款（包括 x402 式按請求付費），自主支付 API 呼叫、數據源、運算及其他服務的費用。這將開創一種全新的自主機器對機器商業模式，每筆交易都無需人手簽核。
