---
title: ZK 證明架構
draft: false
---

# ZK 證明架構

ZK 證明流程將一批 EVM 交易轉換為密碼學有效性證明，任何驗證者都可以在不重新執行交易的情況下檢查該證明。

**批次（Batch）**——Sequence Sender 將 L2 區塊收集成批次，並將批次提交至 `zkRollupManager`。每個批次都有唯一的批次編號（Batch Number），並按執行順序編碼其中的交易。

**見證（Witness）**——Aggregator 從 `zkRollupManager` 取得批次數據（Batch Number、Batch Hash、State Root、Local Exit Root）。這些見證數據就是產生證明的輸入。

**電路（Circuit）**——證明者根據 zkEVM 算術電路評估批次見證；該電路是一套編碼了正確 EVM 執行語義的約束系統，確保每一次狀態轉換都有效。

**證明者（Prover）**——ZK Prover 服務根據電路評估結果計算出有效性證明，並將 `Proof` 物件返回 Aggregator。

**驗證器（Verifier）**——Aggregator 在鏈上呼叫 `zkRollupManager.verifyBatches()`。`Verifier` 合約根據已提交的狀態根檢查證明。若證明有效，該批次即最終確定，交易亦達到不可逆轉的 L2 最終確定性。
