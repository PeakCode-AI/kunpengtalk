# 鲲鹏Talk 官网

鲲鹏Talk AI 自媒体工作室的官方网站，暗色影院感风格，使用 [Astro](https://astro.build) 构建的纯静态站点。

## 快速开始

```bash
npm install      # 安装依赖
npm run dev      # 本地开发 http://localhost:4321
npm run build    # 构建到 dist/
npm run preview  # 预览构建产物
```

## 站点结构

| 页面 | 路径 | 内容 |
|---|---|---|
| 首页 | `/` | Hero、内容专栏、平台矩阵、入口卡（产品/服务/课程/开源）、关于、商务合作 |
| 产品服务 | `/products` | Vibebase（四端 AI 产品体系）、VibePay（个人收款方案），均已上架 |
| 咨询服务 | `/services` | 线下培训 ¥5,000/小时、一对一咨询 ¥3,000/小时、付费会员群 ¥399 |
| 课程 | `/courses` | OPC 一人公司课（在售）、Vibe Coding（录制中），新课加进 `courses` 数组即自动上架 |
| 视频定制 | `/video` | 商单报价：定制视频/植入视频（优惠价同B站）、公众号约稿、小红书/公众号图文 |
| 开源项目 | `/opensource` | 6 个开源仓库 |

顶部导航：首页 / 产品服务 / 咨询服务 / 课程 / 视频定制 / 开源项目 + 商务合作 CTA。全站右下角有「扫码加微信」悬浮咨询组件（FloatingContact），任意按钮加 `data-open-wechat` 属性即可唤起二维码面板。

## 内容维护

所有文案、价格、平台链接集中在 **`src/data/site.ts`**，改这里即可，无需碰组件：

- `site` — 站点名、slogan、商务邮箱 / 微信（上线前请替换为真实信息）
- `columns` — 5 个内容专栏（大模型测评 / 本地部署 / Agent / Vibe Coding / 企业落地）
- `platforms` — 6 个发布平台，**`url` 目前是 `#`，请替换为真实主页链接**
- `products` / `vibebaseTerminals` / `vibepayFeatures` / `vibepaySteps` — 两款上架产品
- `services` — 线下培训、一对一咨询
- `courses` — 付费课程（OPC 一人公司课的大纲/价格、录制中的 Vibe Coding 课）
- `membership` — 付费会员群（权益、价值对比锚点；价格变动时 math 表请同步）
- `partners` — 合作品牌 logo 墙（logo 在 `public/brands/`；mode: white 转白单色 / icon 保留原色 / text 文字标）
- `videoDeals` / `writingDeals` — 视频定制页商单报价（优惠价同B站）
- `profile` — IP 形象档案
- `ossProjects` — 开源项目（stars 为手动维护的快照）

## 目录结构

```
src/
├── assets/          # 品牌素材（头像、IP 形象图，构建时自动优化为 WebP）
│   └── crops/       # 从形象设定图裁切的素材：表情包×6、动作展示×3、正面站姿
├── components/      # 区块组件（Nav / Hero / Columns / Platforms / Entries / Services / Courses / About / Contact / Footer）
├── data/site.ts     # 全部站点内容配置
├── layouts/         # 基础布局（字体、全局样式、入场动画脚本）
├── pages/           # index / products / services /opensource 四个页面
└── styles/          # 全局样式（设计变量、按钮、区块标题、动画）
public/
├── favicon.svg      # 站标
└── og.jpg           # 社交分享图 1200×630（由形象设定图顶部场景裁切）
```

## 部署

`npm run build` 产物为纯静态文件（`dist/`），可直接部署到 Vercel / Netlify / Cloudflare Pages / Nginx 等任意静态托管。

