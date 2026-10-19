---
title: Smart Account API
draft: false
---

# Smart Account API

:::note[Coming Q1 2027]
The QDay SDK (`@qday-io/sdk`) and CLI (`@qday-io/cli`) launch in Q1 2027 and are not yet published on npm. Code on this page shows the planned API.
:::

ERC-4337 Smart Accounts on QDay *(planned)*. The ERC-4337 EntryPoint and bundler launch with QDay mainnet in Q1 2027; they are not deployed on the QDay Aevum testnet. UserOperations go through the **EntryPoint**; the bundler is Alto. Guide: [ERC-4337 Development](/Knowledge/technical/developer-guide/erc-4337-development). Protocol: [Account Abstraction Protocol](/Knowledge/technical/protocol/account-abstraction-protocol).

## SDK (`@qday-io/sdk/aa`)

| Method | Description |
|--------|-------------|
| `createSmartAccountClient({ signer, rpcUrl, bundlerUrl })` | Client whose EOA owns the Smart Account |
| `createSessionKey({ smartAccount, permissions })` | Scoped key: target, selector, `valueLimit`, `validUntil` |
| `QDAYSmartAccount.sendTransaction({ to, data })` | Single call (Paymaster can sponsor gas) |
| `QDAYSmartAccount.sendBatch(calls[])` | Several calls in one UserOperation |

## UserOperation fields

| Field | Meaning |
|-------|---------|
| `sender` | Smart Account address |
| `nonce` | Account nonce at the EntryPoint |
| `initCode` | Factory + calldata for first-time deployment |
| `callData` | Execution payload |
| `callGasLimit` / `verificationGasLimit` / `preVerificationGas` | Gas |
| `maxFeePerGas` / `maxPriorityFeePerGas` | EIP-1559 fees |
| `paymasterAndData` | Paymaster address + extra data (empty if self-pay) |
| `signature` | Account signature over the UserOp hash |

Bundler example URL: `https://bundler.qday.io`. EntryPoint address: published at launch.
