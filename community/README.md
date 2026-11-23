# Visual Story Community Skill

[**English**](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md)

This is an installable public preview, with its canonical skill at [`SKILL.md`](SKILL.md) (skill name: `visual-story-site`). The demo website defaults to English and lets users switch to Simplified or Traditional Chinese.

## Installation

- **Codex:** Copy the entire `community/` directory into `${CODEX_HOME:-$HOME/.codex}/skills/visual-story-site`. On Windows use `%USERPROFILE%\.codex\skills\visual-story-site`, or your custom `CODEX_HOME`.
- **Windows setup:** See [`install/INSTALL.en.md`](install/INSTALL.en.md) and rename the `.bat.txt` scripts before use. Windows execution has not been verified here.
- **Browser demo:** Open [`assets/starter-site/index.html`](assets/starter-site/index.html), then select your language. No paid API keys are required.
- **Tools:** Python 3.9+; Pillow and ffprobe are optional when inspecting media dimensions.

```bash
python scripts/test_skill.py
python scripts/check_site.py --site assets/starter-site --strict
```

Static checks cannot replace live browser or deployment tests. For evidence and licensing, see [verification](../docs/VERIFICATION.md) and [licensing](../docs/LICENSING.md).
