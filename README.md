# 吉他初學基礎知識庫

本專案以繁體中文整理吉他初學知識，包含可瀏覽的入門網站、Markdown Wiki 知識庫、研究筆記與互動簡報。核心目標是讓新增內容能依照固定規則延伸，而不是每次重新設計。

## 依規則擴充

開始修改前先閱讀 [AGENTS.md](AGENTS.md)。

- 新增知識條目：複製 `templates/wiki-page.md` 到 `wiki/` 對應分類，依來源填寫內容，並更新總目錄、學習地圖與操作日誌。
- 新增首頁內容：依 `templates/home-section.html` 在 `index.html` 增加區塊，沿用 `styles.css` 現有樣式；需要新的導覽項目時，使用唯一的錨點。
- 新增獨立頁面：只有需要獨立網址時，才依 `templates/standalone-page.html` 建立 `pages/` 下的新頁面。
- 製作研究簡報：研究筆記放在 `notes/`，使用 `templates/slides-outline.md` 建立逐頁大綱，HTML 與素材放在 `outputs/日期-主題/`；研究正文只使用 Wiki 已有資料。完成後依 `templates/presentation-card.html` 在首頁追加卡片，並在 Wiki 簡報清單新增連結，不覆蓋舊簡報。
- 使用圖示與圖片：知識頁、網站區塊和每頁簡報盡量搭配有助理解的本地圖示或示意圖；優先製作以 Wiki 知識為依據的 SVG，不為裝飾硬塞素材。外部素材須先確認授權並記錄來源，圖片需提供繁體中文替代文字與必要圖說。

## 專案結構

- `AGENTS.md` — AI 維護本專案時遵守的規則與工作流程
- `index.html`、`styles.css`、`script.js` — 靜態網站、樣式與互動
- `wiki/` — 知識頁、導覽、來源摘要及共用圖片
- `templates/` — 新增知識頁和網站頁面的可複製範本
- `raw/` — 原始教材，既有檔案不可修改或刪除
- `notes/`、`outputs/` — 研究筆記與簡報產出位置

## 本機預覽

在專案根目錄啟動本機網站伺服器：

```bash
python -m http.server 8000
```

接著在瀏覽器開啟 http://localhost:8000。

之後在瀏覽器開啟 http://localhost:8000。
