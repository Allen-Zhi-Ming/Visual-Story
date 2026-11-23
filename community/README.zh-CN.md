# Visual Story Community 技能

[English](README.md) · **简体中文** · [繁體中文](README.zh-TW.md)

这是可安装的公开预览。技能入口为 [`SKILL.md`](SKILL.md)，技能名称 `visual-story-site`；演示站默认英文，可切换简体和繁体中文。

## 安装

- **Codex：** 将完整 `community/` 复制至 `${CODEX_HOME:-$HOME/.codex}/skills/visual-story-site`。Windows 默认目录是 `%USERPROFILE%\.codex\skills\visual-story-site`，自定义 `CODEX_HOME` 时请对应调整。
- **Windows 安装：** 参照 [`install/INSTALL.zh-CN.md`](install/INSTALL.zh-CN.md)，使用前将 `.bat.txt` 改名。本次未在 Windows 实机验证。
- **网页演示：** 打开 [`assets/starter-site/index.html`](assets/starter-site/index.html)，用顶部语言菜单切换。无需付费 API 密钥。
- **工具需求：** Python 3.9+；Pillow 和 ffprobe 仅在读取部分媒体尺寸时使用。

```bash
python scripts/test_skill.py
python scripts/check_site.py --site assets/starter-site --strict
```

静态测试不能代替真实浏览器验收。参阅[验证记录](../docs/VERIFICATION.zh-CN.md)及[授权状态](../docs/LICENSING.zh-CN.md)。
