---
title: AI Agent API
draft: false
---

# AI Agent API

Runtime API for on-chain agents (`@qday-io/sdk/agent`). Agents sign only through a **session key**; they never hold the master key. Guides: [AI Agent Development](/Knowledge/technical/developer-guide/ai-agent-development) · [AI Agent Protocol](/Knowledge/technical/protocol/ai-agent-protocol).

| Method | Description |
|--------|-------------|
| `new QDAYAgent({ sessionKey, mcpServer, intentRegistry })` | Construct an agent bound to a session key and MCP endpoint |
| `registerTool({ name, description, inputSchema, execute })` | Expose a typed contract call as an MCP tool |
| `run(prompt)` | Run the agent on a natural-language goal |
| `createWalletAgent({ intent, checkInterval })` | Portfolio / balance intents on a timer |
| `createDeFiAgent({ strategy, protocols, riskTolerance })` | Swap / lending strategies |
| `createPaymentAgent({ sessionKey, maxSinglePayment, maxDailySpend, allowedRecipients })` | Bounded autonomous payments |

Default MCP URL in examples: `https://mcp.qday.io`. Intent registry address: [Official contract addresses](/Knowledge/reference/contracts).
