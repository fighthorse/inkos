exports.id=103,exports.ids=[103],exports.modules={10859:(a,b,c)=>{"use strict";c.d(b,{Kh:()=>j,YQ:()=>e,b_:()=>h,fZ:()=>i});var d=c(33296);let e=process.env.INKOS_PROJECT_ROOT??process.cwd(),f=null,g=null;function h(){return g||(g=new d.fN(e)),g}async function i(){if(f)return f;let a=h(),b=await a.loadProjectConfig(),c=d.r0.parse(b),g={client:(0,d.xP)(c.llm),model:c.llm.model,projectRoot:e,notifyChannels:c.notify,modelOverrides:c.modelOverrides};return f=new d.DD(g)}function j(){f=null,g=null}},33296:(a,b,c)=>{"use strict";c.d(b,{Lf:()=>h,DD:()=>ao,r0:()=>n,fN:()=>ag.StateManager,xP:()=>x});var d=c(68798);let e=d.k5(["tomato","feilu","qidian","other"]),f=d.k5(["xuanhuan","xianxia","urban","horror","other"]),g=d.k5(["incubating","outlining","active","paused","completed","dropped"]),h=d.Ik({id:d.Yj().min(1),title:d.Yj().min(1),platform:e,genre:f,status:g,targetChapters:d.ai().int().min(1).default(200),chapterWordCount:d.ai().int().min(1e3).default(3e3),createdAt:d.Yj().datetime(),updatedAt:d.Yj().datetime()}),i=d.k5(["card-generated","drafting","drafted","auditing","audit-passed","audit-failed","revising","ready-for-review","approved","rejected","published","imported"]);d.Ik({number:d.ai().int().min(1),title:d.Yj(),status:i,wordCount:d.ai().int().default(0),createdAt:d.Yj().datetime(),updatedAt:d.Yj().datetime(),auditIssues:d.YO(d.Yj()).default([]),reviewNote:d.Yj().optional(),detectionScore:d.ai().min(0).max(1).optional(),detectionProvider:d.Yj().optional(),detectedAt:d.Yj().datetime().optional()});let j=d.Ik({provider:d.k5(["anthropic","openai","custom"]),baseUrl:d.Yj().url(),apiKey:d.Yj().default(""),model:d.Yj().min(1),temperature:d.ai().min(0).max(2).default(.7),maxTokens:d.ai().int().min(1).default(8192),thinkingBudget:d.ai().int().min(0).default(0),apiFormat:d.k5(["chat","responses"]).default("chat")}),k=d.gM("type",[d.Ik({type:d.eu("telegram"),botToken:d.Yj().min(1),chatId:d.Yj().min(1)}),d.Ik({type:d.eu("wechat-work"),webhookUrl:d.Yj().url()}),d.Ik({type:d.eu("feishu"),webhookUrl:d.Yj().url()}),d.Ik({type:d.eu("webhook"),url:d.Yj().url(),secret:d.Yj().optional(),events:d.YO(d.Yj()).default([])})]),l=d.Ik({provider:d.k5(["gptzero","originality","custom"]).default("custom"),apiUrl:d.Yj().url(),apiKeyEnv:d.Yj().min(1),threshold:d.ai().min(0).max(1).default(.5),enabled:d.zM().default(!1),autoRewrite:d.zM().default(!1),maxRetries:d.ai().int().min(1).max(10).default(3)}),m=d.Ik({maxAuditRetries:d.ai().int().min(0).max(10).default(2),pauseAfterConsecutiveFailures:d.ai().int().min(1).default(3),retryTemperatureStep:d.ai().min(0).max(.5).default(.1)}),n=d.Ik({name:d.Yj().min(1),version:d.eu("0.1.0"),llm:j,notify:d.YO(k).default([]),detection:l.optional(),modelOverrides:d.g1(d.Yj(),d.Yj()).optional(),daemon:d.Ik({schedule:d.Ik({radarCron:d.Yj().default("0 */6 * * *"),writeCron:d.Yj().default("*/15 * * * *")}),maxConcurrentBooks:d.ai().int().min(1).default(3),chaptersPerCycle:d.ai().int().min(1).max(20).default(1),retryDelayMs:d.ai().int().min(0).default(3e4),cooldownAfterChapterMs:d.ai().int().min(0).default(1e4),maxChaptersPerDay:d.ai().int().min(1).default(50),qualityGates:m.default({maxAuditRetries:2,pauseAfterConsecutiveFailures:3,retryTemperatureStep:.1})}).default({schedule:{radarCron:"0 */6 * * *",writeCron:"*/15 * * * *"},maxConcurrentBooks:3,chaptersPerCycle:1,retryDelayMs:3e4,cooldownAfterChapterMs:1e4,maxChaptersPerDay:50,qualityGates:{maxAuditRetries:2,pauseAfterConsecutiveFailures:3,retryTemperatureStep:.1}})});var o=c(59611);let p=d.Ik({name:d.Yj(),id:d.Yj(),chapterTypes:d.YO(d.Yj()),fatigueWords:d.YO(d.Yj()),numericalSystem:d.zM().default(!1),powerScaling:d.zM().default(!1),eraResearch:d.zM().default(!1),pacingRule:d.Yj().default(""),satisfactionTypes:d.YO(d.Yj()).default([]),auditDimensions:d.YO(d.ai()).default([])}),q=d.Ik({name:d.Yj(),personalityLock:d.YO(d.Yj()).default([]),behavioralConstraints:d.YO(d.Yj()).default([])}).optional(),r=d.Ik({primary:d.Yj(),forbidden:d.YO(d.Yj()).default([])}).optional(),s=d.Ik({hardCap:d.KC([d.ai(),d.Yj()]).optional(),resourceTypes:d.YO(d.Yj()).default([])}).optional(),t=d.Ik({enabled:d.zM().default(!1),period:d.Yj().optional(),region:d.Yj().optional()}).optional(),u=d.Ik({version:d.Yj().default("1.0"),protagonist:q,genreLock:r,numericalSystemOverrides:s,eraConstraints:t,prohibitions:d.YO(d.Yj()).default([]),chapterTypesOverride:d.YO(d.Yj()).default([]),fatigueWordsOverride:d.YO(d.Yj()).default([]),additionalAuditDimensions:d.YO(d.KC([d.ai(),d.Yj()])).default([]),enableFullCastTracking:d.zM().default(!1)});var v=c(89512),w=c(18818);function x(a){let b={temperature:a.temperature??.7,maxTokens:a.maxTokens??8192,thinkingBudget:a.thinkingBudget??0},c=a.apiFormat??"chat";if("anthropic"===a.provider){let d=a.baseUrl.replace(/\/v1\/?$/,"");return{provider:"anthropic",apiFormat:c,_anthropic:new w.Ay({apiKey:a.apiKey,baseURL:d}),defaults:b}}return{provider:"openai",apiFormat:c,_openai:new v.Ay({apiKey:a.apiKey,baseURL:a.baseUrl}),defaults:b}}async function y(a,b,c,d){try{let e={temperature:d?.temperature??a.defaults.temperature,maxTokens:d?.maxTokens??a.defaults.maxTokens};if("anthropic"===a.provider)return await B(a._anthropic,b,c,e,a.defaults.thinkingBudget);if("responses"===a.apiFormat)return await A(a._openai,b,c,e,d?.webSearch);return await z(a._openai,b,c,e,d?.webSearch)}catch(a){throw function(a){let b=String(a);return b.includes("403")?Error(`API 返回 403 (请求被拒绝)。可能原因：
  1. API Key 无效或过期
  2. API 提供方的内容审查拦截了请求（公益/免费 API 常见）
  3. 账户余额不足
  建议：用 inkos doctor 测试 API 连通性，或换一个不限制内容的 API 提供方`):b.includes("401")?Error(`API 返回 401 (未授权)。请检查 .env 中的 INKOS_LLM_API_KEY 是否正确。`):b.includes("429")?Error(`API 返回 429 (请求过多)。请稍后重试，或检查 API 配额。`):a instanceof Error?a:Error(b)}(a)}}async function z(a,b,c,d,e){let f=await a.chat.completions.create({model:b,messages:c.map(a=>({role:a.role,content:a.content})),temperature:d.temperature,max_tokens:d.maxTokens,stream:!0,...e?{web_search_options:{search_context_size:"medium"}}:{}}),g=[],h=0,i=0;for await(let a of f){let b=a.choices[0]?.delta?.content;b&&g.push(b),a.usage&&(h=a.usage.prompt_tokens??0,i=a.usage.completion_tokens??0)}let j=g.join("");if(!j)throw Error("LLM returned empty response");return{content:j,usage:{promptTokens:h,completionTokens:i,totalTokens:h+i}}}async function A(a,b,c,d,e){let f=c.map(a=>({role:a.role,content:a.content})),g=e?[{type:"web_search_preview"}]:void 0,h=await a.responses.create({model:b,input:f,temperature:d.temperature,max_output_tokens:d.maxTokens,stream:!0,...g?{tools:g}:{}}),i=[],j=0,k=0;for await(let a of h)"response.output_text.delta"===a.type&&i.push(a.delta),"response.completed"===a.type&&(j=a.response.usage?.input_tokens??0,k=a.response.usage?.output_tokens??0);let l=i.join("");if(!l)throw Error("LLM returned empty response");return{content:l,usage:{promptTokens:j,completionTokens:k,totalTokens:j+k}}}async function B(a,b,c,d,e=0){let f=c.filter(a=>"system"===a.role).map(a=>a.content).join("\n\n"),g=c.filter(a=>"system"!==a.role),h=await a.messages.create({model:b,...f?{system:f}:{},messages:g.map(a=>({role:a.role,content:a.content})),...e>0?{thinking:{type:"enabled",budget_tokens:e}}:{temperature:d.temperature},max_tokens:d.maxTokens,stream:!0}),i=[],j=0,k=0;for await(let a of h)"content_block_delta"===a.type&&"text_delta"===a.delta.type&&i.push(a.delta.text),"message_start"===a.type&&(j=a.message.usage?.input_tokens??0),"message_delta"===a.type&&(k=a.usage?.output_tokens??0);let l=i.join("");if(!l)throw Error("LLM returned empty response");return{content:l,usage:{promptTokens:j,completionTokens:k,totalTokens:j+k}}}class C{constructor(a){this.ctx=a}async chat(a,b){return y(this.ctx.client,this.ctx.model,a,b)}async chatWithSearch(a,b){return y(this.ctx.client,this.ctx.model,a,{...b,webSearch:!0})}}var D=c(51455),E=c(76760),F=c(73136);let G=(0,E.join)((0,E.dirname)((0,F.fileURLToPath)("file:///Users/xinchao/go/src/github.com/fighthorse/inkos/packages/core/dist/agents/rules-reader.js")),"../../genres");async function H(a){try{return await (0,D.readFile)(a,"utf-8")}catch{return null}}async function I(a,b){let c=(0,E.join)(a,"genres",`${b}.md`),d=(0,E.join)(G,`${b}.md`),e=(0,E.join)(G,"other.md"),f=await H(c)??await H(d)??await H(e);if(!f)throw Error(`Genre profile not found for "${b}" and fallback "other.md" is missing`);let g=f.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!g)throw Error("Genre profile missing YAML frontmatter (--- ... ---)");let h=o.Ay.load(g[1]);return{profile:p.parse(h),body:g[2].trim()}}async function J(a){let b=await H((0,E.join)(a,"story/book_rules.md"));return b?function(a){let b=a.replace(/^```(?:md|markdown|yaml)?\s*\n/,"").replace(/\n```\s*$/,""),c=b.match(/---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);if(c)try{let a=o.Ay.load(c[1]),b=u.parse(a),d=c[2].trim();return{rules:b,body:d}}catch{}return{rules:u.parse({}),body:b.trim()}}(b):null}class K extends C{get name(){return"architect"}async generateFoundation(a,b){let{profile:c,body:d}=await I(this.ctx.projectRoot,a.genre),e=b?`

## 外部指令
以下是来自外部系统的创作指令，请将其融入设定中：

${b}
`:"",f=c.numericalSystem?`- 有明确的数值/资源体系可追踪
- 在 book_rules 中定义 numericalSystemOverrides（hardCap、resourceTypes）`:"- 本题材无数值系统，不需要资源账本",g=c.powerScaling?"- 有明确的战力等级体系":"",h=c.eraResearch?"- 需要年代考据支撑（在 book_rules 中设置 eraConstraints）":"",i=`你是一个专业的网络小说架构师。你的任务是为一本新的${c.name}小说生成完整的基础设定。${e}

要求：
- 平台：${a.platform}
- 题材：${c.name}（${a.genre}）
- 目标章数：${a.targetChapters}章
- 每章字数：${a.chapterWordCount}字

## 题材特征

${d}

## 生成要求

你需要生成以下内容，每个部分用 === SECTION: <name> === 分隔：

=== SECTION: story_bible ===
用结构化二级标题组织：
## 01_世界观
世界观设定、核心规则体系

## 02_主角
主角设定（身份/金手指/性格底色/行为边界）

## 03_势力与人物
势力分布、重要配角（每人：名字、身份、动机、与主角关系、独立目标）

## 04_地理与环境
地图/场景设定、环境特色

## 05_书名与简介
书名方法论：
- 书名必须简单扼要、通俗易懂，读者看到书名就能知道题材和主题
- 采用"题材+核心爽点+主角行为"的长书名格式，避免文艺化
- 融入平台当下热点词汇，吸引精准流量
- 禁止题材错位（都市文取玄幻书名会导致读者流失）
- 参考热榜书名风格：俏皮、通俗、有记忆点

简介方法论（300字内，三种写法任选其一）：
1. 冲突开篇法：第一句抛困境/冲突，第二句亮金手指/核心能力，第三句留悬念
2. 高度概括法：只挑主线概括（不是全篇概括），必须留悬念
3. 小剧场法：提炼故事中最经典的桥段，作为引子

简介核心原则：
- 简介 = 产品宣传语，必须让读者产生"我要点开看"的冲动
- 可以从剧情设定、人设、或某个精彩片段切入
- 必须有噱头（如"凡是被写在笔记本上的名字，最后都得死"）

=== SECTION: volume_outline ===
卷纲规划，每卷包含：卷名、章节范围、核心冲突、关键转折、收益目标

### 黄金三章法则（前三章必须遵循）
- 第1章：抛出核心冲突（主角立即面临困境/危机/选择），禁止大段背景灌输
- 第2章：展示金手指/核心能力（主角如何应对第1章的困境），让读者看到爽点预期
- 第3章：明确短期目标（主角确立第一个具体可达成的目标），给读者追读理由

=== SECTION: book_rules ===
生成 book_rules.md 格式的 YAML frontmatter + 叙事指导，包含：
\`\`\`
---
version: "1.0"
protagonist:
  name: (主角名)
  personalityLock: [(3-5个性格关键词)]
  behavioralConstraints: [(3-5条行为约束)]
genreLock:
  primary: ${a.genre}
  forbidden: [(2-3种禁止混入的文风)]
${c.numericalSystem?`numericalSystemOverrides:
  hardCap: (根据设定确定)
  resourceTypes: [(核心资源类型列表)]`:""}
prohibitions:
  - (3-5条本书禁忌)
chapterTypesOverride: []
fatigueWordsOverride: []
additionalAuditDimensions: []
enableFullCastTracking: false
---

## 叙事视角
(描述本书叙事视角和风格)

## 核心冲突驱动
(描述本书的核心矛盾和驱动力)
\`\`\`

=== SECTION: current_state ===
初始状态卡（第0章），包含：
| 字段 | 值 |
|------|-----|
| 当前章节 | 0 |
| 当前位置 | (起始地点) |
| 主角状态 | (初始状态) |
| 当前目标 | (第一个目标) |
| 当前限制 | (初始限制) |
| 当前敌我 | (初始关系) |
| 当前冲突 | (第一个冲突) |

=== SECTION: pending_hooks ===
初始伏笔池（Markdown表格）：
| hook_id | 起始章节 | 类型 | 状态 | 最近推进 | 预期回收 | 备注 |

生成内容必须：
1. 符合${a.platform}平台口味
2. 符合${c.name}题材特征
${f}
${g}
${h}
3. 主角人设鲜明，有明确行为边界
4. 伏笔前后呼应，不留悬空线
5. 配角有独立动机，不是工具人`,j=await this.chat([{role:"system",content:i},{role:"user",content:`请为标题为"${a.title}"的${c.name}小说生成完整基础设定。`}],{maxTokens:16384,temperature:.8});return this.parseSections(j.content)}async writeFoundationFiles(a,b,c=!0){let d=(0,E.join)(a,"story");await (0,D.mkdir)(d,{recursive:!0});let e=[(0,D.writeFile)((0,E.join)(d,"story_bible.md"),b.storyBible,"utf-8"),(0,D.writeFile)((0,E.join)(d,"volume_outline.md"),b.volumeOutline,"utf-8"),(0,D.writeFile)((0,E.join)(d,"book_rules.md"),b.bookRules,"utf-8"),(0,D.writeFile)((0,E.join)(d,"current_state.md"),b.currentState,"utf-8"),(0,D.writeFile)((0,E.join)(d,"pending_hooks.md"),b.pendingHooks,"utf-8")];c&&e.push((0,D.writeFile)((0,E.join)(d,"particle_ledger.md"),"# 资源账本\n\n| 章节 | 期初值 | 来源 | 完整度 | 增量 | 期末值 | 依据 |\n|------|--------|------|--------|------|--------|------|\n| 0 | 0 | 初始化 | - | 0 | 0 | 开书初始 |\n","utf-8")),e.push((0,D.writeFile)((0,E.join)(d,"subplot_board.md"),"# 支线进度板\n\n| 支线ID | 支线名 | 相关角色 | 起始章 | 最近活跃章 | 距今章数 | 状态 | 进度概述 | 回收ETA |\n|--------|--------|----------|--------|------------|----------|------|----------|---------|\n","utf-8"),(0,D.writeFile)((0,E.join)(d,"emotional_arcs.md"),"# 情感弧线\n\n| 角色 | 章节 | 情绪状态 | 触发事件 | 强度(1-10) | 弧线方向 |\n|------|------|----------|----------|------------|----------|\n","utf-8"),(0,D.writeFile)((0,E.join)(d,"character_matrix.md"),"# 角色交互矩阵\n\n### 角色档案\n| 角色 | 核心标签 | 反差细节 | 说话风格 | 性格底色 | 与主角关系 | 核心动机 | 当前目标 |\n|------|----------|----------|----------|----------|------------|----------|----------|\n\n### 相遇记录\n| 角色A | 角色B | 首次相遇章 | 最近交互章 | 关系性质 | 关系变化 |\n|-------|-------|------------|------------|----------|----------|\n\n### 信息边界\n| 角色 | 已知信息 | 未知信息 | 信息来源章 |\n|------|----------|----------|------------|\n","utf-8")),await Promise.all(e)}async generateFoundationFromImport(a,b,c){let{profile:d,body:e}=await I(this.ctx.projectRoot,a.genre),f=c?`

## 外部指令
${c}
`:"",g=d.numericalSystem?`- 有明确的数值/资源体系可追踪
- 在 book_rules 中定义 numericalSystemOverrides（hardCap、resourceTypes）`:"- 本题材无数值系统，不需要资源账本",h=d.powerScaling?"- 有明确的战力等级体系":"",i=d.eraResearch?"- 需要年代考据支撑（在 book_rules 中设置 eraConstraints）":"",j=`你是一个专业的网络小说架构师。你的任务是从已有的小说正文中反向推导完整的基础设定。${f}

## 工作模式

这不是从零创建，而是从已有正文中提取和推导。你需要：
1. 从正文中提取世界观、势力、角色、力量体系 → 生成 story_bible
2. 从叙事结构推断卷纲 → 生成 volume_outline（已有章节的回顾 + 预测后续方向）
3. 从角色行为推断主角锁定和禁忌 → 生成 book_rules
4. 从最新章节状态推断 current_state（反映最后一章结束时的状态）
5. 从正文中识别已埋伏笔 → 生成 pending_hooks

## 书籍信息

- 标题：${a.title}
- 平台：${a.platform}
- 题材：${d.name}（${a.genre}）
- 目标章数：${a.targetChapters}章
- 每章字数：${a.chapterWordCount}字

## 题材特征

${e}

## 生成要求

你需要生成以下内容，每个部分用 === SECTION: <name> === 分隔：

=== SECTION: story_bible ===
从正文中提取，用结构化二级标题组织：
## 01_世界观
从正文中提取的世界观设定、核心规则体系

## 02_主角
从正文中推断的主角设定（身份/金手指/性格底色/行为边界）

## 03_势力与人物
从正文中出现的势力分布、重要配角（每人：名字、身份、动机、与主角关系、独立目标）

## 04_地理与环境
从正文中出现的地图/场景设定、环境特色

## 05_书名与简介
保留原书名"${a.title}"，根据正文内容生成简介

=== SECTION: volume_outline ===
基于已有正文反推卷纲：
- 已有章节部分：根据实际内容回顾每卷的结构
- 后续预测部分：基于已有伏笔和剧情走向预测未来方向
每卷包含：卷名、章节范围、核心冲突、关键转折

=== SECTION: book_rules ===
从正文中角色行为反推 book_rules.md 格式的 YAML frontmatter + 叙事指导：
\`\`\`
---
version: "1.0"
protagonist:
  name: (从正文提取主角名)
  personalityLock: [(从行为推断3-5个性格关键词)]
  behavioralConstraints: [(从行为推断3-5条行为约束)]
genreLock:
  primary: ${a.genre}
  forbidden: [(2-3种禁止混入的文风)]
${d.numericalSystem?`numericalSystemOverrides:
  hardCap: (从正文推断)
  resourceTypes: [(从正文提取核心资源类型)]`:""}
prohibitions:
  - (从正文推断3-5条本书禁忌)
chapterTypesOverride: []
fatigueWordsOverride: []
additionalAuditDimensions: []
enableFullCastTracking: false
---

## 叙事视角
(从正文推断本书叙事视角和风格)

## 核心冲突驱动
(从正文推断本书的核心矛盾和驱动力)
\`\`\`

=== SECTION: current_state ===
反映最后一章结束时的状态卡：
| 字段 | 值 |
|------|-----|
| 当前章节 | (最后一章章节号) |
| 当前位置 | (最后一章结束时的位置) |
| 主角状态 | (最后一章结束时的状态) |
| 当前目标 | (当前目标) |
| 当前限制 | (当前限制) |
| 当前敌我 | (当前敌我关系) |
| 当前冲突 | (当前冲突) |

=== SECTION: pending_hooks ===
从正文中识别的所有伏笔（Markdown表格）：
| hook_id | 起始章节 | 类型 | 状态 | 最近推进 | 预期回收 | 备注 |

## 关键原则

1. 一切从正文出发，不要臆造正文中没有的设定
2. 伏笔识别要完整：悬而未决的线索、暗示、预告都算
3. 角色推断要准确：从对话和行为推断性格，不要想当然
4. 准确性优先，宁可详细也不要遗漏
${g}
${h}
${i}`,k=await this.chat([{role:"system",content:j},{role:"user",content:`以下是《${a.title}》的全部已有正文，请从中反向推导完整基础设定：

${b}`}],{maxTokens:16384,temperature:.5});return this.parseSections(k.content)}parseSections(a){let b=b=>{let c=RegExp(`=== SECTION: ${b} ===\\s*([\\s\\S]*?)(?==== SECTION:|$)`),d=a.match(c);return d?.[1]?.trim()??`[${b} 生成失败，需要重新生成]`};return{storyBible:b("story_bible"),volumeOutline:b("volume_outline"),bookRules:b("book_rules"),currentState:b("current_state"),pendingHooks:b("pending_hooks")}}}let L=["仿佛","忽然","竟然","猛地","猛然","不禁","宛如"],M=[/到这里[，,]?算是/,/接下来[，,]?(?:就是|将会|即将)/,/(?:后面|之后)[，,]?(?:会|将|还会)/,/(?:故事|剧情)(?:发展)?到了/,/读者[，,]?(?:可能|应该|也许)/,/我们[，,]?(?:可以|不妨|来看)/],N=["核心动机","信息边界","信息落差","核心风险","利益最大化","当前处境","行为约束","性格过滤","情绪外化","锚定效应","沉没成本","认知共鸣"],O=["显然","毋庸置疑","不言而喻","众所周知","不难看出"],P=[/(?:全场|众人|所有人|在场的人)[，,]?(?:都|全|齐齐|纷纷)?(?:震惊|惊呆|倒吸凉气|目瞪口呆|哗然|惊呼)/,/(?:全场|一片)[，,]?(?:寂静|哗然|沸腾|震动)/],Q=["似乎","可能","或许","大概","某种程度上","一定程度上","在某种意义上"],R=["然而","不过","与此同时","另一方面","尽管如此","话虽如此","但值得注意的是"];function S(a){let b=[],c=a.split(/\n\s*\n/).map(a=>a.trim()).filter(a=>a.length>0);if(c.length>=3){let a=c.map(a=>a.length),d=a.reduce((a,b)=>a+b,0)/a.length;if(d>0){let c=Math.sqrt(a.reduce((a,b)=>a+(b-d)**2,0)/a.length)/d;c<.15&&b.push({severity:"warning",category:"段落等长",description:`段落长度变异系数仅${c.toFixed(3)}（阈值<0.15），段落长度过于均匀，呈现AI生成特征`,suggestion:"增加段落长度差异：短段落用于节奏加速或冲击，长段落用于沉浸描写"})}}let d=a.length;if(d>0){let c=0;for(let b of Q){let d=RegExp(b,"g"),e=a.match(d);c+=e?.length??0}let e=c/(d/1e3);e>3&&b.push({severity:"warning",category:"套话密度",description:`套话词（似乎/可能/或许等）密度为${e.toFixed(1)}次/千字（阈值>3），语气过于模糊犹豫`,suggestion:"用确定性叙述替代模糊表达：去掉「似乎」直接描述状态，用具体细节替代「可能」"})}let e={};for(let b of R){let c=RegExp(b,"g"),d=a.match(c),f=d?.length??0;f>0&&(e[b]=f)}let f=Object.entries(e).filter(([,a])=>a>=3);if(f.length>0){let a=f.map(([a,b])=>`"${a}"\xd7${b}`).join("、");b.push({severity:"warning",category:"公式化转折",description:`转折词重复使用：${a}。同一转折模式≥3次暴露AI生成痕迹`,suggestion:"用情节自然转折替代转折词，或换用不同的过渡手法（动作切入、时间跳跃、视角切换）"})}let g=a.split(/[。！？\n]/).map(a=>a.trim()).filter(a=>a.length>2);if(g.length>=3){let a=1,c=1;for(let b=1;b<g.length;b++)g[b-1].slice(0,2)===g[b].slice(0,2)?c=Math.max(c,++a):a=1;c>=3&&b.push({severity:"info",category:"列表式结构",description:`检测到${c}句连续以相同开头的句子，呈现列表式AI生成结构`,suggestion:"变换句式开头：用不同主语、时间词、动作词开头，打破列表感"})}return{issues:b}}function T(a,b,c){let d=a=>{let c=RegExp(`=== ${a} ===\\s*([\\s\\S]*?)(?==== [A-Z_]+ ===|$)`),d=b.match(c);return d?.[1]?.trim()??""},e=d("CHAPTER_CONTENT");return{chapterNumber:a,title:d("CHAPTER_TITLE")||`第${a}章`,content:e,wordCount:e.length,preWriteCheck:d("PRE_WRITE_CHECK"),postSettlement:d("POST_SETTLEMENT"),updatedState:d("UPDATED_STATE")||"(状态卡未更新)",updatedLedger:c.numericalSystem?d("UPDATED_LEDGER")||"(账本未更新)":"",updatedHooks:d("UPDATED_HOOKS")||"(伏笔池未更新)",chapterSummary:d("CHAPTER_SUMMARY"),updatedSubplots:d("UPDATED_SUBPLOTS"),updatedEmotionalArcs:d("UPDATED_EMOTIONAL_ARCS"),updatedCharacterMatrix:d("UPDATED_CHARACTER_MATRIX")}}class U extends C{get name(){return"writer"}async writeChapter(a){var b,c,d,e,f,g;let{book:h,bookDir:i,chapterNumber:j}=a,[k,l,m,n,o,p,q,r,s,t,u,v]=await Promise.all([this.readFileOrDefault((0,E.join)(i,"story/story_bible.md")),this.readFileOrDefault((0,E.join)(i,"story/volume_outline.md")),this.readFileOrDefault((0,E.join)(i,"story/style_guide.md")),this.readFileOrDefault((0,E.join)(i,"story/current_state.md")),this.readFileOrDefault((0,E.join)(i,"story/particle_ledger.md")),this.readFileOrDefault((0,E.join)(i,"story/pending_hooks.md")),this.readFileOrDefault((0,E.join)(i,"story/chapter_summaries.md")),this.readFileOrDefault((0,E.join)(i,"story/subplot_board.md")),this.readFileOrDefault((0,E.join)(i,"story/emotional_arcs.md")),this.readFileOrDefault((0,E.join)(i,"story/character_matrix.md")),this.readFileOrDefault((0,E.join)(i,"story/style_profile.json")),this.readFileOrDefault((0,E.join)(i,"story/parent_canon.md"))]),w=await this.loadRecentChapters(i,j),{profile:x,body:y}=await I(this.ctx.projectRoot,h.genre),z=await J(i),A=z?.rules??null,B=z?.body??"",C=this.buildStyleFingerprint(u),D=[(b=h,c=x,`你是一位专业的${c.name}网络小说作家。你为${b.platform}平台写作。`),(d=h,`## 核心规则

1. 以简体中文工作，句子长短交替，段落适合手机阅读（3-5行/段）
2. 每章${d.chapterWordCount}字左右
3. 伏笔前后呼应，不留悬空线；所有埋下的伏笔都必须在后续收回
4. 只读必要上下文，不机械重复已有内容

## 人物塑造铁律

- 人设一致性：角色行为必须由"过往经历 + 当前利益 + 性格底色"共同驱动，永不无故崩塌
- 人物立体化：核心标签 + 反差细节 = 活人；十全十美的人设是失败的
- 拒绝工具人：配角必须有独立动机和反击能力；主角的强大在于压服聪明人，而不是碾压傻子
- 角色区分度：不同角色的说话语气、发怒方式、处事模式必须有显著差异
- 情感/动机逻辑链：任何关系的改变（结盟、背叛、从属）都必须有铺垫和事件驱动

## 叙事技法

- Show, don't tell：用细节堆砌真实，用行动证明强大；角色的野心和价值观内化于行为，不通过口号喊出来
- 五感代入法：场景描写中加入1-2种五感细节（视觉、听觉、嗅觉、触觉），增强画面感
- 钩子设计：每章结尾设置悬念/伏笔/钩子，勾住读者继续阅读
- 信息分层植入：基础信息在行动中自然带出，关键设定结合剧情节点揭示，严禁大段灌输世界观
- 描写必须服务叙事：环境描写烘托氛围或暗示情节，一笔带过即可；禁止无效描写
- 日常/过渡段落必须为后续剧情服务：或埋伏笔，或推进关系，或建立反差。纯填充式日常是流水账的温床

## 逻辑自洽

- 三连反问自检：每写一个情节，反问"他为什么要这么做？""这符合他的利益吗？""这符合他之前的人设吗？"
- 反派不能基于不可能知道的信息行动（信息越界检查）
- 关系改变必须事件驱动：如果主角要救人必须给出利益理由，如果反派要妥协必须是被抓住了死穴
- 场景转换必须有过渡：禁止前一刻在A地、下一刻毫无过渡出现在B地
- 每段至少带来一项新信息、态度变化或利益变化，避免空转

## 语言约束

- 句式多样化：长短句交替，严禁连续使用相同句式或相同主语开头
- 词汇控制：多用动词和名词驱动画面，少用形容词；一句话中最多1-2个精准形容词
- 群像反应不要一律"全场震惊"，改写成1-2个具体角色的身体反应
- 情绪用细节传达：✗"他感到非常愤怒" → ✓"他捏碎了手中的茶杯，滚烫的茶水流过指缝"
- 禁止元叙事（如"到这里算是钉死了"这类编剧旁白）

## 去AI味铁律

- 【铁律】叙述者永远不得替读者下结论。读者能从行为推断的意图，叙述者不得直接说出。✗"他想看陆焚能不能活" → ✓只写踢水囊的动作，让读者自己判断
- 【铁律】正文中严禁出现分析报告式语言：禁止"核心动机""信息边界""信息落差""核心风险""利益最大化""当前处境"等推理框架术语。人物内心独白必须口语化、直觉化。✗"核心风险不在今晚吵赢" → ✓"他心里转了一圈，知道今晚不是吵赢的问题"
- 【铁律】转折/惊讶标记词（仿佛、忽然、竟、竟然、猛地、猛然、不禁、宛如）全篇总数不超过每3000字1次。超出时改用具体动作或感官描写传递突然性
- 【铁律】同一体感/意象禁止连续渲染超过两轮。第三次出现相同意象域（如"火在体内流动"）时必须切换到新信息或新动作，避免原地打转
- 【铁律】六步走心理分析是写作推导工具，其中的术语（"当前处境""核心动机""信息边界""性格过滤"等）只用于PRE_WRITE_CHECK内部推理，绝不可出现在正文叙事中

## 硬性禁令

- 【硬性禁令】全文严禁出现"不是……而是……""不是……，是……""不是A，是B"句式，出现即判定违规。改用直述句
- 【硬性禁令】全文严禁出现破折号"——"，用逗号或句号断句
- 正文中禁止出现hook_id/账本式数据（如"余量由X%降到Y%"），数值结算只放POST_SETTLEMENT`),`## 去AI味：反例→正例对照

以下对照表展示AI常犯的"味道"问题和修正方法。正文必须贴近正例风格。

### 情绪描写
| 反例（AI味） | 正例（人味） | 要点 |
|---|---|---|
| 他感到非常愤怒。 | 他捏碎了手中的茶杯，滚烫的茶水流过指缝，但他像没感觉一样。 | 用动作外化情绪 |
| 她心里很悲伤，眼泪流了下来。 | 她攥紧手机，指节发白，屏幕上的聊天记录模糊成一片。 | 用身体细节替代直白标签 |
| 他感到一阵恐惧。 | 他后背的汗毛竖了起来，脚底像踩在了冰上。 | 五感传递恐惧 |

### 转折与衔接
| 反例（AI味） | 正例（人味） | 要点 |
|---|---|---|
| 虽然他很强，但是他还是输了。 | 他确实强，可对面那个老东西更脏。 | 口语化转折，少用"虽然...但是" |
| 然而，事情并没有那么简单。 | 哪有那么便宜的事。 | "然而"换成角色内心吐槽 |
| 因此，他决定采取行动。 | 他站起来，把凳子踢到一边。 | 删掉因果连词，直接写动作 |

### "了"字与助词控制
| 反例（AI味） | 正例（人味） | 要点 |
|---|---|---|
| 他走了过去，拿了杯子，喝了一口水。 | 他走过去，端起杯子，灌了一口。 | 连续"了"字削弱节奏，保留最有力的一个 |
| 他看了看四周，发现了一个洞口。 | 他扫了一眼四周，墙根裂开一道缝。 | 两个"了"减为一个，"发现"换成具体画面 |

### 词汇与句式
| 反例（AI味） | 正例（人味） | 要点 |
|---|---|---|
| 那双眼睛充满了智慧和深邃。 | 那双眼睛像饿狼见了肉。 | 用具体比喻替代空洞形容词 |
| 他的内心充满了矛盾和挣扎。 | 他攥着拳头站了半天，最后骂了句脏话，转身走了。 | 内心活动外化为行动 |
| 全场为之震惊。 | 老陈的烟掉在了裤子上，烫得他跳起来。 | 群像反应具体到个人 |
| 不禁感叹道…… | （直接写感叹内容，删掉"不禁感叹"） | 删除无意义的情绪中介词 |

### 叙述者姿态
| 反例（AI味） | 正例（人味） | 要点 |
|---|---|---|
| 这一刻，他终于明白了什么是真正的力量。 | （删掉这句——让读者自己从前文感受） | 不替读者下结论 |
| 显然，对方低估了他的实力。 | （只写对方的表情变化，让读者自己判断） | "显然"是作者在说教 |
| 他知道，这将是改变命运的一战。 | 他把刀从鞘里拔了一寸，又推回去。 | 用犹豫的动作暗示重要性 |`,`## 六步走人物心理分析

每个重要角色在关键场景中的行为，必须经过以下六步推导：

1. **当前处境**：角色此刻面临什么局面？手上有什么牌？
2. **核心动机**：角色最想要什么？最害怕什么？
3. **信息边界**：角色知道什么？不知道什么？对局势有什么误判？
4. **性格过滤**：同样的局面，这个角色的性格会怎么反应？（冲动/谨慎/阴险/果断）
5. **行为选择**：基于以上四点，角色会做出什么选择？
6. **情绪外化**：这个选择伴随什么情绪？用什么身体语言、表情、语气表达？

禁止跳过步骤直接写行为。如果推导不出合理行为，说明前置铺垫不足，先补铺垫。`,`## 配角设计方法论

### 配角B面原则
配角必须有反击，有自己的算盘。主角的强大在于压服聪明人，而不是碾压傻子。

### 构建方法
1. **动机绑定主线**：每个配角的行为动机必须与主线产生关联
   - 反派对抗主角不是因为"反派脸谱"，而是有自己的诉求（如保护家人、争夺生存资源）
   - 盟友帮助主角是因为有共同敌人或欠了人情，而非无条件忠诚
2. **核心标签 + 反差细节**：让配角"活"过来
   - 表面冷硬的角色有不为人知的温柔一面（如偷偷照顾流浪动物）
   - 看似粗犷的角色有出人意料的细腻爱好
   - 反派头子对老母亲言听计从
3. **通过事件立人设**：禁止通过外貌描写和形容词堆砌来立人设，用角色在事件中的反应、选择、语气来展现性格
4. **语言区分度**：不同角色的说话方式必须有辨识度——用词习惯、句子长短、口头禅、方言痕迹都是工具
5. **拒绝集体反应**：群戏中不写"众人齐声惊呼"，而是挑1-2个角色写具体反应`,`## 读者心理学框架

写作时同步考虑读者的心理状态：

- **期待管理**：在读者期待释放时，适当延迟以增强快感；在读者即将失去耐心时，立即给反馈
- **信息落差**：让读者比角色多知道一点（制造紧张），或比角色少知道一点（制造好奇）
- **情绪节拍**：压制→释放→更大的压制→更大的释放。释放时要超过读者心理预期
- **锚定效应**：先给读者一个参照（对手有多强/困难有多大），再展示主角的表现
- **沉没成本**：读者已经投入的阅读时间是留存的关键，每章都要给出"继续读下去的理由"
- **代入感维护**：主角的困境必须让读者能共情，主角的选择必须让读者觉得"我也会这么做"`,`## 情感节点设计

关系发展（友情、爱情、从属）必须经过事件驱动的节点递进：

1. **设计3-5个关键事件**：共同御敌、秘密分享、利益冲突、信任考验、牺牲/妥协
2. **递进升温**：每个事件推进关系一个层级，禁止跨越式发展（初见即死忠、一面之缘即深情）
3. **情绪用场景传达**：环境烘托（暴雨中独坐）+ 微动作（攥拳指尖发白）替代直白抒情
4. **情感与题材匹配**：末世侧重"共患难的信任"、悬疑侧重"试探与默契"、玄幻侧重"利益捆绑到真正认可"
5. **禁止标签化互动**：不可突然称兄道弟、莫名深情告白，每次称呼变化都需要事件支撑`,`## 代入感技法

- **自然信息交代**：角色身份/外貌/背景通过行动和对话带出，禁止"资料卡式"直接罗列
- **画面代入法**：开场先给画面（动作、环境、声音），再给信息，让读者"看到"而非"被告知"
- **共鸣锚点**：主角的困境必须有普遍性（被欺压、不公待遇、被低估），让读者觉得"这也是我"
- **欲望钩子**：每章至少让读者产生一个"接下来会怎样"的好奇心
- **信息落差应用**：让读者比角色多知道一点（紧张感）或少知道一点（好奇心），动态切换`,function(a){if(void 0===a||a>3)return"";let b={1:`### 第一章：抛出核心冲突
- 开篇直接进入冲突场景，禁止用背景介绍/世界观设定开头
- 第一段必须有动作或对话，让读者"看到"画面
- 开篇场景限制：最多1-2个场景，最多3个角色
- 主角身份/外貌/背景通过行动自然带出，禁止资料卡式罗列
- 本章结束前，核心矛盾必须浮出水面
- 一句对话能交代的信息不要用一段叙述，角色身份、性格、地位都可以从一句有特色的台词中带出`,2:`### 第二章：展现金手指/核心能力
- 主角的核心优势（金手指/特殊能力/信息差等）必须在本章初现
- 金手指的展现必须通过具体事件，不能只是内心独白"我获得了XX"
- 开始建立"主角有什么不同"的读者认知
- 第一个小爽点应在本章出现
- 继续收紧核心冲突，不引入新支线`,3:`### 第三章：明确短期目标
- 主角的第一个阶段性目标必须在本章确立
- 目标必须具体可衡量（打败某人/获得某物/到达某处），不能是抽象的"变强"
- 读完本章，读者应能说出"接下来主角要干什么"
- 章尾钩子要足够强，这是读者决定是否继续追读的关键章`};return`## 黄金三章特殊指令（当前第${a}章）

开篇三章决定读者是否追读。遵循以下强制规则：

- 开篇不要从第一块砖头开始砌楼——从炸了一栋楼开始写
- 禁止信息轰炸：世界观、力量体系等设定随剧情自然揭示
- 每章聚焦1条故事线，人物数量控制在3个以内
- 强情绪优先：利用读者共情（亲情纽带、不公待遇、被低估）快速建立代入感

${b[a]??""}`}(j),A?.enableFullCastTracking?`## 全员追踪

本书启用全员追踪模式。每章结束时，POST_SETTLEMENT 必须额外包含：
- 本章出场角色清单（名字 + 一句话状态变化）
- 角色间关系变动（如有）
- 未出场但被提及的角色（名字 + 提及原因）`:"",function(a,b){let c=a.fatigueWords.length>0?`- 高疲劳词（${a.fatigueWords.join("、")}）单章最多出现1次`:"",d=a.chapterTypes.length>0?`动笔前先判断本章类型：
${a.chapterTypes.map(a=>`- ${a}`).join("\n")}`:"",e=a.pacingRule?`- 节奏规则：${a.pacingRule}`:"";return[`## 题材规范（${a.name}）`,c,e,d,b].filter(Boolean).join("\n\n")}(x,y),function(a){if(!a?.protagonist)return"";let b=a.protagonist,c=[`## 主角铁律（${b.name}）`];if(b.personalityLock.length>0&&c.push(`
性格锁定：${b.personalityLock.join("、")}`),b.behavioralConstraints.length>0)for(let a of(c.push("\n行为约束："),b.behavioralConstraints))c.push(`- ${a}`);if(a.prohibitions.length>0)for(let b of(c.push("\n本书禁忌："),a.prohibitions))c.push(`- ${b}`);return a.genreLock?.forbidden&&a.genreLock.forbidden.length>0&&c.push(`
风格禁区：禁止出现${a.genreLock.forbidden.join("、")}`),c.join("\n")}(A),(e=B)?`## 本书专属规则

${e}`:"",(f=m)&&"(文件尚未创建)"!==f?`## 文风指南

${f}`:"",(g=C)?`## 文风指纹（模仿目标）

以下是从参考文本中提取的写作风格特征。你的输出必须尽量贴合这些特征：

${g}`:"",function(a,b){let c=1,d=["## 动笔前必须自问","",`${c++}. 【大纲锚定】本章对应卷纲中的哪个节点/阶段？本章必须推进该节点的剧情，不得跳过或提前消耗后续节点。如果卷纲指定了章节范围，严格遵守节奏。`,`${c++}. 主角此刻利益最大化的选择是什么？`,`${c++}. 这场冲突是谁先动手，为什么非做不可？`,`${c++}. 配角/反派是否有明确诉求、恐惧和反制？行为是否由"过往经历+当前利益+性格底色"驱动？`,`${c++}. 反派当前掌握了哪些已知信息？哪些信息只有读者知道？有无信息越界？`,`${c++}. 章尾是否留了钩子（悬念/伏笔/冲突升级）？`];return b.numericalSystem&&d.push(`${c++}. 本章收益能否落到具体资源、数值增量、地位变化或已回收伏笔？`),d.push(`${c++}. 【流水账检查】本章是否有无冲突的日常流水叙述？如有，加入前因后果或强情绪改造`,`${c++}. 【主线偏离检查】本章是否推进了主线目标？支线是否在2-3章内与核心目标关联？`,`${c++}. 【爽点节奏检查】最近3-5章内是否有小爽点落地？读者的"情绪缺口"是否在积累或释放？`,`${c++}. 【人设崩塌检查】角色行为是否与已建立的性格标签一致？有无无铺垫的突然转变？`,`${c++}. 【视角检查】本章视角是否清晰？同场景内说话人物是否控制在3人以内？`,`${c++}. 如果任何问题答不上来，先补逻辑链，再写正文`),d.join("\n")}(0,x),function(a,b){let c=b.numericalSystem?"| 当前资源总量 | X | 与账本一致 |\n| 本章预计增量 | +X（来源） | 无增量写+0 |":"",d=`=== PRE_WRITE_CHECK ===
（必须输出Markdown表格）
| 检查项 | 本章记录 | 备注 |
|--------|----------|------|
| 大纲锚定 | 当前卷名/阶段 + 本章应推进的具体节点 | 严禁跳过节点或提前消耗后续剧情 |
| 上下文范围 | 第X章至第Y章 / 状态卡 / 设定文件 | |
| 当前锚点 | 地点 / 对手 / 收益目标 | 锚点必须具体 |
${c}| 待回收伏笔 | Hook-A / Hook-B | 与伏笔池一致 |
| 本章冲突 | 一句话概括 | |
| 章节类型 | ${b.chapterTypes.join("/")} | |
| 风险扫描 | OOC/信息越界/设定冲突${b.powerScaling?"/战力崩坏":""}/节奏/词汇疲劳 | |`,e=b.numericalSystem?`=== POST_SETTLEMENT ===
（如有数值变动，必须输出Markdown表格）
| 结算项 | 本章记录 | 备注 |
|--------|----------|------|
| 资源账本 | 期初X / 增量+Y / 期末Z | 无增量写+0 |
| 重要资源 | 资源名 -> 贡献+Y（依据） | 无写"无" |
| 伏笔变动 | 新增/回收/延后 Hook | 同步更新伏笔池 |`:`=== POST_SETTLEMENT ===
（如有伏笔变动，必须输出）
| 结算项 | 本章记录 | 备注 |
|--------|----------|------|
| 伏笔变动 | 新增/回收/延后 Hook | 同步更新伏笔池 |`,f=b.numericalSystem?`
=== UPDATED_LEDGER ===
(更新后的完整资源账本，Markdown表格格式)`:"";return`## 输出格式（严格遵守）

${d}

=== CHAPTER_TITLE ===
(章节标题，不含"第X章")

=== CHAPTER_CONTENT ===
(正文内容，${a.chapterWordCount}字左右)

${e}

=== UPDATED_STATE ===
(更新后的完整状态卡，Markdown表格格式)
${f}
=== UPDATED_HOOKS ===
(更新后的完整伏笔池，Markdown表格格式)

=== CHAPTER_SUMMARY ===
(本章摘要，Markdown表格格式，必须包含以下列)
| 章节 | 标题 | 出场人物 | 关键事件 | 状态变化 | 伏笔动态 | 情绪基调 | 章节类型 |
|------|------|----------|----------|----------|----------|----------|----------|
| N | 本章标题 | 角色1,角色2 | 一句话概括 | 关键变化 | H01埋设/H02推进 | 情绪走向 | ${b.chapterTypes.length>0?b.chapterTypes.join("/"):"过渡/冲突/高潮/收束"} |

=== UPDATED_SUBPLOTS ===
(更新后的完整支线进度板，Markdown表格格式)
| 支线ID | 支线名 | 相关角色 | 起始章 | 最近活跃章 | 距今章数 | 状态 | 进度概述 | 回收ETA |
|--------|--------|----------|--------|------------|----------|------|----------|---------|

=== UPDATED_EMOTIONAL_ARCS ===
(更新后的完整情感弧线，Markdown表格格式)
| 角色 | 章节 | 情绪状态 | 触发事件 | 强度(1-10) | 弧线方向 |
|------|------|----------|----------|------------|----------|

=== UPDATED_CHARACTER_MATRIX ===
(更新后的角色交互矩阵，分三个子表)

### 角色档案
| 角色 | 核心标签 | 反差细节 | 说话风格 | 性格底色 | 与主角关系 | 核心动机 | 当前目标 |
|------|----------|----------|----------|----------|------------|----------|----------|

### 相遇记录
| 角色A | 角色B | 首次相遇章 | 最近交互章 | 关系性质 | 关系变化 |
|-------|-------|------------|------------|----------|----------|

### 信息边界
| 角色 | 已知信息 | 未知信息 | 信息来源章 |
|------|----------|----------|------------|`}(h,x)].filter(Boolean).join("\n\n"),F=this.extractDialogueFingerprints(w,k),G=this.findRelevantSummaries(q,l,j),H="(文件尚未创建)"!==v,K=this.buildUserPrompt({chapterNumber:j,storyBible:k,volumeOutline:l,currentState:n,ledger:x.numericalSystem?o:"",hooks:p,recentChapters:w,wordCount:a.wordCountOverride??h.chapterWordCount,externalContext:a.externalContext,chapterSummaries:q,subplotBoard:r,emotionalArcs:s,characterMatrix:t,dialogueFingerprints:F,relevantSummaries:G,parentCanon:H?v:void 0}),Q=a.temperatureOverride??.7,R=await this.chat([{role:"system",content:D},{role:"user",content:K}],{maxTokens:16384,temperature:Q}),T=this.parseOutput(j,R.content,x),U=function(a,b,c){let d=[];/不是[^，。！？\n]{0,30}[，,]?\s*而是/.test(a)&&d.push({rule:"禁止句式",severity:"error",description:"出现了「不是……而是……」句式",suggestion:"改用直述句"}),a.includes("——")&&d.push({rule:"禁止破折号",severity:"error",description:"出现了破折号「——」",suggestion:"用逗号或句号断句"});let e={},f=0;for(let b of L){let c=a.match(RegExp(b,"g")),d=c?.length??0;d>0&&(e[b]=d,f+=d)}let g=Math.max(1,Math.floor(a.length/3e3));if(f>g){let b=Object.entries(e).map(([a,b])=>`"${a}"\xd7${b}`).join("、");d.push({rule:"转折词密度",severity:"warning",description:`转折/惊讶标记词共${f}次（上限${g}次/${a.length}字），明细：${b}`,suggestion:"改用具体动作或感官描写传递突然性"})}for(let e of c?.fatigueWordsOverride&&c.fatigueWordsOverride.length>0?c.fatigueWordsOverride:b.fatigueWords){let b=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),c=a.match(RegExp(b,"g")),f=c?.length??0;f>1&&d.push({rule:"高疲劳词",severity:"warning",description:`高疲劳词"${e}"出现${f}次（上限1次/章）`,suggestion:`替换多余的"${e}"为同义但不同形式的表达`})}for(let b of M){let c=a.match(b);if(c){d.push({rule:"元叙事",severity:"warning",description:`出现编剧旁白式表述："${c[0]}"`,suggestion:"删除元叙事，让剧情自然展开"});break}}let h=[];for(let b of N)a.includes(b)&&h.push(b);h.length>0&&d.push({rule:"报告术语",severity:"error",description:`正文中出现分析报告术语：${h.map(a=>`"${a}"`).join("、")}`,suggestion:"这些术语只能用于 PRE_WRITE_CHECK 内部推理，正文中用口语化表达替代"});let i=[];for(let b of O)a.includes(b)&&i.push(b);for(let b of(i.length>0&&d.push({rule:"作者说教",severity:"warning",description:`出现说教词：${i.map(a=>`"${a}"`).join("、")}`,suggestion:"删除说教词，让读者自己从情节中判断"}),P)){let c=a.match(b);if(c){d.push({rule:"集体反应",severity:"warning",description:`出现集体反应套话："${c[0]}"`,suggestion:"改写成1-2个具体角色的身体反应"});break}}let j=a.split(/[。！？]/).map(a=>a.trim()).filter(a=>a.length>2),k=0,l=0;for(let a of j)a.includes("了")?l=Math.max(l,++k):k=0;l>=4&&d.push({rule:"连续了字",severity:"warning",description:`检测到${l}句连续包含"了"字，节奏拖沓`,suggestion:"保留最有力的一个「了」，其余改为无「了」句式"});let m=a.split(/\n\s*\n/).map(a=>a.trim()).filter(a=>a.length>0).filter(a=>a.length>300);if(m.length>=2&&d.push({rule:"段落过长",severity:"warning",description:`${m.length}个段落超过300字，不适合手机阅读`,suggestion:"长段落拆分为3-5行的短段落，在动作切换或情绪节点处断开"}),c?.prohibitions)for(let b of c.prohibitions)b.length>=2&&b.length<=30&&a.includes(b)&&d.push({rule:"本书禁忌",severity:"error",description:`出现了本书禁忌内容："${b}"`,suggestion:"删除或改写该内容"});return d}(T.content,x,A),V=S(T.content).issues,W=U.filter(a=>"error"===a.severity),X=U.filter(a=>"warning"===a.severity);if(U.length>0)for(let a of(process.stderr.write(`[writer] Post-write: ${W.length} errors, ${X.length} warnings in chapter ${j}
`),U))process.stderr.write(`  [${a.severity}] ${a.rule}: ${a.description}
`);if(V.length>0)for(let a of(process.stderr.write(`[writer] AI-tell check: ${V.length} issues in chapter ${j}
`),V))process.stderr.write(`  [${a.severity}] ${a.category}: ${a.description}
`);return{...T,postWriteErrors:W,postWriteWarnings:X}}async saveChapter(a,b,c=!0){let d=(0,E.join)(a,"chapters"),e=(0,E.join)(a,"story");await (0,D.mkdir)(d,{recursive:!0});let f=String(b.chapterNumber).padStart(4,"0"),g=`${f}_${this.sanitizeFilename(b.title)}.md`,h=[`# 第${b.chapterNumber}章 ${b.title}`,"",b.content].join("\n"),i=[(0,D.writeFile)((0,E.join)(d,g),h,"utf-8"),(0,D.writeFile)((0,E.join)(e,"current_state.md"),b.updatedState,"utf-8"),(0,D.writeFile)((0,E.join)(e,"pending_hooks.md"),b.updatedHooks,"utf-8")];c&&i.push((0,D.writeFile)((0,E.join)(e,"particle_ledger.md"),b.updatedLedger,"utf-8")),await Promise.all(i)}buildUserPrompt(a){let b=a.externalContext?`
## 外部指令
以下是来自外部系统的创作指令，请在本章中融入：

${a.externalContext}
`:"",c=a.ledger?`
## 资源账本
${a.ledger}
`:"",d="(文件尚未创建)"!==a.chapterSummaries?`
## 章节摘要（全部历史章节压缩上下文）
${a.chapterSummaries}
`:"",e="(文件尚未创建)"!==a.subplotBoard?`
## 支线进度板
${a.subplotBoard}
`:"",f="(文件尚未创建)"!==a.emotionalArcs?`
## 情感弧线
${a.emotionalArcs}
`:"",g="(文件尚未创建)"!==a.characterMatrix?`
## 角色交互矩阵
${a.characterMatrix}
`:"",h=a.dialogueFingerprints?`
## 角色对话指纹
${a.dialogueFingerprints}
`:"",i=a.relevantSummaries?`
## 相关历史章节摘要
${a.relevantSummaries}
`:"",j=a.parentCanon?`
## 正传正典参照（番外写作专用）
本书是番外作品。以下正典约束不可违反，角色不得引用超出其信息边界的信息。
${a.parentCanon}
`:"";return`请续写第${a.chapterNumber}章。
${b}
## 当前状态卡
${a.currentState}
${c}
## 伏笔池
${a.hooks}
${d}${e}${f}${g}${h}${i}${j}
## 最近章节
${a.recentChapters||"(这是第一章，无前文)"}

## 世界观设定
${a.storyBible}

## 卷纲（硬约束——必须遵守）
${a.volumeOutline}

【卷纲遵守规则】
- 本章内容必须对应卷纲中当前章节范围内的剧情节点，严禁跳过或提前消耗后续节点
- 如果卷纲指定了某个事件/转折发生在第N章，不得提前到本章完成
- 剧情推进速度必须与卷纲规划的章节跨度匹配：如果卷纲规划某段剧情跨5章，不得在1-2章内讲完
- PRE_WRITE_CHECK中必须明确标注本章对应的卷纲节点

要求：
- 正文不少于${a.wordCount}字
- 写完后更新状态卡${a.ledger?"、资源账本":""}、伏笔池、章节摘要、支线进度板、情感弧线、角色交互矩阵
- 先输出写作自检表，再写正文`}async loadRecentChapters(a,b){let c=(0,E.join)(a,"chapters");try{let a=(await (0,D.readdir)(c)).filter(a=>a.endsWith(".md")&&!a.startsWith("index")).sort().slice(-3);if(0===a.length)return"";return(await Promise.all(a.map(async a=>await (0,D.readFile)((0,E.join)(c,a),"utf-8")))).join("\n\n---\n\n")}catch{return""}}async readFileOrDefault(a){try{return await (0,D.readFile)(a,"utf-8")}catch{return"(文件尚未创建)"}}parseOutput(a,b,c){return T(a,b,c)}async saveNewTruthFiles(a,b){let c=(0,E.join)(a,"story"),d=[];b.chapterSummary&&d.push(this.appendChapterSummary(c,b.chapterSummary)),b.updatedSubplots&&d.push((0,D.writeFile)((0,E.join)(c,"subplot_board.md"),b.updatedSubplots,"utf-8")),b.updatedEmotionalArcs&&d.push((0,D.writeFile)((0,E.join)(c,"emotional_arcs.md"),b.updatedEmotionalArcs,"utf-8")),b.updatedCharacterMatrix&&d.push((0,D.writeFile)((0,E.join)(c,"character_matrix.md"),b.updatedCharacterMatrix,"utf-8")),await Promise.all(d)}async appendChapterSummary(a,b){let c=(0,E.join)(a,"chapter_summaries.md"),d="";try{d=await (0,D.readFile)(c,"utf-8")}catch{d="# 章节摘要\n\n| 章节 | 标题 | 出场人物 | 关键事件 | 状态变化 | 伏笔动态 | 情绪基调 | 章节类型 |\n|------|------|----------|----------|----------|----------|----------|----------|\n"}let e=b.split("\n").filter(a=>a.startsWith("|")&&!a.startsWith("| 章节")&&!a.startsWith("|--")).join("\n");e&&await (0,D.writeFile)(c,`${d.trimEnd()}
${e}
`,"utf-8")}buildStyleFingerprint(a){if(a&&"(文件尚未创建)"!==a)try{let b=JSON.parse(a),c=[];return b.avgSentenceLength&&c.push(`- 平均句长：${b.avgSentenceLength}字`),b.sentenceLengthStdDev&&c.push(`- 句长标准差：${b.sentenceLengthStdDev}`),b.avgParagraphLength&&c.push(`- 平均段落长度：${b.avgParagraphLength}字`),b.paragraphLengthRange&&c.push(`- 段落长度范围：${b.paragraphLengthRange.min}-${b.paragraphLengthRange.max}字`),b.vocabularyDiversity&&c.push(`- 词汇多样性(TTR)：${b.vocabularyDiversity}`),b.topPatterns?.length>0&&c.push(`- 高频句式：${b.topPatterns.join("、")}`),b.rhetoricalFeatures?.length>0&&c.push(`- 修辞特征：${b.rhetoricalFeatures.join("、")}`),c.length>0?c.join("\n"):void 0}catch{return}}extractDialogueFingerprints(a,b){let c;if(!a)return"";let d=/(?:(.{1,6})(?:说道|道|喝道|冷声道|笑道|怒道|低声道|大声道|喝骂道|冷笑道|沉声道|喊道|叫道|问道|答道)\s*[：:]\s*["""「]([^"""」]+)["""」])|["""「]([^"""」]{2,})["""」]/g,e=new Map;for(;null!==(c=d.exec(a));){let a=c[1]?.trim(),b=c[2]??c[3]??"";if(a&&b.length>1){let c=e.get(a)??[];e.set(a,[...c,b])}}let f=[];for(let[a,b]of e){if(b.length<2)continue;let c=15>Math.round(b.reduce((a,b)=>a+b.length,0)/b.length),d=new Map;for(let a of b)for(let b=0;b<a.length-1;b++){let c=a.slice(b,b+2);d.set(c,(d.get(c)??0)+1)}let e=[...d.entries()].filter(([,a])=>a>=2).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([a])=>`「${a}」`),g=[];c?g.push("短句为主"):g.push("长句为主"),b.filter(a=>a.includes("？")||a.includes("?")).length>.3*b.length&&g.push("反问多"),e.length>0&&g.push(`常用${e.join("")}`),f.push(`${a}：${g.join("，")}`)}return f.length>0?f.join("；"):""}findRelevantSummaries(a,b,c){let d,e;if(!a||"(文件尚未创建)"===a||!b||"(文件尚未创建)"===b)return"";let f=/[\u4e00-\u9fff]{2,4}(?=[，、。：]|$)/g,g=new Set;for(;null!==(d=f.exec(b));)g.add(d[0]);let h=/H\d{2,}/g,i=new Set;for(;null!==(e=h.exec(b));)i.add(e[0]);if(0===g.size&&0===i.size)return"";let j=a.split("\n").filter(a=>a.startsWith("|")&&!a.startsWith("| 章节")&&!a.startsWith("|--")&&!a.startsWith("| -")).filter(a=>{for(let b of g)if(a.includes(b))return!0;for(let b of i)if(a.includes(b))return!0;return!1}),k=Math.max(1,c-3),l=j.filter(a=>{let b=a.match(/\|\s*(\d+)\s*\|/);return!b||parseInt(b[1],10)<k});return l.length>0?l.join("\n"):""}sanitizeFilename(a){return a.replace(/[/\\?%*:|"<>]/g,"").replace(/\s+/g,"_").slice(0,50)}}let V={1:"OOC检查",2:"时间线检查",3:"设定冲突",4:"战力崩坏",5:"数值检查",6:"伏笔检查",7:"节奏检查",8:"文风检查",9:"信息越界",10:"词汇疲劳",11:"利益链断裂",12:"年代考据",13:"配角降智",14:"配角工具人化",15:"爽点虚化",16:"台词失真",17:"流水账",18:"知识库污染",19:"视角一致性",20:"段落等长",21:"套话密度",22:"公式化转折",23:"列表式结构",24:"支线停滞",25:"弧线平坦",26:"节奏单调",27:"敏感词检查",28:"正传事件冲突",29:"未来信息泄露",30:"世界规则跨书一致性",31:"番外伏笔隔离",32:"读者期待管理",33:"大纲偏离检测"};class W extends C{get name(){return"continuity-auditor"}async auditChapter(a,b,c,d,e){let[f,g,h,i,j,k,l,m,n,o]=await Promise.all([this.readFileSafe((0,E.join)(a,"story/current_state.md")),this.readFileSafe((0,E.join)(a,"story/particle_ledger.md")),this.readFileSafe((0,E.join)(a,"story/pending_hooks.md")),this.readFileSafe((0,E.join)(a,"story/style_guide.md")),this.readFileSafe((0,E.join)(a,"story/subplot_board.md")),this.readFileSafe((0,E.join)(a,"story/emotional_arcs.md")),this.readFileSafe((0,E.join)(a,"story/character_matrix.md")),this.readFileSafe((0,E.join)(a,"story/chapter_summaries.md")),this.readFileSafe((0,E.join)(a,"story/parent_canon.md")),this.readFileSafe((0,E.join)(a,"story/volume_outline.md"))]),p="(文件不存在)"!==n,{profile:q}=await I(this.ctx.projectRoot,d??"other"),r=await J(a),s=r?.rules??null,t="(文件不存在)"!==i?i:r?.body??"(无文风指南)",u=(function(a,b,c=!1){let d=new Set(a.auditDimensions);if(b?.additionalAuditDimensions){let a=new Map;for(let[b,c]of Object.entries(V))a.set(c,Number(b));for(let c of b.additionalAuditDimensions)if("number"==typeof c)d.add(c);else if("string"==typeof c){let b=a.get(c);if(void 0!==b)d.add(b);else for(let[b,e]of a)if(b.includes(c)||c.includes(b)){d.add(e);break}}}d.add(32),d.add(33),(a.eraResearch||b?.eraConstraints?.enabled)&&d.add(12),c&&(d.add(28),d.add(29),d.add(30),d.add(31));let e=[];for(let c of[...d].sort((a,b)=>a-b)){let d=V[c];if(!d)continue;let f="";if(10===c&&a.fatigueWords.length>0){let c=b?.fatigueWordsOverride&&b.fatigueWordsOverride.length>0?b.fatigueWordsOverride:a.fatigueWords;f=`高疲劳词：${c.join("、")}。同时检查AI标记词（仿佛/不禁/宛如/竟然/忽然/猛地）密度，每3000字超过1次即warning`}if(15===c&&a.satisfactionTypes.length>0&&(f=`爽点类型：${a.satisfactionTypes.join("、")}`),12===c&&b?.eraConstraints){let a=b.eraConstraints,c=[a.period,a.region].filter(Boolean);c.length>0&&(f=`年代：${c.join("，")}`)}19===c&&(f="检查视角切换是否有过渡、是否与设定视角一致"),24===c&&(f="对照 subplot_board 和 chapter_summaries：如果任何支线超过5章未被提及或推进→warning。如果存在支线但近3章完全没有任何支线推进→warning"),25===c&&(f="对照 emotional_arcs 和 chapter_summaries：如果主要角色连续3章情绪状态无变化（没有新的压力、释放、转变）→warning。注意区分'角色处境未变'和'角色内心未变'"),26===c&&(f="对照 chapter_summaries 的章节类型分布：连续≥3章相同类型（如连续3个事件章/战斗章/布局章）→warning。≥5章没有出现回收章或高潮章→warning。请明确列出最近章节的类型序列"),28===c&&(f="检查番外事件是否与正典约束表矛盾"),29===c&&(f="检查角色是否引用了分歧点之后才揭示的信息（参照信息边界表）"),30===c&&(f="检查番外是否违反正传世界规则（力量体系、地理、阵营）"),31===c&&(f="检查番外是否越权回收正传伏笔（warning级别）"),32===c&&(f="检查：章尾是否有钩子？最近3-5章内是否有爽点落地？是否存在超过3章的情绪压制无释放？读者的情绪缺口是否在积累或被满足？"),33===c&&(f="对照 volume_outline：本章内容是否对应卷纲中当前章节范围的剧情节点？是否跳过了节点或提前消耗了后续节点？剧情推进速度是否与卷纲规划的章节跨度匹配？如果卷纲规划某段剧情跨N章但实际1-2章就讲完→critical"),e.push({id:c,name:d,note:f})}return e})(q,s,p).map(a=>`${a.id}. ${a.name}${a.note?`（${a.note}）`:""}`).join("\n"),v=s?.protagonist?`
主角人设锁定：${s.protagonist.name}，${s.protagonist.personalityLock.join("、")}，行为约束：${s.protagonist.behavioralConstraints.join("、")}`:"",w=q.eraResearch?"\n\n你有联网搜索能力（search_web / fetch_url）。对于涉及真实年代、人物、事件、地理、政策的内容，你必须用search_web核实，不可凭记忆判断。至少对比2个来源交叉验证。":"",x=`你是一位严格的${q.name}网络小说审稿编辑。你的任务是对章节进行连续性、一致性和质量审查。${v}${w}

审查维度：
${u}

输出格式必须为 JSON：
{
  "passed": true/false,
  "issues": [
    {
      "severity": "critical|warning|info",
      "category": "审查维度名称",
      "description": "具体问题描述",
      "suggestion": "修改建议"
    }
  ],
  "summary": "一句话总结审查结论"
}

只有当存在 critical 级别问题时，passed 才为 false。`,y=q.numericalSystem?`
## 资源账本
${g}`:"",z="(文件不存在)"!==j?`
## 支线进度板
${j}
`:"",A="(文件不存在)"!==k?`
## 情感弧线
${k}
`:"",B="(文件不存在)"!==l?`
## 角色交互矩阵
${l}
`:"",C="(文件不存在)"!==m?`
## 章节摘要（用于节奏检查）
${m}
`:"",D=p?`
## 正传正典参照（番外审查专用）
${n}
`:"",F="(文件不存在)"!==o?`
## 卷纲（用于大纲偏离检测）
${o}
`:"",G=[{role:"system",content:x},{role:"user",content:`请审查第${c}章。

## 当前状态卡
${f}
${y}
## 伏笔池
${h}
${z}${A}${B}${C}${D}${F}
## 文风指南
${t}

## 待审章节内容
${b}`}],H={temperature:e?.temperature??.3,maxTokens:4096},K=q.eraResearch?await this.chatWithSearch(G,H):await this.chat(G,H);return this.parseAuditResult(K.content)}parseAuditResult(a){let b=a.match(/\{[\s\S]*\}/);if(!b)return{passed:!1,issues:[{severity:"critical",category:"系统错误",description:"审稿输出格式异常，无法解析",suggestion:"重新运行审稿"}],summary:"审稿输出解析失败"};try{let a=JSON.parse(b[0]);return{passed:!!a.passed,issues:Array.isArray(a.issues)?a.issues:[],summary:String(a.summary??"")}}catch{return{passed:!1,issues:[{severity:"critical",category:"系统错误",description:"审稿 JSON 解析失败",suggestion:"重新运行审稿"}],summary:"审稿 JSON 解析失败"}}}async readFileSafe(a){try{return await (0,D.readFile)(a,"utf-8")}catch{return"(文件不存在)"}}}let X={polish:"润色：只改表达、节奏、段落呼吸，不改事实与剧情结论。禁止：增删段落、改变人名/地名/物品名、增加新情节或新对话、改变因果关系。只允许：替换用词、调整句序、修改标点节奏",rewrite:"改写：可改叙述顺序、画面、力度，但保留核心事实与人物动机",rework:"重写：可重构场景推进和冲突组织，但不改主设定和大事件结果","anti-detect":`反检测改写：在保持剧情不变的前提下，降低AI生成可检测性。

改写手法（附正例）：
1. 打破句式规律：连续短句 → 长短交替，句式不可预测
2. 口语化替代：✗"然而事情并没有那么简单" → ✓"哪有那么便宜的事"
3. 减少"了"字密度：✗"他走了过去，拿了杯子" → ✓"他走过去，端起杯子"
4. 转折词降频：✗"虽然…但是…" → ✓ 用角色内心吐槽或直接动作切换
5. 情绪外化：✗"他感到愤怒" → ✓"他捏碎了茶杯，滚烫的茶水流过指缝"
6. 删掉叙述者结论：✗"这一刻他终于明白了力量" → ✓ 只写行动，让读者自己感受
7. 群像反应具体化：✗"全场震惊" → ✓"老陈的烟掉在裤子上，烫得他跳起来"
8. 段落长度差异化：不再等长段落，有的段只有一句话，有的段七八行
9. 消灭"不禁""仿佛""宛如"等AI标记词：换成具体感官描写`,"spot-fix":"定点修复：只修改审稿意见指出的具体句子或段落，其余所有内容必须原封不动保留。修改范围限定在问题句子及其前后各一句。禁止改动无关段落"};class Y extends C{get name(){return"reviser"}async reviseChapter(a,b,c,d,e="rewrite",f){let[g,h,i,j]=await Promise.all([this.readFileSafe((0,E.join)(a,"story/current_state.md")),this.readFileSafe((0,E.join)(a,"story/particle_ledger.md")),this.readFileSafe((0,E.join)(a,"story/pending_hooks.md")),this.readFileSafe((0,E.join)(a,"story/style_guide.md"))]),{profile:k}=await I(this.ctx.projectRoot,f??"other"),l=await J(a),m=l?.rules??null,n="(文件不存在)"!==j?j:l?.body??"(无文风指南)",o=d.map(a=>`- [${a.severity}] ${a.category}: ${a.description}
  建议: ${a.suggestion}`).join("\n"),p=X[e],q=k.numericalSystem?"\n3. 数值错误必须精确修正，前后对账":"",r=m?.protagonist?`

主角人设锁定：${m.protagonist.name}，${m.protagonist.personalityLock.join("、")}。修改不得违反人设。`:"",s=`你是一位专业的${k.name}网络小说修稿编辑。你的任务是根据审稿意见对章节进行修正。${r}

修稿模式：${p}

修稿原则：
1. 按模式控制修改幅度
2. 修根因，不做表面润色${q}
4. 伏笔状态必须与伏笔池同步
5. 不改变剧情走向和核心冲突
6. 保持原文的语言风格和节奏
7. 修改后同步更新状态卡${k.numericalSystem?"、账本":""}、伏笔池

输出格式：

=== FIXED_ISSUES ===
(逐条说明修正了什么，一行一条)

=== REVISED_CONTENT ===
(修正后的完整正文)

=== UPDATED_STATE ===
(更新后的完整状态卡)
${k.numericalSystem?"\n=== UPDATED_LEDGER ===\n(更新后的完整资源账本)":""}
=== UPDATED_HOOKS ===
(更新后的完整伏笔池)`,t=k.numericalSystem?`
## 资源账本
${h}`:"",u=`请修正第${c}章。

## 审稿问题
${o}

## 当前状态卡
${g}
${t}
## 伏笔池
${i}

## 文风指南
${n}

## 待修正章节
${b}`,v=await this.chat([{role:"system",content:s},{role:"user",content:u}],{temperature:.3,maxTokens:"spot-fix"===e?8192:16384});return this.parseOutput(v.content,k)}parseOutput(a,b){let c=b=>{let c=RegExp(`=== ${b} ===\\s*([\\s\\S]*?)(?==== [A-Z_]+ ===|$)`),d=a.match(c);return d?.[1]?.trim()??""},d=c("REVISED_CONTENT"),e=c("FIXED_ISSUES");return{revisedContent:d,wordCount:d.length,fixedIssues:e.split("\n").map(a=>a.trim()).filter(a=>a.length>0),updatedState:c("UPDATED_STATE")||"(状态卡未更新)",updatedLedger:b.numericalSystem?c("UPDATED_LEDGER")||"(账本未更新)":"",updatedHooks:c("UPDATED_HOOKS")||"(伏笔池未更新)"}}async readFileSafe(a){try{return await (0,D.readFile)(a,"utf-8")}catch{return"(文件不存在)"}}}let Z=[{sideType:10,label:"热门榜"},{sideType:13,label:"黑马榜"}];class ${async fetch(){let a=[];for(let{sideType:b,label:c}of Z)try{let d=`https://api-lf.fanqiesdk.com/api/novel/channel/homepage/rank/rank_list/v2/?aid=13&limit=15&offset=0&side_type=${b}`,e=await globalThis.fetch(d,{headers:{"User-Agent":"Mozilla/5.0 (compatible; InkOS/0.1)"}});if(!e.ok)continue;let f=await e.json(),g=f.data?.result;if(!Array.isArray(g))continue;for(let b of g)a.push({title:String(b.book_name??""),author:String(b.author??""),category:String(b.category??""),extra:`[${c}]`})}catch{}return{platform:"番茄小说",entries:a}}constructor(){this.name="fanqie"}}class _{async fetch(){let a=[];try{let b,c=await globalThis.fetch("https://www.qidian.com/rank/",{headers:{"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}});if(!c.ok)return{platform:"起点中文网",entries:a};let d=await c.text(),e=/<a[^>]*href="\/\/book\.qidian\.com\/info\/(\d+)"[^>]*>([^<]+)<\/a>/g,f=new Set;for(;null!==(b=e.exec(d));){let c=b[2].trim();if(c&&!f.has(c)&&c.length>1&&c.length<30&&(f.add(c),a.push({title:c,author:"",category:"",extra:"[起点热榜]"})),a.length>=20)break}}catch{}return{platform:"起点中文网",entries:a}}constructor(){this.name="qidian"}}let aa=[new $,new _];class ab extends C{constructor(a,b){super(a),this.sources=b??aa}get name(){return"radar"}async scan(){let a=function(a){let b=a.filter(a=>a.entries.length>0).map(a=>{let b=a.entries.map(a=>`- ${a.title}${a.author?` (${a.author})`:""}${a.category?` [${a.category}]`:""} ${a.extra}`);return`### ${a.platform}
${b.join("\n")}`});return b.length>0?b.join("\n\n"):"（未能获取到实时排行数据，请基于你的知识分析）"}(await Promise.all(this.sources.map(a=>a.fetch()))),b=`你是一个专业的网络小说市场分析师。下面是从各平台实时抓取的排行榜数据，请基于这些真实数据分析市场趋势。

## 实时排行榜数据

${a}

分析维度：
1. 从排行榜数据中识别当前热门题材和标签
2. 分析哪些类型的作品占据榜单高位
3. 发现市场空白和机会点（榜单上缺少但有潜力的方向）
4. 风险提示（榜单上过度扎堆的题材）

输出格式必须为 JSON：
{
  "recommendations": [
    {
      "platform": "平台名",
      "genre": "题材类型",
      "concept": "一句话概念描述",
      "confidence": 0.0-1.0,
      "reasoning": "推荐理由（引用具体榜单数据）",
      "benchmarkTitles": ["对标书1", "对标书2"]
    }
  ],
  "marketSummary": "整体市场概述（基于真实榜单数据）"
}

推荐数量：3-5个，按 confidence 降序排列。`,c=await this.chat([{role:"system",content:b},{role:"user",content:`请基于上面的实时排行榜数据，分析当前网文市场热度，给出开书建议。`}],{temperature:.6,maxTokens:4096});return this.parseResult(c.content)}parseResult(a){let b=a.match(/\{[\s\S]*\}/);if(!b)throw Error("Radar output format error: no JSON found");try{let a=JSON.parse(b[0]);return{recommendations:a.recommendations??[],marketSummary:a.marketSummary??"",timestamp:new Date().toISOString()}}catch(a){throw Error(`Radar JSON parse error: ${a}`)}}}let ac=[{words:["习近平","习主席","习总书记","共产党","中国共产党","共青团","六四","天安门事件","天安门广场事件","法轮功","法轮大法","台独","藏独","疆独","港独","新疆集中营","再教育营","维吾尔","达赖喇嘛","达赖","刘晓波","艾未未","赵紫阳","文化大革命","文革","大跃进","反右运动","镇压","六四屠杀","中南海","政治局常委","翻墙","防火长城"],severity:"block",label:"政治敏感词"},{words:["性交","做爱","口交","肛交","自慰","手淫","阴茎","阴道","阴蒂","乳房","乳头","射精","高潮","潮吹","淫荡","淫乱","荡妇","婊子","强奸","轮奸"],severity:"warn",label:"色情敏感词"},{words:["肢解","碎尸","挖眼","剥皮","开膛破肚","虐杀","凌迟","活剥","活埋","烹煮活人"],severity:"warn",label:"极端暴力词"}];function ad(a,b){let c=[],d=[];for(let b of ac){let e=ae(a,b.words,b.severity);if(e.length>0){c.push(...e);let a=e.map(a=>`"${a.word}"\xd7${a.count}`).join("、");d.push({severity:"block"===b.severity?"critical":"warning",category:"敏感词",description:`检测到${b.label}：${a}`,suggestion:"block"===b.severity?"必须删除或替换政治敏感词，否则无法发布":`建议替换或弱化${b.label}，避免平台审核问题`})}}if(b&&b.length>0){let e=ae(a,b,"warn");if(e.length>0){c.push(...e);let a=e.map(a=>`"${a.word}"\xd7${a.count}`).join("、");d.push({severity:"warning",category:"敏感词",description:`检测到自定义敏感词：${a}`,suggestion:"根据项目规则替换或删除这些词语"})}}return{issues:d,found:c}}function ae(a,b,c){let d=[];for(let e of b){let b=RegExp(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),f=a.match(b);f&&f.length>0&&d.push({word:e,count:f.length,severity:c})}return d}c(99043);class af extends C{get name(){return"chapter-analyzer"}async analyzeChapter(a){let{book:b,bookDir:c,chapterNumber:d,chapterContent:e,chapterTitle:f}=a,[g,h,i,j,k,l,m,n,o]=await Promise.all([this.readFileOrDefault((0,E.join)(c,"story/current_state.md")),this.readFileOrDefault((0,E.join)(c,"story/particle_ledger.md")),this.readFileOrDefault((0,E.join)(c,"story/pending_hooks.md")),this.readFileOrDefault((0,E.join)(c,"story/chapter_summaries.md")),this.readFileOrDefault((0,E.join)(c,"story/subplot_board.md")),this.readFileOrDefault((0,E.join)(c,"story/emotional_arcs.md")),this.readFileOrDefault((0,E.join)(c,"story/character_matrix.md")),this.readFileOrDefault((0,E.join)(c,"story/story_bible.md")),this.readFileOrDefault((0,E.join)(c,"story/volume_outline.md"))]),{profile:p,body:q}=await I(this.ctx.projectRoot,b.genre),r=await J(c),s=r?.body??"",t=this.buildSystemPrompt(b,p,q,s),u=this.buildUserPrompt({chapterNumber:d,chapterContent:e,chapterTitle:f,storyBible:n,volumeOutline:o,currentState:g,ledger:p.numericalSystem?h:"",hooks:i,chapterSummaries:j,subplotBoard:k,emotionalArcs:l,characterMatrix:m}),v=T(d,(await this.chat([{role:"system",content:t},{role:"user",content:u}],{maxTokens:16384,temperature:.3})).content,p);return v.title===`第${d}章`&&f?{...v,title:f}:v}buildSystemPrompt(a,b,c,d){let e=b.numericalSystem?`
- 本题材有数值/资源体系，你必须在 UPDATED_LEDGER 中追踪正文中出现的所有资源变动`:`
- 本题材无数值系统，UPDATED_LEDGER 留空`;return`你是小说连续性分析师。你的任务是分析一章已完成的小说正文，从中提取所有状态变化并更新追踪文件。

## 工作模式

你不是在写作，而是在分析已有正文。你需要：
1. 仔细阅读正文，提取所有关键信息
2. 基于"当前追踪文件"做增量更新
3. 输出格式与写作模块完全一致

## 分析维度

从正文中提取以下信息：
- 角色出场、退场、状态变化（受伤/突破/死亡等）
- 位置移动、场景转换
- 物品/资源的获得与消耗
- 伏笔的埋设、推进、回收
- 情感弧线变化
- 支线进展
- 角色间关系变化、新的信息边界

## 书籍信息

- 标题：${a.title}
- 题材：${b.name}（${a.genre}）
- 平台：${a.platform}
${e}

## 题材特征

${c}

${d?`## 本书规则

${d}`:""}

## 输出格式（必须严格遵循）

使用 === TAG === 分隔各部分，与写作模块完全一致：

=== CHAPTER_TITLE ===
（从正文标题行提取或推断章节标题，只输出标题文字）

=== CHAPTER_CONTENT ===
（原样输出正文内容，不做任何修改）

=== PRE_WRITE_CHECK ===
（留空，分析模式不需要写作自检）

=== POST_SETTLEMENT ===
（留空，分析模式不需要写后结算）

=== UPDATED_STATE ===
更新后的状态卡（Markdown表格），反映本章结束时的最新状态：
| 字段 | 值 |
|------|-----|
| 当前章节 | {章节号} |
| 当前位置 | ... |
| 主角状态 | ... |
| 当前目标 | ... |
| 当前限制 | ... |
| 当前敌我 | ... |
| 当前冲突 | ... |

=== UPDATED_LEDGER ===
（如有数值系统：更新后的完整资源账本表格；无则留空）

=== UPDATED_HOOKS ===
更新后的伏笔池（Markdown表格），包含所有已知伏笔的最新状态：
| hook_id | 起始章节 | 类型 | 状态 | 最近推进 | 预期回收 | 备注 |

=== CHAPTER_SUMMARY ===
本章摘要（Markdown表格行）：
| 章节 | 标题 | 出场人物 | 关键事件 | 状态变化 | 伏笔动态 | 情绪基调 | 章节类型 |

=== UPDATED_SUBPLOTS ===
更新后的支线进度板（Markdown表格）

=== UPDATED_EMOTIONAL_ARCS ===
更新后的情感弧线（Markdown表格）

=== UPDATED_CHARACTER_MATRIX ===
更新后的角色交互矩阵（Markdown表格）

## 关键规则

1. 状态卡和伏笔池必须基于"当前追踪文件"做增量更新，不是从零开始
2. 正文中的每一个事实性变化都必须反映在对应的追踪文件中
3. 不要遗漏细节：数值变化、位置变化、关系变化、信息变化都要记录
4. 角色交互矩阵中的"信息边界"要准确——角色只知道他在场时发生的事`}buildUserPrompt(a){let b=a.chapterTitle?`章节标题：${a.chapterTitle}
`:"",c=a.ledger?`
## 当前资源账本
${a.ledger}
`:"",d="(文件尚未创建)"!==a.chapterSummaries?`
## 已有章节摘要
${a.chapterSummaries}
`:"",e="(文件尚未创建)"!==a.subplotBoard?`
## 当前支线进度板
${a.subplotBoard}
`:"",f="(文件尚未创建)"!==a.emotionalArcs?`
## 当前情感弧线
${a.emotionalArcs}
`:"",g="(文件尚未创建)"!==a.characterMatrix?`
## 当前角色交互矩阵
${a.characterMatrix}
`:"";return`请分析第${a.chapterNumber}章正文，更新所有追踪文件。
${b}
## 正文内容

${a.chapterContent}

## 当前状态卡
${a.currentState}
${c}
## 当前伏笔池
${a.hooks}
${d}${e}${f}${g}
## 世界观设定
${a.storyBible}

## 卷纲
${a.volumeOutline}

请严格按照 === TAG === 格式输出分析结果。`}async readFileOrDefault(a){try{return await (0,D.readFile)(a,"utf-8")}catch{return"(文件尚未创建)"}}}var ag=c(76015);async function ah(a,b){let c=`https://api.telegram.org/bot${a.botToken}/sendMessage`,d=await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:a.chatId,text:b,parse_mode:"Markdown"})});if(!d.ok){let a=await d.text();throw Error(`Telegram send failed: ${d.status} ${a}`)}}async function ai(a,b,c){let d=await fetch(a.webhookUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({msg_type:"interactive",card:{header:{title:{tag:"plain_text",content:b},template:"blue"},elements:[{tag:"markdown",content:c}]}})});if(!d.ok){let a=await d.text();throw Error(`Feishu send failed: ${d.status} ${a}`)}}async function aj(a,b){let c=await fetch(a.webhookUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({msgtype:"markdown",markdown:{content:b}})});if(!c.ok){let a=await c.text();throw Error(`WeCom send failed: ${c.status} ${a}`)}}var ak=c(77598);async function al(a,b){if(a.events&&a.events.length>0&&!a.events.includes(b.event))return;let c=JSON.stringify(b),d={"Content-Type":"application/json"};if(a.secret){let b=(0,ak.createHmac)("sha256",a.secret).update(c).digest("hex");d["X-InkOS-Signature"]=`sha256=${b}`}let e=await fetch(a.url,{method:"POST",headers:d,body:c});if(!e.ok){let b=await e.text();throw Error(`Webhook POST to ${a.url} failed: ${e.status} ${b}`)}}async function am(a,b){let c=`**${b.title}**

${b.body}`,d=a.map(async a=>{try{switch(a.type){case"telegram":await ah({botToken:a.botToken,chatId:a.chatId},c);break;case"feishu":await ai({webhookUrl:a.webhookUrl},b.title,b.body);break;case"wechat-work":await aj({webhookUrl:a.webhookUrl},c);break;case"webhook":await al({url:a.url,secret:a.secret,events:a.events},{event:"pipeline-complete",bookId:"",timestamp:new Date().toISOString(),data:{title:b.title,body:b.body}})}}catch(b){process.stderr.write(`[notify] ${a.type} failed: ${b}
`)}});await Promise.all(d)}async function an(a,b){let c=a.filter(a=>"webhook"===a.type);if(0===c.length)return;let d=c.map(async a=>{if("webhook"===a.type)try{await al({url:a.url,secret:a.secret,events:a.events},b)}catch(b){process.stderr.write(`[webhook] ${a.url} failed: ${b}
`)}});await Promise.all(d)}class ao{constructor(a){this.config=a,this.state=new ag.StateManager(a.projectRoot)}agentCtx(a){return{client:this.config.client,model:this.config.model,projectRoot:this.config.projectRoot,bookId:a}}modelFor(a){return this.config.modelOverrides?.[a]??this.config.model}agentCtxFor(a,b){return{client:this.config.client,model:this.modelFor(a),projectRoot:this.config.projectRoot,bookId:b}}async loadGenreProfile(a){return{profile:(await I(this.config.projectRoot,a)).profile}}async runRadar(){return new ab(this.agentCtxFor("radar"),this.config.radarSources).scan()}async initBook(a){let b=new K(this.agentCtxFor("architect",a.id)),c=this.state.bookDir(a.id);await this.state.saveBookConfig(a.id,a);let{profile:d}=await this.loadGenreProfile(a.genre),e=await b.generateFoundation(a,this.config.externalContext);await b.writeFoundationFiles(c,e,d.numericalSystem),await this.state.saveChapterIndex(a.id,[])}async writeDraft(a,b,c){let d=await this.state.acquireBookLock(a);try{let d=await this.state.loadBookConfig(a),e=this.state.bookDir(a),f=await this.state.getNextChapterNumber(a),{profile:g}=await this.loadGenreProfile(d.genre),h=new U(this.agentCtxFor("writer",a)),i=await h.writeChapter({book:d,bookDir:e,chapterNumber:f,externalContext:b??this.config.externalContext,...c?{wordCountOverride:c}:{}}),j=(0,E.join)(e,"chapters"),k=String(f).padStart(4,"0"),l=i.title.replace(/[/\\?%*:|"<>]/g,"").replace(/\s+/g,"_").slice(0,50),m=`${k}_${l}.md`,n=(0,E.join)(j,m);await (0,D.writeFile)(n,`# 第${f}章 ${i.title}

${i.content}`,"utf-8"),await h.saveChapter(e,i,g.numericalSystem),await h.saveNewTruthFiles(e,i);let o=await this.state.loadChapterIndex(a),p=new Date().toISOString(),q={number:f,title:i.title,status:"drafted",wordCount:i.wordCount,createdAt:p,updatedAt:p,auditIssues:[]};return await this.state.saveChapterIndex(a,[...o,q]),await this.state.snapshotState(a,f),await this.emitWebhook("chapter-complete",a,f,{title:i.title,wordCount:i.wordCount}),{chapterNumber:f,title:i.title,wordCount:i.wordCount,filePath:n}}finally{await d()}}async auditDraft(a,b){let c=await this.state.loadBookConfig(a),d=this.state.bookDir(a),e=b??await this.state.getNextChapterNumber(a)-1;if(e<1)throw Error(`No chapters to audit for "${a}"`);let f=await this.readChapterContent(d,e),g=new W(this.agentCtxFor("auditor",a)),h=await g.auditChapter(d,f,e,c.genre),i=S(f),j=ad(f),k=j.found.some(a=>"block"===a.severity),l=[...h.issues,...i.issues,...j.issues],m={passed:!k&&h.passed,issues:l,summary:h.summary},n=(await this.state.loadChapterIndex(a)).map(a=>a.number===e?{...a,status:m.passed?"ready-for-review":"audit-failed",updatedAt:new Date().toISOString(),auditIssues:m.issues.map(a=>`[${a.severity}] ${a.description}`)}:a);return await this.state.saveChapterIndex(a,n),await this.emitWebhook(m.passed?"audit-passed":"audit-failed",a,e,{summary:m.summary,issueCount:m.issues.length}),{...m,chapterNumber:e}}async reviseDraft(a,b,c="rewrite"){let d=await this.state.acquireBookLock(a);try{let d=await this.state.loadBookConfig(a),e=this.state.bookDir(a),f=b??await this.state.getNextChapterNumber(a)-1;if(f<1)throw Error(`No chapters to revise for "${a}"`);let g=await this.state.loadChapterIndex(a),h=g.find(a=>a.number===f);if(!h)throw Error(`Chapter ${f} not found in index`);let i=await this.readChapterContent(e,f),j=new W(this.agentCtxFor("auditor",a)),k=await j.auditChapter(e,i,f,d.genre);if(k.passed)return{chapterNumber:f,wordCount:i.length,fixedIssues:["No issues to fix"]};let{profile:l}=await this.loadGenreProfile(d.genre),m=new Y(this.agentCtxFor("reviser",a)),n=await m.reviseChapter(e,i,f,k.issues,c,d.genre);if(0===n.revisedContent.length)throw Error("Reviser returned empty content");let o=(0,E.join)(e,"chapters"),p=await (0,D.readdir)(o),q=String(f).padStart(4,"0"),r=p.find(a=>a.startsWith(q)&&a.endsWith(".md"));r&&await (0,D.writeFile)((0,E.join)(o,r),`# 第${f}章 ${h.title}

${n.revisedContent}`,"utf-8");let s=(0,E.join)(e,"story");"(状态卡未更新)"!==n.updatedState&&await (0,D.writeFile)((0,E.join)(s,"current_state.md"),n.updatedState,"utf-8"),l.numericalSystem&&n.updatedLedger&&"(账本未更新)"!==n.updatedLedger&&await (0,D.writeFile)((0,E.join)(s,"particle_ledger.md"),n.updatedLedger,"utf-8"),"(伏笔池未更新)"!==n.updatedHooks&&await (0,D.writeFile)((0,E.join)(s,"pending_hooks.md"),n.updatedHooks,"utf-8");let t=g.map(a=>a.number===f?{...a,status:"ready-for-review",wordCount:n.wordCount,updatedAt:new Date().toISOString()}:a);return await this.state.saveChapterIndex(a,t),await this.state.snapshotState(a,f),await this.emitWebhook("revision-complete",a,f,{wordCount:n.wordCount,fixedCount:n.fixedIssues.length}),{chapterNumber:f,wordCount:n.wordCount,fixedIssues:n.fixedIssues}}finally{await d()}}async readTruthFiles(a){let b=this.state.bookDir(a),c=(0,E.join)(b,"story"),d=async a=>{try{return await (0,D.readFile)(a,"utf-8")}catch{return"(文件不存在)"}},[e,f,g,h,i,j]=await Promise.all([d((0,E.join)(c,"current_state.md")),d((0,E.join)(c,"particle_ledger.md")),d((0,E.join)(c,"pending_hooks.md")),d((0,E.join)(c,"story_bible.md")),d((0,E.join)(c,"volume_outline.md")),d((0,E.join)(c,"book_rules.md"))]);return{currentState:e,particleLedger:f,pendingHooks:g,storyBible:h,volumeOutline:i,bookRules:j}}async getBookStatus(a){let b=await this.state.loadBookConfig(a),c=await this.state.loadChapterIndex(a),d=await this.state.getNextChapterNumber(a),e=c.reduce((a,b)=>a+b.wordCount,0);return{bookId:a,title:b.title,genre:b.genre,platform:b.platform,status:b.status,chaptersWritten:c.length,totalWords:e,nextChapter:d,chapters:[...c]}}async writeNextChapter(a,b,c){let d=await this.state.acquireBookLock(a);try{return await this._writeNextChapterLocked(a,b,c)}finally{await d()}}async _writeNextChapterLocked(a,b,c){let d=await this.state.loadBookConfig(a),e=this.state.bookDir(a),f=await this.state.getNextChapterNumber(a),{profile:g}=await this.loadGenreProfile(d.genre),h=new U(this.agentCtxFor("writer",a)),i=await h.writeChapter({book:d,bookDir:e,chapterNumber:f,externalContext:this.config.externalContext,...b?{wordCountOverride:b}:{},...c?{temperatureOverride:c}:{}}),j=i.content,k=i.wordCount,l=!1;if(i.postWriteErrors.length>0){process.stderr.write(`[pipeline] ${i.postWriteErrors.length} post-write errors detected, triggering spot-fix before audit
`);let b=new Y(this.agentCtxFor("reviser",a)),c=i.postWriteErrors.map(a=>({severity:"critical",category:a.rule,description:a.description,suggestion:a.suggestion})),g=await b.reviseChapter(e,j,f,c,"spot-fix",d.genre);g.revisedContent.length>0&&(j=g.revisedContent,k=g.wordCount,l=!0)}let m=new W(this.agentCtxFor("auditor",a)),n=await m.auditChapter(e,j,f,d.genre),o=S(j),p=ad(j),q={passed:!p.found.some(a=>"block"===a.severity)&&n.passed,issues:[...n.issues,...o.issues,...p.issues],summary:n.summary};if(!q.passed&&q.issues.filter(a=>"critical"===a.severity).length>0){let b=new Y(this.agentCtxFor("reviser",a)),c=await b.reviseChapter(e,i.content,f,q.issues,"spot-fix",d.genre);if(c.revisedContent.length>0){let a=S(i.content),b=S(c.revisedContent),h=a.issues.length;b.issues.length>h||(j=c.revisedContent,k=c.wordCount,l=!0);let n=await m.auditChapter(e,j,f,d.genre,{temperature:0}),o=S(j),p=ad(j);q={passed:!p.found.some(a=>"block"===a.severity)&&n.passed,issues:[...n.issues,...o.issues,...p.issues],summary:n.summary};let r=(0,E.join)(e,"story");"(状态卡未更新)"!==c.updatedState&&await (0,D.writeFile)((0,E.join)(r,"current_state.md"),c.updatedState,"utf-8"),g.numericalSystem&&c.updatedLedger&&"(账本未更新)"!==c.updatedLedger&&await (0,D.writeFile)((0,E.join)(r,"particle_ledger.md"),c.updatedLedger,"utf-8"),"(伏笔池未更新)"!==c.updatedHooks&&await (0,D.writeFile)((0,E.join)(r,"pending_hooks.md"),c.updatedHooks,"utf-8")}}let r=(0,E.join)(e,"chapters"),s=String(f).padStart(4,"0"),t=i.title,u=`${s}_${t.replace(/[/\\?%*:|"<>]/g,"").replace(/\s+/g,"_").slice(0,50)}.md`;await (0,D.writeFile)((0,E.join)(r,u),`# 第${f}章 ${t}

${j}`,"utf-8"),l||await h.saveChapter(e,i,g.numericalSystem),await h.saveNewTruthFiles(e,i);let v=await this.state.loadChapterIndex(a),w=new Date().toISOString(),x={number:f,title:i.title,status:q.passed?"ready-for-review":"audit-failed",wordCount:k,createdAt:w,updatedAt:w,auditIssues:q.issues.map(a=>`[${a.severity}] ${a.description}`)};if(await this.state.saveChapterIndex(a,[...v,x]),await this.state.snapshotState(a,f),this.config.notifyChannels&&this.config.notifyChannels.length>0){let a=q.passed?"✅":"⚠️";await am(this.config.notifyChannels,{title:`${a} ${d.title} 第${f}章`,body:[`**${i.title}** | ${k}字`,l?"\uD83D\uDCDD 已自动修正":"",`审稿: ${q.passed?"通过":"需人工审核"}`,...q.issues.filter(a=>"info"!==a.severity).map(a=>`- [${a.severity}] ${a.description}`)].filter(Boolean).join("\n")})}return await this.emitWebhook("pipeline-complete",a,f,{title:i.title,wordCount:k,passed:q.passed,revised:l}),{chapterNumber:f,title:i.title,wordCount:k,auditResult:q,revised:l,status:q.passed?"approved":"needs-review"}}async generateStyleGuide(a,b,d){if(b.length<500)throw Error(`Reference text too short (${b.length} chars, minimum 500). Provide at least 2000 chars for reliable style extraction.`);let{analyzeStyle:e}=await Promise.resolve().then(c.bind(c,99043)),f=this.state.bookDir(a),g=(0,E.join)(f,"story");await (0,D.mkdir)(g,{recursive:!0});let h=e(b,d);await (0,D.writeFile)((0,E.join)(g,"style_profile.json"),JSON.stringify(h,null,2),"utf-8");let i=await y(this.config.client,this.config.model,[{role:"system",content:`你是一位文学风格分析专家。分析参考文本的写作风格，提取可供模仿的定性特征。

输出格式（Markdown）：
## 叙事声音与语气
（冷峻/热烈/讽刺/温情/...，附1-2个原文例句）

## 对话风格
（角色说话的共性特征：句子长短、口头禅倾向、方言痕迹、对话节奏）

## 场景描写特征
（五感偏好、意象选择、描写密度、环境与情绪的关联方式）

## 转折与衔接手法
（场景如何切换、时间跳跃的处理方式、段落间的过渡特征）

## 节奏特征
（长短句分布、段落长度偏好、高潮/舒缓的交替方式）

## 词汇偏好
（高频特色用词、比喻/修辞倾向、口语化程度）

## 情绪表达方式
（直白抒情 vs 动作外化、内心独白的频率和风格）

## 独特习惯
（任何值得模仿的个人写作习惯）

分析必须基于原文实际特征，不要泛泛而谈。每个部分用1-2个原文例句佐证。`},{role:"user",content:`分析以下参考文本的写作风格：

${b.slice(0,2e4)}`}],{temperature:.3,maxTokens:4096});return await (0,D.writeFile)((0,E.join)(g,"style_guide.md"),i.content,"utf-8"),i.content}async importCanon(a,b){let c=await this.state.listBooks();if(!c.includes(b))throw Error(`Parent book "${b}" not found. Available: ${c.join(", ")||"(none)"}`);if(!c.includes(a))throw Error(`Target book "${a}" not found. Available: ${c.join(", ")||"(none)"}`);let d=this.state.bookDir(b),e=this.state.bookDir(a),f=(0,E.join)(e,"story");await (0,D.mkdir)(f,{recursive:!0});let g=async a=>{try{return await (0,D.readFile)(a,"utf-8")}catch{return"(无)"}},h=await this.state.loadBookConfig(b),[i,j,k,l,m,n,o,p]=await Promise.all([g((0,E.join)(d,"story/story_bible.md")),g((0,E.join)(d,"story/current_state.md")),g((0,E.join)(d,"story/particle_ledger.md")),g((0,E.join)(d,"story/pending_hooks.md")),g((0,E.join)(d,"story/chapter_summaries.md")),g((0,E.join)(d,"story/subplot_board.md")),g((0,E.join)(d,"story/emotional_arcs.md")),g((0,E.join)(d,"story/character_matrix.md"))]),q=await y(this.config.client,this.config.model,[{role:"system",content:`你是一位网络小说架构师。基于正传的全部设定和状态文件，生成一份完整的"正传正典参照"文档，供番外写作和审计使用。

输出格式（Markdown）：
# 正传正典（《{正传书名}》）

## 世界规则（完整，来自正传设定）
（力量体系、地理设定、阵营关系、核心规则——完整复制，不压缩）

## 正典约束（不可违反的事实）
| 约束ID | 类型 | 约束内容 | 严重性 |
|---|---|---|---|
| C01 | 人物存亡 | ... | critical |
（列出所有硬性约束：谁活着、谁死了、什么事件已经发生、什么规则不可违反）

## 角色快照
| 角色 | 当前状态 | 性格底色 | 对话特征 | 已知信息 | 未知信息 |
|---|---|---|---|---|---|
（从状态卡和角色矩阵中提取每个重要角色的完整快照）

## 角色双态处理原则
- 未来会变强的角色：写潜力暗示
- 未来会黑化的角色：写微小裂痕
- 未来会死的角色：写导致死亡的性格底色

## 关键事件时间线
| 章节 | 事件 | 涉及角色 | 对番外的约束 |
|---|---|---|---|
（从章节摘要中提取关键事件）

## 伏笔状态
| Hook ID | 类型 | 状态 | 内容 | 预期回收 |
|---|---|---|---|---|

## 资源账本快照
（当前资源状态）

---
meta:
  parentBookId: "{parentBookId}"
  parentTitle: "{正传书名}"
  generatedAt: "{ISO timestamp}"

要求：
1. 世界规则完整复制，不压缩——准确性优先
2. 正典约束必须穷尽，遗漏会导致番外与正传矛盾
3. 角色快照必须包含信息边界（已知/未知），防止番外中角色引用不该知道的信息`},{role:"user",content:`正传书名：${h.title}
正传ID：${b}

## 正传世界设定
${i}

## 正传当前状态卡
${j}

## 正传资源账本
${k}

## 正传伏笔池
${l}

## 正传章节摘要
${m}

## 正传支线进度
${n}

## 正传情感弧线
${o}

## 正传角色矩阵
${p}`}],{temperature:.3,maxTokens:16384}),r=`
---
meta:
  parentBookId: "${b}"
  parentTitle: "${h.title}"
  generatedAt: "${new Date().toISOString()}"`,s=q.content+r;return await (0,D.writeFile)((0,E.join)(f,"parent_canon.md"),s,"utf-8"),s}async importChapters(a){let b=await this.state.acquireBookLock(a.bookId);try{let b=await this.state.loadBookConfig(a.bookId),c=this.state.bookDir(a.bookId),{profile:d}=await this.loadGenreProfile(b.genre),e=a.resumeFrom??1;if(1===e){process.stderr.write(`[import] Step 1: Generating foundation from ${a.chapters.length} chapters...
`);let e=a.chapters.map((a,b)=>`第${b+1}章 ${a.title}

${a.content}`).join("\n\n---\n\n"),f=new K(this.agentCtxFor("architect",a.bookId)),g=await f.generateFoundationFromImport(b,e);await f.writeFoundationFiles(c,g,d.numericalSystem),await this.state.saveChapterIndex(a.bookId,[]),process.stderr.write(`[import] Foundation generated.
`)}process.stderr.write(`[import] Step 2: Sequential replay from chapter ${e}...
`);let f=new af(this.agentCtxFor("chapter-analyzer",a.bookId)),g=new U(this.agentCtxFor("writer",a.bookId)),h=0;for(let i=e-1;i<a.chapters.length;i++){let e=a.chapters[i],j=i+1;process.stderr.write(`[import] Analyzing chapter ${j}/${a.chapters.length}: ${e.title}...
`);let k=await f.analyzeChapter({book:b,bookDir:c,chapterNumber:j,chapterContent:e.content,chapterTitle:e.title});await g.saveChapter(c,{...k,postWriteErrors:[],postWriteWarnings:[]},d.numericalSystem),await g.saveNewTruthFiles(c,{...k,postWriteErrors:[],postWriteWarnings:[]});let l=await this.state.loadChapterIndex(a.bookId),m=new Date().toISOString(),n={number:j,title:k.title,status:"imported",wordCount:e.content.length,createdAt:m,updatedAt:m,auditIssues:[]},o=l.findIndex(a=>a.number===j),p=o>=0?l.map((a,b)=>b===o?n:a):[...l,n];await this.state.saveChapterIndex(a.bookId,p),await this.state.snapshotState(a.bookId,j),h+=e.content.length}let i=a.chapters.length+1;return process.stderr.write(`[import] Done. ${a.chapters.length} chapters imported, ${h} chars. Next chapter: ${i}
`),{bookId:a.bookId,importedCount:a.chapters.length,totalWords:h,nextChapter:i}}finally{await b()}}async emitWebhook(a,b,c,d){this.config.notifyChannels&&0!==this.config.notifyChannels.length&&await an(this.config.notifyChannels,{event:a,bookId:b,chapterNumber:c,timestamp:new Date().toISOString(),data:d})}async readChapterContent(a,b){let c=(0,E.join)(a,"chapters"),d=await (0,D.readdir)(c),e=String(b).padStart(4,"0"),f=d.find(a=>a.startsWith(e)&&a.endsWith(".md"));if(!f)throw Error(`Chapter ${b} file not found in ${c}`);let g=await (0,D.readFile)((0,E.join)(c,f),"utf-8"),h=g.split("\n"),i=h.findIndex((a,b)=>b>0&&a.trim().length>0);return i>=0?h.slice(i).join("\n"):g}}},53139:()=>{},76015:(a,b,c)=>{"use strict";c.d(b,{StateManager:()=>f});var d=c(51455),e=c(76760);class f{constructor(a){this.projectRoot=a}async acquireBookLock(a){let b=(0,e.join)(this.bookDir(a),".write.lock");try{await (0,d.stat)(b);let c=await (0,d.readFile)(b,"utf-8");throw Error(`Book "${a}" is locked by another process (${c}). If this is stale, delete ${b}`)}catch(a){if(a instanceof Error&&a.message.includes("is locked"))throw a}return await (0,d.writeFile)(b,`pid:${process.pid} ts:${Date.now()}`,"utf-8"),async()=>{try{await (0,d.unlink)(b)}catch{}}}get booksDir(){return(0,e.join)(this.projectRoot,"books")}bookDir(a){return(0,e.join)(this.booksDir,a)}async loadProjectConfig(){let a=(0,e.join)(this.projectRoot,"inkos.json");return JSON.parse(await (0,d.readFile)(a,"utf-8"))}async saveProjectConfig(a){let b=(0,e.join)(this.projectRoot,"inkos.json");await (0,d.writeFile)(b,JSON.stringify(a,null,2),"utf-8")}async loadBookConfig(a){let b=(0,e.join)(this.bookDir(a),"book.json"),c=await (0,d.readFile)(b,"utf-8");if(!c.trim())throw Error(`book.json is empty for book "${a}"`);return JSON.parse(c)}async saveBookConfig(a,b){let c=this.bookDir(a);await (0,d.mkdir)(c,{recursive:!0}),await (0,d.writeFile)((0,e.join)(c,"book.json"),JSON.stringify(b,null,2),"utf-8")}async listBooks(){try{let a=await (0,d.readdir)(this.booksDir),b=[];for(let c of a){let a=(0,e.join)(this.booksDir,c,"book.json");try{await (0,d.stat)(a),b.push(c)}catch{}}return b}catch{return[]}}async getNextChapterNumber(a){let b=await this.loadChapterIndex(a);return 0===b.length?1:Math.max(...b.map(a=>a.number))+1}async loadChapterIndex(a){let b=(0,e.join)(this.bookDir(a),"chapters","index.json");try{let a=await (0,d.readFile)(b,"utf-8");return JSON.parse(a)}catch{return[]}}async saveChapterIndex(a,b){let c=(0,e.join)(this.bookDir(a),"chapters");await (0,d.mkdir)(c,{recursive:!0}),await (0,d.writeFile)((0,e.join)(c,"index.json"),JSON.stringify(b,null,2),"utf-8")}async snapshotState(a,b){let c=(0,e.join)(this.bookDir(a),"story"),f=(0,e.join)(c,"snapshots",String(b));await (0,d.mkdir)(f,{recursive:!0}),await Promise.all(["current_state.md","particle_ledger.md","pending_hooks.md","chapter_summaries.md","subplot_board.md","emotional_arcs.md","character_matrix.md"].map(async a=>{try{let b=await (0,d.readFile)((0,e.join)(c,a),"utf-8");await (0,d.writeFile)((0,e.join)(f,a),b,"utf-8")}catch{}}))}async restoreState(a,b){let c=(0,e.join)(this.bookDir(a),"story"),f=(0,e.join)(c,"snapshots",String(b)),g=["current_state.md","particle_ledger.md","pending_hooks.md","chapter_summaries.md","subplot_board.md","emotional_arcs.md","character_matrix.md"];try{let a=g.slice(0,3),b=g.slice(3);return await Promise.all(a.map(async a=>{let b=await (0,d.readFile)((0,e.join)(f,a),"utf-8");await (0,d.writeFile)((0,e.join)(c,a),b,"utf-8")})),await Promise.all(b.map(async a=>{try{let b=await (0,d.readFile)((0,e.join)(f,a),"utf-8");await (0,d.writeFile)((0,e.join)(c,a),b,"utf-8")}catch{}})),!0}catch{return!1}}}},90091:()=>{},99043:(a,b,c)=>{"use strict";c.d(b,{analyzeStyle:()=>e});let d=[{name:"比喻(像/如/仿佛)",regex:/[像如仿佛似](?:是|同|一般|一样)/g},{name:"排比",regex:/[，。；]([^，。；]{2,6})[，。；]\1/g},{name:"反问",regex:/难道|怎么可能|岂不是|何尝不/g},{name:"夸张",regex:/天崩地裂|惊天动地|翻天覆地|震耳欲聋/g},{name:"拟人",regex:/[风雨雪月花树草石](?:在|像|仿佛).*?(?:笑|哭|叹|呻|吟|怒|舞)/g},{name:"短句节奏",regex:/[。！？][^。！？]{1,8}[。！？]/g}];function e(a,b){let c=a.split(/[。！？\n]/).map(a=>a.trim()).filter(a=>a.length>0),e=a.split(/\n\s*\n/).map(a=>a.trim()).filter(a=>a.length>0),f=c.map(a=>a.length),g=f.length>0?f.reduce((a,b)=>a+b,0)/f.length:0,h=f.length>1?Math.sqrt(f.reduce((a,b)=>a+(b-g)**2,0)/f.length):0,i=e.map(a=>a.length),j=i.length>0?i.reduce((a,b)=>a+b,0)/i.length:0,k=i.length>0?Math.min(...i):0,l=i.length>0?Math.max(...i):0,m=a.replace(/[\s\n\r，。！？、：；""''（）【】《》\d]/g,""),n=new Set(m),o=m.length>0?n.size/m.length:0,p={};for(let a of c)if(a.length>=2){let b=a.slice(0,2);p[b]=(p[b]??0)+1}let q=Object.entries(p).sort((a,b)=>b[1]-a[1]).slice(0,5).filter(([,a])=>a>=3).map(([a,b])=>`${a}...(${b}次)`),r=[];for(let{name:b,regex:c}of d){let d=a.match(c);d&&d.length>=2&&r.push(`${b}(${d.length}处)`)}return{avgSentenceLength:Math.round(10*g)/10,sentenceLengthStdDev:Math.round(10*h)/10,avgParagraphLength:Math.round(j),paragraphLengthRange:{min:k,max:l},vocabularyDiversity:Math.round(1e3*o)/1e3,topPatterns:q,rhetoricalFeatures:r,sourceName:b,analyzedAt:new Date().toISOString()}}}};