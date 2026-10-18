---
title: 在 QDay 上開發
sidebar_position: 7
sidebar_label: 在 QDay 上開發
---

# 在 QDay 上開發

:::note[2027 年第一季推出]
QDay SDK（`@qday-io/sdk`）與 CLI（`@qday-io/cli`）將於 2027 年第一季推出，目前尚未在 npm 上發佈。本頁的程式碼展示的是計劃中的 API。
:::

QDay 兼容 EVM：Solidity、MetaMask、Remix、Hardhat、Foundry 及 wagmi/viem 的用法與在以太坊上相同。只需將它們指向 QDay RPC 即可開始開發。以下頁面是技術知識庫——本手冊頁面是導覽地圖；細節都在那些頁面中，並會持續擴充。

## 技術知識庫 {/* #technical-knowledge-base */}

使用 **Technical**（技術）文件在 QDay 上建立你自己的服務：連接到鏈、部署合約，並從 dApp 呼叫它們。

- **[開發者指南](/Knowledge/technical/developer-guide/getting-started)**——網絡、RPC、dApp 逐步教學、錢包、Smart Accounts（智能帳戶）、AI 代理及支付
- **[系統架構](/Knowledge/technical/system-architecture)**——Rollup、RPC 與應用層如何組合在一起
- **[鏈參數](/Knowledge/reference/chains)** · **[代幣](/Knowledge/reference/tokens)**——ID、RPC 及代幣地址

如果你尚未使用過此網絡，請先從[將 QDay 新增至你的錢包](/guide/start/add-network)及[在 Remix 中部署第一個合約](/guide/handbook/getting-started#deploy-your-first-smart-contract)開始。

## 基礎設施 {/* #infrastructure */}

不要自行抓取每一個區塊。QDay 的共用基礎設施專為正式環境的應用而設：RPC、區塊瀏覽器、**索引器**、**價格預言機**、水龍頭及相關 API。如何連接及查詢這些服務，已記錄在生態系統文件中。

- **RPC 與區塊瀏覽器**——JSON-RPC 及 Blockscout 風格的區塊瀏覽器（[基礎設施](/Knowledge/technical/ecosystem/infrastructure)）
- **索引器**——透過 GraphQL 查詢代幣轉帳、DEX 交易、支付及 AI 代理事件，讓你無需重放鏈上歷史（[索引器](/Knowledge/technical/ecosystem/infrastructure)）
- **價格預言機**——與 Chainlink Aggregator 介面兼容的鏈上價格數據源（[預言機與數據](/Knowledge/technical/ecosystem/oracle-data)）
- **連接 / RPC**——端點及 `wallet_addEthereumChain`（[網絡設定](/Knowledge/technical/developer-guide/network-configuration)、[錢包整合](/Knowledge/technical/developer-guide/wallet-integration)）

營運者文件（操作手冊、端點 URL 及 API 格式）將隨服務上線陸續發佈。

## SDK {/* #sdks */}

應用層 SDK 封裝了 Smart Accounts（智能帳戶）、AI 代理及**支付**功能，讓你無需自行組合原始 RPC 和 ABI 即可推出產品。

| 套件 | 用途 |
|---|---|
| `@qday-io/sdk` | TypeScript 客戶端：Smart Accounts、bundler、支付、AI 代理 |
| `@qday-io/sdk/payments` | **支付 SDK**——發票、結帳、訂閱、串流付款、webhook |
| `@qday-io/sdk/aa` | ERC-4337 Smart Accounts 及會話密鑰（Session Key） |
| `@qday-io/sdk/agent` | 鏈上 AI 代理（MCP + intent registry） |
| `@qday-io/cli` | 提供相同功能的 CLI（`npm install -g @qday-io/cli`） |

安裝與範例：[開發者指南——支付 SDK](/Knowledge/technical/developer-guide/payment-development)及 [SDK 與程式碼範例](/Knowledge/technical/developer-guide/sdk-code-examples)。支付閘道的生態系統概覽：[支付生態系統](/Knowledge/technical/ecosystem/payment-ecosystem)。API 表格（發佈後提供）：[技術參考](/Knowledge/technical/reference)。
