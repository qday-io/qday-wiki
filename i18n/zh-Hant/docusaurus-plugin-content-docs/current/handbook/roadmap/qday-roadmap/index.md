---
title: QDAY 路線圖
sidebar_label: QDAY 路線圖
---

# QDAY 路線圖

QDay 的產品與網路計畫：先是建立於 Abelian 上、與 EVM 相容的 Layer 2，接著是支付網路，最後是原生抗量子帳戶。

## 三個階段

| 階段 | 交付內容 | 安全性 |
|---|---|---|
| **第一階段（Phase 1）** | EVM L2、至 Abelian 的 ZK rollup、錢包、Swap、質押、跨鏈橋 | 帳本結算透過 L1 具備抗量子能力 |
| **第 1.5 階段（Phase 1.5）** | 支付網路：USD8、發票、商家、代理支付 | 同一個 L2；支付成為第一級層 |
| **第二階段（Phase 2）** | QDay 上的原生 PQC 帳戶、錢包與合約 | 抗量子能力落實到帳戶層級，而不僅是 rollup |

各階段如何銜接：[簡介](/guide/handbook/introduction)。PQC 細節：[QDAY PQC 路線圖](/guide/handbook/roadmap/pqc-roadmap)。支付：[QDAY 支付路線圖](/guide/handbook/roadmap/payment-roadmap)。

## 目前的網路

| | QDay |
|---|---|
| 狀態 | 測試網已上線；主網即將推出 |
| 主網鏈 ID | 即將推出 |
| 測試網鏈 ID | `44005` |

新增網路：[快速開始](/guide/start/add-network)。參數：[鏈參數](/Knowledge/reference/chains)。

## 里程碑表

| 里程碑 | 目標時程 |
|---|---|
| 第一階段開發啟動 | 2024 Q2 |
| 第一階段測試網 v1 | 2024 Q4 |
| 第一階段測試網 v2 | 2025 Q2 |
| 第一階段主網 | 2025 Q4 |
| 第 1.5 階段（支付網路）開發啟動 | 2026 Q1 |
| 第 1.5 階段測試網 | 2026 Q3 |
| 第二階段（原生抗量子帳戶）開發啟動 | 2026 Q4 |
| 第 1.5 階段主網 | 2027 Q1 |
| 第二階段測試網 | 2027 Q2 |
| 第二階段主網 | 2027 Q4 |

## 第一階段已涵蓋的內容

- EVM 執行（Solidity、MetaMask、Remix、Hardhat、Foundry）
- 至 Abelian 的 ZK rollup，以及帳本遭受攻擊時的抗量子停機機制
- 區塊瀏覽器、水龍頭（測試網）、[Swap](/guide/handbook/user-guide/swap)、[質押](/guide/handbook/user-guide/qday-staking)、[跨鏈橋](/guide/handbook/user-guide#qday-bridge)

建設者：[在 QDay 上建構](/guide/handbook/build-on-qday) 與 [技術知識庫](/Knowledge/technical/developer-guide/getting-started)。
