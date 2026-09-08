---
title: CLI 參考資料
draft: false
---

# CLI 參考資料

安裝：

```bash
npm install -g @qday-io/cli
```

`qday` CLI 封裝了與 `@qday-io/sdk` 相同的功能。下列子命令對應 SDK 各模組；旗標與輸出 JSON 會在 CLI 正式釋出時補充文件。

| 命令 | 說明 |
|---------|-------------|
| `qday --help` | 列出所有命令 |
| `qday account …` | Smart Account／工作階段金鑰（`@qday-io/sdk/aa`） |
| `qday payment …` | 發票、訂閱、串流付款 |
| `qday agent …` | Agent 建立／執行／授權 |
| `qday rpc …` | JSON-RPC 輔助工具（`eth_blockNumber`、`zkevm_verifiedBatchNumber`） |

RPC URL 預設為[鏈參數](/Knowledge/reference/chains)中的鏈。可用 `--rpc-url` 覆寫。
