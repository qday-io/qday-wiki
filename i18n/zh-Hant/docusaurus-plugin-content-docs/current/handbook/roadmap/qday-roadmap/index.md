---
title: QDAY 路線圖
sidebar_label: QDAY 路線圖
---

# QDAY 路線圖

QDay 的產品及網絡計劃：先是建於 Abelian 之上、兼容 EVM 的 Layer 2，然後是支付網絡，最後是原生抗量子帳戶。

## 三個階段 {/* #three-stages */}

| 階段 | 推出內容 | 安全 |
|---|---|---|
| **第 1 階段** | EVM L2、以 ZK Rollup 提交至 Abelian、錢包、Swap、質押、跨鏈橋 | 帳本結算透過 L1 實現抗量子 |
| **第 1.5 階段** | 支付網絡：USD8、發票、商戶、AI 代理支付 | 同一個 L2；支付是一個首要的獨立層級 |
| **第 2 階段** | QDay 上的原生 PQC 帳戶、錢包及合約 | 抗量子能力落實到帳戶層面，而不僅是 Rollup |

各階段如何銜接：[簡介](/guide/handbook/introduction)。PQC 詳情：[QDay 後量子路線圖](/guide/handbook/roadmap/pqc-roadmap)。支付：[QDAY 支付路線圖](/guide/handbook/roadmap/payment-roadmap)。

## 目前的網絡 {/* #networks-today */}

| | QDay |
|---|---|
| 狀態 | QDay Aevum 測試網已上線；QDay 主網開發中 |
| 主網鏈 ID | `44002`（開發中） |
| 測試網鏈 ID | `44005` |

新增網絡：[將 QDay 新增至你的錢包](/guide/start/add-network)。參數：[鏈參數](/Knowledge/reference/chains)。

## 里程碑表 {/* #milestone-table */}

| 里程碑 | 目標時間 |
|---|---|
| 第 1 階段開發啟動 | 2024 Q2 |
| 第 1 階段測試網 v1 | 2024 Q4 |
| 第 1 階段測試網 v2 | 2025 Q2 |
| 第 1 階段主網 | 2025 Q4 |
| 第 1.5 階段（支付網絡）開發啟動 | 2026 Q1 |
| 第 1.5 階段測試網 | 2026 Q3 |
| 第 2 階段（原生抗量子帳戶）開發啟動 | 2026 Q4 |
| 第 1.5 階段主網 | 2027 Q1 |
| 第 2 階段測試網 | 2027 Q1 之前 |
| 第 2 階段主網 | 2027 Q4 |

## 第 1 階段已涵蓋的內容 {/* #what-phase-1-already-covers */}

- EVM 執行（Solidity、MetaMask、Remix、Hardhat、Foundry）
- 以 ZK Rollup 提交至 Abelian，以及帳本遭受攻擊時的抗量子暫停機制
- 區塊瀏覽器、水龍頭（測試網）、[Swap](/guide/handbook/user-guide/swap)、[質押](/guide/handbook/user-guide/qday-staking)（已於 2026 年 10 月結束）、[跨鏈橋](/guide/handbook/user-guide#qday-bridge)

開發者：[在 QDay 上開發](/guide/handbook/build-on-qday)及[技術知識庫](/Knowledge/technical/developer-guide/getting-started)。
