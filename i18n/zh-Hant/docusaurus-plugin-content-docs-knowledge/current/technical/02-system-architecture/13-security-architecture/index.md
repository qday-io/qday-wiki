---
title: 安全架構
draft: false
---

# 安全架構

- **抗量子帳本錨點**：Committer 將 QDay 的最終狀態根提交至 Abelian Chain，而 Abelian Chain 由 PoW 及格密碼學（LWE / Ring-LWE）保護。Abelian 會記錄此承諾，但本身不會重新驗證每筆 L2 交易，亦不會強制執行驗證者門檻。
- **多驗證者驗證**：多個獨立驗證者會檢查批次數據一致性及狀態轉換，而每個批次需要 M-of-N 批准。這減少了對任何單一驗證方的依賴。安全性取決於驗證者的獨立性、門檻設定、數據可用性及最終確定規則。
- **智能合約可審計性**：Rollup 合約分支自 Polygon CDK 合約，而這些合約已經過獨立安全公司審計。
- **透過 Timelock 進行管理控制**：`RollupManager` 上的特權操作受 `Timelock` 合約管控，讓社群在變更生效前有時間審查。
- **暫停機制**：若偵測到具備量子能力的攻擊者，QDAY DAO 可投票暫停 Rollup 執行。Rollup 數據以 Rollup 營運者的抗量子 Abelian 密鑰簽名，因此一旦 Rollup 被暫停，攻擊者無法偽造這些簽名以繼續推進。
