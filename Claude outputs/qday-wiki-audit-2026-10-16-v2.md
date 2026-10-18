# QDay Wiki 一致性审查（第二轮，2026-10-16，PR #47 合并后 main@08c5561）

基准（已与你确认）：文档只面向 **QDay Aevum 测试网（44005）** 与 **QDay 主网（开发中，44002）**；Origin 仅在两份质押终止指南与 Swap 指南中出现；质押已于 2026-10-15 12:00 HKT 结束；Aevum 测试网代币 WABEL / WQDAY / tUSD8（18 位）；不同应用 gas 币种不同属正常。

链接与图片：英文与繁中均无断链（本地构建通过）。繁中侧边栏标签已全部显示中文（上一轮担心的问题不存在）。

---

## A. 无需你决定、可直接修改（建议下一个 PR 处理）

| # | 位置 | 问题 | 修改 |
|---|---|---|---|
| A1 | 繁中 `qday-staking`、`abel-staking` 第 35 行；`swap` 第 72 行 | 裸网址后紧跟全角括号，链接被吃进中文（上次 PR 我造成的） | 改成 `[QDay Portal](https://portal.qday.io/)` |
| A2 | 繁中 `faq` 第 22–36 行 | 仍写「最低质押 1,000 WABEL」「如何取得 QDAY 去质押」——质押已结束，属错误信息 | 立即删除这几段（完整重译见 C1） |
| A3 | `earn-on-qday` 44–62；`user-guide/index` 16–20；`ecosystem` 16/18/23；`tokenomics` 18；`swap` 77（下一步卡片）；`knowledge/.../05-defi-ecosystem` 14；首页 `index.tsx` 18（及繁中 `code.json`）；导航栏「Staking」；首页 QuickLinks「Staking — Earn on QDAY / ABEL」 | 仍把质押当作现行赚取方式 | 改为「质押已于 10/15 结束，请于 12/31 前解押领取」并链接终止指南（中英同步） |
| A4 | `data/updates.json` | 首页「最新动态」最新一条是 2026-08，没有质押结束公告 | 新增置顶公告 |
| A5 | 首页 `NetworkStats.tsx`、`LiveChainStatus`（首页用 `network="qday"`） | 首页显示的是 Origin 测试网区块高度与 Chain ID 44003 | 改读 Aevum 测试网，并标注网络名 |
| A6 | 导航栏 Mainnet / Testnet 菜单、页脚 Explorer、QuickLinks 的 Explorer / Bridge | 全部指向 Origin（explorer.qday.io / .info、portal.qday.info） | Testnet → explorer-test.qday.info + 站内水龙头；Mainnet → 「即将推出」 |
| A7 | 开发者文档：`04-developer-guide` 01/02/03/04/05/10、`08-reference/01-json-rpc-api`、`03-ecosystem/03-infrastructure`、`04-developer-tools` | 文字写 Aevum，代码却用 Origin 主网 44001 / rpc.qday.io（照抄会部署到主网）；`05-contract-verification` 还留着占位符 `<QDAY2_CHAIN_ID>`；infrastructure 页列出不存在的 `rpc-testnet.qday.io`、`faucet.qday.io` | 统一为 44005 / rpc-test / explorer-test |
| A8 | `knowledge/migration/overview.mdx` 21/37 | 仍叫「Aevum mainnet (44002)」，并建议「生产环境继续用 Origin」 | 改名「QDay 主网」，删减 Origin 内容（具体以 Q5 答案为准） |
| A9 | `knowledge/reference/tokens.mdx` 12 vs 28–29 | 先说「请切换到 44005」，下方提示又说「加到钱包当前所在的链」 | 删除后者，或让按钮先自动切换到 Aevum |
| A10 | `earn-on-qday` 33–34、`metamask` 下一步 | 先引导添加 Aevum 测试网，再跳到运行在 Origin 主网的 Swap | 明确标注 Swap 在 Origin 主网 |
| A11 | 网络设置在 `start/add-network`、`getting-started`、`faq`、`metamask` 重复四次，细节不一 | 维护易出错 | 保留 `/guide/start/add-network` 为唯一来源，其他页链接过去 |
| A12 | `faq` 398 vs `responsible-disclosure` | FAQ 叫用户在 Telegram 群公开报 bug，安全页说不要公开 | FAQ 改为指向安全披露页（联系方式见 Q15） |
| A13 | `abelian-bridge-v3` 56/81、248/266 | 「Generate QR Code / Generate New Order」混用；退款步骤重复两段 | 统一按钮名，合并退款流程 |
| A14 | `metamask` 105/120、`getting-started` 44、`user-guide/index` 38 | 标题写 USD8，下方表格是 tUSD8 | Aevum 场景统一写 tUSD8 |
| A15 | `start/add-network` 11–12、`faucet` 33–35 | 残留「Markdown wiki 做不到」「这就是嵌入 dApp」等演示性文案 | 删除 |
| A16 | `qday-roadmap` 13/24/48 | 主网 Chain ID 写「Coming soon」（其他页是 44002）；Phase 1 交付物仍列质押 | 改 44002；质押加「(已于 2026-10 结束)」 |
| A17 | `community` 12 | 标签「@QDayOfficial」与链接 `qday_official_group` 不符 | 统一 |
| A18 | 繁中用词 | 「AI 代理」33 处 vs「AI Agent」13 处（标题也不统一）；「您」vs「你」；「點按」47 处 vs「點擊」；「數據庫」→「資料庫」；`Smart Account API` 未翻译；知识库两个分类都叫「參考資料」 | 统一为 AI 代理 / 你 / 點擊 / 資料庫；分类改「API 參考」「鏈參考」 |
| A19 | 互动组件（水龙头、余额面板、添加网络/代币按钮、连接钱包） | 繁中页面上按钮文字全是英文 | 组件文案接入 i18n（`translate()` + `code.json`） |

## B. 内容互相矛盾，需要你确认事实（见 Q 列表）

| # | 矛盾 | 涉及 |
|---|---|---|
| B1 | 测试网原生币符号 `tQDAY` vs `QDAY`（一键添加按钮写入 QDAY，教程却叫用户核对 tQDAY） | Q2 |
| B2 | 稳定币名称：指南用 USD8 / tUSD8（18 位）；知识库用 **PQUSD（6 位）**并附另一个地址 0x6e0144…；FAQ 4.x 说「USD8 已部署在 Aevum」但 3.8 列的是 tUSD8 | Q3 |
| B3 | 用户付 gas 用什么：tokenomics/FAQ 说 QDAY；why-qday 41/49、白皮书 628/637 说「用 USD8，不用原生 gas 代币」 | Q4 |
| B4 | 迁移方式两套：FAQ 2.7「QDAY 改称 QDAYp，TGE 后 1:1 换新 $QDAY」vs 迁移页「先 wrap 成 WQDAY 再锁进 Lockbox」；还有 44003→44005 测试网迁移路径 | Q5 |
| B5 | FAQ 2.x「Aevum 不会取代 Origin，Origin 继续运行」vs 首页/迁移页「生态正在迁移到 Aevum」——与你「新主网会替换 Origin」的说法冲突 | Q6 |
| B6 | 上线时间：原生 PQ 账户「Q1 2027 前上测试网」(FAQ) vs「2027 Q2」(路线图/白皮书)；Agent 钱包 / x402「已在测试网上线」(白皮书) vs「Q1 2027」(FAQ)；SDK `npm install @qday-io/sdk` 写成现在可用，FAQ 说 Q1 2027 | Q9 |
| B7 | PQC 路线图的 Phase 0–5 与网络路线图的 Phase 1 / 1.5 / 2 编号冲突；PQC 路线图语气像内部提案 | Q9 |
| B8 | TPS（数千 / >4,000 / 默认 ~2,000 最高 20,000）、手续费（低于一美分 / 几美分）、确认时间（<1 秒 / <2 秒 / 数秒） | Q10 |
| B9 | 共识与 DA：CometBFT / Ethermint vs reth + lighthouse | Q11 |
| B10 | 技术简介称账户已不依赖 ECDSA，FAQ 7.1 说账户仍是 ECDSA（直到 Phase 2） | 可直接按 FAQ 修，除非你另有说明 |

## C. 繁中翻译严重落后

| # | 页面 | 差距 | 建议 |
|---|---|---|---|
| C1 | 繁中 FAQ | 8 个标题 vs 英文 67 个；缺第 2–8 节（迁移、开发者、支付与 AI、质押结束、安全、术语表） | 英文 FAQ 定稿（答完 Q 后）再整页重译 |
| C2 | 繁中白皮书 | 仍是 v1.0（2025-01），英文 v2.2（2026-09）；代币分配完全不同（验证者 50%…），路线图停在 2026 Q4；缺 Phase 1.5、第 7 章支付网络 | 整页重译；短期可先加「请以英文版为准」提示 |

## D. 空壳页面

`team`、`history`、`governance`（页面上直接显示 `[Placeholder]`）、知识库 `06-operator-guide` 11 个子页、`09-partners`、`11-audit-reports`（还用内部代号 QDAY2）、`12-bug-bounty`、`06-oracle-data`、技术简介的「Release Lifecycle」。
建议：未有内容前设为隐藏（`draft: true` / `unlisted: true`），或你提供内容。

---

## Q. 需要你回答的问题

1. **水龙头**：`faucet.qday.info` 还在用吗？新用户钱包余额为 0，站内水龙头需要 gas 才能领取，目前组件会引导他们去 faucet.qday.info——新用户第一笔 gas 从哪里来？
2. **测试网原生币符号**：钱包里显示 `tQDAY` 还是 `QDAY`？
3. **稳定币**：是否全站统一为 USD8（主网）/ tUSD8（测试网，18 位）？PQUSD（0x6e0144…，6 位）是否作废？
4. **Gas**：QDay 主网上普通用户付 gas 用 QDAY，还是可用 USD8（paymaster）？
5. **迁移**：Origin → QDay 主网的官方路径是哪一种（Lockbox 锁仓，还是 QDAYp→$QDAY 在 TGE 兑换）？是否有 44003→44005 测试网迁移？「主网上线后 6–12 个月迁移窗口」是否确定？
6. **Origin 去留**：FAQ「Origin 会继续运行」是否仍成立？是否有停运日期？FAQ 第 2 节与迁移页要保留多少 Origin 信息？
7. **跨链桥**：Abelian Bridge v3 和 QDay Bridge 运行在哪条链？Aevum 有没有桥？
8. **Abelian 手机钱包**：是否支持 Aevum 测试网？
9. **时间表**：Phase 2 测试网（Q1 2027 前还是 Q2 2027）、Agent 钱包 / x402 在 Aevum（已上线还是 Q1 2027）、`@qday-io/sdk` / `@qday-io/cli` 是否已发布？
10. **性能数字**：官方 TPS、平均手续费、确认时间各用哪个？
11. **共识/DA**：CometBFT/Ethermint 还是 reth + lighthouse？Aevum 仍是 PoS-over-PoW 吗？
12. 「QDAY 总量与 ABEL 总量一致」（`05-protocol/11-economics`）是否正确？
13. 35% 质押奖励池中未发放的部分如何处理？tokenomics 与白皮书表格是否要改？
14. QDay Lending / QDay Finance 是现有产品还是计划中？
15. 官方安全漏洞报告邮箱是什么？
16. 文档里应署名哪个机构：QDay Foundation、PQA Labs 还是 Abelian Foundation？
17. explorer-test.qday.info 上真有「Add QDay Aevum」按钮吗（MetaMask 指南这样写）？
18. `bundler.qday.io`、`paymaster.qday.io`、`mcp.qday.io` 是真实地址还是占位？
