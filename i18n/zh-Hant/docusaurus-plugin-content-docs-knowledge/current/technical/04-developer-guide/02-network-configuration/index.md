---
title: 網絡設定
draft: false
---

# 網絡設定

QDay 是抗量子、兼容 EVM 的 Layer 2。本文件以公開的 **QDay Aevum 測試網**為目標。即將推出的 **QDay 主網**仍在開發中，其參數將於上線時公佈。最新的 ID、RPC 與區塊瀏覽器：[鏈參數](/Knowledge/reference/chains)。

| | QDay Aevum（測試網） | QDay 主網 |
|---|---|---|
| 狀態 | 已上線——用於開發 | 開發中 |
| 鏈 ID | `44005`（`0xABE5`） | `44002` |
| RPC | `https://rpc-test.qday.info` | 上線時公佈 |
| WebSocket | `wss://rpc-test.qday.info` | 上線時公佈 |
| 區塊瀏覽器 | `https://explorer-test.qday.info` | 上線時公佈 |
| 驗證 API | `https://explorer-test.qday.info/api` | 上線時公佈 |
| 原生貨幣（Gas） | tQDAY（18 位小數） | QDAY（18 位小數） |
| 穩定幣 | tUSD8（`0x456569838f1d43009A91ebA4263147Afd7233483`，18 位小數） | USD8 |

:::warning[測試網與主網]
**44005 是目前的公開 Aevum 測試網**——本文件所有程式碼範例皆預設使用此網絡。QDay 主網（`44002`）的參數將於上線時公佈。請務必對照[鏈參數](/Knowledge/reference/chains)核對 RPC、鏈 ID 與地址。
:::

:::info[Gas 與手續費代幣]
一般網絡 Gas 以 QDAY 支付（測試網上為 tQDAY）。個別應用程式可能以其他代幣收取手續費——例如 Agent Payment 應用（將於 2027 年第一季隨 QDay 主網推出）將以 USD8 收取手續費。
:::

測試代幣：可從 [faucet.qday.info](https://faucet.qday.info) 或[文件內置水龍頭](/guide/start/faucet)領取 tQDAY。

## 快速檢查 {/* #quick-check */}

```bash title="Latest block via curl"
curl -s https://rpc-test.qday.info \
  -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}'
```

在錢包中新增此鏈：[錢包整合](/Knowledge/technical/developer-guide/wallet-integration)。然後[建置第一個合約](/Knowledge/technical/developer-guide/smart-contract-development)。
