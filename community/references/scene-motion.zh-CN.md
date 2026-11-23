# 场景与动效设计

## 场景矩阵

每个区段记录：`scene_id / section / goal / asset_path / aspect / focal_point / text_safe_zone / motion / mobile_fallback / status`。将首页主视觉、作品场景、设计过程及 CTA 串联为连贯的叙事。

## 素材选型

| 媒体 | 适用场景 | 风险与降级 |
| --- | --- | --- |
| 静态图 / WebP / AVIF | 首页定格、角色介绍、作品卡片 | 语义化 alt、响应式裁切、占位尺寸 |
| 透明 PNG | 角色分层与精确合成 | 高分辨率占用内存，视情况转码或延迟加载 |
| MP4 / WebM | 需要叙事的场景和过场 | poster、muted/playsinline、延迟加载、移动数据流量 |
| CSS / JavaScript | 悬停、滚动、切换、区段揭示 | 键盘等效操作与减少动画模式 |

## 动效原则

- 动画要引导视线、解释信息或呈现场景，不为炫技而添加。
- 优先使用 `transform`、`opacity`；滚动观察采用 IntersectionObserver 或节流的 requestAnimationFrame，避免昂贵的循环。
- 自动播放背景视频需 `muted playsinline`，并为浏览器限制、省电模式及资源缺失提供静态 poster。
- 开启 `prefers-reduced-motion: reduce` 后网站仍须完整可用。
- 视频亮暗变化不能影响标题的可读性。

## 输出检查

逐场景核对角色一致性、电脑／手机独立裁切，以及所有视频资源是否真实存在。
