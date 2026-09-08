---
title: Smart Account API
draft: false
---

# Smart Account API

QDAY2 上的 ERC-4337 智慧帳戶（Smart Account）。UserOperation 會經過 **EntryPoint**；bundler 為 Alto。指南：[ERC-4337 開發](/Knowledge/technical/developer-guide/erc-4337-development)。協定：[帳戶抽象協定](/Knowledge/technical/protocol/account-abstraction-protocol)。

## SDK（`@qday-io/sdk/aa`）

| 方法 | 說明 |
|--------|-------------|
| `createSmartAccountClient({ signer, rpcUrl, bundlerUrl })` | 由 EOA 擁有智慧帳戶的用戶端 |
| `createSessionKey({ smartAccount, permissions })` | 限定範圍的金鑰：target、selector、`valueLimit`、`validUntil` |
| `QDAYSmartAccount.sendTransaction({ to, data })` | 單一呼叫（Paymaster 可代付 Gas） |
| `QDAYSmartAccount.sendBatch(calls[])` | 在單一 UserOperation 中執行多個呼叫 |

## UserOperation 欄位

| 欄位 | 意義 |
|-------|---------|
| `sender` | 智慧帳戶地址 |
| `nonce` | 帳戶在 EntryPoint 的 nonce |
| `initCode` | 首次部署所需的 Factory + calldata |
| `callData` | 執行負載 |
| `callGasLimit` / `verificationGasLimit` / `preVerificationGas` | Gas |
| `maxFeePerGas` / `maxPriorityFeePerGas` | EIP-1559 費用 |
| `paymasterAndData` | Paymaster 地址 + 額外資料（自付時為空） |
| `signature` | 帳戶對 UserOp 雜湊的簽章 |

Bundler 範例 URL：`https://bundler.qday.io`。EntryPoint 地址：[官方合約地址](/Knowledge/reference/contracts)。
