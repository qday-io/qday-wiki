---
title: 開發者工具
draft: false
---

# 開發者工具

:::note[將於 2027 年第一季推出]
QDay SDK（`@qday-io/sdk`）及 CLI（`@qday-io/cli`）將於 2027 年第一季推出，目前尚未在 npm 上發佈。
:::

**Foundry**——完全兼容 Foundry。使用 `forge`、`cast` 及 `anvil` 時加上 `--rpc-url https://rpc-test.qday.info` 參數（QDay Aevum 測試網）。

**Hardhat**——在 `hardhat.config.js` 中將 QDay Aevum 新增為網絡（請參閱[開發者指南](/Knowledge/technical/developer-guide/getting-started)）。所有適用於以太坊主網的 Hardhat 插件都可在 QDay Aevum 上使用。

**Remix**——透過「External HTTP Provider」選項，以 QDay Aevum RPC URL 將 Remix IDE 連接至 QDay Aevum。

**SDK** *（2027 年第一季推出）*——`@qday-io/sdk` npm 套件將提供以 TypeScript 為先的客戶端，涵蓋智能帳戶、ERC-4337 bundler 互動、建立付款及 AI 代理管理。

**CLI** *（2027 年第一季推出）*——`qday` CLI 將透過命令列提供所有 SDK 功能，可透過 `npm install -g @qday-io/cli` 安裝。
