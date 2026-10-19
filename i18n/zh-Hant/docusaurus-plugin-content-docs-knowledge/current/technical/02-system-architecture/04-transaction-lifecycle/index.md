---
title: 交易生命週期
draft: false
---

# 交易生命週期

一筆交易從提交到 L1 最終確定性，會經歷七個階段：

**步驟 1——提交交易**
用戶透過錢包、SDK 或直接 RPC 呼叫，將已簽署的交易發送至 QDAY Node（`cdk-erigon` RPC 端點）。節點驗證交易後，將其作為待處理交易加入 TxPool。

**步驟 2——排序器執行（軟確認）**
`cdk-erigon`（擔任排序器）從 TxPool 選取交易、執行 EVM、更新狀態，並建立 L2 區塊。這是第一次確認——快速，且僅在 L2 本地進行。

**步驟 3——建立批次**
`cdk-node`（Sequence Sender）持續從 `cdk-erigon` 同步新區塊，收集多個區塊並打包成一個**批次（Batch）**，再將批次提交至 `zkRollupManager`（或在內部提交至 `PolygonRollupBaseEtrog`）。輸出：批次 + 批次編號（Batch Number）。

**步驟 4——批次共識（第二次確認）**
`zkRollupManager` 合約接收提交的批次，驗證排序器的授權，記錄該批次並更新 Rollup 狀態。這是第二個共識點：批次此時正式成為 Rollup 記錄的一部分。

**步驟 5——產生並提交 ZK 證明**
**Aggregator** 監察 `zkRollupManager` 中新獲接受的批次。它取得批次編號（Batch Number）、批次雜湊（Batch Hash）、狀態根（State Root）及本地退出根（Local Exit Root），然後將這些數據發送至 **ZK Prover**。證明者計算出有效性證明並返回 Aggregator。接着 Aggregator 呼叫 `zkRollupManager.verifyBatches()`，提交批次、狀態根及證明。合約驗證證明並更新最終狀態（Final State）——該批次此時已**最終確定**，交易亦已達到 L2 最終確定性。

**步驟 6——數據可用性記錄**
**Abelian Plus Node**（DA Node 組件）儲存 Rollup 數據、託管 zkEVM 合約，並確保所有批次數據均可取用。DA 層上的 **Record Contracts** 持久保存批次元數據與狀態根。

**步驟 7——提交至 Abelian Chain**
**Committer** 監察 `zkRollupManager` 的事件（`VerifyBatches`、`BatchVerified`、`StateUpdated`）。每遇到一個事件，它便擷取相關數據、呼叫 Abelian RPC、將數據寫入 Abelian Chain，並將結果寫回 DA Node 的 Record Contracts。Abelian Chain 隨後儲存批次狀態根（Batch Status Root）、Rollup 狀態摘要及必要的鏈上記錄——在 Layer 1 提供抗量子的最終確定性。
