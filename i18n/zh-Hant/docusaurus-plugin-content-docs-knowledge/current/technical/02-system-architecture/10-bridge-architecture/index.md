---
title: 跨鏈橋架構
draft: false
---

# 跨鏈橋架構

QDay Aevum 與外部鏈之間的跨鏈資產轉移，採用 Polygon CDK 跨鏈橋架構（`PolygonZkEVMBridge`），並針對 QDAY 基於 UTXO 的 L1 作出調整。

**PolygonZkEVMBridge**——跨鏈橋合約在來源鏈上鎖定資產並發出存入事件。對應的分支會提交至 **GlobalExitRoot** Merkle 樹。

**GlobalExitRoot**——追蹤所有跨鏈退出的共用 Merkle 根。任何信任 GlobalExitRoot 的鏈，都可以根據它驗證領取申請，而無需重新執行跨鏈交易。

**QDay Bridge**——QDay Bridge 在 QDay 與其他 EVM 兼容鏈之間跨鏈 ERC20、TRC20 及 QRC20 代幣。

**Abelian Bridge（ABEL ⇄ WABEL，現已上線）**——WABEL 是 QDay 上的 QRC20 代幣，與 Abelian Layer 1（UTXO）上的 ABEL 按 1:1 錨定。鑄造（在 Abelian 上鎖定 ABEL → 收到 WABEL）及銷毀（銷毀 WABEL → 收到 ABEL）由一個經信任服務提供者（Trust Service Provider，TSP）認證的機構聯盟所營運的線上服務處理。用戶可透過 [Abelian Bridge](/guide/handbook/user-guide/abelian-bridge-v3) 使用該服務。Abelian Bridge 運行於 QDay Origin 主網、QDay Origin 測試網及 QDay Aevum 測試網。

**PQZK Bridge（統稱概念）**——PQZK Bridge（Post-Quantum Zero-Knowledge Bridge，後量子零知識橋）是一個統稱，指在後量子公鏈（例如 Abelian）上構建的零知識跨鏈橋，並非某個特定的 dApp。目前的 Abelian Bridge（ABEL ⇄ WABEL）及 QDay Bridge 均未達到 PQZK Bridge 的標準；QDay 與 Abelian 之間的 PQZK Bridge 屬未來工作（見[白皮書 §4.4](/guide/handbook/qday-whitepaper#sec-4-4)）。按此設計，QDay（EVM）與 Abelian Layer 1（UTXO）透過 Committer 提交至 Abelian Chain 的狀態根相連。
