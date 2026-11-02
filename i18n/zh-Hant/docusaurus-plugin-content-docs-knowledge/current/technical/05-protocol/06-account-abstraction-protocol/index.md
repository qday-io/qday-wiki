---
title: 帳戶抽象協議
draft: false
---

# 帳戶抽象協議

:::note[已於 Aevum 測試網上線——主網 2027 年第一季]
ERC-4337 帳戶抽象——代理錢包及會話密鑰（Session Key）（設有支出上限及時間鎖的智能合約策略引擎）以及穩定幣 Paymaster——已於 QDay Aevum 測試網上線（第 1.5 階段升級，2026 年第三季）；主網部署將於 2027 年第一季推出。合約地址及端點將於文檔中公佈。
:::

QDay 實作 **ERC-4337** 帳戶抽象，無需變更核心 EVM 協議。

**UserOperation**——用戶不使用標準的以太坊交易，而是建構一個 `UserOperation` 結構，其中包含：`sender`（智能帳戶地址）、`nonce`、`initCode`（用於部署帳戶）、`callData`、`callGasLimit`、`verificationGasLimit`、`preVerificationGas`、`maxFeePerGas`、`maxPriorityFeePerGas`、`paymasterAndData` 與 `signature`。

**Bundler 記憶池（Bundler Mempool）**——Alto bundler 維護一個鏈下的 UserOperation 記憶池。Bundler 會收集 UserOperation，模擬執行以檢查有效性與 Gas 上限，並將多個 UserOperation 打包成單一 `handleOps()` 交易。

**EntryPoint 執行（EntryPoint Execution）**——`EntryPoint` 合約對每個 UserOperation 執行兩個階段：（1）**驗證**——呼叫智能帳戶的 `validateUserOp()`，並（可選）呼叫 Paymaster 的 `validatePaymasterUserOp()`；（2）**執行**——呼叫智能帳戶的目標函數。費用由 Paymaster 的存款或發送者已存入的餘額支付。

**會話密鑰授權（Session Key Authorization）**——會話密鑰（Session Key）由智能帳戶擁有者簽發，並儲存在 `SessionKeyManager` 模組中。每個會話密鑰的範圍由以下條件限定：允許的合約地址、允許的函數選擇器、每次呼叫的價值上限、累計支出上限與到期時間戳記。AI 代理使用會話密鑰在這些範圍內自主進行交易。
