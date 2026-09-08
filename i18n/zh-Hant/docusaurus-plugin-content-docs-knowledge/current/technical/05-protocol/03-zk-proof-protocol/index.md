---
title: zk 證明協定
draft: false
---

# zk 證明協定

ZK 證明協定確保 QDAY2 上的每一次狀態轉換都能以密碼學方式驗證，而無需重新執行所有交易。

## 批次（Batch）

Sequence Sender（`cdk-node`）從 `cdk-erigon` 收集 L2 區塊並打包成一個批次。批次透過 `sequenceBatches()` 提交至 `zkRollupManager`。每個批次包含：已編碼的交易列表、執行前的狀態根、時間戳記，以及強制批次旗標。

## 見證（Witness）

批次被 `zkRollupManager` 接受後，Aggregator 讀取批次資料：Batch Number、Batch Hash、執行前的 State Root、執行後的 State Root，以及 Local Exit Root。這些值構成產生證明所需的見證。

## 電路（Circuit）

zkEVM 電路將正確 EVM 執行的語意編碼為一組算術約束系統（R1CS / PLONK）。電路檢查：在給定前狀態的情況下，執行指定的交易會恰好產生所宣稱的後狀態與 exit root。

## 證明者（Prover）

zk 證明者服務接收批次見證、評估電路，並產生簡潔的有效性證明。證明在鏈下計算，過程耗費大量資源但可平行化。多個證明者實例可同時執行以擴展吞吐量。

## 驗證者（Verifier）

`Verifier` 合約（部署於 DA 層，由 `zkRollupManager` 參照）使用部署時內嵌的驗證金鑰在鏈上檢查證明。驗證十分高效——無論批次中有多少筆交易，都在常數時間內完成。對 `zkRollupManager.verifyBatches()` 的成功驗證呼叫會更新 Rollup 的 Final State Root。
