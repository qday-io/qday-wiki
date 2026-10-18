# QDay Wiki 一致性审查（第四轮，2026-10-17，基于本地最新 261 个改动）

**总体结论**：繁中与英文已完全对齐（112 对页面逐页比对：事实、时态、地址、链 ID、邮箱、锚点均一致；无台式用词、无简体字）。剩余问题主要是：①英文本身仍有少量矛盾 / 截图与文字不符；②几处用户会走错网络或走进死胡同；③繁中站点的命名统一和格式细节；④网站搜索功能实际不可用。

已按你的决定**不列入**：白皮书 5.6、PQC 路线图、表 2.1、「质押奖励 35%」名称、ABEL 解押手续费用 WABEL、隐藏的空壳页。

---

## 一、可以直接修改（不需要你提供信息）

### 高
| # | 位置 | 问题 | 修改 |
|---|---|---|---|
| A1 | 5 个页面（history、team、运营者指南首页、智能合约开发、JSON-RPC API，中英文都有） | 提示框用了旧写法 `:::info 草稿`，在当前网站配置下**不生效，页面直接显示「:::info 草稿 … :::」原文**；其中智能合约开发和 JSON-RPC 两页在侧边栏可见 | 改为 `:::info[草稿]` 写法 |
| A2 | 网站搜索 | 搜索插件默认只索引 `/docs`，但文档在 `/guide` 和 `/Knowledge`，**搜索索引根本没有生成**；也没开中文分词 | 配置 `docsRouteBasePath: ['guide','Knowledge']`、`language: ['en','zh']` |
| A3 | `payment-roadmap` 32、`qday-roadmap` 38 | 「Phase 1.5 测试网 2026 Q3：商户和代理在 Aevum 上试用」——读起来像已上线，与「支付 / x402 / 代理钱包 Q1 2027」矛盾 | 改为「Aevum 上的 Polygon CDK 升级；x402、代理钱包、稳定币 Paymaster 于 Q1 2027 推出」（与白皮书 696 行一致） |
| A4 | `11-sdk-code-examples` 12/35/41/49、`09-sdk-reference` 18–20 | 写着 SDK「附多语言示例」，并给出 `go get qday-go-sdk`、`cargo add qday-sdk`、`pip install qday-sdk`——这些包不存在，还可能被人抢注钓鱼 | 删除或标「计划中，尚未发布」（见 Q9） |

### 中
| # | 位置 | 问题 | 修改 |
|---|---|---|---|
| A5 | `intro.md` 9–10 | 「Aevum 是生态正在迁移过去的升级网络」——与「Aevum 是测试网，暂不取代 Origin」矛盾 | 改为「Aevum 是升级架构的公开测试网；QDay 主网 2027 Q1 上线」 |
| A6 | FAQ 161 | 「Portal、Swap、QDay Bridge、ABEL/WABEL Bridge 正在 Aevum 上重新部署」——实际两个桥已在 Aevum 运行，只有 Swap 未部署；产品名也不对 | 改为「QDay Bridge 和 Abelian Bridge 已在 Aevum 运行，QDay Swap 稍后上线」 |
| A7 | FAQ 44 | 「整合了原生稳定币和 x402」现在时 | 改为「设计为整合…（Q1 2027）」 |
| A8 | FAQ 228–230、开发者 Quick Start 33–35 | `forge create` 没加 `--broadcast`，新版 Foundry 只会模拟、不会真的部署 | 加 `--broadcast` |
| A9 | `04-developer-tools` 16 vs `getting-started` 99 | Remix 一处说用「External HTTP Provider」（无法签名部署），另一处说用「Injected Provider - MetaMask」 | 统一为 Injected Provider |
| A10 | `03-wallet-integration` 23–24、`04-smart-account-api` 12 | Aevum RPC 配 bundler.qday.io，并说「Aevum 上的 ERC-4337 智能账户」——bundler 尚未部署 | 标「计划中，主网上线」 |
| A11 | `payment-roadmap` 52 | 「在 QDay 上持有 USD8（Swap / 跨链桥）」——USD8 只在 Origin 主网 Swap 有，而链接的 QDay Bridge 只在测试网 | 写明网络或删掉该指引 |
| A12 | 首页快捷卡片 | Explorer 指向 Aevum，Swap 是 Origin 主网，Bridge 是测试网，卡片上都没标网络 | 卡片说明加网络名 |
| A13 | 页脚「網絡 › 區塊瀏覽器」 | 指向 Origin 主网浏览器 explorer.qday.io，而首页同名卡片指向 Aevum | 改指向 Aevum 测试网浏览器，或标明「Origin 主网」（见 Q2） |
| A14 | Swap 指南的一键添加代币按钮 | 按钮把 Origin 主网代币加到钱包「当前网络」；照文档操作的用户在 Aevum 上，会加错网络 | 按钮先切换到 Origin 主网再添加 |
| A15 | `abelian-bridge-v3` 252/270、60/85/111/123 | 退款流程写了两段且步骤不同；「Generate QR Code / Generate New Order」没说明各在什么情况出现 | 合并退款；说明两个按钮的出现时机 |
| A16 | 首页功能卡片 | 「完整的开发工具、SDK 与详细文档」——SDK 尚未发布 | 加「SDK（2027 Q1）」 |
| A17 | 繁中 `payment-roadmap` 35/58（英文 34/57） | 「QR 帳戶 / QR 合約」——中文读者会理解成二维码 | 改「抗量子帳戶 / 抗量子合約」，英文改 quantum-resistant accounts |
| A18 | 首页、动态、生态页等短句 | 「請於 12 月 31 日前…」没写 12:00 HKT，可能被理解为 30 日前 | 统一「2026 年 12 月 31 日 12:00（HKT）前」 |
| A19 | 技术简介 26–107（中英文）、MetaMask 32–35 | 段落里的小标题和正文挤在一起，句中换行产生多余空格 | 改为加粗小标题 + 独立段落 |
| A20 | `governance` 8、`02-smart-contract-security` 12 vs 其他页 | 一处说「QDay 由 DAO 治理」「由 DAO Timelock 控制」（现在时），另一处说 DAO 是计划中 | 见 Q7 |

### 低
- 测试网 gas 仍写 QDAY：`getting-started` 31/49/58/68/110、FAQ 203 → tQDAY；`getting-started` 54「转移主网资金前」→ 主网尚未上线。
- `07-precompiled-contracts` 20/40 硬编码 `0x100`/`0x101`，但同页说地址 Phase 2 才公布（0x100 还与其他 L2 的 P256 预编译冲突）→ 改占位符。
- `user-guide/index` 45：「ERC20、TRC20、QRC20 在其他 EVM 兼容链」——TRC20/QRC20 不是 EVM 链 → 改写。
- `ecosystem` 23 残句；`qday-roadmap` 40–41 行顺序（Phase 1.5 主网排在 Phase 2 测试网之前）。
- `10-developer-program` 15「开发者门户」链接到首页 qday.io。
- FAQ 299 提到「微支付通道（类似闪电网络）」，其他页面都没有这个机制。
- FAQ 394 链接到已隐藏的审计报告页。
- 白皮书产品名「Q-Finance / QLEAP」与「QDay Finance / QDay Lending」不一致；541 行「Currently … Abelian Staking」。
- 繁中命名统一：「Abelian Bridge」与「Abelian 跨鏈橋」混用（建议产品名保留英文）；QDay Swap 有「兌換 / Swap / QDay Swap」三种叫法；「暫停 / 停止」（halt）；「QDay Foundation / QDay 基金會」；「懸崖期 / 鎖定期」「鎖倉期 / 鎖定期」；「Smart Account」未译（22 处）；链接文字与页面标题不一致（约 8 处）；「快速入門 / 快速上手」「前置條件 / 事前準備」「小數位 / 小數點位數」「橫額 / 橫幅」等；code.json 3 处空格破折号；几处裸网址未包成链接。
- `qday` 这个键在不同组件里指不同网络（Origin 测试网 / Origin 主网）——目前没造成显示错误，建议统一。

---

## 二、截图与文字不符（需要重新截图）

| # | 位置 | 问题 |
|---|---|---|
| S1 | MetaMask 指南 84 行 | 「手动添加网络」截图显示的是 **Origin 主网**（rpc.qday.io / 44001 / QDAY），上方步骤却让用户填 Aevum 44005 / tQDAY——照图填会连错网络（**高优先**） |
| S2 | MetaMask 指南 126 行 | 「添加 tUSD8」的截图显示 Origin USD8，小数位 **6**（你确认是 18） |
| S3 | 用户指南首页 41 行 | 区块浏览器截图是旧测试网，币种显示 QDAY 而非 tQDAY |
| S4 | QDay Bridge 步骤截图 | 显示 qUSDT→WQDAY 兑换界面，没有文字说的「选择源链」 |
| S5 | Abelian Bridge 截图 | 下拉显示「Abelian Testnet2 → QDAY Testnet」，文字未说明三个网络各选哪个 |

---

## 三、需要你回答

1. **Abelian 手机钱包**的 QDay 页用的是哪个网络？支持 Aevum 吗？（FAQ 把它列为「支持 Aevum 的钱包」，但 MetaMask 指南说它的余额在 Origin 主网）其中的 QDAY 是否要改称 QDAYp？
2. 导航栏「Mainnet」菜单（指向 Origin 主网）是否改名为「Origin Mainnet」？文档其他地方都写「QDay 主网：开发中」。页脚的区块浏览器指向哪个网络？
3. **USD8 小数位**：Origin 主网和 Origin 测试网的 USD8 到底是 6 还是 18？（截图和余额组件是 6）
4. **WABEL 现在是怎么铸造/销毁的**？知识库写「通过 PQZK Bridge」，白皮书说 PQZK Bridge 是「未来工作」并写了「TSP 认证机构的铸造服务」，用户指南写的是充值地址 + 人工审核。以哪个为准？
5. Phase 1.5 测试网（2026 Q3）实际上线了什么？除 EVM、水龙头、两个桥之外，Aevum 上现在还有哪些功能？
6. 索引器（GraphQL）和价格预言机现在是否存在？有接口地址吗？（目前写成「已可用」但没有任何地址）
7. DAO 现在是否已运作？目前谁能触发暂停（halt）——DAO 投票还是 rollup 运营者共识？（白皮书两种说法都有）
8. Aevum 现在是否已接入 Polygon AggLayer（FAQ 6.3）？
9. Go / Rust / Python SDK 是否在计划中？「Trellis Wallet」（FAQ 2.6）是否已正式公布？
10. PQC 预编译合约打算用什么地址？（或先改为占位符）
11. FAQ 5.5 的「微支付通道」是否真有这个设计？
