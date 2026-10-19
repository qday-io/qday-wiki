---
title: 安全架構
draft: false
---

# 安全架構

- **抗量子帳本錨點**：所有 Rollup 狀態根都會提交至 Abelian Chain，而 Abelian Chain 由格密碼學（LWE / Ring-LWE）保護。任何量子電腦都無法偽造這些承諾。
- **智能合約可審計性**：所有 zkEVM 合約均分支自 Polygon CDK 合約，而這些合約已經過獨立安全公司審計。
- **透過 Timelock 進行管理控制**：`RollupManager` 上的特權操作受 `Timelock` 合約管控，讓社群在變更生效前有時間審查。
- **暫停機制**：若偵測到具備量子能力的攻擊者，QDAY DAO 可投票暫停 Rollup 執行。暫停以抗量子簽名強制執行——攻擊者同樣無法偽造撤銷暫停的指令。
