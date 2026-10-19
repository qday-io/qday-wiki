---
title: 使用指南
sidebar_label: 使用指南
---

# 使用指南

QDay 日常操作的逐步指南——錢包、兌換、跨鏈與解除質押。初次使用？請先閱讀[快速開始](/guide/handbook/getting-started)，或[將 QDay 新增至你的錢包](/guide/start/add-network)。

## 本節指南 {/* #guides-in-this-section */}

### 錢包 {/* #wallets */}

- **[MetaMask 錢包](metamask)**——安裝 MetaMask、新增 QDay 網絡並匯入代幣
- **[Abelian 手機錢包](abelian-mobile-wallet)**——在 iOS 或 Android 上管理 ABEL 與 QDAY

### 賺取收益 {/* #earn */}

- **[QDay Swap](swap)**——交易 WABEL、QDAY 與 USD8，或提供流動性
- **[QDAY 質押](qday-staking)**——質押已於 2026 年 10 月 15 日結束；請於 2026 年 12 月 31 日 12:00（HKT）前解除質押並領取獎勵
- **[ABEL 質押](abel-staking)**——質押已於 2026 年 10 月 15 日結束；請於 2026 年 12 月 31 日 12:00（HKT）前解除質押 WABEL 並領取獎勵

### 跨鏈橋 {/* #bridge */}

- **[Abelian Bridge](abelian-bridge-v3)**——在 Abelian 與 QDay 之間轉移 ABEL ↔ WABEL
- **[QDay Bridge](#qday-bridge)**——在 QDay 與其他鏈之間轉移 ERC-20、TRC-20 與 QRC-20 資產等代幣

## 區塊瀏覽器 {/* #explorer */}

QDay 的區塊瀏覽器可讓你查詢網絡上的任何交易、地址或合約。

| | URL |
|---|---|
| 測試網（QDay Aevum） | [explorer-test.qday.info](https://explorer-test.qday.info) |
| QDay 主網 | 開發中 |

- **搜尋**——將交易雜湊、錢包地址或合約地址貼入搜尋列。
- **交易**——檢視狀態、區塊確認、Gas 費用與代幣轉移。
- **地址詳細資訊**——查看 tQDAY、WABEL 與 tUSD8 餘額、歷史紀錄，以及已驗證的合約原始碼（如有）。
- **網絡統計**——在首頁查看目前區塊高度、平均出塊時間與吞吐量。

![QDay 區塊瀏覽器](/img/user-guide10.jpg)

## QDay Bridge {/* #qday-bridge */}

QDay Bridge 與 [Abelian Bridge](abelian-bridge-v3) 是兩個獨立的產品。來自其他鏈的 ERC-20、TRC-20 與 QRC-20 資產等代幣請使用 QDay Bridge；ABEL / WABEL 請使用 Abelian Bridge。

QDay Bridge 運行於 **QDay Aevum 測試網**及 **QDay Origin 測試網**。

入口網站：[portal.qday.io/en/bridge](https://portal.qday.io/en/bridge)

1. 前往 QDay Bridge 並連接錢包。
2. 選擇你要跨出的來源鏈與網絡，以及要跨入的目標鏈與網絡。
3. 選擇代幣並輸入要跨鏈的數量。
4. 檢查目標錢包地址、預估費用與完成時間，然後確認。
5. 在錢包中核准交易。視乎目標鏈而定，你可能需要確認第二筆交易才能完成轉移。
6. 在跨鏈橋的交易歷史中追蹤轉移狀態，直到完成為止。

![QDay Bridge](/img/user-guide11.jpg)

*示例：qUSDT → WQDAY，來源鏈與目標鏈均為 QDay。*
