---
title: 支付生態系統
draft: false
---

# 支付生態系統

**USD8**——與美元錨定的穩定幣（小數位：6），是 QDay 支付層的主要貨幣，用於發票、訂閱及 AI 代理小額支付。在 QDay Aevum 測試網上以 **tUSD8** 的形式提供。

| 代幣 | 網絡 | 地址 |
|-------|---------|---------|
| tUSD8 | QDay Aevum 測試網（`44005`） | `0x456569838f1d43009A91ebA4263147Afd7233483` |
| USD8 | QDay 主網（`44002`） | 上線時公佈 |

**手續費**——透過 Paymaster Gas 抽象，用戶及 AI 代理可以使用 QDay 的原生穩定幣（USD8）支付交易手續費，而無須持有 $QDAY；穩定幣 Paymaster 已於 QDay Aevum 測試網上線。MetaMask 等一般 EOA 錢包仍以原生代幣支付 Gas（測試網上為 tQDAY，可從水龍頭領取，見[取得測試網代幣](/guide/start/faucet)）。個別應用程式可能以其他代幣收取手續費：在 Agent Payment 應用中，手續費以 USD8 支付。

**支付閘道（Payment Gateway）** *（計劃中——隨 2027 年第一季的主網 Enhanced Payment Network 推出）*——用於建立發票、管理訂閱、串流付款及接收 webhook 的開發者 API 與 SDK。整合範例請參閱開發者指南的[快速開始](/Knowledge/technical/developer-guide/getting-started)。

**AI 代理支付（Agent Payments）** *（x402 facilitator 及會話密鑰（Session Key）已於 QDay Aevum 測試網上線；主網於 2027 年第一季推出）*——AI 代理可以使用受會話密鑰限制的 USD8 付款（包括 x402 式按請求付費），自主支付 API 呼叫、數據源、運算及其他服務的費用。這開創了一種全新的自主機器對機器商業模式，每筆交易都無需人手簽核。
