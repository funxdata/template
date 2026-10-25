# 组件模板说明

组件位于 `comps/`，全部是字符串模板，通过 `include("模板名", data)` 组合。
被 include 的模板拿到的 data 就是它的 `it`。

---

## 1. 清单

### 页面骨架（`comps/page/tpl.ts`）

| 模板名 | 接收 | 说明 |
| --- | --- | --- |
| `tpl_action` | 单个 `PageAction` | 按钮或链接；有 `href` 渲染 `<a>`，否则 `<button>` |
| `tpl_page_header` | 页面数据 | 标题、副标题、右侧 `actions` |
| `tpl_page_toolbar` | 页面数据 | `search`、`filters`、`toolbarActions`、`pagination` |
| `tpl_section_header` | `{ title, extra? }` | 区块标题与右侧说明 |
| `tpl_page_empty` | `{ empty }` | 空状态（图标、标题、描述） |
| `tpl_setting_item` | 单个 `SettingItem` | 设置行：头像、标题、值、输入、按钮 |
| `tpl_setting_list` | `{ items, empty? }` | 设置列表，空时自动渲染空状态 |

### 导航（`comps/nav/tpl.ts`）

| 模板名 | 接收 | 说明 |
| --- | --- | --- |
| `tpl_app_aside` | `{ logo, home?, brand?, items, user? }` | 图标侧栏 |
| `tpl_tabs` | `{ items: TabItem[] }` | 有 `href` 为链接，否则为 `data-tab` 按钮 |
| `tpl_breadcrumbs` | `{ items: BreadcrumbItem[] }` | 最后一项为当前页 |

### 卡片（`comps/card/tpl.ts`）

| 模板名 | 接收 | 说明 |
| --- | --- | --- |
| `tpl_media_card` | 单个 `MediaCardItem` | 素材卡，右上角操作菜单 |
| `tpl_project_card` | 单个 `ProjectCardItem` | 整卡可点击 |
| `tpl_design_card` | 单个 `DesignFileItem` | 设计文件卡，悬停操作 |
| `tpl_add_card` | `{ key, title, icon? }` | 虚线新建卡 |
| `tpl_media_grid` / `tpl_project_grid` / `tpl_design_grid` | `{ items, empty?, addCard? }` | 网格 + 空状态 |

### 表单（`comps/form/tpl.ts`）

| 模板名 | 接收 | 说明 |
| --- | --- | --- |
| `tpl_search` | `SearchConfig` | 搜索框，默认 id `tpl_search` |
| `tpl_input` | `{ label?, name?, type?, placeholder?, value? }` | 带标签输入 |
| `tpl_form_row` | `{ key, title, description?, input, button? }` | 左右分栏表单行 |
| `tpl_upload_row` | `UploadRow` | 头像 + 说明 + 上传按钮 + 隐藏 file input |

### 对话框（`comps/dialog/`）

| 名称 | 说明 |
| --- | --- |
| `tpl_dialog_alert` | 仅一个确认按钮 |
| `tpl_dialog_confirm` | 确认 + 取消，`danger` 时确认按钮为错误色 |
| `tpl_dialog_form` | 多字段表单（`fields` 数组） |
| `tpl_dialog_input` | 单输入别名，内部 include `tpl_dialog_form` |
| `openDialog(node, options)` | 渲染并等待用户操作，返回 `{ confirmed, values }` |

```ts
import { openDialog } from "@funxdata/template/uicomps";

const result = await openDialog(document.getElementById("popup")!, {
  title: "重命名",
  fields: [{ name: "name", label: "名称", value: "旧名称" }],
});

if (result.confirmed) {
  console.log(result.values.name);
}
```

`openDialog` 的行为：

- 表单场景自动聚焦并选中第一个输入框；
- `Escape` 关闭并返回 `confirmed: false`；
- `closeOnMask` 默认 `true`，点击遮罩关闭；
- 关闭前读取所有 `[data-field]` 下的 input 值。

### 布局（`comps/layout/tpl.ts`）

| 模板名 | 接收 | 说明 |
| --- | --- | --- |
| `tpl_shell` | `ShellData` | aside + main + panel 三栏 |
| `tpl_thread` | `ThreadData` | 固定头 + 滚动消息区 + composer |
| `tpl_thread_message` | `ThreadMessage` | 单条消息，`role` 控制左右对齐 |

`tpl_shell` 的 `mainTpl` / `asideTpl` / `panelTpl` 都是已注册的模板名，
这样可以不依赖字符串拼接就能组合页面。

---

## 2. include 约定

- 子模板的数据就是 `it`：`include("tpl_media_card", item)`。
- 需要包一层时显式写：`include("tpl_page_empty", { empty: it.empty })`。
- 循环里只传当前项，不要在子模板里再访问父级数据。
- 模板名统一注册在 `src/templates.ts`，新增模板必须同步注册（同步与异步缓存都要写）。

---

## 3. 事件约定

模板不绑定事件，只输出 `data-action`：

```html
<button data-action="rename">重命名</button>
```

业务层统一委托：

```ts
app.addEventListener("click", (event) => {
  const action = (event.target as HTMLElement).closest<HTMLElement>("[data-action]");
  if (!action) return;
  console.log(action.dataset.action, action.dataset);
});
```

卡片右上角的 `data-action="menu"` 已经在 demo 中处理为展开/收起下拉。

---

## 4. 样式约定

| 用途 | 类 |
| --- | --- |
| 页面骨架 | `tpl-page*`、`tpl-shell*`、`tpl-thread*` |
| 列表/卡片 | `tpl-grid`、`tpl-card*`、`tpl-setting-*` |
| 控件 | `vg-btn`、`vg-icon`、`vg-avatar`、`vg-dropdowns`、`vg-dialog-*` |
| 颜色 | 只引用 `var(--primary)` 等 token |

新增组件时：

1. 先看现有 `tpl-*` 类能否复用；
2. 需要新类时同时更新 `styles/template.css` 与 `docs/style-binding.md`；
3. 不引入 transition / animation。
