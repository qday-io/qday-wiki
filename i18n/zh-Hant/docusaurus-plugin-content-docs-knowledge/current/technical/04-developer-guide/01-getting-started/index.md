---
title: 快速開始
draft: false
---

# 快速開始

:::note[將於 2027 年第一季推出]
QDay SDK（`@qday-io/sdk`）與 CLI（`@qday-io/cli`）將於 2027 年第一季推出，目前尚未在 npm 上發佈。本指南其他部分的 SDK 程式碼片段展示的是計劃中的 API；下方的「快速入門」目前只需 Foundry 即可使用。
:::

在 QDay Aevum 上建構應用程式——從今天就能連接第一個錢包及部署合約，到 2027 年第一季隨 QDay 主網推出的智能帳戶與 AI 支付代理。

## 從這裏開始 {/* #start-here */}

- **[網絡設定](/Knowledge/technical/developer-guide/network-configuration)**——RPC、鏈 ID，以及 QDay 與 QDay Aevum 之間的關係
- **[錢包整合](/Knowledge/technical/developer-guide/wallet-integration)**——EOA 與智能帳戶、`wallet_addEthereumChain`
- **[智能合約開發](/Knowledge/technical/developer-guide/smart-contract-development)**——Solidity、Hardhat，以及 wagmi/viem dApp 逐步教學

QDay Aevum 兼容 EVM。你現有的任何以太坊開發者工具——Foundry、Hardhat、Remix、ethers.js、viem、wagmi——皆可直接使用，無需修改。唯一需要調整的是將工具指向 QDay Aevum 的 RPC 端點。

**前置條件**

- 支援 QDay Aevum 網絡的錢包（MetaMask 或兼容錢包）
- `node >= 18`，用於 SDK / bundler（2027 年第一季推出）
- `foundry` 或 `hardhat`，用於合約開發
- 用作 Gas 的測試網 tQDAY——可從 [faucet.qday.info](https://faucet.qday.info) 或文件內置水龍頭（[取得測試網代幣](/guide/start/faucet)）領取

**快速入門**

```bash
# Deploy a contract with Foundry
forge create src/MyContract.sol:MyContract \
  --rpc-url https://rpc-test.qday.info \
  --private-key $PRIVATE_KEY \
  --broadcast
```

QDay SDK 推出後 *（2027 年第一季推出）*，可透過以下指令安裝：

```bash
# Available Q1 2027 — not yet published on npm
npm install @qday-io/sdk
```
