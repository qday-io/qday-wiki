---
title: 跨鏈橋架構
draft: false
---

# 跨鏈橋架構

QDay Aevum 與外部鏈之間的跨鏈資產轉移，採用 **PolygonZkEVMBridge** 架構，並針對 QDAY 基於 UTXO 的 L1 作出調整。

**PolygonZkEVMBridge**——跨鏈橋合約在來源鏈上鎖定資產並發出存入事件。對應的分支會提交至 **GlobalExitRoot** Merkle 樹。

**GlobalExitRoot**——追蹤所有跨鏈退出的共用 Merkle 根。任何信任 GlobalExitRoot 的鏈，都可以根據它驗證領取申請，而無需重新執行跨鏈交易。

**Abelian Bridge（ABEL ⇄ WABEL，現已上線）**——目前，Abelian Layer 1（UTXO）上的 ABEL 經由 [Abelian Bridge](/guide/handbook/user-guide/abelian-bridge-v3) 與 QDay 上的 WABEL 互相轉換。ABEL 跨鏈轉入時，Abelian Bridge 智能合約會鑄造 WABEL；WABEL 轉換回 ABEL 時，合約會將其銷毀。Abelian Bridge 運行於 QDay Origin 主網、QDay Origin 測試網及 QDay Aevum 測試網。

**PQZK Bridge（計劃中）**——PQZK Bridge 是計劃中的未來工作，目前尚未上線。它的設計用途是在 QDay（EVM）與 Abelian Layer 1（UTXO）之間轉移資產，並以 Committer 提交至 Abelian Chain 的狀態根作為錨定。
