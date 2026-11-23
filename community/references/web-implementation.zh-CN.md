# 网站工程与验收

## 实施规则

1. 先检查原项目入口、依赖、图片、字体、路由、资源加载及已完成区块，保留已有功能。优先使用原技术栈；新建静态项目可使用 bundled starter。
2. 定义设计变量，优先完成语义化内容与页面结构，再加入动画；不得因动效牺牲可用性。
3. 每个按钮、菜单、链接和表单都必须能实际工作。没有后端时不得放置伪提交表单；可使用已验证的联系方式。
4. 在手机 320–430 px、平板 768–1024 px、电脑 1280–1600 px 检查折行、横向溢出、裁切、触控目标、菜单与字号。
5. 只使用真实存在且已获授权的媒体，不能将他人设计冒充客户案例；尽量减少不可控外部依赖。
6. 上线前在可用条件下使用真实浏览器及 Lighthouse 检查；无法执行时标记 `NOT_RUN`，不能用静态检查冒充视觉验收。

## 可重复的本地命令

```bash
python scripts/asset_manifest.py scan --input ./project/assets --output ./project/asset-manifest.json
python scripts/check_site.py --site ./project --output ./project/site-check.json
python -m http.server 8000 --directory ./project
```

`asset_manifest` 只统计文件信息与 SHA-256，不会判断版权或图像含义。`check_site` 检查静态 HTML、资源引用、页面锚点、替代文本、视频标签与减少动画模式；不能替代真实浏览器的布局与 JS 运行测试。

## 验收证据

| 维度 | 可观察证据 | 状态 |
| --- | --- | --- |
| 素材 | 路径、SHA-256、格式、缺失文件 | PASS / FAIL / NOT_RUN |
| 内容 | 核心区块与真实文案 | PASS / FAIL / NOT_RUN |
| RWD | 手机／平板／桌面真实画面 | PASS / FAIL / NOT_RUN |
| 交互 | 导航、筛选、CTA、视频降级 | PASS / FAIL / NOT_RUN |
| 无障碍 | 键盘、替代文本、减少动画 | PASS / FAIL / NOT_RUN |
| 性能 | 首屏、媒体体积、滚动响应 | PASS / FAIL / NOT_RUN |

改版前保存 commit 或备份；测试失败时以最小改动修复并重新验证，必要时回滚。
