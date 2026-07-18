# Agent 权限风控｜剪映插入图包

## 已批准视觉基线

- 批准时间：2026-07-16。
- 风格名称：秋芝黑底极简演示风。
- 色彩基调：黑色或接近黑色背景，少量深蓝、冷紫；白色负责主要信息，黄色或橙色负责重点标签。
- 常规布局：左下圆形真人视频，主要截图、录屏或图表放在中间及右侧。
- 观点布局：黑底或模糊压暗截图上放全屏白色大字，可增加橙色短标签，允许不显示人物。
- 视觉限制：不使用密集全息实验室、3D 机器人、发光立方体、神经网络、空间网格和大量能量线。

## 长期参考图

- `.agents/skills/short-video-illustration-storyboard/assets/references/qiuzhi-black-stage/01-single-screen-demo.png`
- `.agents/skills/short-video-illustration-storyboard/assets/references/qiuzhi-black-stage/02-data-table.png`
- `.agents/skills/short-video-illustration-storyboard/assets/references/qiuzhi-black-stage/03-phone-demo.png`
- `.agents/skills/short-video-illustration-storyboard/assets/references/qiuzhi-black-stage/04-multi-screenshot-collage.png`
- `.agents/skills/short-video-illustration-storyboard/assets/references/qiuzhi-black-stage/05-fullscreen-title.png`

## 正式资产清单

| 资产 | 对应分镜 | 布局 | 用途 | 目标文件 | 状态 |
| --- | --- | --- | --- | --- | --- |
| 通用录屏底图 | 03—16 | `bottom-left-avatar-slot` | 黑底、左下圆形人物位、中间和右侧放截图或录屏 | `scene-04.png` | 已生成，待验收 |
| 沙箱解释图 | 10 | `bottom-left-avatar-slot` | 用简单边界、文件、箭头和短标签解释沙箱 | `scene-10.png` | 已生成，待验收 |
| 普通文档与 Git 对比图 | 17 | `bottom-left-avatar-slot` | 左侧普通文档恢复，右侧 Git 与远端仓库 | `scene-17.png` | 已生成，待验收 |
| 错误答案图标 | 02 | 透明 PNG | 聊天气泡和错误标记 | `icons/icon-01-wrong-answer.png` | 已生成，待验收 |
| Agent 操作文件图标 | 02 | 透明 PNG | Agent 操作文件夹并出现警示 | `icons/icon-02-agent-file-warning.png` | 已生成，待验收 |
| AGENTS.md 规则图标 | 03、18 | 透明 PNG | 文档、规则清单和盾牌 | `icons/icon-03-agents-rules.png` | 已生成，待验收 |
| 沙箱边界图标 | 03、18 | 透明 PNG | 文件位于边界框内 | `icons/icon-04-sandbox-boundary.png` | 已生成，待验收 |
| 备份硬盘图标 | 03、16、18 | 透明 PNG | 硬盘和恢复箭头 | `icons/icon-05-backup-drive.png` | 已生成，待验收 |
| Windows 文件历史记录图标 | 16 | 透明 PNG | Windows 文件夹、时钟和回退箭头 | `icons/icon-06-windows-file-history.png` | 已生成，待验收 |

## 生成记录

- 生成方式：主分镜与图标均使用内置图像生成；图标先生成纯绿幕底，再转为透明 PNG。
- `scene-04.png`：近黑色 16:9 通用舞台，左下保留紫色圆形真人位，右侧保留大面积截图和字幕空间。
- `scene-10.png`：用边界框、工作区内文件、工作区外受限文件和权限申请箭头解释沙箱，保留必要中文标签。
- `scene-17.png`：左右双栏对比普通文档与代码项目的恢复方式，保留必要中文标签。
- `icons/icon-01-wrong-answer.png`：错误回答气泡、叉号和警示标记。
- `icons/icon-02-agent-file-warning.png`：AI 操作文件夹并触发警示。
- `icons/icon-03-agents-rules.png`：`AGENTS.md` 规则清单与盾牌。
- `icons/icon-04-sandbox-boundary.png`：文件夹位于边界框内并带锁。
- `icons/icon-05-backup-drive.png`：外置硬盘、恢复箭头与时钟。
- `icons/icon-06-windows-file-history.png`：四格系统符号、文件夹、时钟与恢复箭头。

## 制作规则

- 完整分镜图为独立 `16:9` 横图。
- 左下圆形人物位由后期放入真人，不在生成图片中生成人脸。
- 普通字幕由剪映后期添加；概念图只保留理解关系所需的短标签。
- 真实 `AGENTS.md`、Codex 设置和 Mac 时间机器截图由用户后期放入通用底图。
