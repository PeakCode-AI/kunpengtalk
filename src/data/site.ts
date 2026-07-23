/**
 * 站点内容配置 —— 所有文案、链接、价格集中在这里维护。
 * TODO: 标注「替换」的字段请改成真实信息后再上线。
 */

export const site = {
  name: '鲲鹏Talk',
  nameEn: 'KUNPENG TALK',
  slogan: '用 AI 连接未来，用分享创造价值',
  motto: '探索 AI 的边界，创造无限可能',
  positioning: ['AI 探索者', '内容创作者', '科技爱好者'],
  description:
    '鲲鹏Talk 是一家专注 AI 的自媒体工作室：大模型测评、大模型本地部署、Agent、Vibe Coding、AI 企业落地实践，内容同步发布于 B站、视频号、YouTube、公众号、抖音、快手。',
  email: 'hi@kunpengtalk.com', // 替换：真实商务邮箱
  wechat: 'KunpengTalk', // 替换：真实商务微信号
};

/** 内容专栏 */
export const columns = [
  {
    no: '01',
    title: 'AI 大模型测评',
    en: 'LLM BENCHMARK',
    desc: 'GPT、Claude、Gemini、DeepSeek、Qwen……主流大模型真机实测。跑分之外，更关注真实场景下的表现。',
    tags: ['横评', '实测', '选型建议'],
  },
  {
    no: '02',
    title: '大模型本地部署',
    en: 'LOCAL DEPLOYMENT',
    desc: 'Ollama、vLLM、llama.cpp，从一张消费级显卡到企业私有化集群，手把手把开源模型跑起来。',
    tags: ['Ollama', 'vLLM', '私有化'],
  },
  {
    no: '03',
    title: 'Agent 实战',
    en: 'AI AGENT',
    desc: '从 Prompt 到 Workflow，再到自主智能体——把 Demo 做成真正能进生产环境的 Agent 系统。',
    tags: ['工作流', '多智能体', '生产级'],
  },
  {
    no: '04',
    title: 'Vibe Coding',
    en: 'VIBE CODING',
    desc: '用自然语言驱动 Cursor、Claude Code 等 AI 编程工具，一个人，就是一支全栈团队。',
    tags: ['Cursor', 'Claude Code', '效率'],
  },
  {
    no: '05',
    title: 'AI 企业落地实践',
    en: 'ENTERPRISE AI',
    desc: '从 PoC 到规模化复制，企业引入 AI 的方法论、组织变革与避坑指南。',
    tags: ['落地', '内训', '咨询'],
  },
];

/** 发布平台（url 替换为真实主页链接） */
export const platforms = [
  { key: 'bilibili', name: '哔哩哔哩', en: 'BILIBILI', handle: '@鲲鹏Talk', url: '#' },
  { key: 'douyin', name: '抖音', en: 'DOUYIN', handle: '@鲲鹏Talk', url: '#' },
  { key: 'kuaishou', name: '快手', en: 'KUAISHOU', handle: '@鲲鹏Talk', url: '#' },
  { key: 'channels', name: '视频号', en: 'CHANNELS', handle: '@鲲鹏Talk', url: '#' },
  { key: 'wechat', name: '公众号', en: 'WECHAT OA', handle: '鲲鹏Talk', url: '#' },
  { key: 'youtube', name: 'YouTube', en: 'YOUTUBE', handle: '@KunpengTalk', url: '#' },
];

/** 服务 */
export const services = [
  {
    key: 'training',
    name: '线下企业培训',
    en: 'ON-SITE TRAINING',
    price: '¥5,000',
    unit: '/ 小时',
    desc: '面向企业团队的定制化 AI 实战内训。从认知到上手，让团队当天就能把 AI 用进业务。',
    features: ['大模型认知与选型工作坊', 'Agent / Vibe Coding 实战训练', '企业 AI 落地路径共创'],
    cta: '预约培训',
    highlight: true,
  },
  {
    key: 'consulting',
    name: '一对一咨询',
    en: 'CONSULTING',
    price: '¥3,000',
    unit: '/ 小时',
    desc: '面向创始人与技术负责人。用大模型重构业务流程之前，把关键决策一次聊透。',
    features: ['大模型选型与部署架构', 'AI 应用技术方案评审', '落地路线图与成本测算'],
    cta: '预约咨询',
    highlight: false,
  },
];

/** 自研产品（均已上架） */
export const products = [
  {
    key: 'vibebase',
    name: 'Vibebase',
    tagline: '全终端 AI 对话产品体系',
    status: '已上架',
    url: 'https://vibebase.vibeadmin.cn/',
    desc: '管理后台、用户端 Web、Flutter App、小程序 + H5 四端，共享一套数据库。开箱即用，直接上线运营。',
    points: ['管理后台 + 三端用户端', '四端共享一套数据库', '开箱即用 · 直接上线运营'],
  },
  {
    key: 'vibepay',
    name: 'VibePay',
    tagline: '个人收款免签约解决方案',
    status: '已上架',
    url: 'https://pay.vibeadmin.cn/',
    desc: '为个人开发者、自媒体、电商店主提供安全便捷的支付宝与微信收款能力。无需签约，无需营业执照，即可接入自己的支付系统。',
    points: ['免签约 · 实时到账通知', '开放 API · 安卓监控端', '数据可视化后台'],
  },
];

/** Vibebase 四端 */
export const vibebaseTerminals = [
  { name: '管理后台', en: 'ADMIN', icon: 'dashboard' },
  { name: '用户端 Web', en: 'WEB', icon: 'globe' },
  { name: 'Flutter App', en: 'APP', icon: 'phone' },
  { name: '小程序 + H5', en: 'MINI APP', icon: 'grid' },
];

/** VibePay 核心功能与使用流程（来自官网） */
export const vibepayFeatures = [
  { name: '免签约收款', desc: '无需营业执照，个人即可接入支付宝、微信收款。' },
  { name: '智能通知栏监控', desc: '安卓监控端实时监听到账通知，自动确认订单，无需手动对账。' },
  { name: '开放 API', desc: '创建订单、查询订单、回调通知等完善 API，轻松接入你的网站或应用。' },
  { name: '安全可靠', desc: '通讯密钥签名验证、订单超时机制、异步回调确认，多层保障资金安全。' },
  { name: '二维码管理', desc: '批量上传微信、支付宝收款码，支持固定金额与自动识别，灵活管理。' },
  { name: '数据可视化', desc: '订单数据、收入统计、来源占比清晰呈现，经营状况一目了然。' },
];

export const vibepaySteps = [
  { name: '部署系统', desc: '下载 VibePay 服务端，完成基础配置，生成监控端绑定二维码。' },
  { name: '绑定监控端', desc: '在安卓手机上安装监控端 App，扫码绑定，实时监听收款通知。' },
  { name: '接入收款', desc: '通过 API 创建订单，或直接展示收款二维码，完成收款闭环。' },
];

/**
 * 合作品牌（logo 文件位于 public/brands/，url 为品牌官网）
 * mode: white=统一转白单色 / icon=保留原色（应用图标式展示） / text=文字标（官网未提供图片素材）
 */
export const partners = [
  { name: '火山引擎', url: 'https://www.volcengine.com/', mode: 'white' as const, logo: '/brands/volcengine.svg' },
  { name: 'Kimi', url: 'https://www.kimi.com/', mode: 'icon' as const, logo: '/brands/kimi.jpg' },
  { name: '通义千问 Qwen', url: 'https://www.tongyi.aliyun.com/', mode: 'icon' as const, logo: '/brands/qwen.svg' },
  { name: '智谱 AI', url: 'https://www.zhipuai.cn/', mode: 'icon' as const, logo: '/brands/zhipu.svg' },
  { name: '阶跃星辰', url: 'https://www.stepfun.com/', mode: 'white' as const, logo: '/brands/stepfun.svg' },
  { name: '科大讯飞', url: 'https://www.iflytek.com/', mode: 'icon' as const, logo: '/brands/iflytek.svg' },
  { name: '腾讯 WorkBuddy', url: 'https://workbuddy.tencent.com/', mode: 'icon' as const, logo: '/brands/codebuddy.svg' },
  { name: '美团', url: 'https://www.meituan.com/', mode: 'white' as const, logo: '/brands/meituan.svg' },
];

/** 签约与履历背书 */
export const credentials = [
  { name: 'Guidepoint 等咨询公司', role: '签约 AI 咨询专家' },
  { name: '观猹', role: '签约 AI 博主' },
  { name: '前大厂', role: '技术总监 · AI 实验室负责人' },
];

/** 品牌档案（来自 IP 形象设定） */
export const profile = {
  title: '一个探索者的 AI 实验田',
  intro:
    '鲲鹏Talk 是一位 AI 探索者、内容创作者与科技爱好者。我们相信——让复杂的 AI 变得简单有趣，知识才真正有了力量。',
  values: ['探索 AI 前沿技术', '分享实用工具和教程', '让复杂的 AI 变得简单有趣'],
  facts: [
    { label: '昵称', value: '鲲鹏Talk' },
    { label: '身份', value: 'AI 内容创作者' },
    { label: '履历', value: '前大厂技术总监 · AI 实验室负责人' },
    { label: '签约', value: 'Guidepoint 等咨询公司 AI 专家 · 观猹签约 AI 博主' },
    { label: '爱好', value: '探索 AI / 分享知识 / 运动 / 旅行' },
    { label: '特点', value: '好奇心强 / 乐于分享 / 逻辑清晰 / 接地气' },
  ],
};

export const marqueeWords = [
  'AI 大模型测评',
  '大模型本地部署',
  'Agent 实战',
  'Vibe Coding',
  'AI 企业落地',
  '线下培训',
  '咨询服务',
  'Vibebase',
  'VibePay',
];

/** 开源项目（stars 为 2026-07 快照，请定期手动更新；langColor 为 GitHub 语言标准色） */
export const ossProjects = [
  {
    name: 'Prompt-Tools',
    url: 'https://github.com/jwangkun/Prompt-Tools',
    desc: '一款强大的桌面应用，旨在简化你的 Prompt 管理工作流程。',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 867,
    forks: 94,
    tags: ['Prompt 管理', '桌面应用'],
  },
  {
    name: 'claude-for-financial-services-cn',
    url: 'https://github.com/jwangkun/claude-for-financial-services-cn',
    desc: '63 个 Claude Skills，为 A 股金融从业者而生。基于 Anthropic 官方 claude-for-financial-services 深度适配国内市场。',
    lang: 'Python',
    langColor: '#3572a5',
    stars: 656,
    forks: 106,
    tags: ['Claude Skills', 'A 股金融'],
  },
  {
    name: 'Pi-Multi-Agent',
    url: 'https://github.com/jwangkun/Pi-Multi-Agent',
    desc: '生产级多智能体编排框架（Production-Grade Multi-Agent Orchestration Framework）。',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 126,
    forks: 26,
    tags: ['Multi-Agent', '编排框架'],
  },
  {
    name: 'loops',
    url: 'https://github.com/jwangkun/loops',
    desc: '面向 Claude Code、Cursor 等 AI 编程助手的自动化工作流指令集：「执行 → 检查 → 修复 → 重复」闭环，让 AI 自主完成任务直到达标。',
    lang: 'Python',
    langColor: '#3572a5',
    stars: 119,
    forks: 20,
    tags: ['自动化工作流', 'AI 编程'],
  },
  {
    name: 'PeakCode',
    url: 'https://github.com/PeakCode-AI/PeakCode',
    desc: '一个统一界面管理 Claude Code、Codex、Gemini、Kilo Code、OpenCode 等 AI 编程代理。实时流式传输、内置 Git、本地优先、保护隐私。',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 118,
    forks: 17,
    tags: ['AI 编程', '统一工作台'],
  },
  {
    name: 'LexFlow',
    url: 'https://github.com/jwangkun/LexFlow',
    desc: '面向中国律师与法务、可完全本地部署的 AI 法律工作台：助理对话、合同与尽调文档分析、项目协作、表格化审查与工作流自动化。',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 5,
    forks: 0,
    tags: ['法律 AI', '本地部署'],
  },
];

export const ossStats = {
  projects: ossProjects.length,
  stars: ossProjects.reduce((sum, p) => sum + p.stars, 0),
  github: 'https://github.com/jwangkun',
};

/** 付费会员群 */
export const membership = {
  name: '鲲鹏Talk 付费会员群',
  price: '¥399',
  originalPrice: '¥599',
  promoTag: '限时优惠',
  desc: '一个长期陪跑的 AI 实战社群：问题有人答，课程和工具一律半价。',
  benefits: [
    { title: '群内答疑咨询', desc: '大模型选型、本地部署、Agent、落地难题，群里随时问。' },
    { title: '课程半价', desc: 'OPC、Vibe Coding 及未来全部付费课程，会员一律 5 折。' },
    { title: '工具半价', desc: 'Vibebase、VibePay 等自研产品，会员一律 5 折。' },
    { title: '优先通知', desc: '新课、新工具、内测资格，会员抢先知道。' },
  ],
  /** 价值对比锚点（价格变动时请同步） */
  math: [
    { label: 'OPC 一人公司课', before: '¥299', after: '¥149.5' },
    { label: '未来全部新课', before: '原价', after: '5 折' },
    { label: 'Vibebase / VibePay', before: '原价', after: '5 折' },
    { label: '群咨询答疑', before: '—', after: '随时问' },
  ],
  cta: '扫码加入会员群',
  ctaNote: '添加后备注「会员」，鲲鹏助理会拉你进群',
};

/** 商单报价（视频定制页）——视频类优惠价与 B站商单同价 */
export const videoDeals = [
  {
    key: 'custom',
    name: '定制视频',
    en: 'CUSTOM VIDEO',
    desc: 'UP 主创作的专为客户营销诉求定制的商单，全平台投放。',
    price: '咨询',
    original: '',
    promo: '限时优惠 · 与 B站商单同价',
    points: ['专为客户营销诉求定制', '全平台同步投放'],
  },
  {
    key: 'insert',
    name: '植入视频',
    en: 'BRAND INTEGRATION',
    desc: 'UP 主创作的可部分植入广告的商单，支持植入多个客户的营销内容，全平台投放。',
    price: '咨询',
    original: '',
    promo: '限时优惠 · 与 B站商单同价',
    points: ['支持多个客户植入', '全平台同步投放'],
  },
];

/** 文字类商单 */
export const writingDeals = [
  {
    key: 'wechat-article',
    name: '约稿 · 微信公众号文章',
    desc: '深度文字稿，公众号首发，全平台投放。',
    price: '¥5,000',
    unit: '/ 单',
    points: ['公众号首发', '全平台投放'],
  },
  {
    key: 'image-post',
    name: '图文单发 · 小红书 / 公众号图文',
    desc: '图文内容单条发布，轻量快速。',
    price: '¥500',
    unit: '/ 条',
    points: ['小红书 / 公众号图文', '单条发布'],
  },
];

/** 付费课程（新课上架往数组里加一条即可；status: available 在售 / recording 录制中） */
export interface Course {
  key: string;
  name: string;
  shortName: string;
  platform: string;
  status: 'available' | 'recording';
  price?: string;
  lessons?: number;
  students?: string;
  desc: string;
  lecturer?: string;
  highlights: string[];
  outline?: { title: string; duration: string; trial?: boolean }[];
  url: string;
}

export const courses: Course[] = [
  {
    key: 'opc',
    name: '手把手教你用 AI 龙虾，打造你的一人公司 OPC',
    shortName: 'OPC 一人公司实战课',
    platform: 'B站课堂',
    status: 'available' as const, // 已完结 · 长期有效
    price: '¥299',
    lessons: 9,
    students: '1.4万',
    desc: '7 节实战课，用 AI 搭建 CEO、销售、技术、法务等完整团队——一个人，也能开一家公司。',
    lecturer: '前大厂技术总监 · AI 实验室负责人',
    highlights: ['2 节免费试看', '长期有效', '商业项目实战'],
    outline: [
      { title: '课程大纲介绍', duration: '4\'59"', trial: true },
      { title: 'OPC 政策深度解读', duration: '1小时03分', trial: true },
      { title: 'OpenClaw 上手实操', duration: '1小时' },
      { title: '公司骨架搭建', duration: '1小时' },
      { title: 'Windows 多 Agent 环境搭建', duration: '30\'28"' },
      { title: 'CEO / CFO 岗位设计', duration: '1小时03分' },
      { title: '技术团队搭建 · 商业项目实战', duration: '1小时04分' },
      { title: '技术团队搭建 · 商业项目实战 2', duration: '1小时19分' },
      { title: '营销团队搭建 · 商业项目实战 · 总结', duration: '55分' },
    ],
    url: 'https://www.bilibili.com/cheese/play/ss113539988',
  },
  {
    key: 'vibecoding',
    name: 'Vibe Coding 系统实战课',
    shortName: 'Vibe Coding 课程',
    platform: 'B站课堂',
    status: 'recording' as const, // 录制中
    desc: '从 AI 编程工具入门到真实项目上线的系统化课程，正在精心录制中。',
    highlights: ['系统大纲打磨中', '实战项目驱动'],
    url: '',
  },
];
