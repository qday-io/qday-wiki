---
title: AI 代理開發
draft: false
---

# AI 代理開發

:::note[計劃中——2027 年第一季]
AI 代理 API、Agent Payment、會話密鑰（Session Key）及 QDay SDK（`@qday-io/sdk`）/ CLI（`@qday-io/cli`）將於 2027 年第一季隨 QDay 主網推出，目前尚未上線；SDK 尚未在 npm 上發佈，`https://mcp.qday.io` 亦將於上線時啟用。本頁的程式碼展示的是計劃中的 API。
:::

## Agent SDK {/* #agent-sdk */}

```typescript
import { QDAYAgent } from "@qday-io/sdk/agent";

const agent = new QDAYAgent({
  sessionKey,                        // scoped signing key
  mcpServer: "https://mcp.qday.io", // AI inference endpoint
  intentRegistry: INTENT_REGISTRY_ADDRESS,
});
```

## MCP 整合 {/* #mcp-integration */}

代理將透過 MCP（Model Context Protocol）與外部 AI 模型溝通：

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
await agent.run("Swap 100 USD8 for QDAY at the best available rate");
```

## 錢包代理 {/* #wallet-agent */}

錢包代理會監控帳戶的持有資產，並執行投資組合管理意圖（intent）：

```typescript
const walletAgent = agent.createWalletAgent({
  intent: "Keep QDAY balance above 0.1 by selling USD8 when needed",
  checkInterval: 60, // seconds
});
await walletAgent.start();
```

## DeFi 代理 {/* #defi-agent */}

DeFi 代理將與 QDay Swap、QDay Lending *（計劃中）* 及其他 DeFi 協議互動：

```typescript
const defiAgent = agent.createDeFiAgent({
  strategy: "yield_optimize",
  protocols: ["qday-swap", "qday-lending"],
  riskTolerance: "medium",
});
```

## 支付代理 {/* #payment-agent */}

支付代理會在會話密鑰所限定的額度內，自主為服務付款：

```typescript
const paymentAgent = agent.createPaymentAgent({
  sessionKey,
  maxSinglePayment: parseUnits("5", 18),   // 5 tUSD8 per payment (18 decimals)
  maxDailySpend: parseUnits("50", 18),     // 50 tUSD8 per day
  allowedRecipients: [API_PROVIDER_ADDRESS],
});
```

## 代理授權 {/* #agent-authorization */}

代理的所有操作都受用戶所授予的會話密鑰限制。代理無法花費超過會話密鑰允許的額度、無法呼叫不在允許清單上的合約，也無法在密鑰過期後繼續操作——這些限制由 `EntryPoint` 在驗證時強制執行，而非由代理自身的程式碼負責。
