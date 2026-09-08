---
title: 金鑰管理
draft: false
---

# 金鑰管理

**節點營運者金鑰** —— Sequencer、Aggregator 與 Committer 的營運者金鑰應存放於 HSM 或雲端 KMS（AWS KMS、GCP Cloud HSM、HashiCorp Vault）。每個服務使用獨立的金鑰。至少每季輪替一次金鑰。

**助記詞保存** —— 使用者錢包的所有金鑰皆由 BIP-39 助記詞衍生。請將助記詞離線保存（紙本、金屬備份或硬體錢包）。在第二階段，同一組助記詞會同時衍生 ECDSA 與 ML-DSA-65 金鑰——保護助記詞即同時保護兩者。

**Session key 生命週期** —— 發放 Session Key 時，應採用該使用情境下實務上最短的到期時間。若偵測到可疑的代理活動，請立即撤銷 session key。
