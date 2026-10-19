---
sidebar_position: 7
title: 常見問題
---

# QDay 常見問題

:::tip[在 Aevum 之前已使用過 QDay？]
QDay 已完成一次重大的架構升級。如果你來自之前的 QDay 網絡，請先閱讀 **[第 2 節——我用過舊版 QDay](#2-i-used-the-old-qday)**，了解有哪些改變、哪些維持不變，以及你需要如何處理現有的錢包、資產和應用程式。
:::

## 快速參考——QDay Aevum 測試網 {/* #quick-reference--qday-aevum-testnet */}

| 欄位 | 數值 |
|---|---|
| 網絡名稱 | QDay Aevum |
| 鏈 ID | `44005`（`0xABE5`） |
| RPC URL | `https://rpc-test.qday.info` |
| WebSocket | `wss://rpc-test.qday.info` |
| 區塊瀏覽器 | [https://explorer-test.qday.info](https://explorer-test.qday.info) |
| 貨幣符號 | tQDAY（原生測試網 QDAY，18 個小數位） |
| 水龍頭 | [取得測試網代幣](/guide/start/faucet) |
| 一鍵設定 | [將 QDay 新增至你的錢包](/guide/start/add-network) |

完整網絡參數：[鏈參數](/Knowledge/reference/chains)。

## 目錄 {/* #contents */}

1. [初次接觸 QDay](#1-new-to-qday)
2. [我用過舊版 QDay](#2-i-used-the-old-qday)
3. [我正在使用 Aevum](#3-im-using-aevum)
4. [我是開發者](#4-im-a-developer)
5. [支付與 AI 代理](#5-payments--ai-agents)
6. [$QDAY 代幣與終止質押](#6-qday-token--staking-termination)
7. [安全](#7-security)
8. [詞彙表](#8-glossary)

---

## 1. 初次接觸 QDay {/* #1-new-to-qday */}

### 1.1 甚麼是 QDay？ {/* #11-what-is-qday */}

QDay 是一個為未來而建的後量子、EVM 兼容網絡。QDay 專為 AI 代理、支付和去中心化應用而設計，能夠大規模實現亞秒級結算。QDay 旨在整合原生穩定幣和 x402 標準（將隨 QDay 主網於 2027 年第一季推出），致力成為代理經濟的基礎區塊鏈。

QDay 目前已在測試網（**QDay Aevum**）上線，升級後的主網預計於 2027 年第一季推出。

### 1.2 QDay 為何存在？ {/* #12-why-does-qday-exist */}

QDay 應對新一代區塊鏈應用面臨的兩大挑戰：一是需要可擴展、快速且易用的區塊鏈基礎設施，二是需要讓區塊鏈安全為未來的量子計算威脅做好準備。

### 1.3 QDay 有何不同？ {/* #13-what-makes-qday-different */}

QDay 結合了 EVM 兼容性與抗量子安全架構：結算目前由 Abelian 的後量子密碼學保護，而原生後量子帳戶簽名將於第 2 階段推出。其最新架構亦專注於高效能支付、穩定幣，以及機器對機器／AI 代理交易。

### 1.4 甚麼是 Abelian？ {/* #14-what-is-abelian */}

Abelian 是一條抗量子的 Layer 1 區塊鏈，支撐一個注重私隱的網絡。它經密碼學證明能抵禦量子電腦的攻擊，並採用 NIST 認可的格密碼可連結環簽名方案，令錢包地址和交易金額無法追蹤並保持隱藏。Abelian 是 QDay 所錨定的結算層。

### 1.5 甚麼是 Aevum？ {/* #15-what-is-aevum */}

Aevum——源自拉丁文中意為「永恆」的詞根——是 QDay 新測試網的名稱，作為一次重大架構升級的一部分推出。它代表由早期的 QDay 架構（現稱 **QDay Origin**）過渡至 QDay 最新技術方向所描述的新一代架構。

### 1.6 QDay 如何結算到 Abelian？ {/* #16-how-does-qday-settle-to-abelian */}

QDay 將鏈下交易批次打包成零知識有效性證明，在 DA 層上驗證，並將每個批次的狀態根提交至 Abelian L1。Rollup 營運者以 Abelian 原生的格密碼密鑰簽署這些狀態轉換，將最終確定性直接錨定到 L1。交易一經在 Abelian 上確認，帳本狀態便永久不可篡改，並能抵禦量子攻擊。

### 1.7 「抗量子」是甚麼意思？ {/* #17-what-does-quantum-resistant-mean */}

抗量子是指使用即使面對足夠強大的量子電腦仍能保持安全的密碼學。傳統密碼學有可能被未來的量子電腦破解。QDay 目前的架構為帳本和結算層提供抗量子保護；正在進行的升級會將這種保護擴展至帳戶和智能合約。

### 1.8 區塊鏈為何需要抗量子能力？ {/* #18-why-does-blockchain-need-quantum-resistance */}

許多區塊鏈依賴 ECDSA 等公鑰密碼學。一部運行 Shor 算法、足夠強大的量子電腦有可能打破這些假設，並從公開資訊中還原私鑰。抗量子密碼學旨在應對這一未來威脅。

### 1.9 甚麼是 $QDAY？ {/* #19-what-is-qday */}

$QDAY 是 QDay 的原生代幣，亦是 QDay 生態系統的 Gas 及治理代幣。請參閱[第 6 節](#6-qday-token--staking-termination)。

### 1.10 甚麼是 USD8？ {/* #110-what-is-usd8 */}

USD8 是 QDay 生態系統的原生後量子穩定幣——一種全額抵押、以法幣為參考的穩定幣，與美元嚴格 1:1 錨定。每一枚流通中的代幣均由 100% 儲備支持，儲備以具流動性、類貨幣的工具持有，並透過透明的鑑證和自動化機制進行驗證。

### 1.11 QDay 為何為 AI 代理而建？ {/* #111-why-is-qday-building-for-ai-agents */}

AI 代理需要支援機器對機器交易、可編程支出、身份及快速結算的支付基礎設施。QDay 的架構將這些能力與 EVM 智能合約、穩定幣和 x402 支付結合起來。

### 1.12 甚麼是 x402？ {/* #112-what-is-x402 */}

x402 是圍繞 HTTP `402 Payment Required` 狀態碼而建的支付標準。它讓客戶端或 AI 代理可以在 HTTP 請求中直接為 API、服務或資源付款，而無需依賴訂閱、發票或基於 API 密鑰的計費。

### 1.13 我可以在 QDay 上構建甚麼？ {/* #113-what-can-i-build-on-qday */}

EVM 兼容的智能合約和 dApp，包括 DeFi、支付和穩定幣應用，以及 AI 代理交易的基礎設施。QDay 的架構正特別朝着代理錢包、可編程支付和基於 x402 的交易方向發展。請從 [在 QDay 上開發](/guide/handbook/build-on-qday) 開始。

### 1.14 我可以在哪裏找到安全文件？ {/* #114-where-can-i-find-the-security-documentation */}

所有安全文件均位於技術知識庫的 **[安全](/Knowledge/technical/security)** 部分，涵蓋安全概覽、後量子安全、智能合約、錢包、跨鏈橋、RPC、支付及 AI 代理安全、密鑰管理和負責任披露。審計報告和漏洞賞金計劃將於推出時在該處發佈。底層設計載於 [QDay 白皮書](/guide/handbook/qday-whitepaper)。另請參閱[第 7 節](#7-security)。

---

## 2. 我用過舊版 QDay {/* #2-i-used-the-old-qday */}

### 2.1 與之前的 QDay 架構相比有甚麼改變？ {/* #21-what-changed-from-the-previous-qday-architecture */}

早期的 QDay 架構（**QDay Origin**）着重於驗證一個以 Abelian 為抗量子基礎、抗量子且 EVM 兼容的區塊鏈層的概念。

升級後的架構（現已在 **QDay Aevum** 測試網上線）將其擴展為一個更高效能的執行及結算平台，並更加專注於支付、穩定幣、AI 代理、x402，以及未來的原生抗量子帳戶和智能合約。

### 2.2 Aevum 會取代舊版 QDay 嗎？ {/* #22-is-aevum-replacing-the-old-qday */}

不會。Aevum 是升級版 QDay 架構的測試網。現有的 QDay（Origin）功能完備，並會繼續運行。升級後的主網推出後，現有用戶將在專門的遷移期內遷移其資產——請參閱 [2.3](#23-what-is-the-migration-roadmap)。

### 2.3 遷移路線圖是怎樣的？ {/* #23-what-is-the-migration-roadmap */}

| 步驟 | 時間 |
|---|---|
| 現有 QDay（Origin）繼續運行 | 現在 |
| 升級架構的 Aevum 測試網 | 現已上線 |
| 升級版 QDay 主網推出 | 預計於 2027 年第一季 |
| 現有用戶的遷移期 | 主網推出後 6–12 個月 |

### 2.4 我需要遷移嗎？ {/* #24-do-i-need-to-migrate */}

需要。升級版 QDay 主網推出後，將有 6–12 個月的遷移期，讓現有用戶將資產由舊版 QDay 轉移至新版。

### 2.5 我如何遷移資產？ {/* #25-how-do-i-migrate-my-assets */}

已質押的 QDAY 無需遷移：質押計劃已經結束，你只需解除質押並領取代幣即可——請參閱[第 6 節](#6-qday-token--staking-termination)。至於其他資產，遷移跨鏈橋啟用後將會發佈逐步遷移指南。在此之前：

- 將 Aevum 加入錢包**不會**轉移你的餘額——代幣會留在其發行所在的鏈上。
- 只使用官方 [QDay Portal](https://portal.qday.io) 上公佈的遷移合約地址。請忽略私訊、空投網站和非官方的「遷移」頁面。

### 2.6 我需要新錢包嗎？ {/* #26-do-i-need-a-new-wallet */}

不需要。升級版 QDay 與舊版 QDay 一樣，可配合 MetaMask 等成熟的 EVM 錢包使用——你只需加入 Aevum 網絡（[第 3 節](#3-im-using-aevum)）。QDay 亦會推出自家的 **Trellis Wallet**，提供更強大的功能和更佳的用戶體驗。

### 2.7 會有新代幣嗎？ {/* #27-is-there-a-new-token */}

會。升級版 QDay 將擁有自己的代幣，同樣名為 **$QDAY**。現有的 QDAY 代幣現稱為 **QDAY Points（$QDAYp）**，並可在主網代幣生成事件（TGE）後按 1:1 兌換為新的 $QDAY。

### 2.8 我的質押會怎樣？ {/* #28-what-happens-to-my-staking */}

QDay 質押計劃已經結束。獎勵已於 **2026 年 10 月 15 日 12:00（HKT）** 停止，你可在 **2026 年 12 月 31 日 12:00（HKT）** 前解除質押並領取代幣及已賺取的獎勵。解除質押的代幣會以 **WQDAY**（QDAY 質押）或 **WABEL**（ABEL 質押）形式退回。請在 [WQDAY Conversion](https://portal.qday.io/en/wqday-conversion) 將 WQDAY 按 1:1 兌換為 QDAY；其後 QDAY（$QDAYp）可在主網推出後按 1:1 兌換為新的 $QDAY。詳情請參閱 [6.4](#64-what-happens-to-my-staked-qday-and-rewards)。

### 2.9 WQDAY 或 WABEL 會怎樣？ {/* #29-what-happens-to-wqday-or-wabel */}

你可隨時在 QDay Portal 上將其兌換回去：

- **WQDAY → QDAY（1:1）：** [WQDAY Conversion](https://portal.qday.io/en/wqday-conversion)
- **WABEL → ABEL：** [WABEL Conversion](https://portal.qday.io/en/abel-conversion)

### 2.10 舊合約是否仍然有效？ {/* #210-are-old-contracts-still-valid */}

是的，在其部署所在的鏈上仍然有效。舊版 QDay（Origin）會繼續運行，因此部署在該處的合約會繼續運作。

不過，Aevum 是一個獨立網絡，擁有新的鏈 ID、RPC 和區塊瀏覽器——合約**不會**自動複製過去。如要在 Aevum 上使用合約，請在該網絡重新部署。由於 Aevum 與 EVM 兼容，現有的 Solidity 合約一般無需修改代碼即可重新部署。請勿在 Aevum 上重用 Origin 的合約地址。

### 2.11 舊 dApp 是否仍然有效？ {/* #211-are-old-dapps-still-valid */}

舊 dApp 在 QDay Origin 上會繼續運作。在新測試網上，QDay Bridge 及 Abelian Bridge（ABEL ⇄ WABEL，位於 [QDay Portal](https://portal.qday.io/en/abel-conversion)）已在 Aevum 上運行；QDay Swap 稍後跟進——它目前只在 QDay Origin 主網上運行。第三方 dApp 需要加入 Aevum 網絡並重新部署其合約；它們不會自動跟隨升級。

---

## 3. 我正在使用 Aevum {/* #3-im-using-aevum */}

### 3.1 哪些錢包支援 Aevum？ {/* #31-which-wallets-support-aevum */}

QDay Aevum 與 EVM 兼容，支援 MetaMask、WalletConnect、Rainbow 及其他允許自訂 EVM 網絡的錢包。請參閱 [MetaMask 錢包使用指南](/guide/handbook/user-guide/metamask)。[Abelian 手機錢包](/guide/handbook/user-guide/abelian-mobile-wallet)並非 Aevum 錢包：其 QDay 分頁使用的是 QDay Origin 主網。

### 3.2 如何將 Aevum 加入 MetaMask？ {/* #32-how-do-i-add-aevum-to-metamask */}

**方法 1——一鍵加入：** 在 [將 QDay 新增至你的錢包](/guide/start/add-network) 頁面使用 **將 QDay Aevum 測試網新增至錢包** 按鈕。MetaMask 會顯示確切參數供你批准。

**方法 2——手動加入：** MetaMask → Networks → *Add a network manually*，然後輸入上方[快速參考](#quick-reference--qday-aevum-testnet)表格中的數值。

### 3.3 RPC 是甚麼？ {/* #33-what-is-the-rpc */}

`https://rpc-test.qday.info`（WebSocket：`wss://rpc-test.qday.info`）。

### 3.4 鏈 ID 是多少？ {/* #34-what-is-the-chain-id */}

`44005`（十六進制 `0xABE5`）。

:::warning[切勿混淆鏈 ID]
`44001` 是 QDay Origin **主網**，`44003` 是 QDay Origin **測試網**，而 `44005` 是目前公開的 **Aevum 測試網**。請務必以[鏈參數](/Knowledge/reference/chains)核實，而非依賴聊天訊息或隨機 dApp 的橫幅。
:::

### 3.5 區塊瀏覽器在哪裏？ {/* #35-where-is-the-explorer */}

[https://explorer-test.qday.info](https://explorer-test.qday.info)。貼上交易雜湊、錢包地址或合約地址，即可查看狀態、確認數、Gas 手續費、代幣轉帳及已驗證的原始碼。

### 3.6 水龍頭在哪裏？ {/* #36-where-is-the-faucet */}

水龍頭內置於文件網站：[取得測試網代幣](/guide/start/faucet)。連接你的錢包，即可領取用作 Gas 的 tQDAY。水龍頭在鏈上對每個地址設有冷卻時間；如果你最近已領取過，它會顯示你何時可以再次領取。全新錢包若只有 0 tQDAY，便無法支付該次領取所需的 Gas——請先到 [faucet.qday.info](https://faucet.qday.info) 領取你的第一筆 tQDAY。

### 3.7 如何支付 Gas？ {/* #37-how-do-i-pay-gas */}

Aevum 上的 Gas 以原生測試網 QDAY（**tQDAY**）支付，可從水龍頭領取。Aevum 採用與以太坊兼容的 EIP-1559 Gas 模型（基本費用 + 優先費用）。個別應用可以其他代幣收取手續費——例如 Agent Payment 應用的手續費以 USD8 支付。

### 3.8 Aevum 上有哪些代幣？ {/* #38-which-tokens-are-available-on-aevum */}

除原生 tQDAY（Gas）外，QDay Aevum（`44005`）上已部署以下 ERC-20 代幣：

| 代幣 | 合約地址 | 小數位 |
|---|---|---|
| WABEL | `0x4668107253E28C2b569E76Edb14B1E88c3b93de1` | 18 |
| WQDAY | `0x915E807e7EC1665889172902781FB851202A54dF` | 18 |
| tUSD8 | `0x456569838f1d43009A91ebA4263147Afd7233483` | 6 |

如要在 MetaMask 中顯示代幣，請切換至 QDay Aevum，選擇 *Import tokens*，然後貼上合約地址。請務必在[區塊瀏覽器](https://explorer-test.qday.info)上核實地址——切勿在 Aevum 上重用 QDay Origin（`44001`／`44003`）的代幣地址。

---

## 4. 我是開發者 {/* #4-im-a-developer */}

### 4.1 我可以用甚麼語言在 Aevum 上開發？ {/* #41-what-language-can-i-use-to-build-on-aevum */}

**Solidity**——Aevum 完全兼容 EVM 和 Solidity，因此任何可編譯為 EVM 位元組碼的語言（例如 Vyper）同樣適用。標準以太坊工具無需修改即可使用：Foundry、Hardhat、Remix、ethers.js、viem 和 wagmi。唯一的改動是將你的工具指向 Aevum RPC。

### 4.2 如何部署合約？ {/* #42-how-do-i-deploy-a-contract */}

將你的工具鏈指向 Aevum RPC，然後如在以太坊上一樣部署。你需要一個已從[水龍頭](/guide/start/faucet)取得 tQDAY 的錢包（全新錢包可在 [faucet.qday.info](https://faucet.qday.info) 領取第一筆 tQDAY）。

**Foundry**

```bash
forge create src/MyContract.sol:MyContract \
  --rpc-url https://rpc-test.qday.info \
  --private-key $PRIVATE_KEY \
  --broadcast
```

**Hardhat**

```javascript
// hardhat.config.js
module.exports = {
  networks: {
    aevum: {
      url: "https://rpc-test.qday.info",
      chainId: 44005,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
```

```bash
npx hardhat run scripts/deploy.js --network aevum
```

完整教學：[智能合約開發](/Knowledge/technical/developer-guide/smart-contract-development)。

### 4.3 如何驗證合約？ {/* #43-how-do-i-verify-a-contract */}

區塊瀏覽器使用標準的 Blockscout 驗證流程：

```bash
forge verify-contract \
  --chain-id 44005 \
  --verifier blockscout \
  --verifier-url https://explorer-test.qday.info/api \
  <CONTRACT_ADDRESS> \
  src/MyContract.sol:MyContract
```

請參閱[合約驗證](/Knowledge/technical/developer-guide/contract-verification)。

### 4.4 我可以部署現有的以太坊合約嗎？ {/* #44-can-i-deploy-an-existing-ethereum-contract */}

可以。QDay Aevum 與 EVM 兼容，因此現有的以太坊合約可以部署在其上。

### 4.5 有 SDK 嗎？ {/* #45-is-there-an-sdk */}

官方 QDay SDK 將於 2027 年第一季推出。請在推出時再來查看——屆時將發佈所有文件、工具和範例，你可以由此開始測試。在此期間，由於 Aevum 與 EVM 兼容，你可以使用 ethers.js、viem 和 wagmi 等標準以太坊程式庫。

---

## 5. 支付與 AI 代理 {/* #5-payments--ai-agents */}

### 5.1 如何測試穩定幣支付？ {/* #51-how-do-i-test-stablecoin-payments */}

測試網穩定幣 **tUSD8** 已部署在 Aevum 上（請參閱 [3.8](#38-which-tokens-are-available-on-aevum)）；**USD8** 是主網穩定幣。穩定幣支付功能將於 2027 年第一季推出。請在推出時再來查看——屆時將發佈所有文件、工具和範例，你可以由此開始測試。

### 5.2 如何測試 x402？ {/* #52-how-do-i-test-x402 */}

此功能將於 2027 年第一季推出。請在推出時再來查看——屆時將發佈所有文件、工具和範例，你可以由此開始測試。

### 5.3 如何構建代理錢包？ {/* #53-how-do-i-build-an-agent-wallet */}

此功能將於 2027 年第一季推出。請在推出時再來查看——屆時將發佈所有文件、工具和範例，你可以由此開始測試。

### 5.4 如何註冊 AI 代理？ {/* #54-how-do-i-register-an-agent */}

此功能將於 2027 年第一季推出。請在推出時再來查看——屆時將發佈所有文件、工具和範例，你可以由此開始測試。

### 5.5 對於代理之間的交易，你們設想的是用於自主小額支付渠道的協議層，還是 Gas 抽象模型？ {/* #55-are-you-envisioning-a-protocol-layer-for-autonomous-micropayment-channels-or-a-gas-abstraction-model-for-agent-to-agent-transactions */}

協議層加上自主小額支付渠道——即一套專門、獨立的支付協議和渠道，專為 AI 代理之間小額、高頻、自動化的交易而設計（類似閃電網絡的做法）。

---

## 6. $QDAY 代幣與終止質押 {/* #6-qday-token--staking-termination */}

### 6.1 $QDAY 的總供應量和分配是怎樣的？ {/* #61-what-is-the-total-supply-and-allocation-of-qday */}

總供應量為 **22,517,998,100 QDAY**，於代幣生成事件時產生。

| 類別 | 佔比 | 歸屬安排 |
|---|---|---|
| 質押獎勵 | 35%（7,881,299,335） | 鎖倉期越長，獎勵越高 |
| 投資者及支持者 | 20% | 12 個月懸崖期，其後 3 年線性釋放 |
| 協議金庫 | 20% | 4 年等額歸屬 |
| 團隊及貢獻者 | 15% | 3 年等額歸屬 |
| 社群及生態系統 | 10% | 推出時全數解鎖 |

詳情：[代幣經濟](/guide/handbook/tokenomics)。

### 6.2 QDay 為何結束質押計劃？ {/* #62-why-is-qday-ending-the-staking-program */}

質押是為 QDay 的早期階段而設計的，當時的首要任務是建立一個忠誠的社群——而它已完成這項任務。感謝每一位參與質押的人。

然而，每一筆質押獎勵都會為流通量增添新代幣，逐步攤薄每位持有人，包括質押者本身。在 2027 年第一季主網推出之前，我們希望 QDay 的代幣經濟由真實的網絡活動——支付、應用和 AI 代理——所驅動，而非被動收益。

我們選擇乾脆停止，而非調低 APY，因為即使獎勵較少，仍然是在為閒置的代幣支付報酬。這是網絡設計上的決定，而非預算上的決定：QDay 基金會會繼續投資於升級後的網絡、開發者工具及主網推出。

### 6.3 這是否代表 QDay 出了問題？ {/* #63-does-this-mean-something-is-wrong-with-qday */}

不是。這是 QDay 升級計劃中的既定一步。期間並沒有發生任何安全事故或協議故障。升級後的 QDay 已在 Aevum 測試網上線，並已連接 Polygon 的 AggLayer，主網預計於 2027 年第一季推出。

### 6.4 我已質押的 QDAY 和獎勵會怎樣？ {/* #64-what-happens-to-my-staked-qday-and-rewards */}

你質押的代幣仍屬於你，而截至停止時間前賺取的所有獎勵，均會按現行質押規則全數兌現。

| 時間（香港時間，HKT） | 安排 |
|---|---|
| **2026 年 10 月 15 日 12:00** | 獎勵停止累積。開放解除質押及領取。 |
| 2026 年 10 月 15 日 12:00 至 12 月 31 日 12:00 | 可隨時解除質押及領取。 |
| **2026 年 12 月 31 日 12:00** | 解除質押及領取期結束。 |
| 2026 年 12 月 31 日 12:00 之後 | 未領取的資產仍可取回——請發送電郵至 [support@qday.io](mailto:support@qday.io) 聯絡團隊。 |

**提取方法：** 在 QDay 質押頁面（QDay Origin 主網）點擊 **Unstake**，然後點擊 **Claim**，就是這樣。逐步指南：[QDAY 質押終止指南](/guide/handbook/user-guide/qday-staking)。

解除質押的代幣會以 **WQDAY**（QDAY 質押）或 **WABEL**（ABEL 質押）形式退回你的錢包。請在 [WQDAY Conversion](https://portal.qday.io/en/wqday-conversion) 將 WQDAY 按 1:1 比率兌換為 QDAY，並在 [WABEL Conversion](https://portal.qday.io/en/abel-conversion) 將 WABEL 兌換為 ABEL。QDAY（$QDAYp）可在主網推出後按 1:1 兌換為新的 $QDAY（請參閱 [2.7](#27-is-there-a-new-token)）。

:::danger[注意安全]
只依賴官方 QDay 渠道（網站、X 及 Telegram）。QDay 團隊絕不會主動私訊你、索取你的助記詞或私鑰，或要求你將代幣發送到任何地方以進行「遷移」或「解鎖」。
:::

### 6.5 這會推高價格嗎？$QDAY 會變成通縮嗎？ {/* #65-will-this-raise-the-price-will-qday-become-deflationary */}

我們不會對價格作出任何承諾——亦請對作出這類承諾的人保持警惕。價格由市場決定。

這亦不是通縮：已在流通的代幣會繼續流通。改變的是最大的新代幣來源被關閉，令供應對持有人、建設者和合作夥伴而言更可預測。

### 6.6 沒有質押獎勵，為何還要繼續持有？ {/* #66-without-staking-rewards-why-keep-holding */}

$QDAY 將成為升級版 QDay 的原生 Gas 及治理代幣——一個為穩定幣支付、智能錢包和 AI 代理而建的後量子網絡。現在持有 $QDAYp，就等於在這個網絡邁向主網之際持有其一份權益。

### 6.7 質押或其他獎勵會重新推出嗎？ {/* #67-will-staking-or-other-rewards-come-back */}

不會以舊有的被動形式回歸。未來任何激勵計劃都會獎勵對網絡的真實貢獻，例如構建應用、整合支付、部署 AI 代理及協助社群成長。詳情準備就緒後將透過官方渠道公佈。

---

## 7. 安全 {/* #7-security */}

### 7.1 QDay 是否已完全實現後量子？ {/* #71-is-qday-already-fully-post-quantum */}

如果指每個帳戶、每筆交易和每個智能合約都原生使用後量子密碼學，那就還未是。QDay 分階段實施：

| 階段 | 範圍 | 狀態 |
|---|---|---|
| 第 1 階段 | 透過 Abelian 輔助的 ZK Rollup 實現抗量子帳本／結算；帳戶仍使用 ECDSA | 已完成，自 2025 年第四季起上線 |
| 第 1.5 階段 | 支付網絡：USD8、發票、商戶、代理支付 | 開發中——將於 2027 年第一季推出 |
| 第 2 階段 | 原生抗量子（ML-DSA）帳戶及智能合約，與舊有帳戶並存 | 開發中——將於 2027 年第一季前在 Aevum 測試網上線 |

請參閱 [QDAY 路線圖](/guide/handbook/roadmap/qday-roadmap)。

### 7.2 甚麼是 ML-DSA？ {/* #72-what-is-ml-dsa */}

ML-DSA 是一種由 NIST 標準化（FIPS 204）的格密碼數碼簽名算法，屬於其後量子密碼學標準的一部分。在其底層安全假設下，它旨在提供能同時抵禦傳統攻擊和量子攻擊的簽名。QDay 在第 2 階段的原生帳戶中使用 ML-DSA-65。

### 7.3 如果量子電腦能夠攻擊 ECDSA，會發生甚麼事？ {/* #73-what-happens-if-a-quantum-computer-becomes-capable-of-attacking-ecdsa */}

攻擊者有可能從已曝光的公鑰推導出私鑰，並授權受影響帳戶的交易。在此情況發生之前，QDay 的架構目前已提供一個獨立的抗量子層來保護帳本和結算過程，而原生抗量子帳戶安全（第 2 階段）則直接解決帳戶密鑰的問題。如果偵測到針對帳本的攻擊，亦可以抗量子的方式暫停 Rollup，因為攻擊者無法偽造營運者的後量子簽名。

### 7.4 它無法防範甚麼？ {/* #74-what-does-it-not-protect-against */}

抗量子基礎設施並不會自動保護用戶免受裝置被入侵、私鑰被盜、網絡釣魚、惡意智能合約、應用程式漏洞、跨鏈橋被入侵或其他營運／安全故障的影響。抗量子是一種密碼學安全特性，並不保證應用程式或用戶環境的每個組件都是安全的。

### 7.5 QDay 是否已經過審計？ {/* #75-has-qday-been-audited */}

QDay 網絡及 dApp 的安全審計正逐步進行。審計報告將於備妥後發佈。

### 7.6 如何報告漏洞？ {/* #76-how-do-i-report-a-bug */}

請發送電郵至 **[support@qday.io](mailto:support@qday.io)**。如屬**安全漏洞**，請以電郵私下回報，切勿公開披露——請參閱[負責任披露](/Knowledge/technical/security/responsible-disclosure)。

:::danger[注意安全]
QDay 絕不會主動私訊你、索取你的助記詞，或營運要求提供私鑰的「客服」帳戶。請只使用[社群](/guide/handbook/community)頁面上的官方連結。
:::

---

## 8. 詞彙表 {/* #8-glossary */}

| 術語 | 定義 |
|---|---|
| **QDay** | 結算到 Abelian 的後量子、EVM 兼容 Layer 2 網絡。 |
| **QDay Origin** | 上一代 QDay 網絡。主網 `44001`，測試網 `44003`。會繼續運行。 |
| **QDay Aevum** | 升級版 QDay 架構的測試網（鏈 ID `44005`）。升級後的主網預計於 2027 年第一季推出。 |
| **Abelian** | QDay 所結算到的抗量子、注重私隱的 Layer 1。 |
| **$QDAY** | 升級版 QDay 的原生 Gas 及治理代幣。 |
| **$QDAYp（QDAY Points）** | 舊版 QDay 上 QDAY 的新名稱；可在 TGE 後按 1:1 兌換為 $QDAY。 |
| **tQDAY** | Aevum 上的原生測試網 QDAY，從水龍頭領取；不具實際價值。 |
| **USD8** | QDay 的原生後量子穩定幣，與美元 1:1 錨定並有 100% 儲備支持。 |
| **tUSD8** | QDay Aevum 上的測試網 USD8；不具實際價值。 |
| **WQDAY** | 包裝（ERC-20）QDAY，可在 QDay Origin 及 QDay Aevum 上使用。 |
| **WABEL** | QDay 上的包裝 ABEL，從 Abelian 跨鏈而來。 |
| **第 1 / 1.5 / 2 階段** | 帳本層級抗量子 → 支付網絡 → 原生抗量子帳戶及合約。 |
| **抗量子** | 旨在抵禦量子電腦攻擊、保持安全的密碼學。 |
| **原生後量子** | 帳戶和合約本身即使用後量子簽名（例如 ML-DSA），而不僅限於結算層。 |
| **ML-DSA** | 經 NIST 標準化（FIPS 204）的格密碼後量子簽名算法。 |
| **CDK** | Polygon Chain Development Kit，QDay 所基於的 ZK Rollup 技術堆疊。 |
| **x402** | 基於 HTTP 402、在 HTTP 請求中為 API／資源付款的標準。 |
| **ERC-4337** | 帳戶抽象標準：智能帳戶、bundler、paymaster、會話密鑰（Session Key）。 |
| **ERC-8004** | 鏈上 AI 代理身份及聲譽標準。 |
| **Trellis Wallet** | QDay 為升級後網絡推出、具備強化功能的自家錢包。 |
