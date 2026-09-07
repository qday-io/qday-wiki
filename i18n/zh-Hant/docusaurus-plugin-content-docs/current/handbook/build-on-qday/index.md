---
title: 在 QDay 上開發
sidebar_position: 7
sidebar_label: 在 QDay 上開發
---

# 在 QDay 上開發

QDay 與 EVM 相容：Solidity、MetaMask、Remix、Hardhat、Foundry 與 wagmi/viem 的用法與在 Ethereum 上相同。將它們指向 QDay RPC 即可開始開發。以下頁面是技術知識庫——本手冊頁面是導覽地圖；細節都在那裡，並會持續擴充。

## 技術知識庫

使用 **Technical** 文件在 QDay 上建立你自己的服務：連接到鏈、部署合約，並從 dApp 呼叫它們。

- **[開發者指南](/Knowledge/technical/developer-guide/getting-started)**——網路、RPC、dApp 逐步教學、錢包、智慧帳戶、代理與支付
- **[系統架構](/Knowledge/technical/system-architecture)**——rollup、RPC 與應用層如何組合在一起
- **[鏈參數](/Knowledge/reference/chains)** · **[合約](/Knowledge/reference/contracts)**——ID、RPC 與官方地址

如果你尚未使用過此網路，請先從[將 QDay 新增至你的錢包](/guide/start/add-network)與[在 Remix 中部署第一個合約](/guide/handbook/getting-started#部署你的第一個智慧合約)開始。

## 基礎設施

不要自己抓取每個區塊。QDay 的共用基礎設施是為正式環境應用程式而設計的：RPC、區塊瀏覽器、**索引器**、**價格預言機**、水龍頭及相關 API。如何連接與查詢這些服務，已記錄在生態系文件中。

- **RPC 與區塊瀏覽器**——JSON-RPC 與 Blockscout 風格的區塊瀏覽器（[基礎設施](/Knowledge/technical/ecosystem/infrastructure)）
- **索引器**——透過 GraphQL 查詢代幣轉帳、DEX 交易、支付與代理事件，無需重放鏈上歷史（[索引器](/Knowledge/technical/ecosystem/infrastructure)）
- **價格預言機**——與 Chainlink Aggregator 介面相容的鏈上資料饋送（[預言機與資料](/Knowledge/technical/ecosystem/oracle-data)）
- **連接 / RPC**——端點與 `wallet_addEthereumChain`（[網路設定](/Knowledge/technical/developer-guide/network-configuration)、[錢包整合](/Knowledge/technical/developer-guide/wallet-integration)）

面向節點營運者的操作手冊位於[節點營運者指南](/Knowledge/technical/operator-guide)。端點 URL 與 API 格式將隨服務上線陸續補充至這些頁面。

## SDK

應用層 SDK 封裝了智慧帳戶、代理與**支付**功能，讓你無需自行組合原始 RPC 與 ABI 即可出貨。

| 套件 | 用途 |
|---|---|
| `@qday-io/sdk` | TypeScript 用戶端：智慧帳戶、bundler、支付、代理 |
| `@qday-io/sdk/payments` | **支付 SDK**——發票、結帳、訂閱、串流付款、webhook |
| `@qday-io/sdk/aa` | ERC-4337 智慧帳戶與 session key |
| `@qday-io/sdk/agent` | 鏈上 AI 代理（MCP + intent registry） |
| `@qday-io/cli` | 提供相同功能的 CLI（`npm install -g @qday-io/cli`） |

安裝與範例：[開發者指南——支付 SDK](/Knowledge/technical/developer-guide/payment-development)與 [SDK 與程式碼範例](/Knowledge/technical/developer-guide/sdk-code-examples)。支付閘道的生態系概覽：[支付生態系](/Knowledge/technical/ecosystem/payment-ecosystem)。API 表格（發布後）：[技術參考資料](/Knowledge/technical/reference)。
