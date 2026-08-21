# Content Editing Guide (for PMs / Ops)

No engineer, no tooling needed. Everything is done in the GitHub web UI; after you
save, the site rebuilds and updates automatically.

For nested sidebar folders, `_category_.json`, and bilingual file layout, see
**[AUTHORING.md](./AUTHORING.md)**.

---

## Before you start
- A **GitHub account** added to the `qday-io` org (ask an engineer to add you).
- You can type. You only need a handful of Markdown symbols (cheatsheet below).

---

## A. Edit an existing page (most common)

1. On the site, open the page you want to change, scroll to the bottom, and click
   **"Edit this page"**.
2. You land in the GitHub web editor — edit the text directly.
3. Switch to the **"Preview"** tab to see how it looks.
4. When done, at the bottom under **"Commit changes"**:
   - Write a short message (e.g. `Update MetaMask guide`)
   - Choose **"Commit directly to the main branch"**
   - Click the green **Commit changes**
5. The site updates automatically in a few minutes. ✅

---

## B. Add a new page

1. In GitHub, go into the right folder under `docs/` (e.g. `docs/guide/`).
2. Top right: **Add file → Create new file**.
3. Name it lowercase-with-hyphens, ending in `.md`, e.g. `docs/guide/my-new-page.md`.
4. The file must start with this header (frontmatter), then your content:
   ```markdown
   ---
   sidebar_position: 5
   title: My New Page Title
   ---

   # My New Page Title

   Start writing here…
   ```
5. Commit → the page appears in the sidebar automatically. ✅

`sidebar_position` controls ordering (smaller numbers appear higher).

---

## C. English and Chinese are SEPARATE files

| Language | File location |
|---|---|
| **English** | `docs/guide/xxx.md` |
| **繁體中文 (Traditional Chinese)** | `i18n/zh-Hant/docusaurus-plugin-content-docs/current/guide/xxx.md` |

- Same filename, different folder. **Edit the English one for English, the Chinese one for Chinese.**
- They are independent — editing English does NOT change Chinese; edit the Chinese file separately.
- To add a bilingual page, put a copy in both locations (same filename).
- A page with no Chinese file falls back to English on the Chinese site (nothing breaks).

Same idea for other sections — replace `guide` with `migration` / `reference` / `dev`, etc.

---

## D. Markdown cheatsheet (these are enough)

| You want | Type this |
|---|---|
| Headings | `# H1` `## H2` `### H3` |
| **Bold** | `**bold**` |
| *Italic* | `*italic*` |
| Link | `[text](https://url)` |
| Internal link | `[Migration guide](/docs/migration/overview)` |
| Bullet list | start each line with `- item` |
| Numbered list | start each line with `1. item` |
| Image | `![alt](/img/file.png)` (upload the image to `static/img/` first) |
| Callout | see below |

### Callouts
```markdown
:::tip[Tip]
Helpful tip here.
:::

:::warning[Caution]
Warning content here.
:::

:::danger[Danger]
Irreversible-action warning.
:::
```
Types: `tip` / `note` / `info` / `warning` / `danger`.

---

## E. Publish a homepage "Latest updates" announcement

The homepage "Latest updates" strip is driven by a data file PMs can edit directly:
**`data/updates.json`**

1. Open `data/updates.json` on GitHub and click the pencil to edit.
2. Add an entry at the top of `items` (copy an existing `{ }` block and change it):
   ```json
   {
     "tag": "launch",
     "date": "2026-08",
     "title": "English title here",
     "title_zh": "中文標題",
     "to": "/docs/start/add-network"
   },
   ```
   - `tag`: `launch` / `upgrade` / `guide` / `notice`
   - `date`: free text, e.g. `2026-08`
   - `title` / `title_zh`: English / Chinese title (Chinese falls back to English if empty)
   - `to`: internal link to open on click
   - Note: put a comma between entries; the last entry has no trailing comma
3. Commit → the homepage updates automatically. ✅

> Tip: copy the whole block before editing as a backup. If the JSON is malformed
> (missing comma/quote) the build fails — use GitHub's preview or open a PR for an
> engineer to review to be safe.

---

## FAQ

- **How long until changes go live?** After you commit, the site rebuilds — about 2–5 minutes.
- **I broke something — now what?** GitHub keeps full history; an engineer can revert any change.
- **Not sure my syntax is right?** Use the editor's Preview tab, or commit to a branch and open a PR for review.
- **How do I add images?** Upload to `static/img/` (Add file → Upload files), then reference with `![alt](/img/filename)`.
