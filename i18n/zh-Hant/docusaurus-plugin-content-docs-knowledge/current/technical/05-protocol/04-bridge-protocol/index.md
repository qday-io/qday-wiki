---
title: 跨鏈橋協議
draft: false
---

# 跨鏈橋協議

**PolygonZkEVMBridge**——跨鏈橋合約部署於 DA 層。若要將資產從 QDay Aevum 跨鏈至另一條鏈，QDay Aevum 上的跨鏈橋合約會鎖定該資產並發出 `BridgeEvent`。該事件會被納入批次的 Local Exit Root，並在 ZK 驗證後提交至 Global Exit Root。

**Abelian Bridge（ABEL ⇄ WABEL，現已上線）**——Abelian Layer 1（UTXO 模型）與 QDay（EVM 帳戶模型）之間的 ABEL ⇄ WABEL 轉換，目前經由 [Abelian Bridge](/guide/handbook/user-guide/abelian-bridge-v3) 進行。ABEL 跨鏈轉入時，其智能合約會在 QDay 上鑄造 WABEL；WABEL 轉換回 ABEL 時，則會將 WABEL 銷毀。Abelian Bridge 運行於 QDay Origin 主網、QDay Origin 測試網及 QDay Aevum 測試網。

**PQZK Bridge（計劃中）**——PQZK Bridge 是計劃中的未來工作，目前尚未上線。它的設計用途是處理 QDay（EVM 帳戶模型）與 Abelian Layer 1（UTXO 模型）之間的轉移，並以 Committer 向 Abelian Chain 提交的狀態根作為信任錨點。

Exit Root 的提交與領取方式請參閱[跨鏈訊息傳遞](/Knowledge/technical/protocol/cross-chain-messaging)。
