---
title: AI 代理協議
draft: false
---

# AI 代理協議

:::note[計劃中——2027 年第一季]
AI 代理協議將於 2027 年第一季隨 QDay 主網推出，目前尚未上線。本頁描述的是計劃中的設計。
:::

AI 代理協議定義了自主代理將如何與 QDay 合約及外部 AI 推理互動。

**意圖宣告（Intent Declaration）**——用戶透過提交已簽名的 `Intent` 結構來宣告意圖，內容包含：目標描述（UTF-8）、觸發條件、授權操作（以合約呼叫選擇器編碼）、資源限制與到期時間。意圖會儲存在鏈上的 Intent Registry 合約中。

**鏈上授權（On-chain Authorization）**——每個代理都關聯一組智能帳戶會話密鑰（Session Key），用以限定代理可呼叫的合約與函數，以及可轉移的價值。會話密鑰是授權邊界——無論代理的 AI 模型提出甚麼建議，代理都無法超出此範圍。

**工具呼叫執行（Tool Call Execution）**——當代理決定呼叫某個合約函數時，會建構一個以目標合約為對象的 `UserOperation`。Alto bundler 會驗證該 UserOperation（檢查會話密鑰範圍與 Gas 上限），並將其提交至 EntryPoint。執行結果（返回值或 revert 原因）會回饋至代理的上下文中。

**MCP 整合（MCP Integration）**——代理會連接至 MCP（Model Context Protocol）伺服器，以存取 AI 推理、即時價格數據與鏈下 API。MCP 請求會攜帶一個 session token，可對應回鏈上的代理身份，使 AI 驅動的操作可供審計。

**結果證明（Result Attestation）**——代理完成多步驟操作後，可將結果雜湊提交至 Agent Registry 合約。這會為代理的決策與操作建立一份不可篡改、帶有時間戳記的審計軌跡。
