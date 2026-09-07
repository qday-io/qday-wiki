---
title: 跨鏈橋安全性
draft: false
---

# 跨鏈橋安全性

**Merkle 證明驗證** — 在目標鏈上進行跨鏈橋領取時，必須提供針對已提交 `GlobalExitRoot` 的 Merkle 證明。沒有有效證明的領取會被拒絕。攻擊者若不破解雜湊函式（SHA-256，具備量子安全性），便無法偽造有效證明。

**雙重花費防護** — 跨鏈橋會為每個跨鏈事件追蹤一個 `nullifier`。一旦領取完成，該 nullifier 會被標記為已使用，同一事件無法再次領取。

**PQZK Bridge** — QDAY2 ↔ Abelian 跨鏈橋以 Committer 向 Abelian Chain 提交的狀態根為錨點。若要偽造狀態根提交，必須破解 Abelian 的格密碼學。
