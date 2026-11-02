---
title: 經濟模型
draft: false
---

# 經濟模型

:::note[協議層級質押]
此處所述的質押抵押品，是為升級後網絡所計劃的協議層級質押，有別於已於 2026 年 10 月 15 日結束的 QDAY/ABEL 用戶質押計劃。
:::

**Gas**——QDay Aevum 採用與以太坊兼容的 Gas 模型。Gas 價格以原生 Gas 代幣計價，並遵循 EIP-1559（基礎費用 + 優先費用）。透過 Paymaster Gas 抽象，用戶及 AI 代理可以使用 QDay 的原生穩定幣（USD8）支付交易手續費，而無須持有 $QDAY。

**QDAY 代幣**——QDAY 代幣（總供應量：22,517,998,100）用於質押抵押品、治理與手續費支付。QDAY 的總供應量與 Abelian L1 上的 ABEL 一致。

**Paymaster 手續費匯集與代幣回購（Paymaster Fee Sink & Token Buybacks）**——協議 Paymaster 所收取的穩定幣交易附加費中，固定百分比會轉入鏈上的 Fee Sink 合約，由該合約定期在公開市場回購 $QDAY。

**排序器與證明者質押抵押品（Sequencer & Prover Staking Collateral）**——根據白皮書（§3.2），排序器節點及證明者營運者須質押 $QDAY 作為抵押品，方可參與區塊生產及證明聚合，令代幣供應按網絡需求按比例鎖定。批次驗證本身由獨立驗證者執行（見[批次驗證協議](/Knowledge/technical/protocol/zk-proof-protocol)）。

**手續費折扣等級（Fee Discount Tiers）**——持有及質押 $QDAY，可讓高交易量的企業 API facilitator 及商戶閘道在 Paymaster 附加費上享有分級折扣。
