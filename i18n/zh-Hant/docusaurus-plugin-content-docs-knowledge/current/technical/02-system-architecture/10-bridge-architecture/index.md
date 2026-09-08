---
title: 跨鏈橋架構
draft: false
---

# 跨鏈橋架構

QDAY2 與外部鏈之間的跨鏈資產轉移，使用針對 QDAY 基於 UTXO 的 L1 所調整的 **PolygonZkEVMBridge** 架構。

**PolygonZkEVMBridge**——跨鏈橋合約在來源鏈上鎖定資產並發出存款事件。對應的分支會被提交至 **GlobalExitRoot** Merkle 樹。

**GlobalExitRoot**——一個追蹤所有跨鏈出口的共用 Merkle 根。任何信任 GlobalExitRoot 的鏈都可以據此驗證領取請求，而無需重新執行跨鏈交易。

**QDAY ↔ Abelian 跨鏈橋（PQZK Bridge）**——在 QDAY2（EVM）與 Abelian Layer 1（UTXO）之間移動的資產會經過 PQZK Bridge，該橋由 Committer 向 Abelian Chain 提交的狀態根所錨定。
