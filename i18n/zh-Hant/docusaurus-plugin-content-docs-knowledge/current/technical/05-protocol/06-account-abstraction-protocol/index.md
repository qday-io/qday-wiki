---
title: 帳戶抽象協定
draft: false
---

# 帳戶抽象協定

QDAY2 實作 **ERC-4337** 帳戶抽象，無需變更核心 EVM 協定。

**UserOperation** — 使用者不使用標準的 Ethereum 交易，而是建構一個 `UserOperation` 結構，其中包含：`sender`（智慧帳戶地址）、`nonce`、`initCode`（用於部署帳戶）、`callData`、`callGasLimit`、`verificationGasLimit`、`preVerificationGas`、`maxFeePerGas`、`maxPriorityFeePerGas`、`paymasterAndData` 與 `signature`。

**Bundler 記憶池（Bundler Mempool）** — Alto bundler 維護一個鏈下的 UserOperation 記憶池。Bundler 會收集 UserOperation，模擬執行以檢查有效性與 Gas 上限，並將多個 UserOperation 打包成單一 `handleOps()` 交易。

**EntryPoint 執行（EntryPoint Execution）** — `EntryPoint` 合約對每個 UserOperation 執行兩個階段：（1）**驗證**——呼叫智慧帳戶的 `validateUserOp()`，並（可選）呼叫 Paymaster 的 `validatePaymasterUserOp()`；（2）**執行**——呼叫智慧帳戶的目標函式。費用由 Paymaster 的存款或發送者已存入的餘額支付。

**Session Key 授權（Session Key Authorization）** — Session Key 由智慧帳戶擁有者簽發，並儲存在 `SessionKeyManager` 模組中。每個 Session Key 的範圍由以下條件限定：允許的合約地址、允許的函式選擇器、每次呼叫的價值上限、累計支出上限與到期時間戳記。AI 代理使用 Session Key 在這些範圍內自主進行交易。
