---
title: 代幣標準
draft: false
---

# 代幣標準

**ERC-20** —— QDAY2 與標準 ERC-20 代幣介面相容。PQUSD 穩定幣實作 ERC-20 並支援 EIP-2612 permit。

**PQUSD** —— PQUSD 是部署於 QDAY2 上、與美元掛鉤的穩定幣，採用 Circle USDC V2.3 合約架構。代幣資訊：名稱 `PQUSD`、符號 `PQUSD`、貨幣 `USD`、小數位數 `6`。

**ERC-4337 Smart Account** —— Smart Account 是與 ERC-4337 相容的合約。它們實作 `IAccount`（用於 `validateUserOp`），並可選擇實作 `IAccountExecute` 以支援批次呼叫。

**未來：後量子代幣標準** —— 第二階段將引入 ERC-20 的擴充，為代幣操作加入 ML-DSA-65 簽章驗證，實現抗量子的代幣轉帳。
