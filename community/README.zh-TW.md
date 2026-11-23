# Visual Story Community 技能

[English](README.md) · [简体中文](README.zh-CN.md) · **繁體中文**

這是可安裝的公開預覽。技能入口是 [`SKILL.md`](SKILL.md)，技能名稱 `visual-story-site`；展示站預設英文，可切換簡體與繁體中文。

## 安裝

- **Codex：** 將整個 `community/` 放入 `${CODEX_HOME:-$HOME/.codex}/skills/visual-story-site`。Windows 預設路徑為 `%USERPROFILE%\.codex\skills\visual-story-site`，自訂 `CODEX_HOME` 則依設定調整。
- **Windows 安裝：** 參考 [`install/安裝說明.txt`](install/%E5%AE%89%E8%A3%9D%E8%AA%AA%E6%98%8E.txt)，執行前將 `.bat.txt` 改名。本次未在 Windows 實機執行。
- **網頁示範：** 開啟 [`assets/starter-site/index.html`](assets/starter-site/index.html)，使用上方語言選單切換。不需要付費 API 金鑰。
- **工具需求：** Python 3.9+；Pillow 和 ffprobe 僅在解析部分媒體尺寸時選用。

```bash
python scripts/test_skill.py
python scripts/check_site.py --site assets/starter-site --strict
```

靜態測試不能替代正式瀏覽器驗收。參考[驗收紀錄](../docs/VERIFICATION.zh-TW.md)與[授權狀態](../docs/LICENSING.zh-TW.md)。
