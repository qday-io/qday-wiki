---
title: CLI 參考資料
draft: false
---

# CLI 參考資料

:::note[將於 2027 年第一季推出]
QDay SDK（`@qday-io/sdk`）與 CLI（`@qday-io/cli`）將於 2027 年第一季推出，目前尚未在 npm 上發佈。本頁的程式碼展示的是計劃中的 API。
:::

安裝：

```bash
# Available Q1 2027 — not yet published on npm
npm install -g @qday-io/cli
```

`qday` CLI 封裝了與 `@qday-io/sdk` 相同的功能。下列子命令對應 SDK 各模組；旗標與輸出 JSON 將於 CLI 推出時補充說明。

| 命令 | 說明 |
|---------|-------------|
| `qday --help` | 列出所有命令 |
| `qday account …` | 智能帳戶／會話密鑰（`@qday-io/sdk/aa`） |
| `qday payment …` | 發票、訂閱、串流支付 |
| `qday agent …` | 代理建立／執行／授權 |
| `qday rpc …` | JSON-RPC 輔助工具（`eth_blockNumber`、`zkevm_verifiedBatchNumber`） |

RPC URL 預設為[鏈參數](/Knowledge/reference/chains)中的鏈。可用 `--rpc-url` 覆寫。
