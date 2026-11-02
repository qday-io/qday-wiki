---
title: 批次驗證協議
draft: false
---

# 批次驗證協議

QDay Aevum 以多個獨立驗證者及 M-of-N 門檻驗證狀態轉換，而非使用 ZK 有效性證明。

## 批次（Batch） {/* #batch */}

Sequence Sender（`cdk-node`）從 `cdk-erigon` 收集 L2 區塊並打包成一個批次。批次透過 `sequenceBatches()` 提交至 Rollup 合約。每個批次包含：已編碼的交易列表、執行前的狀態根、時間戳記，以及強制批次旗標。

## 批次記錄 {/* #batch-record */}

Rollup 合約在 Abelian Plus Node（`reth` + `lighthouse`）的 EVM 環境中記錄批次資料。Abelian 本身沒有智能合約。

## 批次數據一致性 {/* #batch-data-consistency */}

每個驗證者會將 Rollup 合約記錄的批次資料，與對應的 L2 交易數據作比對。若兩者不符，即表示該記錄與 QDay 所處理的交易不一致。

## 狀態轉換驗證 {/* #state-transition-verification */}

每個驗證者會獨立執行批次的狀態轉換，並將所得的狀態根與預期的狀態根作比對。結果是否正確，取決於驗證者是否採用相同的協議規則、能否取得交易數據，以及能否識別與每個批次相關的狀態承諾。

## M-of-N 共識 {/* #m-of-n-agreement */}

N 為參與驗證者的總數；M 為所需的最少批准數目。當至少 M 個驗證者同意某批次有效，並符合協議的接受及最終確定規則時，該批次即滿足批准要求。

## 狀態承諾 {/* #state-commitment */}

批次最終確定後，Committer 會透過 Abelian Node 將 QDay 的最終狀態根提交至 Abelian 鏈。
