### @funxdata/template

基于 Deno + `@funxdata/pages` 的模板库：把页面结构做成可组合的 EJS 风格模板，
与 `stylesheet` 的主题、控件样式绑定使用。

#### 安装

```bash
deno add jsr:@funxdata/template
```

```json
{
  "imports": {
    "@funxdata/template/uicomps": "jsr:@funxdata/template@^0.1.10/uicomps",
    "@funxdata/template/uitpl": "jsr:@funxdata/template@^0.1.10/uitpl",
    "@funxdata/template/uistyles": "jsr:@funxdata/template@^0.1.10/uistyles",
    "@funxdata/template/uiele": "jsr:@funxdata/template@^0.1.10/uiele",
    "@funxdata/template/uipagetypes": "jsr:@funxdata/template@^0.1.10/uipagetypes"
  }
}
```

#### 页面模板

| 模板 | 用途 | 对应项目 |
| --- | --- | --- |
| `app_tpl` | 左侧栏 + 主内容壳 | `project/init_ui` |
| `material_tpl` | 素材管理：页头/搜索/类型标签/卡片网格/分页 | `project/material_ui` |
| `project_tpl` | 项目列表：搜索/归档筛选/新建卡/卡片网格 | `project/workspace_ui` |
| `workspace_tpl` | 工作区：文件/设置标签、面包屑、设计文件卡片 | `project/workspace_ui` |
| `setting_tpl` | 设置：标签页、设置列表、设计软件分组 | `project/setting_ui` |
| `docs_tpl` | 模板文档：页面/组件/样式约定速查 | 本文档 |
| `chattpl` | 聊天：侧栏 + 消息区 + 输入区 | `project/chat_ui` |

#### 组件模板

- 骨架：`tpl_page_header`、`tpl_page_toolbar`、`tpl_section_header`、`tpl_page_empty`、`tpl_setting_list`
- 导航：`tpl_app_aside`、`tpl_tabs`、`tpl_breadcrumbs`
- 卡片：`tpl_media_card`、`tpl_project_card`、`tpl_design_card`、`tpl_add_card` 及三个 `*_grid`
- 表单：`tpl_search`、`tpl_input`、`tpl_form_row`、`tpl_upload_row`
- 布局：`tpl_shell`（三栏壳）、`tpl_thread`（会话区）、`tpl_thread_message`
- 对话框：`tpl_dialog_alert`、`tpl_dialog_confirm`、`tpl_dialog_form`，以及 `openDialog()`
- 原有：`message`、`DxDate`、`formatfileSize`、`pagination`、`select_option`、`DialogBox`、`DialogPreview`

#### 快速开始

```ts
import type { Tpl } from "@funxdata/pages/tplstype";
import { app_tpl } from "@funxdata/template/uitpl";
import { registerTemplates } from "./templates.ts"; // 见 src/templates.ts
import { bindTemplateStyles } from "@funxdata/template/uistyles";

bindTemplateStyles(); // 本地注入 ./styles/template.css；线上传 { local: false }

const tpl = (globalThis as any).TplToHtml as Tpl;
registerTemplates(tpl);

const html = await tpl.renderStringAsync(app_tpl, {
  aside: { logo, home: "#material", items: navItems, user },
  page: "material_tpl",
  pageData: {
    title: "素材管理",
    search: { placeholder: "搜索素材" },
    tabs: [{ key: "all", title: "全部", active: true }],
    items: [],
    empty: { title: "暂无素材" },
  },
});
document.getElementById("app")!.innerHTML = html;
```

模板语法：

- `<% %>` 执行
- `<%= %>` 转义输出
- `<%~ %>` 原始输出（用于 svg、已消毒的 HTML）
- `<%~ include("模板名", data) %>` 组合模板

#### 与 styles 的绑定

- `comps/*` 只写结构，使用 `tpl-*`（页面骨架）和 `vg-*`（控件）。
- 所有颜色来自 `stylesheet/styles/light/color.css` 的 token，`tpl-*` 的实现位于
  [`styles/template.css`](./styles/template.css)。
- `vg-*` 控件来自 vango 的 `css-manage<version>.css`，图标来自 `icons.css`。
- 完整映射表见 [`docs/style-binding.md`](./docs/style-binding.md)。
- 页面说明见 [`docs/pages.md`](./docs/pages.md)，组件说明见 [`docs/components.md`](./docs/components.md)，
  布局体系与「无动画」约定见 [`docs/layout.md`](./docs/layout.md)。

#### 目录

```text
comps/        组件模板（page/nav/card/form/dialog/…）
template/     页面模板（app/material/project/workspace/setting/chat）
element/      基础元素模板
styles/       样式绑定声明与注入函数
types/        页面与组件类型
src/          本地演示入口（不发布）
docs/         class 映射与使用说明
```

#### 本地演示

```bash
deno task view
```

演示入口 `src/app.ts` 通过 hash 切换页面：`#material`、`#project`、`#workspace`、`#setting`、`#docs`。
示例数据在 `src/demo.ts`，模板注册表在 `src/templates.ts`。
`bindTemplateStyles()` 会注入 `./styles/template.css`；主题 token 由 `index.html` 的
`css-manage` 与内联兜底变量提供，正式项目应以 `stylesheet` 的 token 为准。
