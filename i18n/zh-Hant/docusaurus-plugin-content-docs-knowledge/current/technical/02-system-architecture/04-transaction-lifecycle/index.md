---
title: 交易生命週期
draft: false
---

# 交易生命週期

一筆交易從提交到在 Abelian 上完成承諾，會經歷六個階段：

**步驟 1——提交交易**
用戶透過錢包、SDK 或直接 RPC 呼叫，將已簽署的交易發送至 QDAY Node（`cdk-erigon` RPC 端點）。節點驗證交易後，將其作為待處理交易加入 TxPool。

**步驟 2——排序器執行（軟確認）**
`cdk-erigon`（擔任排序器）從 TxPool 選取交易、執行 EVM、更新狀態，並建立 L2 區塊。這是第一次確認——快速，且僅在 L2 本地進行。

**步驟 3——建立批次**
`cdk-node`（Sequence Sender）持續從 `cdk-erigon` 同步新區塊，收集多個區塊並打包成一個**批次（Batch）**，再將批次提交至 Rollup 合約。輸出：批次 + 批次編號（Batch Number）。

**步驟 4——記錄批次**
在 **Abelian Plus Node**（`reth` + `lighthouse`）EVM 環境中運行的 Rollup 合約會記錄批次資訊。批次此時成為 Rollup 記錄的一部分，其數據亦可供驗證。

**步驟 5——多驗證者驗證**
多個獨立驗證者會驗證該批次：
- **批次數據一致性**——比對 Rollup 合約所記錄的批次資訊與相應的 L2 交易數據。
- **狀態轉換驗證**——重新執行狀態轉換，並將所得的狀態根與預期的狀態根比對。

驗證者透過 **M-of-N** 門檻達成一致。當所需數量的驗證者批准，且符合協議的最終確定規則後，該批次的狀態根即告最終確定。

**步驟 6——提交至 Abelian Chain**
**Committer** 透過 Abelian Node 將最終狀態根提交至 Abelian Chain。這會在 Abelian 的抗量子 PoW 鏈上記錄對 QDay 執行狀態的承諾。
