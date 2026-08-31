---
sidebar_position: 4
title: Developer Guide
draft: false
---

# Developer Guide

Build applications on QDAY2 — from connecting your first wallet to deploying quantum-resistant smart accounts and AI payment agents.

## Getting Started

QDAY2 is EVM-compatible. Any Ethereum developer tool you already use — Foundry, Hardhat, Remix, ethers.js, viem, wagmi — works without modification. The only change is pointing your tools at the QDAY2 RPC endpoint.

**Prerequisites**

- A wallet with QDAY2 network support (MetaMask or compatible)
- `node >= 18` for SDK / bundler usage
- `foundry` or `hardhat` for contract development

**Quick Start**

```bash
# Install the QDAY SDK
npm install @qday-io/sdk

# Deploy a contract with Foundry
forge create src/MyContract.sol:MyContract \
  --rpc-url https://rpc.qday.io \
  --private-key $PRIVATE_KEY
```

## Network Configuration

Add QDAY2 to your wallet or tool configuration:

**Mainnet**

| Parameter | Value |
|-----------|-------|
| Network Name | QDAY2 Mainnet |
| RPC URL | `https://rpc.qday.io` |
| Chain ID | *(see chain params page)* |
| Currency Symbol | QDAY |
| Block Explorer | `https://explorer.qday.io` |

**Testnet**

| Parameter | Value |
|-----------|-------|
| Network Name | QDAY2 Testnet |
| RPC URL | `https://rpc-testnet.qday.io` |
| Chain ID | *(see chain params page)* |
| Currency Symbol | QDAY |
| Block Explorer | `https://explorer-testnet.qday.io` |
| Faucet | `https://faucet.qday.io` |

## Wallet Integration

QDAY2 supports two wallet types:

**EOA Wallets** — Standard Ethereum externally-owned accounts (ECDSA). MetaMask, Frame, and any wallet that supports custom EVM chains work out of the box. Connect by adding the network configuration above.

**Smart Account Wallets** — ERC-4337 Smart Accounts provide gasless transactions, batched calls, and session key delegation. Smart accounts are deployed on first use; the user's EOA acts as the owner/signer.

```typescript
import { createSmartAccountClient } from "@qday-io/sdk/aa";

const client = await createSmartAccountClient({
  signer: eoaWallet,
  rpcUrl: "https://rpc.qday.io",
  bundlerUrl: "https://bundler.qday.io",
});

// Send a gasless transaction (Paymaster covers gas)
const txHash = await client.sendTransaction({
  to: contractAddress,
  data: encodedCallData,
});
```

## Smart Contract Development

QDAY2 is fully Solidity-compatible. Write contracts exactly as you would for Ethereum mainnet.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloQDAY {
    string public message = "Quantum-safe by default";

    function setMessage(string calldata _msg) external {
        message = _msg;
    }
}
```

**Deploying with Hardhat**

```javascript
// hardhat.config.js
module.exports = {
  networks: {
    qday: {
      url: "https://rpc.qday.io",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
```

```bash
npx hardhat run scripts/deploy.js --network qday
```

## Contract Verification

Verify contracts on the QDAY2 Explorer using the standard Blockscout verification flow:

```bash
forge verify-contract \
  --chain-id <QDAY2_CHAIN_ID> \
  --verifier blockscout \
  --verifier-url https://explorer.qday.io/api \
  <CONTRACT_ADDRESS> \
  src/MyContract.sol:MyContract
```

## Upgradeable Contracts

Use the standard OpenZeppelin UUPS or Transparent Proxy patterns — they work without modification on QDAY2.

```bash
forge install OpenZeppelin/openzeppelin-contracts-upgradeable
```

Admin operations on proxy contracts involving significant value should use a `TimelockController` for safety, consistent with the QDAY2 protocol's own governance model.

## Precompiled Contracts

QDAY2 adds post-quantum cryptography precompiles on top of the standard EVM precompiles.

### ML-DSA-65 Verify

Verifies an ML-DSA-65 (FIPS 204) signature. Use this to verify post-quantum signatures inside a Solidity contract.

```solidity
// Precompile address (Phase 2)
address constant ML_DSA_65_VERIFY = address(0x100);

function verifyMLDSA65(
    bytes calldata publicKey,   // 1952 bytes
    bytes calldata message,
    bytes calldata signature    // 3309 bytes
) internal view returns (bool) {
    (bool success, bytes memory result) = ML_DSA_65_VERIFY.staticcall(
        abi.encode(publicKey, message, signature)
    );
    require(success, "precompile call failed");
    return abi.decode(result, (bool));
}
```

### Hybrid Verify

Verifies a hybrid ML-DSA-65 + ECDSA signature during the Phase 1 → Phase 2 transition period. Both signatures must be valid.

```solidity
address constant HYBRID_VERIFY = address(0x101);
```

*Precompile addresses are confirmed at Phase 2 launch. Check the [Reference](./08-reference.md) page for current addresses.*

## ERC-4337 Development

### EntryPoint

The `EntryPoint` contract is the hub of the ERC-4337 system. All UserOperations flow through it.

```solidity
import "@account-abstraction/contracts/interfaces/IEntryPoint.sol";

IEntryPoint constant ENTRY_POINT = IEntryPoint(ENTRY_POINT_ADDRESS);
```

Use the EntryPoint address from the [Reference](./08-reference.md) page.

### Bundler Integration (Alto)

QDAY2 runs the [Alto](https://github.com/pimlicolabs/alto) bundler. Send UserOperations to the bundler's RPC endpoint:

```typescript
import { createBundlerClient } from "permissionless";
import { http } from "viem";

const bundler = createBundlerClient({
  transport: http("https://bundler.qday.io"),
});

const userOpHash = await bundler.sendUserOperation({
  userOperation,
  entryPoint: ENTRY_POINT_ADDRESS,
});
```

### Paymaster

Deploy a Paymaster to sponsor gas for your users. The simplest pattern is a `VerifyingPaymaster` that signs off on eligible UserOperations:

```solidity
import "@account-abstraction/contracts/core/BasePaymaster.sol";

contract QDAYPaymaster is BasePaymaster {
    function _validatePaymasterUserOp(
        UserOperation calldata userOp,
        bytes32 userOpHash,
        uint256 maxCost
    ) internal override returns (bytes memory context, uint256 validationData) {
        // Your sponsorship logic here
        return ("", _packValidationData(false, 0, 0));
    }
}
```

### Session Key

Grant an AI agent or dApp a limited signing authority via a Session Key module:

```typescript
import { createSessionKey } from "@qday-io/sdk/aa";

const sessionKey = await createSessionKey({
  smartAccount: mySmartAccount,
  permissions: {
    target: DEFI_CONTRACT,
    selector: "0xa9059cbb", // ERC-20 transfer
    valueLimit: parseEther("10"),
    validUntil: Math.floor(Date.now() / 1000) + 86400, // 24h
  },
});
```

### Smart Account SDK

```typescript
import { QDAYSmartAccount } from "@qday-io/sdk/aa";

const account = new QDAYSmartAccount({
  owner: mySigner,
  bundlerUrl: "https://bundler.qday.io",
  paymasterUrl: "https://paymaster.qday.io",
});

// Batch multiple calls into one UserOperation
const txHash = await account.sendBatch([
  { to: tokenA, data: approveCalldata },
  { to: router, data: swapCalldata },
]);
```

## AI Agent Development

### Agent SDK

```typescript
import { QDAYAgent } from "@qday-io/sdk/agent";

const agent = new QDAYAgent({
  sessionKey,                        // scoped signing key
  mcpServer: "https://mcp.qday.io", // AI inference endpoint
  intentRegistry: INTENT_REGISTRY_ADDRESS,
});
```

### MCP Integration

Agents communicate with external AI models via MCP (Model Context Protocol):

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

### Wallet Agent

A Wallet Agent monitors an account's holdings and executes portfolio management intents:

```typescript
const walletAgent = agent.createWalletAgent({
  intent: "Keep ETH balance above 0.1 by selling QDAY when needed",
  checkInterval: 60, // seconds
});
await walletAgent.start();
```

### DeFi Agent

A DeFi Agent interacts with QDay Swap, QDay Lending, and other DeFi protocols:

```typescript
const defiAgent = agent.createDeFiAgent({
  strategy: "yield_optimize",
  protocols: ["qday-swap", "qday-lending"],
  riskTolerance: "medium",
});
```

### Payment Agent

A Payment Agent autonomously pays for services within session-key-bounded limits:

```typescript
const paymentAgent = agent.createPaymentAgent({
  sessionKey,
  maxSinglePayment: parseUnits("5", 6),    // 5 PQUSD per payment
  maxDailySpend: parseUnits("50", 6),      // 50 PQUSD per day
  allowedRecipients: [API_PROVIDER_ADDRESS],
});
```

### Agent Authorization

All agent actions are bounded by the session key granted by the user. The agent cannot spend more than the session key allows, call contracts not on the allowlist, or act past the key's expiry — these limits are enforced by the `EntryPoint` at verification time, not by the agent's own code.

## Payment Development

### Payment SDK

```typescript
import { QDAYPayments } from "@qday-io/sdk/payments";

const payments = new QDAYPayments({
  rpcUrl: "https://rpc.qday.io",
  signer: myWallet,
});
```

### Invoice

```typescript
// Create an invoice (merchant side)
const invoice = await payments.createInvoice({
  amount: parseUnits("9.99", 6), // 9.99 PQUSD
  currency: PQUSD_ADDRESS,
  memo: "Pro subscription - August 2026",
  expiresIn: 3600, // 1 hour
});

console.log("Pay at:", invoice.paymentUrl);
console.log("Invoice ID:", invoice.id);
```

### Checkout

```typescript
// Pay an invoice (payer side)
const receipt = await payments.payInvoice(invoice.id);
await receipt.wait(); // wait for L2 soft confirmation
```

### Subscription

```typescript
// Create a recurring payment authorization
const subscription = await payments.createSubscription({
  merchant: MERCHANT_ADDRESS,
  amount: parseUnits("9.99", 6),
  period: "monthly",
  currency: PQUSD_ADDRESS,
});
// Under the hood this issues a Session Key to the merchant's payment contract
```

### Streaming Payment

```typescript
// Stream 1 PQUSD per hour to a content provider
const stream = await payments.createStream({
  recipient: PROVIDER_ADDRESS,
  flowRate: parseUnits("1", 6) / BigInt(3600), // per second
  deposit: parseUnits("24", 6), // 24h deposit
  currency: PQUSD_ADDRESS,
});
```

### Agent Payment

Agents pay for services autonomously using a Payment Agent (see AI Agent section above). The payment contract verifies the session key before releasing funds.

### Webhook

Register a webhook to receive real-time payment notifications:

```typescript
await payments.registerWebhook({
  url: "https://your-server.com/qday-webhook",
  events: ["invoice.paid", "subscription.renewed", "stream.stopped"],
  secret: process.env.WEBHOOK_SECRET,
});
```

Webhook payloads are signed with HMAC-SHA256 using your webhook secret. Verify the signature before processing:

```typescript
import { verifyWebhookSignature } from "@qday-io/sdk/payments";

app.post("/qday-webhook", (req, res) => {
  const isValid = verifyWebhookSignature(req.body, req.headers["x-qday-signature"], secret);
  if (!isValid) return res.status(401).end();
  // process event...
});
```

## SDK & Code Examples

The QDAY SDK ships with examples in multiple languages:

| Language | Package / Module |
|----------|-----------------|
| JavaScript | `@qday-io/sdk` (CommonJS) |
| TypeScript | `@qday-io/sdk` (ESM + types) |
| Go | `github.com/qday-io/qday-go-sdk` |
| Rust | `qday-sdk` (crates.io) |
| Python | `qday-sdk` (PyPI) |

Full example repositories are available at [github.com/qday-io](https://github.com/qday-io).
