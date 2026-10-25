# template × styles 绑定说明

本文件回答两个问题：

1. template 里的类名分别由哪份样式负责？
2. project 中用到的页面结构，在 template 的哪个位置？

---

## 1. 绑定原则

| 层 | 前缀 | 来源 | 说明 |
| --- | --- | --- | --- |
| 主题 token | `--primary` 等 | `stylesheet/styles/light/color.css` | light/dark 共用变量名，只覆盖值 |
| 字号 token | `--font-size-*` | `stylesheet/styles/light/fonts.css` | 标题与正文比例 |
| 页面骨架 | `tpl-*` | `template/styles/template.css` | 壳、页头、工具条、网格、设置列表、空状态 |
| 控件 | `vg-*`、`btn-*` | vango 发布产物（`css-manage<version>.css`） | 按钮、对话框、下拉、分页、图标 |
| 原子类 | `row`、`rowcolumn`、`flex1`、`prow-*`、`pcol-*` | 同上 | 老页面沿用，新页面优先用 `tpl-*` + flex |
| 图标 | `vg-icon ic-*` | `font<date>/icons.css` | 按约定不主动更新 |

约束：

- **template 的结构样式不写颜色值**，所有颜色引用 styles 的 token。
- **styles 不写页面结构**，`tpl-*` 只做布局，不出现业务类名。
- 新增 `tpl-*` 类必须同时更新 `template/styles/template.css` 与本文件的映射表。
- **不引入动画**：template 基线不使用 transition / animation / transform 位移，
  详见 [`layout.md`](./layout.md)。

---

## 2. 页面结构与 project 的对应关系

| template 文件 | 对应 project 页面 | 复用的结构 |
| --- | --- | --- |
| `template/app/index.ts` | `init_ui/app.html` | 左侧栏 + 右侧主内容 |
| `template/material/index.ts` | `material_ui` | 页头、搜索、类型标签、素材卡片网格、分页、空状态 |
| `template/project/index.ts` | `workspace_ui` 所有项目 | 页头、搜索、归档筛选、新建卡、项目卡片网格 |
| `template/workspace/index.ts` | `workspace_ui` 工作区 | 页头、文件/设置标签、面包屑、新建按钮、设计文件卡片 |
| `template/setting/index.ts` | `setting_ui`、`init_ui`、`workspace_ui` 设置页 | 页头、标签页、设置列表、设计软件分组 |
| `template/docs/index.ts` | 模板文档页 | 页头、说明区块、设置列表样式的文档条目 |
| `template/chat/index.ts` | `chat_ui` | 侧栏 + 消息区 + 输入区（沿用原 chat 组件） |

### 组件清单

| 文件 | 模板名 | 主要类 |
| --- | --- | --- |
| `comps/page/tpl.ts` | `tpl_page_header` | `tpl-page-header`、`tpl-page-title`、`tpl-page-actions` |
| | `tpl_page_toolbar` | `tpl-page-toolbar`、`tpl-toolbar-right` |
| | `tpl_section_header` | `tpl-page-section-header` |
| | `tpl_page_empty` | `tpl-empty` |
| | `tpl_setting_list` / `tpl_setting_item` | `tpl-setting-list`、`tpl-setting-item` |
| `comps/nav/tpl.ts` | `tpl_app_aside` | `tpl-app-aside`、`tpl-aside-item` |
| | `tpl_tabs` | `tpl-tabs`、`tpl-tabs-item` |
| | `tpl_breadcrumbs` | `tpl-breadcrumbs` |
| `comps/card/tpl.ts` | `tpl_media_card` | `tpl-card`、`tpl-card-cover`、`tpl-card-tools` |
| | `tpl_project_card` / `tpl_design_card` | 同上 |
| | `tpl_media_grid` / `tpl_project_grid` / `tpl_design_grid` | `tpl-grid` |
| `comps/form/tpl.ts` | `tpl_search` | `tpl-search` |
| | `tpl_input` / `tpl_form_row` / `tpl_upload_row` | `tpl-input`、`tpl-form-row` |
| `comps/layout/tpl.ts` | `tpl_shell` / `tpl_thread` / `tpl_thread_message` | `tpl-shell*`、`tpl-thread*` |
| `comps/dialog/extra.ts` | `tpl_dialog_alert` / `tpl_dialog_confirm` / `tpl_dialog_form` | `vg-dialog-*` |

> `vg-*` 的实现在历史仓库 `history_ui/vango-ui/styles/module/`，
> 发布产物是 `css-manage<version>.css`；template 只消费，不复制。

---

## 3. 样式加载

`styles/index.ts` 提供两套地址：

```ts
import { bindTemplateStyles, templateStyleSources } from "@funxdata/template/uistyles";

// 本地开发：注入 template 自带的 ./styles/template.css
bindTemplateStyles();

// 线上：注入版本化 CDN（与 project/* 一致）
bindTemplateStyles({ local: false });
```

`templateStyleSources` 是机器可读的映射表，可用于：
- 发布前检查 template 用到的类是否有来源；
- 生成文档；
- 排查「样式没生效」时确认加载的是哪一份。

---

## 4. 接入一个新项目

1. 在 `deno.json` 增加：

```json
{
  "imports": {
    "@funxdata/template": "jsr:@funxdata/template@^0.1.10",
    "@funxdata/template/uistyles": "jsr:@funxdata/template@^0.1.10/uistyles"
  }
}
```

2. 入口调用 `bindTemplateStyles()`（或直接引 CDN 的 `css-manage`）。
3. 注册模板：

```ts
import { registerTemplates } from "@funxdata/template/uicomps"; // 或者业务侧维护注册表
```

4. 用 `app_tpl` 渲染应用壳，`pageData` 按 `types/page.ts` 的字段组织。
5. 页面事件统一走 `data-action` + 事件委托，避免模板里内联脚本。

---

## 5. 版本对应

| 发布物 | 版本来源 | 更新要求 |
| --- | --- | --- |
| `template_template_<version>.css` | `template` 的 `deno task pack ./styles/template.css` | 改了 `styles/template.css` 后必须重新打包上传 |
| `css-manage<version>.css` | `history_ui/vango-ui` 的 less 构建 | 控件层，template 不改它 |
| `font<date>/icons.css` | `stylesheet/icons` | 默认不动 |
| `@funxdata/template` | `template/deno.json` | 新增模板/类时升 minor |

线上加载顺序建议：`css-manage<version>.css` → `template_template_<version>.css` → `icons.css`，
保证 `tpl-*` 结构样式在控件层之后加载、可以覆盖默认间距。
