---
title: 智能帳戶架構
draft: false
---

# 智能帳戶架構

:::note[已於 Aevum 測試網上線——主網 2027 年第一季]
AI 代理錢包及會話密鑰（Session Key）——一個具備支出上限及時間鎖的 ERC-4337 智能合約策略引擎——以及穩定幣 paymaster 已於 QDay Aevum 測試網上線（第 1.5 階段升級，2026 年第三季）；主網部署將於 2027 年第一季跟進。智能帳戶 SDK（`@qday-io/sdk`）將於 2027 年第一季推出，目前尚未在 npm 上發佈。合約地址及端點將於文件中發佈。
:::

QDay 使用基於 TypeScript 的 bundler 基礎設施，實作 **ERC-4337 帳戶抽象**。

**EntryPoint**——標準的 ERC-4337 `EntryPoint` 合約；其地址將於文件中發佈。所有 UserOperation 都經由 EntryPoint 處理，由它驗證並以單一原子性批次（bundle）執行。

**Bundler**——QDay 使用 **Alto** bundler（TypeScript 實作）。Bundler 從用戶收集 UserOperation、模擬執行、將其打包，然後呼叫 `EntryPoint.handleOps()`。Alto bundler 維護一個專屬的 UserOperation 記憶池（mempool）。

**Paymaster**——Paymaster 合約可為用戶代付 Gas 費用。QDay 的穩定幣 paymaster 提供 Gas 抽象：用戶和 AI 代理可以 QDay 的原生穩定幣（USD8）支付交易手續費，而毋須持有 $QDAY。開發者亦可部署自訂 Paymaster，提供免 Gas 交易，或讓用戶以其他 ERC-20 代幣支付手續費。

**會話密鑰**——會話密鑰是從用戶的智能帳戶（Smart Account）衍生、有時間限制及範圍限制的簽署密鑰。它讓 AI 代理、dApp 及受委託的簽署者可授權特定操作（例如在消費上限內進行交易），而無需暴露主密鑰。
