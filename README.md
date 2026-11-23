# Visual Story

**AI 視覺素材 → 動態網站製作｜Community 公開預覽 v1.0.0**

這個專案將使用者提供的角色、產品、圖片與品牌素材，整理成可重複執行的 **Agent Skill** 工作流程，協助製作手機優先、電腦完整的互動展示網站。技能本身不會自動呼叫付費生成服務，也不等於網站已部署。

## 目前可實際使用

| 功能 | 狀態 |
| --- | --- |
| Agent Skill 入口 `visual-story-site` | 已提供 |
| 品牌／角色外觀一致性規範 | 已提供 |
| 動態 RWD 展示網站（HTML/CSS/JS） | 已提供，示範內容非真實客戶案例 |
| 素材清單與 SHA-256（`asset_manifest.py`） | 已實作 |
| 靜態資源、錨點與基本可及性檢查（`check_site.py`） | 已實作 |
| Python 回歸測試（`test_skill.py`） | 已實作 |
| 自動生圖、付費 API、遠端建站、商業授權管理 | **未提供** |

## 下載／使用

1. 取得倉庫原始碼（GitHub「Code → Download ZIP」或 Git Clone）。
2. 將 `community/` 資料夾放入 Codex 的 skills 目錄，並命名成 `visual-story-site`：
   - Windows：`%USERPROFILE%\.codex\skills\visual-story-site`（或 `CODEX_HOME\skills\visual-story-site`）
   - macOS / Linux：`${CODEX_HOME:-$HOME/.codex}/skills/visual-story-site`
3. 可依照 [`community/install/安裝說明.txt`](community/install/安裝說明.txt) 使用 Windows 安裝腳本；這些腳本以 `.bat.txt` 保存，須自行改名並執行。
4. 重新啟動 Codex，輸入：**「使用 $visual-story-site，用我的素材製作手機優先的互動展示網站，附上驗收證據。」**

不使用 Codex 也可在瀏覽器直接開啟 [`community/assets/starter-site/index.html`](community/assets/starter-site/index.html) 查看可互動的原創示範網站。這不是影片網站的複製品。

## 自行驗收

```bash
python community/scripts/test_skill.py
python community/scripts/check_site.py --site community/assets/starter-site --strict
python community/scripts/asset_manifest.py scan --input YOUR_MEDIA_DIRECTORY --output asset-manifest.json
```

第一條是回歸測試；第二條是**靜態檢查**，不能代替完整瀏覽器或部署測試。檢查範圍與未完成項目見 [`docs/VERIFICATION.md`](docs/VERIFICATION.md)。

## 商業授權

本倉庫目前是 **公開預覽（source-available preview）**，不是已選定 MIT／Apache／GPL 的開源專案，也尚未提供 Pro 商品或授權收費系統。詳見 [`docs/LICENSING.md`](docs/LICENSING.md)。

## 來源與權利

參考使用者提供的網站流程影片，重新設計**原創工具與示範網站**。沒有上傳原影片、影片中的角色或第三方圖像。不要把第三方素材、品牌商標或未經授權的參考網站內容直接放入商業成品。

本專案的 GitHub 倉庫是原始碼與技能發行位置，並非已啟用的正式網站服務。
