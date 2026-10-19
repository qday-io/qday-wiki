---
title: 代幣標準
draft: false
---

# 代幣標準

**ERC-20**——QDay Aevum 與標準 ERC-20 代幣介面兼容。USD8 穩定幣實作 ERC-20 並支援 EIP-2612 permit。

**USD8**——USD8 是 QDay 支付層錨定美元的穩定幣。代幣資訊：符號 `USD8`、貨幣 `USD`、小數位 `6`（所有網絡皆然）。在 QDay Aevum 測試網上以 `tUSD8` 部署，地址為 `0x456569838f1d43009A91ebA4263147Afd7233483`；QDay 主網地址將於上線時公佈。

**ERC-4337 智能帳戶**——智能帳戶是與 ERC-4337 兼容的合約。它們實作 `IAccount`（用於 `validateUserOp`），並可選擇實作 `IAccountExecute` 以支援批次呼叫。

**未來：後量子代幣標準**——第 2 階段將引入 ERC-20 的擴充，為代幣操作加入 ML-DSA-65 簽名驗證，實現抗量子的代幣轉帳。
