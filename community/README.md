# Visual Story Community Skill

可執行的公開預覽版本。Skill 入口為 [`SKILL.md`](SKILL.md)；技能 ID 為 `visual-story-site`，保持與前一版相容。

## 安裝

- **Codex**：將本 `community/` 資料夾複製／命名到 `$CODEX_HOME/skills/visual-story-site`（預設 `$HOME/.codex/skills/visual-story-site`）。Windows 使用 `install` 下的說明與兩個 `.bat.txt` 腳本。
- **一般瀏覽器示範**：開啟 `assets/starter-site/index.html`。
- **工具**：需要 Python 3.9+；素材掃描圖片尺寸需要可選的 Pillow；影片尺寸需要可選的 ffprobe。沒有額外依賴時，基本 SHA-256 與檔案清單仍可執行。

### 快速檢查

```bash
python scripts/test_skill.py
python scripts/check_site.py --site assets/starter-site --strict
```

注意：腳本提供靜態檢查，不會模擬瀏覽器、多媒體生成或遠端網站部署。請依 `docs/VERIFICATION.md` 檢視已驗證／未驗證邊界。
