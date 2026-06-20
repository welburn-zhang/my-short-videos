# Skills 目录说明

这个目录存放当前项目可直接调用的本地 skills。

## 目录约定

- 所有可执行 skill 都直接放在 `.agents/skills/` 的第一层。
- 不要把真实 skill 再拆到二级目录里，避免某些 agent/CLI 无法识别嵌套结构。
- 需要分类时，优先用统一前缀命名，而不是移动目录层级。
- 只保留“当前项目会用到”的 skill，避免装太多造成选择噪音。

## 当前结构

```text
.agents/skills/
├── README.md
├── dbs
├── dbs-action
├── dbs-benchmark
├── dbs-content
├── dbs-deconstruct
├── dbs-diagnosis
├── dbs-hook
└── dbs-xhs-title
```

## 当前已装的 dbs 工具箱

- `dbs`：总入口，只负责识别需求并路由。
- `dbs-diagnosis`：商业问题/商业模式诊断。
- `dbs-benchmark`：对标分析。
- `dbs-content`：内容创作诊断。
- `dbs-hook`：短视频开头优化。
- `dbs-xhs-title`：小红书标题生成。
- `dbs-action`：执行力卡点诊断。
- `dbs-deconstruct`：概念拆解。

## 以后新增 skill 的建议

- 同一工具箱继续用统一前缀，比如 `dbs-*`、`gstack-*`。
- 新装 skill 后，顺手更新这个 README 的“当前结构”和“已装技能”两段。
- 如果未来 skill 超过 20 个，再考虑补一个索引文件按“内容 / 数据 / 工具 / 诊断”列清单，但仍然不要改成多层嵌套。

