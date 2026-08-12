# 內容維護指南（給 PM / 營運）

不用工程師、不用裝任何工具。全程在 GitHub 網頁上完成，存檔後網站自動更新。

---

## 開始前你需要
- 一個 **GitHub 帳號**，且被加入 `qday-io` 組織（找工程師加）
- 會打字。Markdown 語法只要記幾個（下面有表）

---

## A. 改一頁現有內容（最常用）

1. 到網站上要改的那一頁，滑到最底，點 **「Edit this page」**
2. 跳到 GitHub 網頁編輯器，直接改文字
3. 上方切到 **「Preview」** 分頁可以先看效果
4. 改好後，最下面 **「Commit changes」**：
   - 填一句說明（例如：`更新 MetaMask 教學`）
   - 選 **「Commit directly to the main branch」**
   - 按綠色 **Commit changes**
5. 幾分鐘後網站自動更新 ✅

---

## B. 新增一頁

1. GitHub 上進 `docs/` 底下對應資料夾（例如 `docs/guide/`）
2. 右上 **Add file → Create new file**
3. 檔名用小寫加連字號，結尾 `.md`，例如 `docs/guide/my-new-page.md`
4. 檔案開頭一定要放這段（frontmatter），再寫內容：
   ```markdown
   ---
   sidebar_position: 5
   title: 我的新頁面標題
   ---

   # 我的新頁面標題

   這裡開始寫內容…
   ```
5. Commit → 側邊欄自動出現這一頁 ✅

`sidebar_position` 是排序（數字小的在上面）。

---

## C. 中文 / 英文是「不同的檔案」

| 語言 | 檔案位置 |
|---|---|
| **English** | `docs/guide/xxx.md` |
| **繁體中文** | `i18n/zh-Hant/docusaurus-plugin-content-docs/current/guide/xxx.md` |

- 同名檔、不同資料夾。**改英文改上面那個、改中文改下面那個。**
- 兩個各自獨立 —— 改了英文，中文不會自動變，要另外改中文檔。
- 新增頁面：若要雙語，兩個位置都放一份（檔名相同）。
- 沒放中文檔的頁，中文站會 fallback 顯示英文（不會壞）。

其他 section 同理，把 `guide` 換成 `migration` / `reference` / `dev` 等。

---

## D. Markdown 速查（記這幾個就夠）

| 想要 | 這樣打 |
|---|---|
| 標題 | `# 大標題` `## 中標題` `### 小標題` |
| **粗體** | `**粗體**` |
| *斜體* | `*斜體*` |
| 連結 | `[顯示文字](https://網址)` |
| 站內連結 | `[遷移指南](/docs/migration/overview)` |
| 清單 | 每行開頭 `- 項目` |
| 編號清單 | 每行開頭 `1. 項目` |
| 圖片 | `![說明](/img/圖檔.png)`（圖先上傳到 `static/img/`） |
| 提示框 | 見下方 |

### 提示框（callout）
```markdown
:::tip[小提示]
這是提示內容。
:::

:::warning[注意]
這是警告內容。
:::

:::danger[危險]
不可逆的操作提醒。
:::
```
type 可用 `tip` / `note` / `info` / `warning` / `danger`。

---

## E. 發佈一則「最新動態」公告

首頁的「最新動態」目前在程式檔裡（`src/components/QDay/Updates.tsx`）。
這一項要改程式，建議請工程師處理，或另外規劃成可由 PM 維護的資料檔。

---

## 常見問題

- **改完多久生效？** push 後自動 build，約 2–5 分鐘。
- **改壞了怎麼辦？** GitHub 有版本紀錄，工程師可以還原任何一次修改。
- **不確定語法對不對？** 用編輯器的 Preview 分頁先看，或先 commit 到一個分支開 PR 給工程師看過。
- **圖片怎麼加？** 先把圖上傳到 `static/img/`（Add file → Upload files），再用 `![說明](/img/檔名)` 引用。
