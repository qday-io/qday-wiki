---
title: 智能帳戶架構
draft: false
---

# 智能帳戶架構

:::note[計劃中——2027 年第一季]
ERC-4337 帳戶抽象（EntryPoint、bundler、Paymaster、會話密鑰（Session Key）、Smart Account SDK）將於 2027 年第一季隨 QDay 主網推出，目前尚未上線。本頁描述的是計劃中的設計。
:::

QDay 將使用基於 TypeScript 的 bundler 基礎設施，實作 **ERC-4337 帳戶抽象**。

**EntryPoint**——標準的 ERC-4337 `EntryPoint` 合約尚未部署於 QDay Aevum；其地址將於上線時公佈。所有 UserOperation 都經由 EntryPoint 處理，由它驗證並以單一原子性批次（bundle）執行。

**Bundler**——QDay 將使用 **Alto** bundler（TypeScript 實作）。Bundler 從用戶收集 UserOperation、模擬執行、將其打包，然後呼叫 `EntryPoint.handleOps()`。Alto bundler 維護一個專屬的 UserOperation 記憶池（mempool）。

**Paymaster**——Paymaster 合約可為用戶代付 Gas 費用。開發者可部署自訂 Paymaster，提供免 Gas 交易，或讓用戶以 ERC-20 代幣代替原生 Gas 代幣支付手續費。

**會話密鑰（Session Key）**——會話密鑰是從用戶的智能帳戶（Smart Account）衍生、有時間限制及範圍限制的簽署密鑰。它讓 AI 代理、dApp 及受委託的簽署者可授權特定操作（例如在消費上限內進行交易），而無需暴露主密鑰。
