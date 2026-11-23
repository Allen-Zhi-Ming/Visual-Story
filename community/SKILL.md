---
name: visual-story-site
description: Turn supplied characters, product artwork, visual references, photos and video into cohesive, responsive, motion-rich portfolio and brand websites. Use when users need consistent character scenes, real media, live interactions and verifiable website delivery.
---

# Visual Story · Community Skill

[**English**](SKILL.md) · [简体中文](SKILL.zh-CN.md) · [繁體中文](SKILL.zh-TW.md)

Transform character/product materials into a verifiable website workflow: visual direction → scene planning → interactive specification → usable responsive website. Respect the user's existing stack, brand constraints and change boundaries.

## Edition and language

This public Community edition contains a usable static starter website, general design guidance, asset scanner and site checks. It does **not** ship third-party video assets, the private full package, paid image generation, or an implemented Pro platform. Public visibility does not grant a commercial license. **Default to English for new deliverables; respond in Simplified or Traditional Chinese when the user asks or supplies that language.** The starter website ships all three languages, defaults to English, and remembers user selection when storage is available.

## Inputs and operating modes

- **Assets available:** Inventory existing photos, videos, text and websites; do not regenerate assets without a reason.
- **Only concept/character:** Establish a style board, multi-view character lock, scene specifications and safe areas. Generate actual images only when tools allow it; otherwise report `NOT_GENERATED`, never claim images exist.
- **Existing website:** Inspect entry points, routes, assets and dependencies first. Add features without discarding working functions or verified content.

## End-to-end workflow

1. **Inventory.** Identify audience, purpose, required sections, available media, target devices and destination. Run `python scripts/asset_manifest.py scan --input <asset_dir> --output <work_dir>/asset-manifest.json` to record files, dimensions and SHA-256 without changing source files. State any assumptions.
2. **Visual system.** Define palette, type scale, spacing, character lock, proportions, materials and forbidden variations. Carry those anchors across viewpoints and scenes. See [visual-direction.md](references/visual-direction.en.md).
3. **Scene and motion matrix.** Plan hero, work, process/story, about and CTA: assets, source, camera, crop, text-safe area, motion and mobile fallback. Real videos are assets; CSS/JavaScript interactions must be implemented separately. See [scene-motion.md](references/scene-motion.en.md).
4. **Build.** Follow existing project tooling; for a fresh static prototype, use `assets/starter-site/`. Replace original demo content with real authorized media. Implement navigation, mobile layout, working controls, actual links and a reduced-motion alternative. Do not substitute a mockup for a working web page. Default English, offer English / 简体中文 / 繁體中文 when relevant.
5. **Verify.** Run `python scripts/check_site.py --site <site_dir> --output <work_dir>/site-check.json` then use an actual browser to test mobile (~390 px), tablet (~768 px), desktop (~1440 px), keyboard access, interactions, media failure and performance. Report static checks separately from real browser tests.
6. **Deliver safely.** Provide full source, asset inventory, verified behavior, NOT_RUN/BLOCKED gaps, instructions and rollback point. Never deploy, merge or replace protected user files without the required permission.

## Quality safeguards

- Design from the brand and actual media, not generic card templates. Borrow design principles from references, not third-party protected artwork or entire website layouts.
- Each claimed work/product must map to real assets; use CSS/SVG fallback if appropriate, never fake user portfolios or performance metrics.
- Preserve readable contrast, semantic alt text, keyboard access, `prefers-reduced-motion`, responsive typography and sensible video weight.
- Paid generation, external uploads and deployment must respect authorization and project restrictions.
- For commerce, preserve the actual garment colors, patterns, cut and pricing; measurable AOV improvements require testing, not invented percentages.

## References

- Character and visual system: [visual-direction.md](references/visual-direction.en.md)
- Scene and motion: [scene-motion.md](references/scene-motion.en.md)
- Website engineering and acceptance: [web-implementation.md](references/web-implementation.en.md)

## Required status report

Separate **implemented**, **tested**, **NOT_RUN** and **BLOCKED**. Include assets, pages, mobile/desktop results, working file paths, missing functionality and rollback. A feature is finished only with corresponding evidence.
