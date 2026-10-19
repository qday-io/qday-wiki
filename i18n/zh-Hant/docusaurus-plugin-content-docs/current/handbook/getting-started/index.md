---
title: 快速開始
sidebar_position: 4
sidebar_label: 快速開始
---

# 快速開始

## 新增網絡 {/* #add-network */}

QDay 支援 MetaMask 及任何兼容 WalletConnect 的錢包。請使用以下資料手動新增網絡：

| | QDay Aevum 測試網 | QDay 主網 |
|---|---|---|
| 網絡名稱 | QDay Aevum | 開發中 |
| RPC URL | https://rpc-test.qday.info | 開發中 |
| 鏈 ID | 44005 | 開發中 |
| 貨幣符號 | tQDAY | 開發中 |
| 區塊瀏覽器 | https://explorer-test.qday.info | 開發中 |

## 水龍頭 {/* #faucet */}

在測試網上，可從[內置水龍頭](/guide/start/faucet)領取 tQDAY。全新且 tQDAY 餘額為 0 的錢包，可在 [faucet.qday.info](https://faucet.qday.info) 領取第一筆 tQDAY。


## 跨鏈橋 {/* #bridge */}

如要將資產從其他鏈轉移至 QDay，請使用 [QDay Bridge](/guide/handbook/user-guide#qday-bridge)（ERC-20 / TRC-20 / QRC-20）或 [Abelian Bridge](/guide/handbook/user-guide/abelian-bridge-v3)（ABEL / WABEL）。

## 第一筆交易 {/* #first-transaction */}

本教學示範在 **QDay Aevum 測試網**上使用 MetaMask 發送 **1 tQDAY**（QDay 主網正在開發中）。請先[新增 QDay 網絡](/guide/start/add-network)並[領取 tQDAY](/guide/start/faucet)。主網即將推出；推出後步驟相同。

### 前置條件 {/* #prerequisites */}

- 已安裝 [MetaMask](/guide/handbook/user-guide/metamask)，並已新增 QDay 網絡
- 一個有餘額的帳戶（至少 1 tQDAY，另加少量作 Gas）
- 收款人的 QDay 地址（練習時用你自己的另一個帳戶亦可）

### 在 MetaMask 中發送 1 tQDAY {/* #send-1-tqday-in-metamask */}

1. 開啟 MetaMask 擴充功能，將網絡切換至 **QDay Aevum**（測試網）。確認原生代幣顯示為 tQDAY。
2. 點擊 **Send**（發送）。
3. 將收款地址貼上到 **To**（收款人）欄位。請逐個字元核對——地址錯誤無法撤回，而且某些惡意軟件會暗中替換複製到剪貼簿的地址。
4. 在金額欄位輸入 **1**，並確保資產為 **tQDAY**，而非 tUSD8 或 WABEL 等 ERC-20 代幣。
5. 點擊 **Continue**（繼續）（或 **Next**（下一步））。檢查：
   - 網絡
   - 收款人
   - 金額：1 tQDAY
   - 預估 Gas 費用（在測試網上以 tQDAY 支付；應為不足一美仙至數美仙）
6. 點擊 **Confirm**（確認）。MetaMask 會廣播該交易。
7. 開啟 **Activity**（活動）分頁。當狀態顯示為 **Confirmed**（已確認）時，點擊該交易即可在[區塊瀏覽器](https://explorer-test.qday.info)上查看（測試網；主網區塊瀏覽器將於推出時公佈）。

:::tip[在測試網上練習]
先將 1 tQDAY 發送至你控制的第二個 MetaMask 帳戶，再發送回來。這樣可在日後於主網上使用真實資金之前，確認你能夠簽署交易、支付 Gas 及查閱區塊瀏覽器。
:::

:::warning[測試網上的 Gas 為 tQDAY]
原生代幣轉帳以原生代幣支付網絡手續費（測試網上為 tQDAY；主網上為 QDAY）。如果 MetaMask 提示無法支付手續費，你需要在發送的 1 tQDAY 之外，額外持有少量 tQDAY 餘額。
:::

## 部署你的第一個智能合約 {/* #deploy-your-first-smart-contract */}

QDay 兼容 EVM，因此 [Remix IDE](https://remix.ethereum.org) 的用法與在以太坊上相同。本範例透過 MetaMask 在 QDay 上部署一個小型合約。

### 前置條件 {/* #prerequisites-1 */}

- MetaMask 已連接至 QDay（建議使用測試網）
- 帳戶中有足夠 tQDAY 支付部署所需的 Gas
- 已安裝 MetaMask 擴充功能的瀏覽器（Remix 的 Injected Provider 會使用它）

### 1. 開啟 Remix 並建立合約 {/* #1-open-remix-and-create-the-contract */}

1. 前往 [remix.ethereum.org](https://remix.ethereum.org)。
2. 在 **File Explorer** 的 `contracts` 下，建立一個名為 `HelloQDay.sol` 的新檔案。
3. 貼上：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloQDay {
    string public greeting = "Hello, QDay";

    function setGreeting(string calldata _greeting) external {
        greeting = _greeting;
    }
}
```

### 2. 編譯 {/* #2-compile */}

1. 開啟 **Solidity Compiler** 外掛程式（左側欄）。
2. 將編譯器設為 `0.8.20` 或更新版本（與上方的 `pragma` 相符）。
3. 點擊 **Compile HelloQDay.sol**。編譯器圖示上出現綠色剔號即表示成功。

### 3. 透過 MetaMask 將 Remix 連接至 QDay {/* #3-connect-remix-to-qday-via-metamask */}

1. 開啟 **Deploy & Run Transactions** 外掛程式。
2. 將 **Environment** 設為 **Injected Provider - MetaMask**（而非 Remix VM）。Remix 會要求 MetaMask 連接——請批准。
3. 在 MetaMask 中確認所選網絡為 QDay Aevum（鏈 ID `44005`），以及 Remix 中顯示的帳戶是你想用來部署的帳戶。

:::danger[切勿誤將合約部署至以太坊]
如果 Environment 是 Injected Provider，但 MetaMask 仍停留在以太坊，合約便會部署到以太坊，而你要以 ETH 支付費用。點擊 Deploy 之前，請務必檢查 MetaMask 中的網絡名稱。
:::

### 4. 部署 {/* #4-deploy */}

1. 在合約下拉選單中選擇 **HelloQDay**。
2. 點擊 **Deploy**。
3. 檢查 MetaMask 的確認畫面（網絡、以 tQDAY 計算的預估 Gas），然後點擊 **Confirm**（確認）。
4. 等待交易確認。合約會出現在 Remix 的 **Deployed Contracts** 之下。複製合約地址。

### 5. 呼叫合約並在區塊瀏覽器上核實 {/* #5-call-it-and-verify-on-the-explorer */}

1. 在 Remix 中展開已部署的 **HelloQDay** 實例。
2. 點擊 **greeting**——應返回 `Hello, QDay`。
3. 在 **setGreeting** 中輸入新字串，點擊該按鈕，並在 MetaMask 中確認。再次呼叫 **greeting** 即可看到更新。
4. 將合約地址貼上到[測試網區塊瀏覽器](https://explorer-test.qday.info)，即可查看部署交易及其後的呼叫。（主網區塊瀏覽器將於推出時公佈。）

如需使用 Hardhat 或 Foundry，或了解抗量子方法的慣例，請參閱[在 QDay 上開發](/guide/handbook/build-on-qday)及[開發者文件](/Knowledge/technical/developer-guide/getting-started)。
