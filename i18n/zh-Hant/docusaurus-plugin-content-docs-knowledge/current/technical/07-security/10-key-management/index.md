---
title: 密鑰管理
draft: false
---

# 密鑰管理

**節點營運者密鑰**——Sequencer、Aggregator 與 Committer 的營運者密鑰應存放於 HSM 或雲端 KMS（AWS KMS、GCP Cloud HSM、HashiCorp Vault）。每個服務使用獨立的密鑰。至少每季輪換一次密鑰。

**助記詞保存**——用戶錢包的所有密鑰皆由 BIP-39 助記詞衍生。請將助記詞離線保存（紙本、金屬備份或硬件錢包）。在第 2 階段，同一組助記詞會同時衍生 ECDSA 與 ML-DSA-65 密鑰——保護助記詞即同時保護兩者。

**會話密鑰（Session Key）生命週期**——發放會話密鑰時，應採用該使用情境下實務上最短的到期時間。若偵測到可疑的代理活動，請立即撤銷會話密鑰。
