---
title: 錢包安全性
draft: false
---

# 錢包安全性

**EOA 錢包** —— 標準 ECDSA 錢包（MetaMask、硬體錢包）在第一階段完全受支援。使用者應遵循標準的 Ethereum 錢包安全實務：大額持有使用硬體錢包，助記詞獨一無二並離線保存。

**Smart Account 錢包** —— ERC-4337 Smart Account 提供 EOA 所沒有的安全功能：多重簽章要求、支出限額、session key 到期，以及社交復原。單一 EOA 簽署者被入侵，並不會自動危及採用門檻式所有權策略的 Smart Account。

**後量子錢包（第二階段）** —— 在第二階段，使用者可建立不受量子攻擊威脅的 ML-DSA-65 帳戶。單一 BIP-39 助記詞可同時衍生 ECDSA 帳戶與 ML-DSA-65 帳戶。使用者應在 Q-Day 到來之前，將持有的資產遷移至 ML-DSA-65 帳戶。
