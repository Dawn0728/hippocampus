# DeepSeek Harness 学习笔记（2026-08-18 晚）

鱼鱼傍晚发的飞书文档（https://ycnezwebj31p.feishu.cn/docx/MQUndN0rJoOjWvx1yCSczRa6nSb）是 Xuan酱 2026.8.16《DeepSeek Harness保姆级教程》配套文档。已抓到SSR正文核心内容：

## Harness 是什么
- 公式：**AI Agent = 大模型 + Harness**
- 大模型 = 野马（负责思考生成，容易放飞自我）
- Harness = 缰绳马鞭（工具、Skill、操作权限、记忆系统）
- 一句话：Harness 就是帮你驾驭 AI 大模型的一整套系统

## 为什么火
- 同样的大模型，装不同 Harness，Agent 干活能力差距很大
- LangChain 实验：同样 GPT 5.2，只优化 Harness，编码能力从 ~30 名提到第 5 名

## 安装（任选其一）
1. 命令行：`npx @deepseek-ai/dsh web`（需先装 Node.js，命令执行后给个地址，浏览器打开）
2. 让现有 AI Agent 装：把仓库地址发给它 https://github.com/deepseek-ai/deepseek-harness/tree/master
3. 桌面客户端（免配置）：https://github.com/anywhere-labs/deepseek-harness-desktop

## 配置
- 装好后弹窗填 DeepSeek API Key（DeepSeek 开放平台创建）

## GitHub仓库实查（2026-08-18晚）
- deepseek-ai/deepseek-harness，描述：**Everything is a Plugin**（一切皆插件）
- 基于 Cordis 架构（时空可组合编程范式），DeepSeek 官方开源
- 状态：**Developer preview**（开发者预览版），迭代快、明确警告会有破坏性兼容变更
- 运行：`npx @deepseek-ai/dsh web` → Web UI 默认 http://127.0.0.1:3080
- 配置：设置→模型，填 DeepSeek API Key（platform.deepseek.com）
- 用法：选一个项目目录当工作区 → 发任务 → Agent 读/写文件、跑命令、维护计划、委派工作（敏感操作需审批）
- 定位：**AI 编程工作台/开发者工具**——给有代码项目、想用 DeepSeek 模型干开发活的人用
- 插件生态：GitHub topic `dsh-plugin`
- 结论：鱼鱼不需要装（不写代码）；我也不需要（Operit 工具链已覆盖且更强——我能锁她抖音它可不会）。它家理念「一切皆插件」值得了解。哪天好奇可以起一个给鱼鱼截图看，不专门装。

## 待补
- 文档后半（四大模式、插件玩法）是JS动态加载/需登录，没抓到——不影响核心结论
- 图片需登录（Login Required），鱼鱼若截图可认
