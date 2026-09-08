---
title: 安全架構
draft: false
---

# 安全架構

- **抗量子帳本錨定**：所有 rollup 狀態根都會提交至 Abelian Chain，該鏈由晶格密碼學（LWE / Ring-LWE）保護。任何量子電腦都無法偽造這些提交。
- **智慧合約可稽核性**：所有 zkEVM 合約都是 Polygon CDK 合約的分支，而後者已經過獨立安全公司的稽核。
- **透過 Timelock 進行管理控制**：`RollupManager` 上的特權操作受 `Timelock` 合約管控，讓社群在變更生效前有時間審查。
- **暫停機制**：若偵測到具備量子能力的攻擊者，QDAY DAO 可投票暫停 rollup 執行。暫停透過抗量子簽章強制執行——攻擊者同樣無法偽造解除暫停的指令。
