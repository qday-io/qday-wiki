---
title: AI Agent 開發
draft: false
---

# AI Agent 開發

## Agent SDK

```typescript
import { QDAYAgent } from "@qday-io/sdk/agent";

const agent = new QDAYAgent({
  sessionKey,                        // scoped signing key
  mcpServer: "https://mcp.qday.io", // AI inference endpoint
  intentRegistry: INTENT_REGISTRY_ADDRESS,
});
```

## MCP 整合

Agent 透過 MCP（Model Context Protocol）與外部 AI 模型溝通：

```typescript
// Register a tool the agent can call
agent.registerTool({
  name: "swap_tokens",
  description: "Swap token A for token B on QDay Swap",
  inputSchema: { tokenIn, tokenOut, amountIn },
  execute: async ({ tokenIn, tokenOut, amountIn }) => {
    return await account.sendTransaction({
      to: SWAP_ROUTER,
      data: encodeSwap(tokenIn, tokenOut, amountIn),
    });
  },
});

// Run the agent
await agent.run("Swap 100 USDC for QDAY at the best available rate");
```

## 錢包 Agent

錢包 Agent 會監控帳戶的持有資產，並執行投資組合管理意圖（intent）：

```typescript
const walletAgent = agent.createWalletAgent({
  intent: "Keep ETH balance above 0.1 by selling QDAY when needed",
  checkInterval: 60, // seconds
});
await walletAgent.start();
```

## DeFi Agent

DeFi Agent 會與 QDay Swap、QDay Lending 及其他 DeFi 協定互動：

```typescript
const defiAgent = agent.createDeFiAgent({
  strategy: "yield_optimize",
  protocols: ["qday-swap", "qday-lending"],
  riskTolerance: "medium",
});
```

## 支付 Agent

支付 Agent 會在 session key 所限定的額度內，自主為服務付款：

```typescript
const paymentAgent = agent.createPaymentAgent({
  sessionKey,
  maxSinglePayment: parseUnits("5", 6),    // 5 PQUSD per payment
  maxDailySpend: parseUnits("50", 6),      // 50 PQUSD per day
  allowedRecipients: [API_PROVIDER_ADDRESS],
});
```

## Agent 授權

所有 Agent 的操作都受使用者所授予的 session key 限制。Agent 無法花費超過 session key 允許的額度、無法呼叫不在允許清單上的合約，也無法在金鑰過期後繼續操作——這些限制由 `EntryPoint` 在驗證時強制執行，而非由 Agent 自身的程式碼負責。
