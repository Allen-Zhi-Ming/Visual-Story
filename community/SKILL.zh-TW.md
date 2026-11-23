> [English](SKILL.md) · [简体中文](SKILL.zh-CN.md) · **繁體中文**

---
name: visual-story-site
description: Turn supplied character or product artwork, moodboards, visual references, photos and video into a cohesive, responsive, motion-rich portfolio or brand showcase website. Use for visual-first website creation/redesign, 3D-character portfolio sites, and image-to-web workflows that require consistent scenes, real assets, interactions and tested implementation.
---

# Visual Story · Community 視覺敘事網站技能

把「角色／產品與視覺素材 → 角色設定／多場景 → 互動規格 → 真正可運作的網站」整合為一次可驗證的交付。使用者明確指定的技術、風格、既有功能與修改邊界優先。

## 發行範圍

本公開版本只提供可執行的 Community 工具、示範網站與一般視覺流程；不包含影片來源素材、私人完整技能包或尚未實作的 Pro 功能。授權條款未正式決定前，勿將公開可讀誤解為已獲得商業再散布授權。

## 進入條件與模式

- **素材已備齊**：直接盤點現有圖片／影片／文字並建站；不要不必要地再生圖。
- **只有角色或概念**：先建立風格板、角色一致性錨點、鏡位與場景提示詞；若實際可用影像生成工具，按需求生成並驗收；沒有工具時交付可執行的生成規格，明確標記 `NOT_GENERATED`，不可冒稱完成素材。
- **改造既有網站**：先讀原站檔案和依賴，盤點內容與連結，再對照目標視覺增量重製；保持已驗證的既有功能與素材路徑。

## 工作流與關卡

1. **讀取與盤點**：整理現有來源、網站目的、受眾、必備頁面、主視覺、行動版優先要求及輸出目錄。使用 `python scripts/asset_manifest.py scan --input <素材資料夾> --output <工作目錄>/asset-manifest.json` 記錄每個素材的路徑、格式、尺寸與 SHA-256；不修改原始素材。缺少的必要資訊選合理預設並記錄假設，不反覆詢問。
2. **視覺系統**：建立色板、字體層級、排版格線、角色外觀錨點與禁變規則。多視角先固定臉型、髮型、服裝配件、材質、色彩、比例；所有延伸場景沿用相同角色錨點。細則見 [visual-direction.md](references/visual-direction.md)。
3. **場景與節奏**：定義主 Hero、作品集、敘事／過程、關於、行動區，每段說明角色、景別、背景、文字安全區、動畫方式、素材來源與行動版降級。先確定素材用途，再選影片或圖片；不要把任意 AI 動畫當作真實可控制的 HTML 互動。見 [scene-motion.md](references/scene-motion.md)。
4. **實作網站**：根據既有專案技術棧編寫實際代碼；新靜態專案可複製 `assets/starter-site/` 再以真實內容與素材替換示範內容。做真正的互動功能、手機導覽、可讀文字、可用的 CTA 與無動畫模式。不能用圖片冒充可操作的網站。見 [web-implementation.md](references/web-implementation.md)。
5. **檢測與修復**：執行 `python scripts/check_site.py --site <網站目錄> --output <工作目錄>/site-check.json`，再用可用的本機工具開站，驗證手機（約 390 px）、平板（約 768 px）、桌面（約 1440 px）、鍵盤操作、動態效果、斷網／素材缺失與載入表現。把實測與未執行分開報告。
6. **交付與回滾**：交付完整來源、素材清單、必要指令、測試證據、待處理風險與回滾點。改既有專案時先有可恢復的版本差異，再修改；不得擅自部署、合併 PR 或覆寫原始媒體。

## 特殊品質要求

- 網站視覺必須由品牌與素材推導，避免套用千篇一律的卡片模板；參考 Pinterest／網站作品只抽取**設計原則**，不複製受保護素材、商標或整頁設計。
- 每個真實作品／產品都要能對應真實圖檔；素材缺失時使用有設計意義的 CSS／SVG 降級，不輸出假照片或虛構業績。
- 保持文字高對比、圖片語意化替代文字、`prefers-reduced-motion`、可鍵盤操作、合理影片尺寸和效能預算。
- 高成本生圖、影片、付費 API、外部上傳、發布和任何現有服務狀態修改，仍須符合當前授權與專案限制。
- 若是服飾電商，服裝顏色、紋理與剪裁以原始商品資料為準；AOV／轉換提升只能提出可測假說，不得虛構改善幅度。

## 按需讀取

- 角色與品牌視覺：[visual-direction.md](references/visual-direction.md)
- 場景、影片、動效：[scene-motion.md](references/scene-motion.md)
- 真實網站與驗收：[web-implementation.md](references/web-implementation.md)

## 最低交付摘要

以 `已完成／已實測／未執行／阻塞` 四種狀態交代：素材清單、頁面與功能、行動／桌面測試、明確缺口、可開啟檔案及原始程式碼位置。只有可驗證的檔案和工具執行結果可標為完成。
