---
title: 跨鏈橋協議
draft: false
---

# 跨鏈橋協議

**PolygonZkEVMBridge**——Polygon CDK 跨鏈橋合約運行於 Abelian Plus Node 的 EVM 環境中。若要將資產從 QDay Aevum 跨鏈至另一條鏈，QDay Aevum 上的跨鏈橋合約會鎖定該資產並發出 `BridgeEvent`。該事件會被納入批次的 Local Exit Root，並在批次最終確定後提交至 Global Exit Root。

**QDay Bridge**——QDay Bridge 可在 QDay 與其他 EVM 兼容鏈之間跨鏈轉移 ERC20、TRC20 及 QRC20 代幣。

**Abelian Bridge（ABEL ⇄ WABEL，現已上線）**——WABEL 是 QDay（EVM 帳戶模型）上的 QRC20 代幣，與 Abelian Layer 1（UTXO 模型）上的 ABEL 以 1:1 錨定。鑄造（在 Abelian 上鎖定 ABEL → 收取 WABEL）及銷毀（銷毀 WABEL → 收取 ABEL）由一個具備信任服務提供者（Trust Service Provider，TSP）認證的機構聯盟所營運的線上服務處理。用戶透過 [Abelian Bridge](/guide/handbook/user-guide/abelian-bridge-v3) 使用該服務。Abelian Bridge 運行於 QDay Origin 主網、QDay Origin 測試網及 QDay Aevum 測試網。

**PQZK Bridge（統稱概念）**——PQZK Bridge（Post-Quantum Zero-Knowledge Bridge，後量子零知識橋）是一個統稱，指在後量子公鏈（例如 Abelian）上構建的零知識跨鏈橋，並非某個特定的 dApp。目前的 Abelian Bridge（ABEL ⇄ WABEL）及 QDay Bridge 均未達到 PQZK Bridge 的標準；QDay 與 Abelian 之間的 PQZK Bridge 屬未來工作（見[白皮書 §4.4](/guide/handbook/qday-whitepaper#sec-4-4)）。按此設計，Committer 向 Abelian Chain 提交的狀態根是 QDay（EVM 帳戶模型）與 Abelian Layer 1（UTXO 模型）之間的信任錨點。

Exit Root 的提交與領取方式請參閱[跨鏈訊息傳遞](/Knowledge/technical/protocol/cross-chain-messaging)。
