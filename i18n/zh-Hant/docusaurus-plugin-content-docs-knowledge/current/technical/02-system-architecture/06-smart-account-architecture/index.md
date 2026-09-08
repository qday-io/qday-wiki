---
title: 智慧帳戶架構
draft: false
---

# 智慧帳戶架構

QDAY2 使用基於 TypeScript 的 bundler 基礎設施實作 **ERC-4337 帳戶抽象**。

**EntryPoint**——標準的 ERC-4337 `EntryPoint` 合約已部署於 QDAY2。所有 UserOperation 都會經過 EntryPoint，由它驗證並以單一原子批次執行。

**Bundler**——QDAY2 使用 **Alto** bundler（TypeScript 實作）。Bundler 從使用者收集 UserOperation、模擬執行、打包後呼叫 `EntryPoint.handleOps()`。Alto bundler 維護一個專用的 UserOperation 記憶池。

**Paymaster**——Paymaster 合約可為使用者贊助 Gas 費用。開發者可以部署自訂 Paymaster，提供免 Gas 交易，或以 ERC-20 代幣取代原生 Gas 代幣支付手續費。

**Session Key**——Session key 是由使用者智慧帳戶衍生、具有時間限制與範圍限制的簽章金鑰。它讓 AI 代理、dApp 與受委託的簽章者能授權特定操作（例如在消費上限內進行交易），而不會暴露主金鑰。
