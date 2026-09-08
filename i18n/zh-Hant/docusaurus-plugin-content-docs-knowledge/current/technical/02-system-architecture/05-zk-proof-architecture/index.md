---
title: zk 證明架構
draft: false
---

# zk 證明架構

ZK 證明流水線將一批 EVM 交易轉換為密碼學有效性證明，任何驗證者無需重新執行交易即可檢驗。

**批次（Batch）** — Sequence Sender 將 L2 區塊收集為一個批次，並將批次提交至 `zkRollupManager`。每個批次擁有唯一的批次編號（Batch Number），並依執行順序編碼交易。

**見證（Witness）** — Aggregator 從 `zkRollupManager` 取得批次資料（Batch Number、Batch Hash、State Root、Local Exit Root）。這些見證資料是證明生成的輸入。

**電路（Circuit）** — 證明者依據 zkEVM 算術電路評估批次見證——該電路是一個編碼了正確 EVM 執行語意的約束系統。電路強制每一次狀態轉換都必須有效。

**證明者（Prover）** — zk Prover 服務根據電路評估結果計算出有效性證明，並向 Aggregator 回傳一個 `Proof` 物件。

**驗證者（Verifier）** — Aggregator 在鏈上呼叫 `zkRollupManager.verifyBatches()`。`Verifier` 合約將證明與已提交的狀態根進行比對驗證。若有效，批次即完成最終確定，交易達到不可逆的 L2 最終性。
