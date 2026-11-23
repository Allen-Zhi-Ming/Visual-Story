# Visual Story v1.2.0 — release gates and rollback

## Deployment scope
- Project: `visual-story` on Vercel; Git source `Allen-Zhi-Ming/Visual-Story`; root: `community/assets/starter-site`; framework: Other/static.
- Production: `main`; protected Preview deployments can be generated from PR branches.
- This is a static demonstration website. Pro checkout, real orders, paid asset generation, SaaS and user data storage are NOT implemented.
- GitHub Actions CI should validate the source before merging; **a workflow file alone does not force GitHub to block merges or stop a direct push to main**. A branch ruleset and/or Vercel Deployment Checks is still necessary to enforce this. Verify actual policy before claiming release gate PASS.

## Tests
1. `python community/scripts/test_skill.py`
2. `python community/scripts/test_i18n.py`
3. `python tests/static_integrity.py`
4. `python tests/browser_smoke.py` (requires `pip install playwright==1.56.0` + `python -m playwright install chromium`; browser network permitted)
5. `node --check` on all site JS; browser checks cover English/default and 2 Chinese locales, 3 pages, keyboard navigation and reduced motion.

## Production checklist
- CI green for exact intended SHA.
- Vercel deployment state `READY` and correct `main` commit.
- Public URL returns homepage and three cases in an unauthenticated browser (otherwise BLOCKED).
- All three languages and demo interactions work on a narrow phone and desktop.
- Confirm accessibility and security headers if enabling forms or APIs.

## Rollback
- Prior production Git SHA: `b4a34c43848b81000dbd6c879b472d1082895958` (three-language main site before P1/P2).
- Use Vercel rollback to a verified prior production deployment, or Git revert of the exact merge commit. Do not force-push main.
- No database or external data migration: only HTML, CSS, JS and test/docs files.

## Important evidence boundaries
- `PASS`: source and smoke tests that actually execute.
- `NOT_RUN`: CI until GitHub Actions returns a run for this SHA; production browser externally until checked.
- `BLOCKED`: GitHub ruleset permissions or deployment protection if tools report denial.
