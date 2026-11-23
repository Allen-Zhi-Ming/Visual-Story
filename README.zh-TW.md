<!-- Visual Story · zh-TW · Community v1.1.0 -->
<div align="center">
<a href="community/SKILL.md"><img src="docs/media/visual-story-hero.svg" width="100%" alt="Visual Story — From imagination to interaction." /></a>
<br/><br/>
<a href="community/SKILL.md"><img alt="Agent Skill" src="https://img.shields.io/badge/AI-Agent%20Skill-BFFF70?style=for-the-badge&labelColor=152032" /></a>
<a href="community/README.md"><img alt="Version" src="https://img.shields.io/badge/Release-Community%20v1.1.0-7CCBFF?style=for-the-badge&labelColor=152032" /></a>
<a href="docs/VERIFICATION.zh-TW.md"><img alt="Baseline tests" src="https://img.shields.io/badge/Tests-4%2F4%20PASS-7DE2A4?style=for-the-badge&labelColor=152032" /></a>
<a href="docs/LICENSING.md"><img alt="License pending" src="https://img.shields.io/badge/License-Pending-FFCE80?style=for-the-badge&labelColor=152032" /></a>
<br/>
<img alt="Mobile and Desktop" src="https://img.shields.io/badge/Responsive-Mobile%20%2B%20Desktop-9E9CFF?style=flat-square&labelColor=192439" />
<img alt="3 languages" src="https://img.shields.io/badge/i18n-EN%20%7C%20ZH--CN%20%7C%20ZH--TW-89D5E9?style=flat-square&labelColor=192439" />
<img alt="Static checks" src="https://img.shields.io/badge/QA-Static%20Checks-E9BF8E?style=flat-square&labelColor=192439" />
<br/><br/>
<p align="center"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <strong>繁體中文</strong></p>

<h3>從視覺素材到互動網站</h3>

Visual Story 將角色、商品圖片、視覺參考及品牌素材，整理成可重複使用的 **Agent Skill** 流程，協助製作具互動效果、支援手機與電腦的網站。**Community 是可運作的示範，不是已上線的 SaaS 或自動 AI 生圖器。**

[Agent Skill](community/SKILL.md) · [Source Demo](community/assets/starter-site/index.html) · [Installation](community/README.md) · [Verification](docs/VERIFICATION.zh-TW.md)
</div>

---

## ✦ 作品預覽 — 原創示範

<p align="center"><img src="docs/media/visual-story-demo-preview.svg" alt="NOVA original concept — desktop and mobile responsive design" width="100%" /></p>

> 這是 **NOVA 原創示範網站**，不是客戶案例，也不是影片原作者網站的複製品。圖片是排版示意圖，並非公開正式網站的瀏覽器截圖；可在下載後開啟 `index.html`。

## ✦ Community 已提供的功能

| 模組 | 目前提供 |
| --- | --- |
| **視覺規劃** | 角色與品牌一致性、設計規範 |
| **場景與動態** | 敘事規劃、動效規則、手機降級 |
| **響應式展示** | 可運作 HTML/CSS/JavaScript、手機導覽及作品分類 |
| **素材盤點** | 檔案資訊、路徑與 SHA-256 清單 |
| **品質檢查** | 靜態網頁檢查與 Python 回歸測試 |

**尚未提供：** 付費 AI 圖片／影片生成、遠端一鍵部署、Pro 會員或付款／授權碼管理。

## ✦ 三步驟開始

**1. 下載原始碼**（或在 GitHub 使用 **Code → Download ZIP**）：

```bash
git clone https://github.com/Allen-Zhi-Ming/Visual-Story.git
cd Visual-Story
```

**2. 安裝 Community 技能。** 將整個 `community/` 資料夾複製到 Codex 的 skills 目錄，命名為 `visual-story-site`：

| OS | Directory |
| --- | --- |
| Windows | `%USERPROFILE%\.codex\skills\visual-story-site` |
| macOS / Linux | `${CODEX_HOME:-$HOME/.codex}/skills/visual-story-site` |

Windows 安裝方式：[`community/install/安裝說明.txt`](community/install/%E5%AE%89%E8%A3%9D%E8%AA%AA%E6%98%8E.txt)。若自訂 `CODEX_HOME`，請使用其下的 `skills` 資料夾。

**3. 在 Codex 輸入：**

```text
使用 $visual-story-site，依我提供的角色、圖片和品牌素材，製作手機優先且支援電腦的互動展示網站。保留原始素材，並附上測試證據與未完成項目。
```

## ✦ 語言設定

**GitHub：** 預設首頁 `README.md` 是英文，使用上方連結可切換簡體或繁體文件。GitHub README 無法執行 JavaScript 即時切換。**示範網站：** 頂部可選 English、简体中文、繁體中文。第一次開啟預設英文；瀏覽器允許時會保存語言選擇。網址加上 `?lang=zh-CN` 或 `?lang=zh-TW` 可暫時指定語言。

<details>
<summary><b>🧪 開發驗收</b></summary>

```bash
python community/scripts/test_skill.py
python community/scripts/check_site.py --site community/assets/starter-site --strict
python community/scripts/asset_manifest.py scan --input YOUR_MEDIA_DIRECTORY --output asset-manifest.json
```

靜態檢查**不能取代**正式部署與跨瀏覽器驗收，詳見驗收紀錄。

</details>

## ✦ 專案結構

```text
Visual-Story/
├── README.md / README.zh-CN.md / README.zh-TW.md
├── docs/
│   ├── media/                       (original visual assets)
│   ├── LICENSING*.md                (license status)
│   └── VERIFICATION*.md             (evidence)
└── community/
    ├── SKILL.md                    (English default)
    ├── SKILL.zh-CN.md / SKILL.zh-TW.md
    ├── assets/starter-site/        (HTML / CSS / JS / i18n)
    ├── references/                 (design and implementation)
    ├── scripts/                    (checks and asset inventory)
    └── install/                    (Windows guide and scripts)
```

## ✦ 驗收狀態

| 檢查 | 狀態 | 範圍 |
| --- | --- | --- |
| Python 回歸測試 | **4/4 PASS** | 基線檢查，非即時 CI |
| 靜態網站 | **PASS** | 基線 0 錯誤、0 警告 |
| JavaScript 語法 | **PASS** | 基線 `node --check` |
| 手機／電腦版 | **PASS（受限模擬）** | 基線 320/390/768/1440 px |
| 多語系檢查 | **4/4 PASS** | 預設英文、三語文件、連結有效 |
| 真實 URL 載入 | **基線 BLOCKED** | 環境限制，未標為通過 |
| Windows 安裝／正式部署 | **NOT_RUN** | 不宣稱已完成 |


[Full evidence record](docs/VERIFICATION.zh-TW.md)

## ✦ 授權與商業規劃

Visual Story Community 是 **source-available 公開預覽**，尚未套用 MIT、Apache 或 GPL。程式碼公開**不表示已授予商業再散布授權**。Pro 功能與付款系統**尚未實作**。使用或再散布前請閱讀[授權說明](docs/LICENSING.zh-TW.md)。

## ✦ 原創素材與來源

本技能根據參考影片展示的一般流程概念，獨立製作原創工具及示範。未納入影片原作者的角色、片段或受保護視覺素材，也不將概念作品冒充客戶案例。

---

<div align="center">
<b>VISUAL STORY</b> · <i>From imagination to interaction.</i>
<br/><sub>讓視覺說故事，交付真正可用的介面。</sub>
</div>
