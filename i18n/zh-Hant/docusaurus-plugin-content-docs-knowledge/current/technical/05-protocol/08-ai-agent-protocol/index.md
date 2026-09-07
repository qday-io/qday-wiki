---
title: AI 代理協定
draft: false
---

# AI 代理協定

AI 代理協定定義了自主代理如何與 QDAY2 合約及外部 AI 推論互動。

**意圖宣告（Intent Declaration）** — 使用者透過提交已簽章的 `Intent` 結構來宣告意圖，內容包含：目標描述（UTF-8）、觸發條件、授權操作（以合約呼叫選擇器編碼）、資源限制與到期時間。意圖會儲存在鏈上的 Intent Registry 合約中。

**鏈上授權（On-chain Authorization）** — 每個代理都關聯一組智慧帳戶 Session Key，用以限定代理可呼叫的合約與函式，以及可轉移的價值。Session Key 是授權邊界——無論代理的 AI 模型提出什麼建議，代理都無法超出此範圍。

**工具呼叫執行（Tool Call Execution）** — 當代理決定呼叫某個合約函式時，會建構一個以目標合約為對象的 `UserOperation`。Alto bundler 會驗證該 UserOperation（檢查 Session Key 範圍與 Gas 上限），並將其提交至 EntryPoint。執行結果（回傳值或 revert 原因）會回饋至代理的上下文中。

**MCP 整合（MCP Integration）** — 代理會連接至 MCP（Model Context Protocol）伺服器，以存取 AI 推論、即時價格資料與鏈下 API。MCP 請求會攜帶一個 session token，可對應回鏈上的代理身分，使 AI 驅動的操作可供稽核。

**結果證明（Result Attestation）** — 代理完成多步驟操作後，可將結果雜湊提交至 Agent Registry 合約。這會為代理的決策與操作建立一份不可竄改、帶有時間戳記的稽核軌跡。
