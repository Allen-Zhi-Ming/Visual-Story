# 验证范围与限制

[English](VERIFICATION.md) · **简体中文** · [繁體中文](VERIFICATION.zh-TW.md)

基线版本：Visual Story Community Public Preview v1.0.0，测试日期：2026-11-24。

| 项目 | 状态 | 范围 |
| --- | --- | --- |
| Python 回归测试 | PASS | 原有四项：技能入口、有效示例、缺失资源、SHA-256 清单 |
| 静态检查 | PASS | HTML/CSS/JS 引用、页面锚点、Meta、减少动画 |
| JavaScript 语法 | PASS | `node --check` 基线 |
| 内嵌 DOM 浏览器模拟 | PASS | Chromium 320 / 390 / 768 / 1440 px，无横向溢出、菜单与筛选交互 |
| `localhost` / `file://` 真实加载 | BLOCKED | 原环境限制，不视为通过 |
| Windows 安装 | NOT_RUN | 需要 Windows 设备实测 |
| AI 角色／图片／视频生成 | NOT_RUN | 没有接入付费生成服务 |
| GitHub Pages／正式托管 | NOT_RUN | 仅将源代码发布到 GitHub |

原始第三方视频及素材未上传；公开源代码不等于已完成商业授权或正式网站上线。

### v1.1.0 多语言更新
新增三语仓库文件及演示站语言选择器；上述原始基线仍属 v1.0.0，新增语言功能请以本次测试证据为准。

### v1.1.0 多语言补充验收

- **PASS：** `test_i18n.py` 4/4；原 `test_skill.py` 4/4；静态检查 0 错误、0 警告；两份 JavaScript 语法检查通过。
- **PASS（内嵌浏览器模拟）：** Chromium 验证 320／390／768／1440 px，英文／简体／繁体切换、作品筛选及手机导航，16 组测试无横向溢出。
- **BLOCKED：** 通过真实网址重新加载以验证语言持久化，环境禁止连接；存储功能已实现，但本次没有完成真实来源的重新加载验证。
- **NOT_RUN：** Windows 原生安装及正式网站部署。
