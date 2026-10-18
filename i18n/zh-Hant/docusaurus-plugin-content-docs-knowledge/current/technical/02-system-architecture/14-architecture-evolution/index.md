---
title: 架構演進
draft: false
---

# 架構演進

QDay Aevum 的架構設計為分兩個階段演進：

**第 1 階段（目前）**——L1 輔助、兼容 EVM 的 ZK Rollup。帳本安全透過 Committer 提交至 Abelian 的狀態根，從 Abelian 繼承而來。帳戶密鑰仍使用 ECDSA。

**第 2 階段（開發中）**——在 EVM 層級原生支援 ML-DSA-65 帳戶。`cdk-erigon` EVM 將升級為原生處理 ML-DSA-65 簽名。用戶將能在不更改既有 ECDSA 帳戶的情況下建立抗量子帳戶。兩種帳戶類型將會並存，以維持向後兼容。
