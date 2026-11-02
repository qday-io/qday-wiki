---
title: 治理
draft: false
---

# 治理

:::note[協議層級質押]
以質押 QDAY 投票，指的是為升級後網絡所計劃的協議層級質押，有別於已於 2026 年 10 月 15 日結束的 QDAY/ABEL 用戶質押計劃。
:::

**QDAY DAO**——協議參數變更、合約升級與緊急行動都需要 DAO 核准。投票權與質押的 QDAY 數量成正比。

**時間鎖（Timelock）**——`RollupManager` 上所有特權操作都透過具有最小延遲的 `Timelock` 合約執行。這讓社群有時間審查並否決變更。

**量子威脅暫停**——若偵測到可信的量子威脅，DAO 可投票暫停 rollup 執行。每個 rollup 營運者均以 Abelian 帳戶運行 rollup，而 rollup 數據以 Abelian 的抗量子密鑰及算法簽名。擁有量子電腦的攻擊者無法偽造 rollup 營運者的簽名，因此在 rollup 暫停後無法繼續推進。暫停只適用於 rollup 營運者；QDay 上的智能合約呼叫（例如代幣發行方凍結地址）仍可正常運作。暫停期結束或 DAO 投票恢復後，執行即會恢復。
