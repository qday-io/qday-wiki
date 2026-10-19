---
title: AI Agent Development
draft: false
---

# AI Agent Development

:::note[Planned — Q1 2027]
The AI agent APIs, Agent Payment, session keys and the QDay SDK (`@qday-io/sdk`) / CLI (`@qday-io/cli`) launch with QDay mainnet in Q1 2027 and are not live today; the SDK is not yet published on npm and `https://mcp.qday.io` goes live at launch. Code on this page shows the planned API.
:::

## Agent SDK

```typescript
import { QDAYAgent } from "@qday-io/sdk/agent";

const agent = new QDAYAgent({
  sessionKey,                        // scoped signing key
  mcpServer: "https://mcp.qday.io", // AI inference endpoint
  intentRegistry: INTENT_REGISTRY_ADDRESS,
});
```

## MCP Integration

Agents will communicate with external AI models via MCP (Model Context Protocol):

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

## Wallet Agent

A Wallet Agent monitors an account's holdings and executes portfolio management intents:

```typescript
const walletAgent = agent.createWalletAgent({
  intent: "Keep QDAY balance above 0.1 by selling USD8 when needed",
  checkInterval: 60, // seconds
});
await walletAgent.start();
```

## DeFi Agent

A DeFi Agent will interact with QDay Swap, QDay Lending *(planned)*, and other DeFi protocols:

```typescript
const defiAgent = agent.createDeFiAgent({
  strategy: "yield_optimize",
  protocols: ["qday-swap", "qday-lending"],
  riskTolerance: "medium",
});
```

## Payment Agent

A Payment Agent autonomously pays for services within session-key-bounded limits:

```typescript
const paymentAgent = agent.createPaymentAgent({
  sessionKey,
  maxSinglePayment: parseUnits("5", 6),    // 5 tUSD8 per payment (6 decimals)
  maxDailySpend: parseUnits("50", 6),      // 50 tUSD8 per day
  allowedRecipients: [API_PROVIDER_ADDRESS],
});
```

## Agent Authorization

All agent actions are bounded by the session key granted by the user. The agent cannot spend more than the session key allows, call contracts not on the allowlist, or act past the key's expiry — these limits are enforced by the `EntryPoint` at verification time, not by the agent's own code.
