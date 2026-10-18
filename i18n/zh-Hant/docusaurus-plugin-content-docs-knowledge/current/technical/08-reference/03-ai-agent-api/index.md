---
title: AI 代理 API
draft: false
---

# AI 代理 API

:::note[將於 2027 年第一季推出]
QDay SDK（`@qday-io/sdk`）與 CLI（`@qday-io/cli`）將於 2027 年第一季推出，目前尚未在 npm 上發佈。本頁的程式碼展示的是計劃中的 API。
:::

鏈上代理的執行期 API（`@qday-io/sdk/agent`）。代理只透過 **會話密鑰（Session Key）** 簽署；它們從不持有主密鑰。指南：[AI 代理開發](/Knowledge/technical/developer-guide/ai-agent-development) · [AI 代理協議](/Knowledge/technical/protocol/ai-agent-protocol)。

| 方法 | 說明 |
|--------|-------------|
| `new QDAYAgent({ sessionKey, mcpServer, intentRegistry })` | 建構一個綁定會話密鑰與 MCP 端點的代理 |
| `registerTool({ name, description, inputSchema, execute })` | 將型別化的合約呼叫公開為 MCP 工具 |
| `run(prompt)` | 以自然語言目標執行代理 |
| `createWalletAgent({ intent, checkInterval })` | 依計時器執行的投資組合／餘額意圖 |
| `createDeFiAgent({ strategy, protocols, riskTolerance })` | 兌換／借貸策略 |
| `createPaymentAgent({ sessionKey, maxSinglePayment, maxDailySpend, allowedRecipients })` | 有額度限制的自主支付 |

範例中的預設 MCP URL：`https://mcp.qday.io`。Intent registry 地址：將於上線時公佈。
