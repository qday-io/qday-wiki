---
title: 基礎設施安全性
draft: false
---

# 基礎設施安全性

- 將所有節點營運者的私鑰儲存在 HSM 或雲端 KMS 中，並定期輪換金鑰。
- 在隔離的容器中執行 `cdk-erigon`、`cdk-node` 與證明者（Prover），並僅授予最低限度的 Linux capabilities。
- 限制網路存取：排序器的區塊生產 API 應僅允許 `cdk-node` 存取；證明者的 gRPC 端點應僅允許 Aggregator 存取。
- 啟用 PostgreSQL SSL，並將資料庫存取限制為僅限應用程式容器。
- 保持所有軟體為最新版本；訂閱 `reth`、`lighthouse` 與 Go 相依套件的安全公告。
