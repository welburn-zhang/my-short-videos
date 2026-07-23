# Token 是什么｜插入分镜制作说明

## 视觉基线

- 已批准基线：Qiuzhi 黑色舞台讲解风格
- 基线参考目录：`/Users/zhangwenbo/Desktop/my-short-videos/.agents/skills/short-video-illustration-storyboard/assets/references/qiuzhi-black-stage/`
- 固定头像底图：`/Users/zhangwenbo/Desktop/my-short-videos/作品/20260716_Agent权限风控/storyboard/scene-04.png`
- 头像布局：`bottom-left-avatar-slot`
- 画布：`1672 × 941`，16:9
- 字幕安全区：底部约 22% 保持纯黑或低对比；左下固定头像圆框除外

## Scene 02｜AI 新手村启蒙篇栏目页

- 对应清单：02
- 插入位置：钩子真人口播结束后
- 建议开始时间：约 `00:06`
- 建议停留：`4—6 秒`
- 资产类型：栏目标题页
- 人物布局：`no-presenter`
- 文件：[scene-02.png](/Users/zhangwenbo/Desktop/my-short-videos/作品/20260722_Token是什么/storyboard/scene-02.png)

### 生图提示词

```text
生成一张可直接插入中文短视频的 16:9 横版栏目标题页。使用 Qiuzhi 黑色舞台讲解风格：纯黑背景、白色主标题、黄色强调标签、少量冷紫色边缘光。只保留“AI 新手村”“启蒙篇”“什么是 Token”三组准确文字。“什么是 Token”作为最大标题，下面用少量白色 Token 方块和一条黄色进度线承接主题。无人物、无头像圆框；底部 20% 保持纯黑，作为字幕安全区。不生成其他文字、Logo、水印、机器人、厨师、霓虹网格或装饰性 AI 场景。
```

## Scene 03｜Tokenizer 切分文字

- 对应清单：03
- 插入位置：栏目模板之后，台词“我们把一句话发给 AI 以后……”开始
- 建议开始时间：约 `00:11`
- 建议单次停留：`8—10 秒`
- 资产类型：概念插画，可在剪辑中增加切分与移动轻动效
- 人物布局：`bottom-left-avatar-slot`
- 文件：[scene-03.png](/Users/zhangwenbo/Desktop/my-short-videos/作品/20260722_Token是什么/storyboard/scene-03.png)
- 复用建议：先展示完整句子，再依次出现切分线、Token 块和流向主厨的箭头

### 生图提示词

```text
High-quality production image. Create ONE standalone horizontal 16:9 raster illustration for direct insertion into a Chinese short video. This is NOT a storyboard grid, NOT multiple panels, and NOT a collage.

Use the first reference image as the immutable master canvas: preserve its near-black stage background and the exact empty purple-rim circular presenter slot in the lower-left. Do not redraw, resize, move, fill, or distort that circle. Presenter layout mode: bottom-left-avatar-slot. The circle must remain at the same lower-left position and size as reference 1. Keep all new content completely outside the circle.

Use the other references only for the approved visual language: quiet black stage, flat editorial diagram, crisp white outlines, yellow/orange emphasis, restrained blue/purple accents, minimal visual noise.

Scene concept: explain how a tokenizer splits a complete sentence into tokens using a simple kitchen metaphor. Build one clear left-to-right flow in the upper 75% of the frame: one complete sentence strip; a kitchen assistant using a cleaver to divide it into unequal blocks; the unequal blocks moving toward a larger master-chef/model pictogram. Render only the exact labels “Tokenizer”, “文字切分工具”, “切菜小弟”, “Token”, and “大厨”. Place “文字切分工具” directly beside or under “Tokenizer”; use clear pointers to identify the kitchen assistant as “切菜小弟” and the master chef as “大厨”.

Keep the lower 22% clean, dark, and low-contrast for Jianying subtitles. No other text, logo, watermark, robot, holographic lab, neon grid, cinematic kitchen scenery, or decorative AI effects.
```

### 剪辑说明

1. 完整句子先出现。
2. 说到“文字切分工具”时，让切菜小弟和 `Tokenizer` 标签出现。
3. 说到“拆成大小不一样的块”时，依次亮起黄色切分线。
4. 说到“这一块就是一个 Token”时，让文字块沿箭头移动到主厨一侧。

## Scene 04｜Token 不是固定一个字或一个词

- 对应清单：04
- 插入位置：台词“这个切菜小弟不是‘一字切一刀’……”开始
- 建议开始时间：约 `00:33`
- 建议停留：`8—10 秒`，可在段落内复用一次
- 资产类型：概念插画，可增加文字块依次出现和两把刀落位的轻动效
- 人物布局：`bottom-left-avatar-slot`
- 文件：[scene-04.png](/Users/zhangwenbo/Desktop/my-short-videos/作品/20260722_Token是什么/storyboard/scene-04.png)

### 生图提示词

```text
生成一张可直接插入中文短视频的 16:9 横版概念插画，严格延续当前 Token 分镜的黑色舞台、白色扁平线稿、黄色标签和左下固定紫色空头像圆框。上半区展示四种不同大小的白色 Token 块，准确标注“一个字”“一个词”“标点”“英文的一部分”。下半区用同一条抽象文字条分成两路，两把不同的菜刀在不同位置落下切分线，形成两组不同大小的 Token 块，准确标注“不同 Tokenizer，切法可能不同”。主标题为“Token ≠ 固定一个字或一个词”。不展示真实文字切分结果，不新增文字。底部字幕区保持干净，不生成角色、机器人、Logo、水印或装饰性科技场景。
```

## Scene 06｜上下文窗口容量

- 对应清单：06
- 插入位置：台词“这也能解释为什么模型介绍里总会写……”开始
- 建议开始时间：约 `01:20`
- 视频时长：`12 秒`
- 资产类型：圆形厨师工作台概念动画
- 人物布局：`bottom-left-avatar-slot`
- 待生成视频：[scene-06.mp4](/Users/zhangwenbo/Desktop/my-short-videos/作品/20260722_Token是什么/storyboard/scene-06.mp4)
- 首帧：[scene-06-first-frame.png](/Users/zhangwenbo/Desktop/my-short-videos/作品/20260722_Token是什么/storyboard/scene-06-first-frame.png)
- 尾帧：[scene-06-last-frame.png](/Users/zhangwenbo/Desktop/my-short-videos/作品/20260722_Token是什么/storyboard/scene-06-last-frame.png)
- 动画脚本：[scene-06-video.md](/Users/zhangwenbo/Desktop/my-short-videos/作品/20260722_Token是什么/storyboard/scene-06-video.md)
- 旧静态图：`scene-06-static-v1.png`，仅作历史参考，不再用于正式剪辑
- 当前状态：Seedance 提交被 Model 助手登录 / 模型同步状态拦截

### 剪辑说明

1. 圆形工作台先保持为空。
2. “历史对话”“本次输入内容”“模型回答”三组 Token 依次进入并占满桌面。
3. “新内容”继续从右侧进入，台上 Token 随之逐格向左移动。
4. 最早的历史对话越过桌面左边缘并淡出，不做瞬间消失。
5. 最后出现“截断 / 压缩前文”提示并保持到结束。

## Scene 08｜AI 新手村启蒙篇片尾

- 对应清单：08
- 插入位置：真人完成固定收口后的最后 `1—2 秒`
- 建议停留：`1—2 秒`
- 资产类型：统一系列片尾图
- 人物布局：`no-presenter`
- 文件：[scene-08.png](/Users/zhangwenbo/Desktop/my-short-videos/作品/20260722_Token是什么/storyboard/scene-08.png)

### 生图提示词

```text
生成一张可直接插入中文短视频的 16:9 横版系列片尾。延续栏目页的纯黑背景、白色主标题、黄色强调标签、少量冷紫色边缘光和白色 Token 方块。只保留“AI 新手村”“启蒙篇”“持续更新”三组准确文字，并用一排 Token 方块连接一个黄色向前箭头，表示系列继续更新。无人物、无头像圆框；底部 20% 保持纯黑。不生成其他文字、Logo、水印、二维码、关注图标、机器人、厨师或装饰性 AI 场景。
```
