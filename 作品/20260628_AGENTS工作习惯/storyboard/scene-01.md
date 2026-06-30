# Scene 01｜0:00-0:15 前 15 秒插画故事版

根据脚本前 15 秒，生成一张横屏 16:9 的 4x4 故事版分镜图，用于审核开场大字报和厨房比喻演示的视觉方向。

这一段不生成具体真人脸。真人部分只做「真人口播占位区」，后期用实拍画面替换。整体色调匹配当前真人拍摄背景：偏黄色暖光、米白信息板、暖黄/橙色点缀、深灰粗体字。画面不要冷紫蓝，不要赛博风，不要复杂背景。

## 核心口播

你好啊朋友们，今天这期可能会让你的 AI Agent 少犯一半的傻。很多人用 Agent 的方式，就像请人来家里做饭，但不告诉他米在哪、盐在哪、哪口锅能用。这个人越积极，你越害怕。

## 分镜规格

| 项目 | 规格 |
| --- | --- |
| 场景编号 | scene-01 |
| 时长 | 15 秒 |
| 比例 | 横屏 16:9 |
| 分镜网格 | 4 行 x 4 列，共 16 格 |
| 每格比例 | 每格都按 16:9 构图 |
| 人物策略 | 不生成具体真人脸，只预留真人拍摄区 |
| 视觉模板 | A 开场大字报 + B 左人右图演示 |
| 色调 | 暖黄、米白、橙色、深灰字 |

## 16 格分镜

| 格 | 时间 | 画面 | 剪辑目的 |
| ---: | --- | --- | --- |
| 01 | 0:00-0:01 | 暖黄色实拍背景感，中央预留真人站位，背后出现超大主题字 `AGENT 少犯傻`。 | 开头 1 秒抓主题。 |
| 02 | 0:01-0:02 | 大字报强化，主题字加深灰阴影，旁边弹小字 `先给规矩`。 | 让观众知道这条讲 Agent 规则。 |
| 03 | 0:02-0:03 | 真人占位仍在前景，背后加一个简单文件图标，文件名 `AGENTS.md`。 | 提前埋主题物件。 |
| 04 | 0:03-0:04 | 画面切成左人右图版式，左侧真人口播占位框，右侧出现米白信息板。 | 从大字报切到解释区。 |
| 05 | 0:04-0:05 | 右侧信息板标题 `像请人做饭`，卡通小人穿围裙、拿锅铲站在厨房门口。 | 建立生活化比喻。 |
| 06 | 0:05-0:06 | 卡通小人表情困惑，右侧厨房柜门半开，头顶问号。 | 让“没说清楚”有画面。 |
| 07 | 0:06-0:07 | 弹出第一个贴纸：米缸，上方留字 `米在哪？`。 | 对应“不告诉他米在哪”。 |
| 08 | 0:07-0:08 | 弹出第二个贴纸：盐罐，上方留字 `盐在哪？`。 | 对应“不告诉他盐在哪”。 |
| 09 | 0:08-0:09 | 弹出第三个贴纸：两口锅，一个炒锅一个汤锅，上方留字 `用哪口锅？`。 | 对应“哪口锅能用”。 |
| 10 | 0:09-0:10 | 三个贴纸横向排列：米缸、盐罐、两口锅，小人站在旁边更困惑。 | 汇总“三个没说清”。 |
| 11 | 0:10-0:11 | 小人突然很积极，举起锅铲准备冲进厨房。旁边弹字 `太积极`。 | 对应“这个人越积极”。 |
| 12 | 0:11-0:12 | 中央弹橙红色暂停牌，小人被拦住。 | 表达“越积极越害怕”。 |
| 13 | 0:12-0:13 | 暂停牌旁边出现规矩纸，标题 `先看规矩`。 | 从问题转向解决办法。 |
| 14 | 0:13-0:14 | 规矩纸放大，标题变成 `AGENTS.md`，贴在厨房门口。 | 点出主题文件。 |
| 15 | 0:14-0:14.5 | 左侧真人占位区 + 右侧 `AGENTS.md` 规矩纸，底部留字幕安全区。 | 给后一句转场留空间。 |
| 16 | 0:14.5-0:15 | 收束成简洁画面：`AGENTS.md = 进门先看的规矩`，下方保留米缸、盐罐、锅三个小图标。 | 形成 15 秒闭环，方便继续接后文。 |

## 给 image2 的生图提示词

Create a single storyboard sheet for Scene 01, 15 seconds, horizontal 16:9 short-video opening sequence.

Grid: 4 rows x 4 columns, 16 panels total, every panel is composed as 16:9, no gaps between panels. Add a small black label in the top-left of each panel with white panel number 1-16. Add a small black label in the top-right of each panel with white duration labels: panels 1-14 are 1s, panel 15 is 0.5s, panel 16 is 0.5s.

Important: do not draw a realistic human face. The real presenter will be added later from live footage. In panels that need the presenter, show only a clean placeholder area labeled “真人口播区” or a simple silhouette/empty frame on the left or center. Do not create a new character face.

Visual style: clean warm educational short-video storyboard, Chinese social media explainer style, warm yellow indoor lighting, cream white information cards, orange and warm yellow accents, dark gray bold typography, friendly cartoon stickers, simple high-contrast layout. Avoid cold purple-blue cyberpunk lighting. Avoid clutter.

Scene summary: The opening explains that using an AI Agent without AGENTS.md is like inviting someone to cook at home without telling them where the rice, salt, or usable pot is. The visuals start with a big-topic poster, then switch to a left-presenter/right-illustration layout with a funny kitchen metaphor.

Continuity is critical: keep the same warm color palette, same kitchen cartoon style, same small apron-wearing cartoon helper, same rice jar, salt jar, two pots, kitchen doorway, and AGENTS.md rule paper across panels. The cartoon helper should be simple, cute, and slightly confused, not exaggerated or silly.

Panels:
1. 1s - Warm yellow studio-like background, center presenter placeholder, huge bold text behind it: “AGENT 少犯傻”.
2. 1s - Same big poster composition, add smaller text “先给规矩”, strong warm yellow/orange text, dark gray shadow.
3. 1s - Same layout, add a simple document icon labeled “AGENTS.md” behind the presenter placeholder.
4. 1s - Cut to split-screen layout: left presenter placeholder frame, right cream-white information board.
5. 1s - Right board title “像请人做饭”, cartoon helper wearing apron and holding spatula at kitchen doorway.
6. 1s - Cartoon helper looks confused, half-open kitchen cabinet, question mark above head.
7. 1s - Rice jar sticker pops up, leave readable space for “米在哪？”.
8. 1s - Salt jar sticker pops up, leave readable space for “盐在哪？”.
9. 1s - Two pots sticker pops up, one wok and one soup pot, leave readable space for “用哪口锅？”.
10. 1s - Rice jar, salt jar, and two pots line up together, cartoon helper confused beside them.
11. 1s - Cartoon helper suddenly becomes over-enthusiastic, raises spatula and rushes toward kitchen, small label “太积极”.
12. 1s - Orange-red stop sign pops in the center, stopping the helper, warm comedic timing.
13. 1s - A rule paper appears beside the stop sign, title “先看规矩”.
14. 1s - Rule paper zooms in and becomes “AGENTS.md”, pasted on the kitchen door.
15. 0.5s - Split-screen summary: left presenter placeholder, right AGENTS.md rule paper, keep bottom subtitle safe area.
16. 0.5s - Clean final summary card: “AGENTS.md = 进门先看的规矩”, with rice jar, salt jar, and pot icons below.

Negative constraints: no realistic human face, no extra logos, no watermarks, no unreadable gibberish text, no distorted hands, no cold blue-purple cyberpunk style, no cluttered background, no random clothing changes, no inconsistent kitchen props, no text outside the requested Chinese labels.

## 剪辑建议

- 0:00-0:03 用大字报开场，实拍真人站中间，字在身后或前景叠加。
- 0:04 开始切左人右图，右侧贴纸按口播节奏逐个弹出。
- `米在哪？`、`盐在哪？`、`用哪口锅？` 三个问题要跟口播严格对齐。
- `太积极` 和暂停牌可以做一个轻微“砰”的弹出音效。
- 0:14 以后用 `AGENTS.md = 进门先看的规矩` 承接到下一句“因为他不是不会干活……”

## 负向提示词

- 不生成真人脸
- 不生成复杂厨房实景
- 不要冷紫蓝赛博风
- 不要品牌 Logo
- 不要水印
- 不要大段文字
- 不要乱码文字
- 不要过度夸张搞怪
