# C20｜为什么 Codex 要先 Plan｜剪映插图包

生成方式：`$imagegen` 内置生图工具。  
质量要求：按 High / final production asset 方向优化提示词。  
画面规格：横屏 `16:9`，实际输出 `1672 x 941`，底部预留字幕安全区。

## 生图预警与规避

- 真实中文大字只放在 `scene-01`，其余画面尽量不用可读文字，避免 AI 生成乱码字。
- `scene-05`、`scene-07` 右侧已留大面积空白，后期直接叠实际屏幕录制或原始截图。
- 左下角真人圆头像是生成的示意头像，不是本人照片；如果要更像本人，后续需要用 `素材库/人物形象/张半蛋/` 的真实参考图重做头像版。
- 所有图都避免了 Codex / OpenAI / GitHub 等外网服务 Logo 和可读界面文字，降低审核风险。

## 插图清单

| 编号 | 文件 | 建议插入位置 | 建议停留 | 对应内容 | 剪辑用途 |
| --- | --- | --- | ---: | --- | --- |
| scene-01 | `scene-01.png` | 开头真人口播背景 | 6-8s | “AI 别急着开工 / 先问糖和冰” | 放在真人身后做重点提醒。 |
| scene-02 | `scene-02.png` | 奶茶店类比开始 | 8-10s | “来杯奶茶……五分糖还是全糖？要不要冰？” | 用奶茶选项表现“没说清楚只能猜”。 |
| scene-03 | `scene-03.png` | 类比收束到 AI | 6-8s | “有些任务不是 AI 不会做，而是要先让它帮你想清楚。” | 从混乱想法到清晰计划。 |
| scene-04 | `scene-04.png` | 做饭小工具案例开始 | 6-8s | “我最近用 AI 在做一个做饭小工具……” | 建立菜谱收纳工具场景。 |
| scene-05 | `scene-05.png` | 第一次直接做 + 第二次 Plan 的长演示段 | 20-35s | 输入提示词、盲猜功能、Plan 提问、改成 10 道菜、再执行 | 右侧叠实际操作演示视频，左下保留圆头像。 |
| scene-06 | `scene-06.png` | Plan 模式价值总结 | 7-9s | “先让 AI 把你没想清楚的地方问出来……” | 强化“先问清楚，再执行”。 |
| scene-07 | `scene-07.png` | 前后两版结果对比 | 8-12s | “没有 Plan 的版本 vs 用了 Plan 的版本” | 右侧叠两张实际屏幕原图，左下保留圆头像。 |
| scene-08 | `scene-08.png` | 使用边界与结尾前 | 8-10s | “不是所有小事都需要 Plan……” | 表现小事直接做，模糊任务先 Plan。 |

## 剪辑备注

- `scene-01` 适合做开头真人身后背景，不建议再叠太多贴纸。
- `scene-05` 的右侧空白区域最大，适合放完整操作录屏；录屏宽度可覆盖右侧浏览器框。
- `scene-07` 右侧是两个大屏占位，适合左右各放一张原始操作图。
- 字幕统一放底部中间，避开左下头像和右侧屏幕主体。

## 优化后生图 Prompt

### scene-01｜开头文字背景图

```text
Use case: illustration-story
Asset type: 16:9 Jianying/CapCut insert-frame background, final high-quality production asset
Primary request: Generate scene-01 for a Chinese short video about why Codex should Plan first. This is the opening full真人口播 background; the presenter will stand in front of it, so it should work as a clear key-reminder background.
Scene/backdrop: warm modern creator studio background, cream wall, soft yellow light, subtle orange accents, clean desk hints, slight depth but not busy.
Subject: a large central reminder board behind the presenter, with milk-tea and planning visual cues: milk tea cup silhouette, sugar cubes, ice cubes, pearl bubbles, small checklist icon.
Text (verbatim): "AI别急着开工" and "先问糖和冰".
Constraints: horizontal 16:9, readable Chinese headline only, no logos, no watermarks, no extra text, bottom subtitle safe area.
Avoid: distorted Chinese characters, fake brand names, clutter, dark background.
```

### scene-02｜奶茶店类比

```text
Warm milk tea shop counter. A customer gives a vague order while the clerk hesitates with an empty cup. Around them are visual icons for sugar, ice, pearls, coconut jelly, and cup size. Horizontal 16:9, high-quality polished editorial illustration, warm cream and orange palette, no readable text, no logos, no subtitles, bottom subtitle safe area.
```

### scene-03｜先想清楚再执行

```text
Friendly AI assistant pauses before execution and organizes a messy thought cloud into a clear checklist, blueprint, and tidy building blocks. Left-to-right flow: unclear idea -> AI clarification -> execution-ready plan. Horizontal 16:9, high-quality warm editorial illustration, no readable text, no logos, no subtitles.
```

### scene-04｜做饭小工具

```text
Cozy kitchen table with laptop or tablet showing a personal recipe organizer UI as visual food cards, surrounded by tomatoes, eggs, tofu, scallions, cutting board, pot, and recipe cards. Horizontal 16:9, high-quality warm editorial illustration, UI has icons and cards only, no readable text, no logos.
```

### scene-05｜实操演示背景

```text
Warm creator workspace background for screen-demo overlay. Right 70% remains a large clean blank screen-safe area with faint browser/app frame only. Bottom-left has a small circular Chinese male creator avatar, about 13% width, warm-orange border, subtle shadow. Left/middle has small non-text icons for vague prompt, AI guessing, Plan questions, revised recipes, clearer recipe cards. Horizontal 16:9, high quality, no readable UI text, no logos.
```

### scene-06｜Plan 的真正好处

```text
Conceptual summary: before execution, AI asks unclear parts, confirms real intention, then works. Friendly AI assistant with question cards and magnifying glass transforms fuzzy task cloud into clear blueprint and building blocks, with subtle cooking-tool hints. Bottom-left circular creator avatar. Horizontal 16:9, high-quality warm editorial illustration, no readable text, no logos.
```

### scene-07｜前后两版对比

```text
Before-and-after comparison background for overlay. Right 72% has two large side-by-side blank screen placeholders: left subtly chaotic, right cleaner and planned, both mostly blank for real screenshots. Bottom-left circular Chinese male creator avatar with warm-orange border. Horizontal 16:9, high quality, no readable text, no logos, clean subtitle-safe bottom.
```

### scene-08｜哪些任务需要 Plan

```text
Warm desk split into two visual paths without text. Left path: tiny quick tasks with pencil, short note, lightning bolt, direct arrow. Right path: larger fuzzy task with folder, documents, connected sticky notes, question mark, then organized plan board and tidy output blocks, plus saved-time clock cue. Horizontal 16:9, high-quality polished editorial illustration, no readable text, no logos.
```
