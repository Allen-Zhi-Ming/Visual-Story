# 網站工程與驗收

## 實作規則

1. 讀既有專案的入口、套件、圖片、字體、路由、資源載入與已完成區塊，不丟失原有內容。優先沿用既有語言及框架；新建靜態展示站可使用 bundled starter。
2. 建立設計 token，先完成內容區塊及語意結構，再加動效；不要讓動效主導不可用的資訊架構。
3. 所有按鈕、選單、連結、表單都有實際效果；尚無後端服務時不要放假提交表單。可以用可靠的本地導覽或連絡方式（若取得真實資訊）。
4. 手機 320–430 px、平板 768–1024 px、桌面 1280–1600 px 檢查換行、橫向溢出、主視覺裁切、觸控目標、選單可用性及字級。
5. 媒體只引用存在的本地文件或明確允許的來源；不要把其他人的畫面當成本人產品。避免不可控的外部依賴。
6. 上線前依用戶要求做 Lighthouse 或其他真實瀏覽器測試；沒有瀏覽器就明確標記 `NOT_RUN`，不得憑靜態檢查假定視覺無誤。

## 可重複的本機測試

```
python scripts/asset_manifest.py scan --input ./project/assets --output ./project/asset-manifest.json
python scripts/check_site.py --site ./project --output ./project/site-check.json
python -m http.server 8000 --directory ./project
```

`asset_manifest` 不會判斷著作權或圖像語意，只計算檔案元資料與 SHA-256。`check_site` 檢查靜態 HTML、引用資源、導覽 ID、替代文字、影片標籤與 reduced-motion；無法替代真實瀏覽器的 layout／JS 執行測試。

## 驗收證據

| 維度 | 観測項目 | 狀態 |
| --- | --- | --- |
| 素材 | 路徑、SHA-256、格式、缺檔 | PASS / FAIL / NOT_RUN |
| 內容 | 核心區塊與品牌文案、不可虛構 | PASS / FAIL / NOT_RUN |
| RWD | 手機／平板／桌面實際畫面 | PASS / FAIL / NOT_RUN |
| 操作 | 導覽、互動、影片降級、CTA | PASS / FAIL / NOT_RUN |
| 無障礙 | 鍵盤、替代文字、降低動畫 | PASS / FAIL / NOT_RUN |
| 效能 | 首屏、媒體體積、滾動反應 | PASS / FAIL / NOT_RUN |

改版時保留前一版本的 commit／備份；測試失敗後以最小修改重驗，必要時可回滾。
