---
title: 架構演進
draft: false
---

# 架構演進

QDay Aevum 的架構設計為分階段演進：

**第 1 階段（目前）**——L1 輔助、兼容 EVM 的抗量子 Rollup。這是一個以 Polygon CDK 為基礎的 L2，其批次由多個獨立驗證者（M-of-N）驗證；Committer 會將最終狀態根提交至 Abelian。帳戶密鑰仍使用 ECDSA。

**第 1.5 階段**——代理支付網絡（Agentic Payment Network）。模組化 Polygon CDK 升級、x402 facilitator 及穩定幣 paymaster 已在 Aevum 測試網上線（2026 年第三季）；第 1.5 階段主網計劃於 2027 年第一季推出。

**第 2 階段（開發中）**——在 EVM 層級原生支援 ML-DSA-65 帳戶。`cdk-erigon` EVM 將升級為原生處理 ML-DSA-65 簽名。用戶將能在不更改既有 ECDSA 帳戶的情況下建立抗量子帳戶。兩種帳戶類型將會並存，以維持向後兼容。第 2 階段計劃於 2027 年第二季在 Aevum 測試網推出，並於 2027 年第四季在主網推出。
