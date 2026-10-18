---
title: 跨鏈橋架構
draft: false
---

# 跨鏈橋架構

QDay Aevum 與外部鏈之間的跨鏈資產轉移，採用 **PolygonZkEVMBridge** 架構，並針對 QDAY 基於 UTXO 的 L1 作出調整。

**PolygonZkEVMBridge**——跨鏈橋合約在來源鏈上鎖定資產並發出存入事件。對應的分支會提交至 **GlobalExitRoot** Merkle 樹。

**GlobalExitRoot**——追蹤所有跨鏈退出的共用 Merkle 根。任何信任 GlobalExitRoot 的鏈，都可以根據它驗證領取申請，而無需重新執行跨鏈交易。

**QDAY ↔ Abelian 跨鏈橋（PQZK Bridge）**——在 QDay Aevum（EVM）與 Abelian Layer 1（UTXO）之間轉移的資產會經由 PQZK Bridge，而 PQZK Bridge 以 Committer 提交至 Abelian Chain 的狀態根作為錨定。
