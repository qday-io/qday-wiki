---
title: 快速開始
draft: false
---

# 快速開始

在 QDAY2 上建構應用程式——從連接第一個錢包，到部署抗量子智慧帳戶與 AI 支付代理。

## 從這裡開始

- **[網路設定](/Knowledge/technical/developer-guide/network-configuration)** — RPC、鏈 ID，以及 QDay 與 QDay2 之間的關係
- **[錢包整合](/Knowledge/technical/developer-guide/wallet-integration)** — EOA 與智慧帳戶、`wallet_addEthereumChain`
- **[智慧合約開發](/Knowledge/technical/developer-guide/smart-contract-development)** — Solidity、Hardhat，以及 wagmi/viem dApp 教學

QDAY2 相容 EVM。你現有的任何 Ethereum 開發者工具——Foundry、Hardhat、Remix、ethers.js、viem、wagmi——皆可直接使用，無需修改。唯一需要調整的是將工具指向 QDAY2 的 RPC 端點。

**前置條件**

- 支援 QDAY2 網路的錢包（MetaMask 或相容錢包）
- `node >= 18`，用於 SDK / bundler
- `foundry` 或 `hardhat`，用於合約開發

**快速入門**

```bash
# Install the QDAY SDK
npm install @qday-io/sdk

# Deploy a contract with Foundry
forge create src/MyContract.sol:MyContract \
  --rpc-url https://rpc.qday.io \
  --private-key $PRIVATE_KEY
```
