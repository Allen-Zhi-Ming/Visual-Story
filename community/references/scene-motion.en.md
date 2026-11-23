# Scene and Motion Design

## Scene Matrix

Each section records `scene_id / section / goal / asset_path / aspect / focal_point / text_safe_zone / motion / mobile_fallback / status`. Link the hero visual, project scenes, process/world building and CTA into a coherent narrative.

## Choosing Media

| Media | Best for | Risks and fallback |
| --- | --- | --- |
| Static / WebP / AVIF | Hero stills, character studies, project cards | Meaningful alt, responsive crop, reserved dimensions |
| Transparent PNG | Layers and precise character compositing | High-resolution memory use; convert or lazy-load |
| MP4 / WebM | Story sequences that cannot be done with CSS alone | Poster fallback, muted/playsinline, lazy loading, mobile bandwidth |
| CSS / JavaScript | Hover, scroll, switches and section reveals | Keyboard equivalents and reduced-motion behavior |

## Motion Rules

- Every animation should guide attention, explain change or reveal a scene; never add motion without purpose.
- Prefer `transform` and `opacity`. Use IntersectionObserver or throttled requestAnimationFrame for scroll; do not create redundant costly loops.
- Autoplay background video needs `muted playsinline`, a poster and a static fallback for browser restrictions, battery saver or missing media.
- `prefers-reduced-motion: reduce` must yield a **fully usable** page, not hidden content.
- Maintain title contrast when animated/video backgrounds change brightness.

## Output Checklist

Verify character consistency per scene, independent desktop/mobile crop choices and the actual existence of all referenced video assets.
