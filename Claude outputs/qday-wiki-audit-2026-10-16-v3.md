# QDay Wiki 一致性审查（第三轮，基于本地最新改动 193 个文件）

结论：繁中与英文在**事实层面已一致**（129 对页面逐页比对：链 ID、地址、日期、邮箱、代币符号、Phase 说明全部一致，所有锚点可用）。剩余问题集中在三类：①英文本身仍有互相矛盾 / 把计划功能写成已上线；②繁中站点的菜单、首页、互动组件仍显示英文或旧文字；③繁中用词不统一（港式 vs 台式混用）。

---

## 一、英文内容矛盾（繁中忠实照搬，需先改英文再同步）

### 高
| # | 位置 | 问题 | 建议 |
|---|---|---|---|
| 1 | `pqc-roadmap` 51–55、~1345 行 | PQC 路线图用 Phase 0–5，混合签名 2027 H2、原生 PQ 账户 2028+；网络路线图 / FAQ / 白皮书写 Phase 2 测试网 2027 Q1 前、主网 2027 Q4。同一个「Phase 2」在两页意思不同 | 改称「PQC Stage 0–5」并对应网络 Phase；日期对齐（见 Q2） |
| 2 | `05-defi-ecosystem` 8 | 「QDay Swap — QDay Aevum 上的 DEX」，但 Swap 指南写运行在 Origin 主网 | 改为 Origin 主网 |
| 3 | 白皮书 247 | 「通过 migration vaults 1:1 迁移」——与「无 Lockbox，QDAYp TGE 后 1:1 兑换」矛盾 | 改为 QDAYp → $QDAY 1:1 |
| 4 | `abel-staking` 57–64、`qday-staking` 69、FAQ 151 | Origin **主网** WABEL 用户被引导到 abel-conversion；但 Bridge 页说 Abelian Bridge 只运行在两个测试网 | 见 Q1 |
| 5 | `06-smart-account-architecture` 10、`08-erc-4337` 26 vs `04-smart-account-api` 36 | 一处说 EntryPoint / Alto bundler 已部署在 Aevum，另一处说「上线时公布」；两处「见 Reference 页取地址」但该页没有地址 | 见 Q3 |
| 6 | `08-ai-agent-architecture` 8、`09-payment-architecture` 8、`ecosystem` 27、`why-qday` 15/17/41/45、`02-wallet-ecosystem` 10、白皮书摘要 18、技术简介 85 | AI 代理、支付层、ERC-4337 智能钱包写成「已上线」，与 FAQ 5.x / 白皮书表 2.1「Q1 2027」矛盾 | 改为将来时或加「计划 Q1 2027」 |

### 中
| # | 位置 | 问题 | 建议 |
|---|---|---|---|
| 7 | `start/faucet` 11 vs 17 | 先说「无需另外的水龙头网站」，下面又让新钱包先去 faucet.qday.info；`getting-started` 22、FAQ 223 未提新钱包这一步 | 删去前句，两处补「新钱包先去 faucet.qday.info」 |
| 8 | `metamask` 140–141、`abelian-bridge` 334、`qday-staking` 100 | 「下一步：迁移资产（单向）」——迁移尚未开放；MetaMask 页设置的是 Aevum，下一步却跳 Origin 主网 Swap | 改为「迁移须知（主网上线后开放）」；Swap 卡片换成代币清单 |
| 9 | `metamask` 92–99 | 「导入 QDAY 钱包」后只加了 Aevum 测试网，用户看不到 Origin 主网的 QDAY 余额，会以为资产丢失 | 加说明：现有 QDAY 余额在 Origin 主网（44001） |
| 10 | `swap` 37、78 | 「切换到 QDAY 网络」含糊；下一步「链参数 / 添加网络」添加的是 Aevum | 写明 Origin 主网 44001，删除该卡片 |
| 11 | 白皮书 492 vs 520 | 不收 gas vs 额外 gas | 见 Q4 |
| 12 | 白皮书 242、637 | 「所有交易费用都以 USD8 支付」「没有 gas 代币概念」——未限定 Agent Payment 场景 | 加「在代理支付流程中」 |
| 13 | FAQ 66、白皮书 95/272 vs 技术文档 | 一处说 ZK 证明提交到 Abelian 验证，技术文档说证明在 DA 层验证、只把状态根写入 Abelian | 统一为技术文档说法 |
| 14 | FAQ 54、386、技术简介 24 | 「已具备后量子签名 / 账户安全」，与「账户目前仍是 ECDSA，Phase 2 才有」矛盾 | 加「(Phase 2)」，删「already」 |
| 15 | 技术简介 10–12 | 仍显示「草稿」提示框 | 删除 |
| 16 | 质押指南 15、FAQ 340、开发者计划、手机钱包 361 | 联系方式仍是 Telegram / GitHub Issues | 统一 support@qday.io（Telegram 仅作社群交流） |
| 17 | TPS | 「今天即数千 TPS」/「超过 4,000」/「默认 ~2,000，最高 20,000」 | 见 Q5 |
| 18 | `tokenomics` 18、`11-economics`、`12-governance`、白皮书 105/245 | 「QDAY 核心用途是质押」「按质押量投票」，与「质押已结束」并列易混淆 | 区分「验证者/排序器质押」与已结束的用户质押（见 Q6） |
| 19 | 开发者 Quick Start 33、`11-sdk-code-examples`、`09-sdk-reference` | 紧接「尚未发布到 npm」提示下面就是 `npm install @qday-io/sdk` | Quick Start 只保留 Foundry，SDK 安装行标「(Q1 2027)」 |
| 20 | 两份质押指南 9–10、FAQ 129/144 | 「将于 10/15 结束」——今天已结束 | 改为过去式「已于 … 结束」 |
| 21 | `abel-staking` 23 | 用 WABEL 付网络手续费（你已确认合理，仅提醒） | 保持 |
| 22 | 白皮书 234–235 | 「3 年平均归属（每年 5%）」「4 年平均归属（每年 5%）」数学不成立 | 见 Q7 |

### 低
- `getting-started` 36/39/48/54：测试网示例仍写「1 QDAY」，应为 tQDAY。
- FAQ 211「勿使用 QDay Origin（44003）的地址」→ 应写 44001/44003；FAQ 342「质押页面（主网）」→「QDay Origin 主网」。
- 钱包网络名：开发者文档写 `QDay Aevum Testnet`，链参数页和按钮写 `QDay Aevum`。
- DEX 名称「Q-Swap」与「QDay Swap」混用；生态应用列表缺 Abelian Bridge。
- 手机钱包指南：质押链接未标「已结束」；「staking WABEL（尚未上线）」过时。
- 白皮书：目录缺 4.4 节；「Sub-cent fees: 平均几美分」自相矛盾；「roadmap from outlines」断句；WABEL 写成 QRC20；6 节仍把质押写成进行中；结算时间 <1 秒 / <2 秒。
- FAQ 1.14 说安全文档含审计报告与漏洞赏金——两页已隐藏；`build-on-qday` 仍链接到已隐藏的运营者指南。
- 「Ask AI」组件在每页都只回答「尚未连接」，建议先隐藏。

---

## 二、繁中站点显示问题（翻译之外）

| # | 位置 | 问题 | 建议 |
|---|---|---|---|
| Z1 | 繁中 `earn-on-qday` 48 | 粗体 `**…（HKT）**結束` 未生效，页面直接显示 `**` | 调整粗体位置 |
| Z2 | 首页 | 网络统计（Latest block / Block time / Gas price / Chain ID）、快捷卡片、动态标签、页面描述全是英文 | 接入 `translate()` + `code.json` |
| Z3 | 互动组件 | 水龙头、余额面板、添加网络/代币按钮、连接钱包、复制、状态提示全是英文 | 同上；正文引用的按钮名同步改 |
| Z4 | 导航栏 Docs 菜单 | 繁中永远显示「文件」，不会像英文那样显示当前区块（使用指南 / 技术文件） | 修正判断逻辑并返回中文 |
| Z5 | 页脚 | 繁中仍是「QDay · Abelian Foundation」 | 改为 QDay Foundation |
| Z6 | 导航栏标题 | 繁中 logo 旁多出「QDay Wiki」，英文没有 | 清空 |
| Z7 | 「開始使用 / 快速開始」 | 侧栏 start 区叫「開始使用」，页脚同一链接叫「快速開始」，而「快速開始」又是另一页标题 | start 区统一「開始使用」 |
| Z8 | Abelian 手机钱包 | 四种叫法：手機錢包 / 流動錢包 / 行動錢包 / 英文 Mobile Wallet | 统一「Abelian 手機錢包」 |
| Z9 | 「生態系 / 生態系統」 | 知识库侧栏和首页用「生態系」，其他 59 处用「生態系統」 | 统一「生態系統」 |
| Z10 | 安全页名称 | FAQ 用「審計報告 / 負責任披露 / 漏洞賞金計劃」，页面标题用台式「稽核報告 / 負責任的漏洞揭露 / 漏洞懸賞計畫」 | 统一港式 |
| Z11 | 阶段名 | 「第 1.5 階段」「第一階段」「Phase 1.5」混用（白皮书目录与标题也不一致） | 统一「第 N 階段」 |
| Z12 | 繁中 `_category_.json` | 实际不生效，且内容与显示不符 | 删除 |
| Z13 | 页面名不一致 | 历史（歷史/發展歷程）、运营者指南（3 种）、PQC 路线图（QDay/QDAY、PQC/後量子）、开发页（構建/開發） | 每页一个名字 |
| Z14 | 其他 | 句中换行产生多余空格；`code.json` 一个简体字「内」；破折号 `——` 与 ` — ` 混用；`$201.9B` 未本地化；`AI Agent Payment` 未译；`點選` 1 处 | 逐项修正 |

### 港式用词统一表（建议）
密鑰（非金鑰）· 數據＝data、資料＝information · 生態系統 · 甚麼 · 算法 · 簽名 / 簽章（二选一）· 協議 / 協定（二选一）· 身份 · 計劃 · 商戶 · 篡改 · 收集 · 審計 · 披露 · 客戶端 · 函數 · 返回 · 可編程 · 組件 · 證明者 · 會話密鑰（Session Key）· 發佈 / 公佈 · 着 · Ethereum / 以太坊（二选一）

---

## Q. 需要你回答

1. `portal.qday.io/en/abel-conversion` 服务的是哪条网络？Origin **主网** 的 WABEL 持有者是否在这里转换？它和「运行在两个测试网上的 Abelian Bridge」是同一个服务吗？
2. PQC 路线图（预编译 2027 H1、混合 2027 H2、原生账户 2028+）是否要对齐网络 Phase 2（测试网 2027 Q1 前、主网 2027 Q4）？还是它本来就是更长期的独立计划？
3. ERC-4337 EntryPoint 与 Alto bundler 现在是否已部署在 Aevum？
4. 白皮书 5.6：抗量子操作「不需额外 gas」吗？
5. 官方 TPS 用哪个数字？（建议写「设计目标」而非「今天」）
6. 质押结束后，是否还有任何 $QDAY 质押（验证者 / 排序器 / 证明者 / 治理投票）？35%「质押奖励」分配是否保留这个名称？
7. 白皮书「3 年 / 4 年平均归属（每年 5%）」的正确数字？
8. ABEL 质押的待领奖励是否以 QDAY 计（两份指南的每日上限都写 50,000 QDAY）？
9. Phase 2 账户用 ML-DSA-65（FIPS 204），还是白皮书 383 行说的「与 Abelian 相同的后量子原语（AIP-11）」？
10. Aevum 现在是否已接入 Polygon AggLayer（FAQ 329）？
11. 社区页「PQA Labs — QDay 背后的团队」是否保留？
12. Q1 2027 会同时推出 Go / Rust / Python SDK，还是只有 TypeScript + CLI？
13. 12/31 之后未领取的质押资产，联系 support@qday.io 还是 Telegram？
14. 繁中：签名/签章、协议/协定、Ethereum/以太坊各选哪个？
