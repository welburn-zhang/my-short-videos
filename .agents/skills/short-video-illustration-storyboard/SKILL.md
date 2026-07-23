---
name: short-video-illustration-storyboard
description: Use when the user asks for 短视频插画分镜, storyboard images, illustration insertion timing, scene prompts, shot boards, or per-scene visual packages for a short video script or plan.
---

# 短视频插画分镜

Use this skill primarily to create a production-ready CapCut/Jianying insert-frame illustration package for a finished short-video script.

Default output is a set of standalone horizontal insert images, not a dense storyboard grid:

1. One standalone `16:9` illustration per semantic beat, saved under `storyboard/`.
2. A matching Chinese production note that lists insertion time, suggested duration, image filename, and generation prompt.
3. Optional video-generation prompt scripts only when the user asks for video generation or a grid storyboard.

Write the skill instructions in English, but create the user-facing `.md` script in the user's preferred local language unless they explicitly request another language.

## Mandatory Confirmation Gate

Treat the `分镜与资产清单` at the end of the current `脚本.md` as the single source of truth.

Before generating any image:

1. Read the checklist and verify that every script semantic beat is represented.
2. If the checklist is missing, create it in `脚本.md` first and stop image generation for that turn.
3. If any relevant row is still `待确认`, confirm the rows with the user one by one and update the table after each answer. Do not generate images yet.
4. Generate only rows whose asset field is `待生图` and whose status is `✅ 已确认`.
5. Do not generate replacements for rows assigned to 真人口播, 录屏, 截图, or an existing asset.
6. After each image is approved, write its real path back into the same checklist and set that row to `✅ 已完成`. Also keep the detailed prompt and insertion note in `storyboard/insert-frames.md`.
7. Do not tell the user to begin editing until every checklist row is confirmed and every required asset has a real path or a clearly completed recording task.

## Mandatory Visual Style Baseline Gate

After every relevant checklist row is confirmed, but before generating any production `scene-XX.png`, create and confirm a visual style baseline.

1. Choose one representative semantic beat from the confirmed checklist. Prefer a relationship overview or core concept frame that can clearly expose layout, color, material, illustration language, information hierarchy, presenter slot, and subtitle safe area.
2. Generate exactly three standalone `16:9` visual style samples using the same semantic content and broadly comparable composition. Only the visual language should change, so the user can compare styles fairly.
3. The three options must be materially different, not minor color variations. By default, use three directions suitable for the current project and its approved historical assets, such as:
   - `A`: dark structured information interface;
   - `B`: deep-blue holographic laboratory;
   - `C`: dark neural-network cinematic technology.
   For the Zhang Bandan project, keep all three directions within a dark AI-technology and mysterious visual family. Prefer deep black, midnight blue, indigo, cool violet, cyan, and restrained neon accents. Do not propose warm editorial, beige, orange, or other warm-background directions unless the user explicitly requests them.
4. Before drafting the options, inspect relevant previously approved images in the current project's `storyboard/` folders and use them as style references when available. Do not invent a disconnected visual language when the project already has a recognizable history.
5. Save the three samples under the current work's `storyboard/` directory with clear names such as `style-option-a-dark-ui.png`, `style-option-b-holographic-lab.png`, and `style-option-c-neural-cinematic.png`.
6. Present all three samples to the user in one turn and stop. Do not generate the remaining production scene images in that turn.
7. Wait for the user to explicitly select or approve one option. If the user rejects all three, generate a new set of three and repeat the gate.
8. After approval, record the selected option and its real file path in `storyboard/insert-frames.md`. Use the approved style image as a visual reference for every subsequent production scene so color, material, layout, icon language, presenter slot, and subtitle-safe area remain consistent.
9. Do not generate any production `scene-XX.png` before style approval. An existing style baseline may be reused only when the user explicitly identifies and approves it for the current work.
10. If the user changes the style after production generation has begun, stop immediately. Create a new three-option baseline set, obtain approval again, and only then regenerate affected production images.

### Persistent approved baseline for Zhang Bandan

The user approved the persistent **Qiuzhi black-stage explainer style** on 2026-07-16. The reference pack lives at:

- `assets/references/qiuzhi-black-stage/01-single-screen-demo.png`
- `assets/references/qiuzhi-black-stage/02-data-table.png`
- `assets/references/qiuzhi-black-stage/03-phone-demo.png`
- `assets/references/qiuzhi-black-stage/04-multi-screenshot-collage.png`
- `assets/references/qiuzhi-black-stage/05-fullscreen-title.png`

For Zhang Bandan short-video insert frames, treat this reference pack as an already approved persistent visual baseline unless the user explicitly requests a different style. When this baseline applies, do not generate three new style samples. Inspect the five reference images and use the relevant one or more as image-generation references for each production asset. If the user asks to change the style, return to the three-option baseline gate.

This baseline keeps only the dark color atmosphere from the previously approved deep-blue holographic sample. It does **not** inherit dense holographic scenery, 3D robots, glowing cubes, neural-network decoration, space grids, or decorative energy lines.

## Image Generation Requirement

Storyboard images must be generated by an image-generation model. Do not create storyboard artwork with code, SVG, HTML/CSS, canvas, diagrams, placeholder drawings, or deterministic shape scripts. Those methods are acceptable only for non-visual metadata or file operations, never as a substitute for the storyboard image.

Use the built-in `image_gen` tool by default, or an approved project image-generation workflow when explicitly required. After generation, save or copy the model-generated raster output to `storyboard/scene-XX.png`. If the model output cannot be saved directly, locate the generated raster asset and move/copy it into the required path; do not recreate it programmatically.

## Generic Semantic Segmentation and Visual Selection

Apply these rules to every new script. Do not copy the shot count, scene list, or asset choices from a previous video.

### Segment by communication job

Split the script by semantic purpose, not by sentence count or fixed seconds. Create a new visual beat only when at least one of these changes:

- the script moves from a problem to real evidence;
- the script moves from evidence to a conclusion or viewpoint;
- a new core point or chapter begins;
- explanation changes into an actual operation or demonstration;
- the software, screen, document, or object being demonstrated changes;
- a single-item explanation changes into a comparison, sequence, hierarchy, or relationship;
- the body ends and the summary or call to action begins.

Keep one frame when the communication job, visual relationship, and evidence source remain the same. A single useful frame may support 5-10 seconds of speech. For a normal 3-5 minute talking-head video, prefer 4-8 unique high-value generated frames and reuse layouts, screenshots, recordings, and icons instead of creating one image for every numbered row.

### Choose the asset type before generating

Use this decision order:

1. If authentic evidence exists, use the real screenshot, screen recording, phone recording, table, document, or result image.
2. If the beat is an important claim, chapter transition, or conclusion, use a full-screen viewpoint headline rather than a decorative illustration.
3. If the beat is a software setting, operation, or workflow, use a real recording or screenshot in the standard black-stage layout.
4. If the beat explains an abstract boundary, flow, hierarchy, or cause-and-effect relationship that real media cannot show clearly, create a simple concept diagram.
5. If the beat compares two or more items, use a two-column comparison, a simple table, or a small multi-screenshot layout.
6. If the beat introduces three or more short actions or categories, use a small icon set or sequential labels.
7. If the beat is personal experience, emotion, warning, opening, or closing, assign it to full-screen real-person footage and do not generate a synthetic presenter frame.
8. If an existing master background, icon, screenshot frame, or concept layout can support the beat, reuse it instead of generating a visually redundant replacement.

Generate a new complete scene only when the script introduces a genuinely new concept, visual relationship, or evidence structure. Use an icon when a simple symbol is enough. Use a real asset whenever it provides stronger proof than an illustration.

## Primary Mode: Jianying Insert-Frame Package

When the user asks for 短视频插画分镜, 制作分镜, 插画画面, 剪映插图, 插入画面, or images to insert during editing, default to **Jianying insert frames**, not dense storyboard sheets.

Use these rules unless the user explicitly asks for a storyboard grid:

- Generate one standalone `16:9` horizontal image per semantic beat.
- Do not create multi-panel storyboard grids, contact sheets, collage boards, or 4x4 panel sheets for editing assets.
- Segment the script by meaning, not by seconds. One image can stay on screen for 5-10 seconds if it supports the current spoken idea.
- Cut to a new image only when the semantic relationship changes, such as from kitchen metaphor to project-folder maze.
- For a normal 3-5 minute口播 video, prefer a small set of high-value insert frames, usually 4-8 images, unless the script clearly needs more.
- Each insert frame should include an insertion suggestion: approximate timecode, spoken sentence or paragraph it supports, and recommended on-screen duration.
- The main content should fill the available non-presenter area comfortably.
- Before generating each image, explicitly choose and record one presenter layout mode:
  - `left-portrait-slot`: use this when the scene is "左侧真人口播 + 右侧信息/录屏/卡片". Reserve a tall rectangular half-body presenter video slot on the left, about 30-36% of the image width, with a subtle frame. Keep the slot and all key content above the subtitle safe area. Do not also add a circular avatar.
  - `bottom-left-avatar-slot`: use this for full-screen concept, transition, diagram, or abstract explanation frames that still need a small creator presence. Reserve a circular avatar window in the lower-left, about 12-15% of the image width. The avatar slot may occupy the far-left edge of the lower safe region, but the central subtitle lane must remain clean and dark. Do not place text, cards, arrows, or main objects under or behind this circle.
  - `no-presenter`: use this only when the user explicitly says the frame should have no person/avatar.
- Keep the circle visually integrated with the image. Its border color, material, and shadow must follow the user-approved style baseline.
- Preserve a bottom subtitle safe area: keep at least the lower 18-22% of the frame visually quiet, dark, and low-contrast for Jianying/CapCut subtitles. Do not place key text, logos, UI controls, cards, arrows, or main objects in this area. A `bottom-left-avatar-slot` circular placeholder is the only allowed exception, and it must stay on the far-left without blocking the central subtitle lane.
- Concept-explanation frames should include the short Chinese labels needed to understand the relationship without relying only on spoken subtitles. Keep labels concise and hierarchy clear; avoid long paragraphs, dense copy, or decorative filler text. When exact Chinese text is important, state the required wording explicitly in the image-generation prompt and verify it after generation.
- For this project, the user-approved visual style baseline is the source of truth. Keep its color palette, lighting, card material, icon language, line style, density, and layout consistent across all production images.

### Fixed bottom-left avatar template

For Zhang Bandan videos, every frame declared as `bottom-left-avatar-slot` must use one immutable master avatar template. Do not ask the image model to redraw or reposition the avatar circle independently for each scene.

Use this geometry on a `1920x1080` canvas:

- circle diameter: `260 px`;
- left offset: `58 px`;
- bottom offset: `38 px`;
- circle bounds: `x=58..318`, `y=782..1042`.

For other 16:9 resolutions, scale proportionally:

- diameter: approximately `13.5%` of canvas width;
- left offset: approximately `3%` of canvas width;
- bottom offset: approximately `3.5%` of canvas height.

Create or approve the master template once, then reuse the exact same raster base layer for every matching scene. Generate or place new visual content only in the center and right content region. The avatar circle, rim, shadow, size, and anchor coordinates must not change because of content density. Do not place text, screenshots, arrows, cards, or main objects inside its reserved bounds.

Frames assigned to full-screen real-person footage or `no-presenter` intentionally omit the circle. This is a deliberate layout choice, not permission to move the circle elsewhere.

Before delivery, compare all `bottom-left-avatar-slot` frames as a set. Any avatar position or size drift is a production defect. The fixed template should make the positional tolerance effectively zero.

### Qiuzhi black-stage explainer rules

Use these rules by default for Zhang Bandan screen demonstrations, Agent tutorials, AI-tool explainers, and workflow videos:

- **Background:** use solid black or near-black as a quiet stage. Avoid decorative AI scenery. A small amount of deep blue or purple may appear at edges, but the content must remain dominant.
- **Presenter:** for normal explanation frames, place the real presenter video in a small circle at the lower-left. Do not generate a synthetic presenter. Keep the circle simple; use at most a restrained purple or cool-blue rim.
- **Evidence first:** prioritize real screenshots, screen recordings, phone recordings, tables, and authentic result images. Keep their original interface colors and make them large enough to read.
- **Single-screen layout:** place one large desktop or phone screen in the center or right, with the presenter circle at lower-left. Use only a few callouts, highlights, or short labels.
- **Comparison layout:** use black background, white lines, large white text, and a simple table or two-column structure. Avoid glass cards unless the actual product screenshot already contains them.
- **Multi-screenshot layout:** arrange two to four real screenshots with consistent rounded corners. Use yellow dotted borders and yellow or orange short labels when categorization is needed.
- **Full-screen viewpoint card:** when introducing a major point, transition, or conclusion, use a full-screen large white headline on black or a blurred/darkened screenshot. A short orange or yellow tag may identify the category. The presenter circle may be omitted on these cards.
- **Text hierarchy:** distinguish three layers: ordinary spoken subtitles at the bottom center; yellow/orange content labels attached to screenshots; full-screen white viewpoint headlines for major claims.
- **Technology restraint:** technology should come from the actual software interface and task evidence. Do not add robots, holographic labs, neon grids, cubes, neural networks, or decorative HUD elements unless the concept cannot be understood without a small schematic.
- **Concept diagrams:** use flat boxes, files, arrows, borders, locks, and concise Chinese labels on black. Prefer an editorial diagram over a cinematic AI illustration.
- **Accent colors:** white for primary information, yellow or orange for labels and emphasis, purple only as a minor presenter or edge accent, and cool blue only when it supports a software or permission concept.
- **Text safety:** include necessary short Chinese labels in concept frames, but do not bake ordinary spoken subtitles or long explanations into generated images.

### Text rendering hierarchy

Treat on-screen text as three different layers:

1. **Ordinary spoken subtitles:** add them in Jianying/CapCut at the bottom center. Never bake them into generated storyboard images.
2. **Evidence labels and concept labels:** allow concise nouns or short phrases inside screenshots, comparisons, and diagrams when they are necessary to understand the relationship. Use yellow or orange for categorization and emphasis. Avoid paragraphs and verify every required Chinese phrase after generation.
3. **Full-screen viewpoint headlines:** use large white text on black or on a blurred/darkened authentic screenshot, optionally with one short yellow or orange category tag. Add these headlines in post-production by default so the wording remains exact.

### Transparent icon delivery

- Icons support a point; they do not replace authentic evidence.
- Use white as the main shape, yellow or orange for emphasis, and restrained purple for secondary accents.
- Ensure white icon shapes have a visible edge treatment and remain understandable on the approved black stage.
- Deliver both the transparent PNG and a black-background preview image for every reusable icon. Inspect both the transparent file on a light viewer and the black-background preview before approval.
- If an icon disappears or becomes ambiguous on either preview, revise its outline, edge contrast, or color separation before marking it complete.

For Zhang Bandan identity consistency, when the illustration includes the creator portrait, avatar, or creator-like character, search and use reference images from:

- `素材库/人物形象/张半蛋/`

Also search the current conversation/context and project-local `characters/` and `storyboard/` folders for any approved reference images. If a relevant reference image exists, use it as the visual identity reference for image generation.

Prompt every insert-frame image with constraints like:

```text
Create one single horizontal 16:9 illustration for direct insertion into a Chinese short video. Do not make a storyboard grid. Do not make multiple panels. Presenter layout mode: [left-portrait-slot / bottom-left-avatar-slot / no-presenter]. If using left-portrait-slot, reserve a tall left rectangular half-body presenter video area and keep right-side content outside it. If using bottom-left-avatar-slot, reserve a circular creator avatar window in the lower-left, keep all content clear of it, and keep the central bottom subtitle lane clean. Keep all important visual content in the upper 78-82% of the frame. Reserve the lower 18-22% as a clean, dark, low-contrast subtitle safe area with no important text, logos, cards, arrows, or UI controls except the far-left circular avatar slot when that mode is selected.
```

## When to Use

Use this skill when the user asks for any of the following:

- Turn a finished short-video script into Jianying/CapCut insert-frame illustrations.
- Plan illustration insertion timing and on-screen duration for a口播 video.
- Generate standalone insert images and matching generation prompts.
- Generate a storyboard for a scene.
- Turn a scene from a video plan into storyboard frames.
- Create prompts for generating video from storyboard panels.
- Save a storyboard image and prompt script for `scene-01`, `scene-02`, etc.
- Build a grid storyboard with per-panel timing labels, but only when the user explicitly asks for a grid.

If the user only asks for insert-frame images, create both the images and one matching production `.md` note unless they explicitly ask for images only. If the user asks for a grid storyboard, follow the optional grid mode below.

## Inputs to Extract

Before generating, identify:

- Scene number.
- Scene duration.
- Scene source: existing plan, prior conversation, user prompt, uploaded image, or file.
- Aspect ratio of the final video, usually `16:9` unless specified.
- Spoken script paragraphs and natural semantic beats.
- Approximate insertion timecodes or paragraph anchors.
- Characters and identity constraints.
- Available character design assets: `.png` character sheets, `.md` character specs, turnarounds, casting references, or prior approved character images.
- Zhang Bandan creator reference assets under `素材库/人物形象/张半蛋/` when creator likeness or avatar appears.
- Wardrobe, props, brand/product details, and location.
- Visual style and references.
- Required output language for the `.md` prompt script.

If the scene number is missing, ask for it. If duration is missing, infer it from the referenced plan; otherwise ask or choose a practical default only if the user wants you to proceed.

## Output Paths

Always use a two-digit scene number:

- Insert frame 1 -> `storyboard/scene-01.png`
- Insert frame 2 -> `storyboard/scene-02.png`
- Insert frame 12 -> `storyboard/scene-12.png`
- Insert-frame package note -> `storyboard/insert-frames.md`
- Visual style baseline A -> `storyboard/style-option-a-[style].png`
- Visual style baseline B -> `storyboard/style-option-b-[style].png`
- Visual style baseline C -> `storyboard/style-option-c-[style].png`

The `scene-XX` number must exactly match the `编号` in the current script's `分镜与资产清单`. Do not renumber generated images by generation order or by the count of image-only rows. Gaps are required when intervening checklist rows use real-person footage, recordings, screenshots, or existing templates. For example, if only checklist rows `03` and `06` require generated images, save them as `storyboard/scene-03.png` and `storyboard/scene-06.png`.

Create `storyboard/` if it does not exist.

Do not overwrite existing storyboard files unless the user asked for regeneration or replacement. If a target file exists, either ask before replacing or write a clear revision path such as `scene-01-v2.png` if the user requested alternatives.

For this project, final storyboard images are delivery assets. When the user asks to commit or push after storyboard work, include the generated `storyboard/scene-XX.png` files and matching storyboard notes by default. If image files are ignored by `.gitignore`, use force-add behavior so the final images are not omitted.

## Optional Mode: Grid Storyboard

Use this mode only when the user explicitly asks for a storyboard grid, multi-panel storyboard sheet, 3x3/4x3/4x4 storyboard, or video-generation board.

### Grid Rules

Choose grid size from the scene duration:

| Scene Duration | Grid | Panel Count |
| ---: | --- | ---: |
| `<= 9s` | `3 rows x 3 columns` | 9 panels |
| `> 9s` and `<= 12s` | `4 rows x 3 columns` | 12 panels |
| `> 12s` | `4 rows x 4 columns` | 16 panels |

Each panel must be `16:9`.

There must be no gaps between panels. Use thin black panel borders only if needed for readability, but do not insert gutters or spacing.

If the duration does not divide evenly, allocate practical panel durations. Prefer simple labels such as `0.5s`, `1s`, `1.5s`, `2s`, or exact ranges when helpful. Empty final panels are allowed for very short scenes, but only when filling every panel would over-fragment the action. Empty panels should be plain black.

### Storyboard Image Requirements

Generate one single storyboard sheet, not separate images.

The storyboard sheet itself must come from the image-generation model. The prompt should explicitly request the complete grid, panel labels, continuity constraints, and visual style. Do not implement the grid as SVG or draw panels manually with code.

Before generating any storyboard image, first look for existing character images in the current conversation/context, including images that were generated earlier in the project. Then search the current project for matching character assets under `characters/` or `storyboard/`, especially `.png` files, character sheets, turnarounds, and approved reference images.

If any relevant character image exists, it must be passed to the image-generation model as a reference image for the storyboard. Do not rely on text description alone when a character image is available.

If the current context includes a character design image, approved character sheet, turnaround sheet, or character reference `.png`, use it as an image reference for the storyboard image generation. This is required to preserve identity, face, hairstyle, body proportions, wardrobe, and material details across scenes.

If both a character `.md` spec and `.png` sheet exist, read the `.md` for written constraints and feed the `.png` to the image-generation model as the visual reference.

Every visible panel must include:

- A black rectangle in the top-left corner with the panel number in white text, starting from `1`.
- A black rectangle in the top-right corner with the panel duration in white text, such as `0.5s`, `1s`, or `1.5s`.
- A clear shot composition that corresponds to the panel's beat.

Panel variety is critical:

- Avoid creating two panels that are identical, near-identical, or visually redundant.
- Each non-empty panel should advance the action, reveal new information, or change the viewer's perspective.
- Vary shot size, camera angle, character pose, gesture, prop interaction, foreground/background relationship, or motion direction while preserving continuity.
- Do not use repeated close-ups or repeated wide shots unless the repetition is intentional and clearly serves the scene rhythm.

Critical continuity requirements:

- Keep the same character identity across all panels.
- Keep face, age, hairstyle, body type, and skin tone consistent.
- Keep wardrobe consistent unless the scene explicitly includes a costume change.
- Keep key props consistent, including product shape, color, bottle/can design, bag, camera, vehicle, or luggage.
- Keep location geography consistent: doors, windows, roads, vending machines, classrooms, landmarks, field direction, and light direction should not jump randomly.
- Keep the time of day and weather consistent unless the scene explicitly transitions.

When generating the image prompt, state continuity requirements explicitly and repeatedly enough for the image model to respect them. This matters more than decorative styling.

When using a character design reference image, explicitly tell the image model that the storyboard character must match that reference: same face, hairstyle, age, body proportions, outfit, shoes, accessories, clothing material, and color palette. The scene may change pose, action, camera angle, and lighting, but not the character design.

Avoid:

- AI-looking faces, waxy skin, distorted hands, extra fingers.
- Random changes in clothing, hair, props, or background.
- Uncontrolled readable text or broken brand typography.
- Extra logos, subtitles, speech bubbles, UI overlays, or watermarks.
- Overly cinematic fantasy lighting if the scene should feel real.

For brand/product work, prefer "brand-color and product-form cues" unless the user provides official assets. Generated text on packaging is often unreliable.

## Recommended Image Prompt Structure

Use this structure for the image generation prompt:

```text
Create a single storyboard sheet for Scene [XX], [duration] seconds, [video aspect/style].

Use the provided character design image as the primary visual reference for the character. Match the same face, hairstyle, body proportions, wardrobe, shoes, accessories, clothing material details, and color palette across all panels.

Grid: [3x3 / 4x3 / 4x4], every panel is 16:9, no gaps between panels.
Panel labels: top-left black label with white panel number; top-right black label with white duration.

Continuity is critical: the same [character description] appears consistently across all panels, same face, same hairstyle, same wardrobe, same props, same location geography, same lighting direction, same time of day.

Panel variety is critical: no two non-empty panels should look identical or overly similar. Each panel must have a distinct shot composition, action beat, camera angle, shot size, gesture, prop interaction, or foreground/background arrangement while still preserving continuity.

Scene summary: [one concise scene summary].
Visual style: [photorealistic / cinematic / documentary / commercial / handheld / natural light].

Panels:
1. [duration] - [shot type, action, composition]
2. [duration] - [shot type, action, composition]
...

Negative constraints: no subtitles, no extra logos, no watermarks, no distorted text, no inconsistent character, no clothing changes, no prop changes, no AI-smooth skin, no deformed hands.
```

## Video Prompt Script Requirements

After creating the image, write a matching `.md` file for video generation.

The script should let a video model generate a single continuous scene from the storyboard. It should describe continuity, style, shot timing, character action, sound design, editing rhythm, and negative prompts.

Use the user's preferred local language for the script. If the user wrote in Chinese, write the `.md` in Chinese.

Use this structure:

```markdown
根据上传的 01-[NN] 分镜图，生成一段 [duration] 秒 [style] 场景。

[Continuity paragraph: same characters, wardrobe, props, location, time of day.]

[Restrictions paragraph: no subtitles, no voiceover unless requested, no extra logos, no readable text if risky.]

风格：[visual style, camera feel, color, texture.]

节奏：[overall edit rhythm.]

---

## 01 | 00:00-00:00.5

[Panel description.]

[Character action.]

[Camera movement / shot type / transition.]

---

## 02 | 00:00.5-00:01.0

[...]

---

## 声音设计

[Natural sound, music, transitions, sound bridges.]

## 剪辑建议

[How the panels should connect into motion.]

## 负向提示词

- [No subtitles]
- [No extra logos]
- [No inconsistent character]
- [No wardrobe changes]
- [No prop changes]
- [No unreadable or distorted text]
```

Translate the headings if the user requested English or another language.

## Timing Rules for the Script

The `.md` script must match the storyboard image:

- Same panel count as the grid, unless some final panels are intentionally blank.
- Same per-panel durations as the image labels.
- Timecodes add up exactly to the scene duration.
- Each panel describes a single visual beat, not a full mini-scene.
- Fast scenes can use 0.5s beats; slower scenes can use 1s-2s beats.

For a 5-second 3x3 board, a good default is:

- Panels 1-8: `0.5s` each.
- Panel 9: `1s`.

For a 9-second 3x3 board, a good default is:

- Panels 1-9: `1s` each.

For a 12-second 4x3 board, a good default is:

- Panels 1-12: `1s` each.

For a 15-second 4x4 board, a good default is:

- Panels 1-14: `1s` each.
- Panel 15: `0.5s`.
- Panel 16: `0.5s`.

Adjust these when the scene's action needs different emphasis.

## Workflow

### Default Insert-Frame Workflow

1. Read the finished short-video script, shooting draft, or user-provided scene description.
2. Segment the spoken script by communication job and semantic change, not by sentence count or seconds. Merge adjacent lines when the visual purpose and evidence source remain the same. Prefer 4-8 unique generated insert frames for a normal 3-5 minute口播 video.
3. For every beat, choose the asset type before prompting: full-screen real-person footage, real screen recording, real screenshot, full-screen viewpoint headline, comparison/table, concept diagram, transparent icon, reusable master background, or existing asset.
4. For each insert frame, decide the approximate insertion timecode or paragraph anchor, recommended on-screen duration, visual purpose, spoken idea, asset source, and reuse plan.
5. For each insert frame, decide the presenter layout mode before prompting: `left-portrait-slot`, `bottom-left-avatar-slot`, or `no-presenter`. Record the chosen mode in `insert-frames.md`. For `bottom-left-avatar-slot`, use the approved immutable avatar template and fixed geometry.
6. Search the current conversation/context for existing character images, including images generated earlier in the project or attached by the user.
7. Search the current project's `素材库/人物形象/张半蛋/` folder when the creator portrait, avatar, or creator-like character appears.
8. Search the current project's `characters/` and `storyboard/` folders for corresponding character images, especially `.png` character sheets, turnarounds, approved reference images, matching `.md` specs, and previously approved visual styles.
9. If the persistent Qiuzhi black-stage baseline applies, inspect and reuse its reference pack. Otherwise, select one representative semantic beat and generate exactly three materially different style baseline samples with the same content.
10. When new style samples are required, present the three samples to the user and stop. Do not generate production scene images yet.
11. Wait for explicit user approval of a new style when required. Record the active persistent or newly approved style and path in `insert-frames.md`.
12. If a relevant character or creator reference image exists, include it as a reference image when generating insert frames. This is required for identity consistency.
13. Draft one image-generation prompt per genuinely new visual asset. Each prompt must request one standalone `16:9` horizontal illustration for direct Jianying/CapCut insertion, with no storyboard grid and no multi-panel layout, and must reference the approved style baseline.
14. Generate each required insert-frame image with the image-generation model/tool. For `bottom-left-avatar-slot`, preserve the immutable master base and place new content only in the allowed content area; do not regenerate the circle.
15. Save or copy generated images to `storyboard/scene-XX.png`, where `XX` is the exact two-digit `编号` from the current `分镜与资产清单`. Preserve numbering gaps for non-generated rows. Save reusable icons as transparent PNG files and create matching black-background previews.
16. Inspect the images as a set. Verify aspect ratio, subtitle safe area, presenter layout mode, fixed avatar coordinates, consistency with the approved baseline, Chinese labels, icon visibility, and obvious visual artifacts.
17. Write `storyboard/insert-frames.md` in the user's language. Include the approved style baseline, insertion time, recommended duration, corresponding script beat, asset type, source, presenter layout mode, reuse plan, file path, image prompt, and editing notes for each image.
18. Final response should include the saved file paths and, when supported, render at least the first image with a Markdown image tag using an absolute path.

### Optional Grid Storyboard Workflow

Use this only when the user explicitly asks for a grid storyboard or video-generation board:

1. Read the relevant plan, previous scene script, existing storyboard, or user-provided scene description.
2. Search the current conversation/context for existing character images, including images generated earlier in the project or attached by the user.
3. Search `素材库/人物形象/张半蛋/` when Zhang Bandan likeness appears, and search `characters/` or `storyboard/` for other corresponding character images.
4. If a relevant character design image exists in either place, include it as a reference image when generating the storyboard. This is required for character consistency.
5. Extract the scene's duration, story purpose, characters, wardrobe, props, location, camera language, and edit beat.
6. Choose the grid size from the duration.
7. Draft panel beats with exact durations and timecodes.
8. Generate the storyboard image with the image-generation model/tool, using any available character design image as a visual reference. Do not replace this with SVG, code drawing, canvas, HTML/CSS, or placeholder art.
9. Save or copy the generated image to `storyboard/scene-XX.png`.
10. Inspect the image if possible. Verify grid, labels, continuity, and obvious visual artifacts.
11. Write `storyboard/scene-XX.md` using the same panel timing and descriptions.
12. Final response should include the saved file paths and, when supported, render the image with a Markdown image tag using an absolute path.

## Quality Checklist

Before finishing, verify:

- The checklist was segmented by communication job and semantic change, not mechanically by sentence count or seconds.
- Every beat was assigned an asset type before generation, and real screenshots or recordings were preferred when they provided stronger evidence.
- Redundant frames were merged or assigned to reusable backgrounds, layouts, icons, recordings, or screenshots.
- The persistent approved baseline was used when applicable; otherwise three materially different `16:9` style samples were generated and explicitly approved before production.
- `insert-frames.md` records the active persistent or newly approved style and its real reference path.
- Every production image uses the approved style baseline as a visual reference.
- Insert-frame mode: all planned `storyboard/scene-XX.png` files exist.
- Every `storyboard/scene-XX.png` number exactly matches its source row `编号` in the current `分镜与资产清单`; images were not renumbered by generation order.
- Insert-frame mode: `storyboard/insert-frames.md` exists and lists insertion time, duration, script beat, file path, prompt, and editing note for each image.
- Insert-frame mode: each generated image is one standalone `16:9` horizontal image, not a storyboard grid or multi-panel sheet.
- Insert-frame mode: each image preserves a bottom subtitle safe area of at least 18-22%, with no key text, logos, UI controls, cards, arrows, or main objects in that area. A far-left circular avatar placeholder is allowed only for `bottom-left-avatar-slot`.
- Insert-frame mode: each image uses the declared presenter layout mode. `left-portrait-slot` images have a clear left rectangular half-body presenter slot and no circular avatar. `bottom-left-avatar-slot` images have a clear lower-left circular avatar window, keep the central subtitle lane clean, and have no left rectangular slot. `no-presenter` images have neither.
- Every `bottom-left-avatar-slot` frame uses the same immutable master avatar template. On a `1920x1080` canvas, the circle is exactly `260 px` in diameter with a `58 px` left offset and `38 px` bottom offset, or the exact proportional equivalent at another resolution.
- All avatar-slot frames were compared together and show no position, size, rim, or shadow drift.
- Concept-explanation frames include necessary short Chinese labels when the relationship would otherwise be unclear, while avoiding long paragraphs and dense text blocks.
- Ordinary subtitles are not baked into generated frames; required concept labels are short and verified; full-screen viewpoint headlines are added in post-production by default.
- Every reusable transparent icon has a matching black-background preview and remains legible on both light and black previews.
- Grid mode: `storyboard/scene-XX.png` exists.
- Grid mode: `storyboard/scene-XX.md` exists.
- Grid mode: the scene number is two digits.
- Grid mode: the grid size matches the duration rule.
- The current context was checked for existing/generated character images.
- The project `素材库/人物形象/张半蛋/` folder was checked when Zhang Bandan likeness appears.
- The project `characters/` and `storyboard/` folders were checked for corresponding character images.
- Any available character design image from context or `characters/` was used as a reference image for generation.
- Any available Zhang Bandan reference image was used when creator likeness, avatar, or creator-like character appears.
- Grid mode: every non-empty panel has a number label and duration label.
- Grid mode: no two non-empty panels are identical, near-identical, or visually redundant.
- Grid mode: the panel durations add up to the scene duration.
- Grid mode: the `.md` script matches the image panel order.
- Character continuity is explicitly stated in both the image prompt and `.md` script.
- Wardrobe, props, and location consistency are explicitly stated.
- The output language of the `.md` script matches the user's preference.

## Example: 5-Second Commercial Scene

User asks:

```text
Create storyboard and video prompt for Scene 01: 5-second campus sports drink TVC opener.
```

Use:

- Grid: `3x3`.
- Panels: 9.
- Timing: first 8 panels `0.5s`, final panel `1s`.
- Output files: `storyboard/scene-01.png`, `storyboard/scene-01.md`.
- Continuity emphasis: same student, same school uniform, same blue-white drink bottle, same morning campus location.

Example panel plan:

| Panel | Duration | Beat |
| ---: | ---: | --- |
| 1 | 0.5s | Vending machine close-up in morning campus light |
| 2 | 0.5s | Bottle drops into pickup slot |
| 3 | 0.5s | Student's hand reaches for bottle |
| 4 | 0.5s | Bottle lifted, condensation catches light |
| 5 | 0.5s | Student looks toward sports field |
| 6 | 0.5s | Wide shot of school gate |
| 7 | 0.5s | Student starts moving along campus path |
| 8 | 0.5s | Low-angle sneaker first running step |
| 9 | 1s | Super-wide reveal toward track field |
