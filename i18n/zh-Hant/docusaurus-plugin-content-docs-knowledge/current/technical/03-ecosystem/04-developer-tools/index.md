---
title: 開發者工具
draft: false
---

# 開發者工具

**Foundry** — 完整相容 Foundry。搭配 `--rpc-url https://rpc.qday.io` 旗標使用 `forge`、`cast` 與 `anvil`。

**Hardhat** — 在 `hardhat.config.js` 中將 QDAY2 新增為網路（請參閱[開發者指南](/Knowledge/technical/developer-guide/getting-started)）。所有適用於 Ethereum 主網的 Hardhat 外掛皆可在 QDAY2 上使用。

**Remix** — 透過「External HTTP Provider」選項並填入 QDAY2 的 RPC URL，將 Remix IDE 連接至 QDAY2。

**SDK** — `@qday-io/sdk` npm 套件提供以 TypeScript 為優先的客戶端，涵蓋智慧帳戶、ERC-4337 bundler 互動、支付建立與 AI Agent 管理。

**CLI** — `qday` CLI 提供所有 SDK 功能的命令列存取。透過 `npm install -g @qday-io/cli` 安裝。
