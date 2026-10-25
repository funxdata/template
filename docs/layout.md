# 布局体系（借鉴 study_ui）

本文件说明 template 从 `study_ui/assistant-ui` 与 `study_ui/tailwindcss` 吸收了什么、
刻意没有吸收什么，以及对应的类和变量。

> 说明：`study_ui` 目录目前只有 `.git`，工作树为空；这里借鉴的是其在
> `project/chat_ui` 中已经落地的 `aui-*` 结构类，以及 Tailwind 的尺度体系。

---

## 1. 借鉴范围

| 来源 | 吸收 | 不吸收 |
| --- | --- | --- |
| assistant-ui Thread | 固定头 + 滚动消息区 + 底部 composer 的四段式；`--thread-max-width` 内容宽度；侧栏 + 主区 + 可选右栏 | `animate-in`、`fade-in`、`slide-in-*`、`transition-*`、`active:scale-*`、折叠/展开动画 |
| assistant-ui 消息 | 用户右对齐气泡、助手无气泡、消息组间距 | 操作栏入场动画、hover 缩放 |
| TailwindCSS | spacing 0.25rem 基准、`h-12`、`w-65`、`gap-y-6`、`auto-fill minmax()` 网格、640/768/1024/1280 断点 | utility 类本身（template 用语义类 `tpl-*`） |
| chat_ui 现有页面 | 内容区 `flex-1 min-h-0 overflow-y-auto`、页头/底部 `shrink-0`、卡片网格 | 内联 style 与超长 utility 串 |

---

## 2. 尺寸变量

定义在 `template/styles/template.css` 的 `:root`：

| 变量 | 值 | 对应来源 |
| --- | --- | --- |
| `--tpl-space` | `0.25rem` | Tailwind spacing 基准 |
| `--tpl-aside-width` | `16.25rem` | `w-65`（聊天侧栏） |
| `--tpl-aside-collapsed` | `3.75rem` | 窄屏侧栏 |
| `--tpl-panel-width` | `20rem` | 右栏 |
| `--tpl-header-height` | `3rem` | `h-12` |
| `--tpl-thread-width` | `44rem` | `--thread-max-width` |
| `--tpl-content-width` | `72rem` | 列表页最大内容宽度 |
| `--tpl-gap-sm` / `--tpl-gap` / `--tpl-gap-lg` | `0.5 / 1 / 1.5rem` | `gap-2 / gap-4 / gap-y-6` |
| `--tpl-radius-sm` / `--tpl-radius` / `--tpl-radius-lg` | `0.375 / 0.5 / 0.75rem` | `rounded-md / lg / xl` |
| `--tpl-card-min` | `11.25rem` | 卡片网格最小宽度 |

颜色变量（`--primary`、`--neutral`、`--surface` 等）不在这里定义，来自
`stylesheet/styles/light/color.css`。

---

## 3. 结构类

### 三栏壳

```html
<div class="tpl-shell">
  <aside class="tpl-shell-aside">…</aside>
  <main class="tpl-shell-main">…</main>
  <aside class="tpl-shell-panel">…</aside>
</div>
```

| 类 | 作用 |
| --- | --- |
| `tpl-shell` | 全屏 flex 容器，`overflow:hidden` |
| `tpl-shell-aside` | 固定宽度侧栏，独立滚动 |
| `tpl-shell-main` | `flex:1`、`min-width:0`，承载页面 |
| `tpl-shell-panel` | 可选右栏，1024px 以下隐藏 |
| `tpl-shell-header` | 固定高度页头（`--tpl-header-height`） |
| `tpl-shell-header-actions` | 页头右侧操作 |

### 会话区

```html
<div class="tpl-thread">
  <header class="tpl-shell-header">…</header>
  <div class="tpl-thread-scroll">
    <div class="tpl-thread-stack">
      <div class="tpl-thread-message is-user">…</div>
      <div class="tpl-thread-message is-assistant">…</div>
    </div>
  </div>
  <div class="tpl-thread-composer">…</div>
</div>
```

| 类 | 作用 |
| --- | --- |
| `tpl-thread` | 纵向 flex，撑满主区 |
| `tpl-thread-scroll` | `flex:1; min-height:0; overflow-y:auto` |
| `tpl-thread-stack` | 最大宽度居中，消息组间距 `--tpl-gap-lg` |
| `tpl-thread-group` | 一组消息（同一轮） |
| `tpl-thread-message` | 单条消息，`is-user` 右对齐、`is-assistant` 左对齐 |
| `tpl-thread-bubble` | 消息气泡；助手消息自动去掉背景与内边距 |
| `tpl-thread-meta` | 时间/耗时等辅助信息 |
| `tpl-thread-composer` | 底部输入区，宽度与消息区一致 |
| `tpl-thread-composer-box` | 输入框外壳，focus 时边框变主色 |
| `tpl-thread-welcome` | 空会话欢迎语 |

对应的模板组件：`tpl_shell`、`tpl_thread`、`tpl_thread_message`
（`comps/layout/tpl.ts`）。

---

## 4. 页面与卡片

| 类 | 作用 |
| --- | --- |
| `tpl-page` / `tpl-page-header` / `tpl-page-body` | 标准页面三段式 |
| `tpl-page-title` / `tpl-page-subtitle` | 页头文字 |
| `tpl-page-toolbar` / `tpl-toolbar-right` | 搜索、筛选、分页 |
| `tpl-page-section` | 白色内容块，`max-width: var(--tpl-content-width)` |
| `tpl-grid` | `repeat(auto-fill, minmax(var(--tpl-card-min), 1fr))` |
| `tpl-card` / `tpl-card-cover` / `tpl-card-body` | 卡片结构与比例（4:3 封面） |
| `tpl-setting-list` / `tpl-setting-item` | 设置页列表，最大 48rem 阅读宽度 |

---

## 5. 响应式

| 断点 | 行为 |
| --- | --- |
| `max-width: 1024px` | 隐藏 `tpl-shell-panel` |
| `max-width: 768px` | 侧栏收窄到 `--tpl-aside-collapsed`；页头/工具条/内容区左右 12px；卡片网格最小 140px；消息区与输入区左右 12px |

断点值取自 Tailwind 默认的 `lg` 与 `md`，不额外引入容器查询。

---

## 6. 无动画约定

template 的布局样式**不包含**：

- `transition` / `animation` / `@keyframes`
- `transform` 位移或缩放（包括 hover 抬升、`active:scale`）
- 入场/退场类（`animate-in`、`fade-in`、`slide-in-*`）

允许的交互反馈只有静态状态切换：颜色、边框、背景、阴影、`opacity` 的即时变化。
需要动效时由业务方在自己的样式里加，不进入 template 基线。

`message` / `chat-message` 的提示条也已改为直接插入、到期移除，不再做淡入淡出。

---

## 7. 示例

```ts
import type { Tpl } from "@funxdata/pages/tplstype";

const html = await tpl.renderStringAsync("tpl_shell", {
  asideTpl: "tpl_app_aside",
  asideData: { logo, home: "#chat", items, user },
  mainTpl: "tpl_thread",
  mainData: {
    headerTpl: "tpl_section_header",
    headerData: { title: "对话" },
    welcome: "开始新的对话",
    messages: [
      { role: "user", content: "帮我整理一下页面结构" },
      { role: "assistant", content: "<p>建议按页头 / 内容 / 输入区拆分。</p>" },
    ],
    composer: true,
    composerPlaceholder: "输入消息",
  },
});
```
