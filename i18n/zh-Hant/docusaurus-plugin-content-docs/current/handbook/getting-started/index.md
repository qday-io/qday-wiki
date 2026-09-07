---
title: 快速開始
sidebar_position: 4
sidebar_label: 快速開始
---

# 快速開始

## 新增網路

QDay 支援 MetaMask 以及任何相容 WalletConnect 的錢包。請使用以下資訊手動新增網路：

| | 測試網 | 主網 |
|---|---|---|
| 網路名稱 | QDay Aevum | 即將推出 |
| RPC URL | rpc-test.qday.info | 即將推出 |
| 鏈 ID | 44005 | 即將推出 |
| 貨幣符號 | tQDAY | 即將推出 |
| 區塊瀏覽器 | explorer-test.qday.info | 即將推出 |

## 水龍頭

在測試網上，將錢包連接至 QDay 的水龍頭（Faucet），即可領取用於測試的代幣。

![快速開始指南](/img/getting-started1.jpg)
![快速開始指南](/img/getting-started2.jpg)


## 跨鏈橋

若要將資產從其他鏈轉移至 QDay，請使用 [QDay Bridge](/guide/handbook/user-guide#qday-bridge)（ERC20 / TRC20 / QRC20）或 [Abelian Bridge v3](/guide/handbook/user-guide/abelian-bridge-v3)（ABEL / WABEL）。

## 第一筆交易

本教學示範在 **QDay Aevum**（測試網）上使用 MetaMask 傳送 **1 QDAY**——這是目前唯一上線的網路。請先[新增 QDay 網路](/guide/start/add-network)並[領取測試網 QDAY](/guide/start/faucet)。主網即將推出；上線後步驟相同。

### 前置條件

- 已安裝 [MetaMask](/guide/handbook/user-guide/metamask)，並已新增 QDay 網路
- 一個有餘額的帳戶（至少 1 QDAY，外加少量 Gas 費用）
- 收款方的 QDay 地址（練習時可使用自己的另一個帳戶）

### 在 MetaMask 中傳送 1 QDAY

1. 開啟 MetaMask 擴充功能，將網路切換至 **QDay Aevum**（測試網）。確認原生代幣顯示為 tQDAY。
2. 點擊 **傳送（Send）**。
3. 將收款地址貼入 **收款方（To）** 欄位。請逐字核對——地址錯誤無法復原，而且部分惡意軟體會悄悄替換剪貼簿中複製的地址。
4. 在金額欄位輸入 **1**，並確認資產為 **QDAY**，而非 USD8 或 WABEL 等 ERC-20 代幣。
5. 點擊 **繼續（Continue）**（或 **下一步（Next）**）。檢查以下項目：
   - 網路
   - 收款方
   - 金額：1 QDAY
   - 預估 Gas 費用（以 QDAY 支付；通常僅為不到一美分至幾美分）
6. 點擊 **確認（Confirm）**。MetaMask 會廣播這筆交易。
7. 開啟 **活動（Activity）** 分頁。當狀態顯示為 **已確認（Confirmed）** 時，點擊該交易即可在[區塊瀏覽器](https://explorer-test.qday.info)中檢視（測試網；主網區塊瀏覽器將於上線時公布）。

:::tip[在測試網上練習]
先將 1 QDAY 傳送至你所控制的第二個 MetaMask 帳戶，再傳送回來。這樣可以在轉移主網資金之前，確認你能夠簽章、支付 Gas 並讀懂區塊瀏覽器。
:::

:::warning[Gas 以 QDAY 支付]
原生代幣轉帳的網路費用以 QDAY 支付。若 MetaMask 提示無法支付費用，你需要在傳送的 1 QDAY 之外，額外保留少量 QDAY 餘額。
:::

## 部署你的第一個智慧合約

QDay 相容 EVM，因此 [Remix IDE](https://remix.ethereum.org) 的用法與在 Ethereum 上相同。本範例透過 MetaMask 在 QDay 上部署一個小型合約。

### 前置條件

- MetaMask 已連接至 QDay（建議使用測試網）
- 帳戶中有足夠的 QDAY 支付部署 Gas
- 安裝了 MetaMask 擴充功能的瀏覽器（Remix 的 Injected Provider 會使用它）

### 1. 開啟 Remix 並建立合約

1. 前往 [remix.ethereum.org](https://remix.ethereum.org)。
2. 在 **File Explorer** 的 `contracts` 目錄下，建立名為 `HelloQDay.sol` 的新檔案。
3. 貼上以下內容：

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

### 2. 編譯

1. 開啟 **Solidity Compiler** 外掛（左側欄）。
2. 將編譯器版本設為 `0.8.20` 或更新（與上方的 `pragma` 一致）。
3. 點擊 **Compile HelloQDay.sol**。編譯器圖示上出現綠色勾號即代表編譯成功。

### 3. 透過 MetaMask 將 Remix 連接至 QDay

1. 開啟 **Deploy & Run Transactions** 外掛。
2. 將 **Environment** 設為 **Injected Provider - MetaMask**（而非 Remix VM）。Remix 會請求連接 MetaMask——請核准。
3. 在 MetaMask 中確認目前選取的網路為 QDay Aevum（鏈 ID `44005`），且 Remix 中顯示的帳戶是你要用來部署的帳戶。

:::danger[請勿誤將合約部署至 Ethereum]
若 Environment 為 Injected Provider，但 MetaMask 仍停留在 Ethereum，合約會部署到 Ethereum 上，並以 ETH 支付費用。點擊 Deploy 之前，請務必確認 MetaMask 中的網路名稱。
:::

### 4. 部署

1. 在合約下拉選單中選擇 **HelloQDay**。
2. 點擊 **Deploy**。
3. 檢視 MetaMask 的確認視窗（網路、以 QDAY 計的預估 Gas），然後點擊 **確認（Confirm）**。
4. 等待交易確認。合約會出現在 Remix 的 **Deployed Contracts** 區塊中。複製合約地址。

### 5. 呼叫合約並在區塊瀏覽器上驗證

1. 在 Remix 中展開已部署的 **HelloQDay** 實例。
2. 點擊 **greeting**——應回傳 `Hello, QDay`。
3. 在 **setGreeting** 中輸入新字串，點擊按鈕並在 MetaMask 中確認。再次呼叫 **greeting** 即可看到更新後的值。
4. 將合約地址貼入[測試網區塊瀏覽器](https://explorer-test.qday.info)，即可查看部署交易及後續的呼叫。（主網區塊瀏覽器將於上線時公布。）

若要使用 Hardhat 或 Foundry，或了解抗量子方法的慣例，請參閱[在 QDay 上開發](/guide/handbook/build-on-qday)與[開發者文件](/Knowledge/technical/developer-guide/getting-started)。
