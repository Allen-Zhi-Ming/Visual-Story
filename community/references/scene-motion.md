# 場景 × 動態設計

## Scene Matrix

為每個區段產生：`scene_id / section / goal / asset_path / aspect / focal_point / text_safe_zone / motion / mobile_fallback / status`。可用角色多景別構成一條視覺敘事：首頁人物定場 → 作品視覺 → 世界觀／過程 → CTA。

## 不同媒體的適用條件

| 媒體 | 適用場景 | 風險與降級 |
| --- | --- | --- |
| 靜態圖／WebP／AVIF | 關鍵定格、角色介紹、作品集卡片 | 真實 alt、適應容器裁切、預留尺寸 |
| 透明 PNG | 精確合成、角色疊層 | 高解析度可能很重，視情況轉碼或局部載入 |
| MP4／WebM | 有情節的場景或過場，不能只靠 CSS 達成 | 預備 poster、muted/playsinline、lazy loading、行動裝置限制影片耗流 |
| CSS／JS 互動 | Hover、滾動變化、按鈕切換、章節顯示 | 保留鍵盤等效操作與 reduced-motion |

## 動效敘事原則

- 每段動畫要有意圖：引導視線、傳達段落切換或展示角色，而非為了炫技。
- `transform`、`opacity` 優先；滾動監控採 IntersectionObserver 或少量 requestAnimationFrame，不要重複建立昂貴循環。
- 背景影片無聲、自動播放時需 `muted playsinline`；當裝置／瀏覽器禁播、節能、檔案缺失時顯示 poster 或靜態主視覺。
- 停用動畫偏好（`prefers-reduced-motion: reduce`）要有完整可使用的網站，而非空白或被遮蔽的內容。
- 總是保留可閱讀文字的對比；影片暗部／亮部變化不得破壞標題辨識。

## 輸出檢查

比對每個場景的角色一致性；確認寬屏與手機獨立裁切策略；若無影片，不要產生指向不存在 MP4 的標籤。
