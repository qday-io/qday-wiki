---
title: 跨鏈橋安全
draft: false
---

# 跨鏈橋安全

**Merkle 證明驗證**——在目標鏈上進行跨鏈橋領取時，必須提供針對已提交 `GlobalExitRoot` 的 Merkle 證明。沒有有效證明的領取會被拒絕。攻擊者若不破解雜湊函數（SHA-256，具備量子安全），便無法偽造有效證明。

**雙重花費防護**——跨鏈橋會為每個跨鏈事件追蹤一個 `nullifier`。一旦領取完成，該 nullifier 會被標記為已使用，同一事件無法再次領取。

**Abelian Bridge（現已上線）**——ABEL ⇄ WABEL 轉換目前經由 [Abelian Bridge](/guide/handbook/user-guide/abelian-bridge-v3) 進行；ABEL 跨鏈轉入時，其智能合約會鑄造 WABEL，WABEL 轉換回 ABEL 時則會將其銷毀。Abelian Bridge 運行於 QDay Origin 主網、QDay Origin 測試網及 QDay Aevum 測試網。

**PQZK Bridge（統稱概念）**——PQZK Bridge（Post-Quantum Zero-Knowledge Bridge，後量子零知識橋）是一個統稱，指在後量子公鏈（例如 Abelian）上構建的零知識跨鏈橋，並非某個特定的 dApp。目前的 Abelian Bridge（ABEL ⇄ WABEL）及 QDay Bridge 均未達到 PQZK Bridge 的標準；QDay 與 Abelian 之間的 PQZK Bridge 屬未來工作（見[白皮書 §4.4](/guide/handbook/qday-whitepaper#sec-4-4)）。按此設計，QDay 的狀態以 Committer 向 Abelian Chain 提交的狀態根為錨點；若要偽造狀態根提交，必須破解 Abelian 的格密碼學。
