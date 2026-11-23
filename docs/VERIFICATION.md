# Verification Scope and Limitations

**English** · [简体中文](VERIFICATION.zh-CN.md) · [繁體中文](VERIFICATION.zh-TW.md)

Baseline: Visual Story Community Public Preview v1.0.0 · Checked: 2026-11-24.

| Item | Status | Scope |
| --- | --- | --- |
| Python regression | PASS | Four baseline tests: skill entrypoint, valid starter, missing asset, SHA-256 manifest |
| Static site checks | PASS | HTML/CSS/JS references, anchors, required meta, reduced-motion |
| JavaScript syntax | PASS | `node --check` baseline |
| Browser embedded DOM simulation | PASS | Chromium at 320 / 390 / 768 / 1440 px; no horizontal overflow; project filter and menu operations |
| Live `localhost` / `file://` loading | BLOCKED | Prior environment policy; not claimed as verified |
| Windows batch installer | NOT_RUN | Requires actual Windows device verification |
| Real AI character/image/video generation | NOT_RUN | No paid generation tool integration |
| GitHub Pages / public site hosting | NOT_RUN | Only source code is stored on GitHub |

## Safety Evidence

- Original third-party media was never uploaded.
- Community scripts do not store payment API keys or credentials.
- Source publication is **not** proof of actual media generation, commercial licensing or live deployment.
- For an existing production site, back up and test on an isolated branch before replacement.

## Public vs. Private

The Community edition includes the starter, scanners, static checks, three technical references and skill entrypoint. The separate private bundle may contain reference-video analysis and more detailed prompt recipes. **Those private documents are not evidence that paid Pro features have been implemented.**

## Internationalization update (v1.1.0)

Three languages have been added to repository documentation and the starter site's selectable UI. The original baseline claims above remain tied to v1.0.0; use this update's test results for the new language selector.

### v1.1.0 internationalization validation

- **PASS:** `python community/scripts/test_i18n.py` (4/4: default English, translation keys, localized files, documentation links).
- **PASS:** original `test_skill.py` (4/4), static website check (0 errors, 0 warnings) and `node --check` for both JavaScript files.
- **PASS (embedded browser simulation):** Chromium interactive language switching, filters and mobile navigation at widths **320 / 390 / 768 / 1440 px**, all with no horizontal overflow (16 locale-and-viewport measurements).
- **BLOCKED for real URL reload persistence:** environment disallowed browser navigation to test URL. The locale storage code is implemented but reload persistence has not been verified through a real served origin here.
- **NOT_RUN:** Windows installer and production hosting.

## Visual quality revision — v1.3 candidate (2026-11-24)

- Original SVG/CSS-only character, perfume bottle and jacket visuals have been replaced with three original AI concept images and distinct editorial layouts. This does **not** constitute evidence of real merchandise, brand clients or a general-purpose visual generator.
- QA (local): Python skill 4/4 PASS, translations 4/4 PASS, static integrity 4/4 PASS; four-page site checker PASS; `node --check` PASS; Chromium inline-mode 16/16 screen/interaction checks PASS (320, 390, 768, 1440px).
- Browser media-load screenshot smoke: 390/1440px local DOM previews rendered with inlined WebP assets; images decoded and no horizontal overflow. **Not equivalent to a real network-loaded production E2E**.
- localhost HTTP navigation: BLOCKED by the execution environment. GitHub CI HTTP browser test and remote production test still need independent verification on the exact PR commit.
