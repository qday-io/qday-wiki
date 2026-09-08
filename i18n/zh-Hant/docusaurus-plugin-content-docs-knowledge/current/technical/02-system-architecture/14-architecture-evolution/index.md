---
title: 架構演進
draft: false
---

# 架構演進

QDAY2 的架構設計為分兩個階段演進：

**第一階段（目前）**——具 EVM 相容性的 L1 輔助 ZK rollup。帳本安全性透過 Committer 提交的狀態根繼承自 Abelian。帳戶金鑰仍為 ECDSA。

**第二階段（開發中）**——在 EVM 層級原生支援 ML-DSA-65 帳戶。`cdk-erigon` 的 EVM 將升級為可原生處理 ML-DSA-65 簽章。使用者將能在不更改現有 ECDSA 帳戶的情況下建立抗量子帳戶。兩種帳戶類型將並存，以維持向後相容性。
