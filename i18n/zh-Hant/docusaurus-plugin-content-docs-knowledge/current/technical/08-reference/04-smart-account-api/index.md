---
title: 智能帳戶 API
draft: false
---

# 智能帳戶 API

:::note[將於 2027 年第一季推出]
QDay SDK（`@qday-io/sdk`）與 CLI（`@qday-io/cli`）將於 2027 年第一季推出，目前尚未在 npm 上發佈。本頁的程式碼展示的是計劃中的 API。
:::

QDay Aevum 上的 ERC-4337 智能帳戶（Smart Account）。UserOperation 會經過 **EntryPoint**；bundler 為 Alto。指南：[ERC-4337 開發](/Knowledge/technical/developer-guide/erc-4337-development)。協議：[帳戶抽象協議](/Knowledge/technical/protocol/account-abstraction-protocol)。

## SDK（`@qday-io/sdk/aa`） {/* #sdk-qday-iosdkaa */}

| 方法 | 說明 |
|--------|-------------|
| `createSmartAccountClient({ signer, rpcUrl, bundlerUrl })` | 由 EOA 擁有智能帳戶的客戶端 |
| `createSessionKey({ smartAccount, permissions })` | 限定範圍的密鑰：target、selector、`valueLimit`、`validUntil` |
| `QDAYSmartAccount.sendTransaction({ to, data })` | 單一呼叫（Paymaster 可代付 Gas） |
| `QDAYSmartAccount.sendBatch(calls[])` | 在單一 UserOperation 中執行多個呼叫 |

## UserOperation 欄位 {/* #useroperation-fields */}

| 欄位 | 意義 |
|-------|---------|
| `sender` | 智能帳戶地址 |
| `nonce` | 帳戶在 EntryPoint 的 nonce |
| `initCode` | 首次部署所需的 Factory + calldata |
| `callData` | 執行負載 |
| `callGasLimit` / `verificationGasLimit` / `preVerificationGas` | Gas |
| `maxFeePerGas` / `maxPriorityFeePerGas` | EIP-1559 費用 |
| `paymasterAndData` | Paymaster 地址 + 額外數據（自付時為空） |
| `signature` | 帳戶對 UserOp 雜湊的簽名 |

Bundler 範例 URL：`https://bundler.qday.io`。EntryPoint 地址：將於上線時公佈。
