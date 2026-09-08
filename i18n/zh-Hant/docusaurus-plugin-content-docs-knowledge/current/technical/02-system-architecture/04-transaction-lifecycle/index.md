---
title: 交易生命週期
draft: false
---

# 交易生命週期

一筆交易從送出到 L1 最終性會經歷七個階段：

**步驟 1——送出交易**
使用者透過錢包、SDK 或直接的 RPC 呼叫，將已簽署的交易發送至 QDAY 節點（`cdk-erigon` RPC 端點）。節點驗證後將其加入 TxPool，成為待處理交易。

**步驟 2——排序器執行（軟確認）**
`cdk-erigon`（作為排序器）從 TxPool 挑選交易、執行 EVM、更新狀態並產生 L2 區塊。這是第一次確認——快速且僅限於 L2 本地。

**步驟 3——建立批次**
`cdk-node`（Sequence Sender）持續從 `cdk-erigon` 同步新區塊，收集多個區塊並打包成一個 **Batch（批次）**，然後將批次提交至 `zkRollupManager`（或在內部提交至 `PolygonRollupBaseEtrog`）。輸出：Batch + Batch Number。

**步驟 4——批次共識（第二次確認）**
`zkRollupManager` 合約接收批次提交，驗證排序器授權，記錄批次並更新 rollup 狀態。這是第二個共識點：該批次現在正式成為 rollup 紀錄的一部分。

**步驟 5——ZK 證明產生與提交**
**Aggregator** 監控 `zkRollupManager` 中新被接受的批次。它取得 Batch Number、Batch Hash、State Root 與 Local Exit Root，然後將這些資料送給 **zk 證明者（zk Prover）**。證明者計算有效性證明並回傳給 Aggregator。接著 Aggregator 呼叫 `zkRollupManager.verifyBatches()`，提交 Batch、State Root 與 Proof。合約驗證證明並更新 Final State——該批次現在已**最終確定（finalized）**，交易達成 L2 最終性。

**步驟 6——資料可用性記錄**
**Abelian Plus Node**（DA 節點元件）儲存 rollup 資料、託管 zkEVM 合約，並確保所有批次資料皆可取得。DA 層上的 **Record Contracts** 持久化批次中繼資料與狀態根。

**步驟 7——提交至 Abelian 鏈**
**Committer** 監看 `zkRollupManager` 的事件（`VerifyBatches`、`BatchVerified`、`StateUpdated`）。每當事件發生，它會取得相關資料、呼叫 Abelian RPC、將資料寫入 Abelian 鏈，並將結果寫回 DA 節點的 Record Contracts。Abelian 鏈接著儲存 Batch Status Root、rollup 狀態摘要與必要的鏈上紀錄——在第一層提供抗量子的最終性。
