<!-- Visual Story · public GitHub profile · Community v1.0.0 -->
<div align="center">

<a href="community/SKILL.md" title="Visual Story · Agent Skill">
  <img src="docs/media/visual-story-hero.svg" alt="Visual Story — From imagination to interaction. 深色玻璃球體與螢光綠視覺設計主橫幅" width="100%" />
</a>

<br />
<br />

<a href="community/SKILL.md"><img alt="Agent Skill" src="https://img.shields.io/badge/AI-Agent%20Skill-BFFF70?style=for-the-badge&labelColor=152032" /></a>
<a href="community/README.md"><img alt="版本 Community v1.0.0" src="https://img.shields.io/badge/Release-Community%20v1.0.0-7CCBFF?style=for-the-badge&labelColor=152032" /></a>
<a href="docs/VERIFICATION.md"><img alt="本機測試 4/4 通過" src="https://img.shields.io/badge/Tests-4%2F4%20PASS-7DE2A4?style=for-the-badge&labelColor=152032" /></a>
<a href="docs/LICENSING.md"><img alt="授權條款尚未正式發布" src="https://img.shields.io/badge/License-Pending-FFCE80?style=for-the-badge&labelColor=152032" /></a>

<br />

<a href="community/assets/starter-site/index.html"><img alt="RWD" src="https://img.shields.io/badge/Responsive-Mobile%20%2B%20Desktop-9E9CFF?style=flat-square&labelColor=192439" /></a>
<a href="community/scripts/asset_manifest.py"><img alt="素材 SHA-256" src="https://img.shields.io/badge/Assets-SHA--256-8ED8E8?style=flat-square&labelColor=192439" /></a>
<a href="community/scripts/check_site.py"><img alt="靜態網站檢查" src="https://img.shields.io/badge/QA-Static%20Checks-E9BF8E?style=flat-square&labelColor=192439" /></a>

<br />
<br />

### 讓視覺成為故事，讓作品不只停在畫面。

**把角色／產品／品牌素材，轉成有一致風格、互動效果與手機版的網站。**  
從視覺規劃、素材整理，到 HTML／CSS／JavaScript 實作與驗收，讓 AI Agent 有一套能重複執行的工作方式。

[**✨ 技能入口**](community/SKILL.md)　 ·　 [**🖥️ 示範網站原始碼**](community/assets/starter-site/)　 ·　 [**📘 安裝教學**](community/README.md)　 ·　 [**✅ 驗收記錄**](docs/VERIFICATION.md)

</div>

---

## ✦ 作品預覽 · Showcase

<p align="center">
  <img src="docs/media/visual-story-demo-preview.svg" alt="原創 NOVA 展示網站的電腦與手機排版示意圖" width="100%" />
</p>

> **這是可互動的原創示範網站「NOVA」的視覺排版示意，不是影片原作者網站的複製品。** 此圖為概念排版示意而非瀏覽器截圖；目前尚未啟用公開 Live Demo；可以在下載後直接以瀏覽器開啟 [`index.html`](community/assets/starter-site/index.html)。

## ✦ 核心能力 · What it does

| | 工作階段 | Community 已提供 |
| :---: | --- | --- |
| 🎨 | **Visual Direction** · 視覺規範 | 色彩、字體、畫面層次與角色外觀一致性規則 |
| 🪄 | **Scene & Motion** · 場景敘事 | Hero、作品、過程與動態區塊的規格及降級建議 |
| 🖥️ | **Responsive Website** · 真正的前端 | HTML、CSS、JavaScript 示範網站，含手機導覽與互動 |
| 🗂️ | **Asset Manifest** · 素材管理 | 掃描素材路徑／格式／雜湊，建立 SHA-256 清單 |
| 🛡️ | **Verification** · 品質檢查 | 靜態資源與頁面檢查、回歸測試與未驗證項目區分 |

**不包含：** 自動生圖／生影片付費服務、遠端一鍵架站、Pro 會員與收費授權系統。它們不是本版已完成的功能。

## ✦ 3 步驟開始 · Quick start

**01. 取得程式碼**

```bash
git clone https://github.com/Allen-Zhi-Ming/Visual-Story.git
cd Visual-Story
```

也可以在 GitHub 右上方選 **Code → Download ZIP**。

**02. 安裝技能**

將整個 `community` 資料夾複製到 Codex 的 skills 目錄，並命名為 `visual-story-site`：

| 平台 | 技能資料夾 |
| --- | --- |
| Windows | `%USERPROFILE%\.codex\skills\visual-story-site` |
| macOS／Linux | `${CODEX_HOME:-$HOME/.codex}/skills/visual-story-site` |

Windows 腳本見 [`community/install/安裝說明.txt`](community/install/安裝說明.txt)。如果使用了自訂 `CODEX_HOME`，應將技能放在其 `skills` 子目錄下。

**03. 在 Codex 下指令**

```text
使用 $visual-story-site，根據我提供的角色、圖片與品牌素材，
建立手機優先、支援電腦版的互動展示網站，
保留原始素材，附上檢查結果與未完成項目。
```

<details>
<summary><b>🧪 開發者：檢查示範網站與工具</b></summary>
<br />

```bash
python community/scripts/test_skill.py
python community/scripts/check_site.py --site community/assets/starter-site --strict
python community/scripts/asset_manifest.py scan --input YOUR_MEDIA_DIRECTORY --output asset-manifest.json
```

> Python 回歸測試與靜態檢查不代表「已完成公開網址部署」或「所有瀏覽器都經過實測」。驗證範圍與限制記錄於 [VERIFICATION.md](docs/VERIFICATION.md)。

</details>

## ✦ 專案架構 · Project map

```text
Visual-Story/
├── README.md                        ← GitHub 首頁
├── docs/
│   ├── media/                       ← 品牌主圖與原創實測示範圖
│   ├── LICENSING.md                 ← 公開預覽與授權現況
│   └── VERIFICATION.md              ← 已驗證 / BLOCKED / NOT_RUN
└── community/
    ├── SKILL.md                     ← AI Agent Skill 入口
    ├── agents/                      ← Agent 設定
    ├── assets/starter-site/         ← HTML / CSS / JS 示範網站
    ├── references/                  ← 視覺、場景、網頁實作規範
    ├── scripts/                     ← 素材盤點、網站檢查、回歸測試
    └── install/                     ← Windows 安裝說明與腳本
```

## ✦ 驗收與版本 · Build confidence

| 檢查 | 狀態 | 說明 |
| --- | --- | --- |
| Python 回歸測試 | **4 / 4 PASS** | 2026-11-24 本機測試紀錄，非即時 CI |
| 網站靜態檢查 | **PASS** | 0 error、0 warning |
| JavaScript 語法檢查 | **PASS** | `node --check` |
| 手機與電腦版 | **PASS（受限模擬）** | 已測 320／390／768／1440 px，詳見記錄 |
| 真實 URL 完整瀏覽器測試 | **BLOCKED** | 測試環境限制，未視為通過 |
| Windows 原生安裝與遠端網站發布 | **NOT_RUN** | 尚未執行 |

## ✦ 授權與產品方向 · Licensing

此倉庫是 **Community 公開預覽（source-available preview）**，尚未選定或發布開源授權條款；**公開可閱讀程式碼，不代表已提供商業再散布的授權**。如需商業使用或二次發行，請先確認權利與適用條款。詳情見 [LICENSING.md](docs/LICENSING.md)。

Visual Story 的專業功能與商業收費模式仍在規劃中；本倉庫目前只宣告已經提供的能力，**不以未完成的 Pro 功能作為現有商品販售**。

---

<div align="center">

**VISUAL STORY** · *From imagination to interaction.*

<sub>Build visuals. Tell stories. Ship real interfaces.</sub>

<br /><br />

[回到頂端 ↑](https://github.com/Allen-Zhi-Ming/Visual-Story#readme)

</div>