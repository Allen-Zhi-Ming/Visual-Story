# Website Engineering and Verification

## Implementation Rules

1. Inspect existing entry points, dependencies, images, fonts, routes and completed sections. Preserve working functions and content; respect the existing framework. For a new static project, use the bundled starter.
2. Define design tokens and semantic content sections before adding animations. Motion must not undermine information hierarchy.
3. Every button, navigation link, menu and form needs a real action. Do not add non-functional "submit" forms when no backend exists. Use verified contact destinations if available.
4. Test mobile 320–430 px, tablet 768–1024 px, desktop 1280–1600 px for overflow, text wraps, image crop, touch targets, menu controls and typography.
5. Reference real, authorized local media only. Do not misrepresent third-party screenshots as user work; minimize unstable external dependencies.
6. Before deployment, run Lighthouse and real browser testing when available. If a browser is unavailable, mark `NOT_RUN`; static checks alone cannot prove visual correctness.

## Reproducible Local Commands

```bash
python scripts/asset_manifest.py scan --input ./project/assets --output ./project/asset-manifest.json
python scripts/check_site.py --site ./project --output ./project/site-check.json
python -m http.server 8000 --directory ./project
```

`asset_manifest` inventories file properties and SHA-256; it does not verify licensing or image semantics. `check_site` validates static HTML, local resources, anchor IDs, alt text, video markup and reduced-motion support; it is not a layout or JavaScript runtime test.

## Acceptance Evidence

| Area | Observable evidence | Result |
| --- | --- | --- |
| Media | Paths, hashes, formats, missing files | PASS / FAIL / NOT_RUN |
| Content | Actual sections, non-fictitious brand copy | PASS / FAIL / NOT_RUN |
| RWD | Real mobile/tablet/desktop screenshots | PASS / FAIL / NOT_RUN |
| Interaction | Navigation, filters, CTA, video fallback | PASS / FAIL / NOT_RUN |
| Accessibility | Keyboard, alt text, reduced motion | PASS / FAIL / NOT_RUN |
| Performance | Load time, media weight, scroll response | PASS / FAIL / NOT_RUN |

Keep a prior commit or backup for safe rollback; after a failure, apply the smallest fix and rerun tests.
