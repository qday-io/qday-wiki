---
title: 跨鏈橋協定
draft: false
---

# 跨鏈橋協定

**PolygonZkEVMBridge** — 跨鏈橋合約部署於 DA 層。若要將資產從 QDAY2 跨鏈至另一條鏈，QDAY2 上的跨鏈橋合約會鎖定該資產並發出 `BridgeEvent`。該事件會被納入批次的 Local Exit Root，並在 ZK 驗證後提交至 Global Exit Root。

**PQZK Bridge（QDAY2 ↔ Abelian）** — PQZK Bridge 負責處理 QDAY2（EVM 帳戶模型）與 Abelian Layer 1（UTXO 模型）之間的轉移。Committer 向 Abelian Chain 提交的狀態根即為信任錨點。QDAY2 上的 Wrapped ABEL（wABEL）代表鎖定在 Abelian L1 上的 ABEL。

Exit Root 的提交與領取方式請參閱[跨鏈訊息傳遞](/Knowledge/technical/protocol/cross-chain-messaging)。
