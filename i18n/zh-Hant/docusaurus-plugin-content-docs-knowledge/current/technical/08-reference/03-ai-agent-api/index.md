---
title: AI Agent API
draft: false
---

# AI Agent API

鏈上 Agent 的執行期 API（`@qday-io/sdk/agent`）。Agent 只透過**會話金鑰**簽署；它們從不持有主金鑰。指南：[AI Agent 開發](/Knowledge/technical/developer-guide/ai-agent-development) · [AI Agent 協定](/Knowledge/technical/protocol/ai-agent-protocol)。

| 方法 | 說明 |
|--------|-------------|
| `new QDAYAgent({ sessionKey, mcpServer, intentRegistry })` | 建構一個綁定會話金鑰與 MCP 端點的 Agent |
| `registerTool({ name, description, inputSchema, execute })` | 將型別化的合約呼叫公開為 MCP 工具 |
| `run(prompt)` | 以自然語言目標執行 Agent |
| `createWalletAgent({ intent, checkInterval })` | 依計時器執行的投資組合／餘額意圖 |
| `createDeFiAgent({ strategy, protocols, riskTolerance })` | 兌換／借貸策略 |
| `createPaymentAgent({ sessionKey, maxSinglePayment, maxDailySpend, allowedRecipients })` | 有額度限制的自主支付 |

範例中的預設 MCP URL：`https://mcp.qday.io`。Intent registry 地址：[官方合約地址](/Knowledge/reference/contracts)。
