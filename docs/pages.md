# 页面模板说明

所有页面模板位于 `template/`，通过 `registerTemplates(tpl)` 注册后，
用 `app_tpl` 的 `page` / `pageData` 动态组合。

---

## 1. 总览

| 模板名 | 文件 | 对应项目页面 | 主要结构 |
| --- | --- | --- | --- |
| `app_tpl` | `template/app/index.ts` | `init_ui/app.html` | 侧栏 + 主内容 |
| `material_tpl` | `template/material/index.ts` | `material_ui` | 页头 → 工具条 → 类型标签 → 卡片网格 |
| `project_tpl` | `template/project/index.ts` | `workspace_ui` 所有项目 | 页头 → 搜索/筛选/分页 → 新建卡 + 项目卡 |
| `workspace_tpl` | `template/workspace/index.ts` | `workspace_ui` 工作区 | 页头 → 文件/设置标签 + 面包屑 → 设计文件卡 |
| `setting_tpl` | `template/setting/index.ts` | `setting_ui` / `init_ui` / `workspace_ui` | 页头 → 标签页 → 设置列表 → 软件分组 |
| `docs_tpl` | `template/docs/index.ts` | 本文档页 | 页头 → 多个说明区块 |
| `chattpl` | `template/chat/index.ts` | `chat_ui` | 三栏聊天（沿用原组件） |

---

## 2. 页面数据契约

公共字段（`types/page.ts` 的 `PageBase`）：

```ts
{
  title: string;
  subtitle?: string;
  actions?: PageAction[];        // 页头右侧
  toolbarActions?: PageAction[]; // 工具条右侧
  search?: { id?, placeholder?, value? };
  pagination?: { total, amount, num };
  empty?: { title?, description?, icon? };
}
```

### `material_tpl`

```ts
{
  ...PageBase,
  tabs?: TabItem[];            // 全部 / 图片 / 视频 / 文档
  items?: MediaCardItem[];     // id, name, cover, type_icon, updated_at, actions
  filters?: PageAction[];      // 工具条左侧筛选
}
```

包含：`tpl_page_header`、`tpl_page_toolbar`、`tpl_tabs`、`tpl_media_grid`、`tpl_page_empty`。

### `project_tpl`

```ts
{
  ...PageBase,
  items?: ProjectCardItem[];   // uuid, name, cover, icon, updated_at, href
  addCard?: { key, title, icon? };
  filters?: PageAction[];      // 已归档等
}
```

`tpl_project_grid` 在没有项目时仍会渲染「新建卡」。

### `workspace_tpl`

```ts
{
  ...PageBase,
  project?: { uuid?, name, description? };
  tabs?: TabItem[];            // 文件 / 设置
  activeTab?: string;
  breadcrumbs?: BreadcrumbItem[];
  files?: DesignFileItem[];    // name, cover, icon_svg, updated_at_display, actions
}
```

工具条里同时放标签页、面包屑和新建按钮，窄屏自动换行。

### `setting_tpl`

```ts
{
  ...PageBase,
  tabs?: TabItem[];            // 通用 / 设计软件 / 成员
  activeTab?: string;
  items?: SettingItem[];       // 基础设置行
  groups?: Array<{ key, title, extra?, items: SettingItem[] }>;
}
```

`SettingItem` 支持：`value`、`description`、`avatar`、`button`、`danger`、`input`、`accept`。
危险操作只需给按钮 `variant: "error"`。

### `docs_tpl`

```ts
{
  title, subtitle?,
  sections: Array<{
    key, title, extra?,
    items: Array<{ name, desc, path? }>
  }>;
}
```

用于内部文档页/演示页，把「模块介绍」和「版面」放在一起。

### `app_tpl`

```ts
{
  aside: {
    brand?, logo?, home?,
    items: NavItem[],
    user?: { name?, avatar?, href? }
  };
  page: string;                       // 已注册的页面模板名
  pageData: Record<string, unknown>;  // 页面数据
}
```

---

## 3. 渲染示例

```ts
import type { Tpl } from "@funxdata/pages/tplstype";
import { app_tpl } from "@funxdata/template/uitpl";
import { registerTemplates } from "./templates.ts";

const tpl = (globalThis as any).TplToHtml as Tpl;
registerTemplates(tpl);

const html = await tpl.renderStringAsync(app_tpl, {
  aside: {
    logo: "/logo.png",
    home: "#material",
    items: [
      { href: "#material", icon: "ic-folder-on", title: "素材", active: true },
      { href: "#setting", icon: "ic-setting", title: "设置" },
    ],
    user: { name: "funxdata", avatar: "/avatar.png" },
  },
  page: "material_tpl",
  pageData: {
    title: "素材管理",
    search: { placeholder: "搜索素材" },
    tabs: [{ key: "all", title: "全部", active: true }],
    items: [],
    empty: { title: "暂无素材", description: "点击右上角上传" },
  },
});

document.getElementById("app")!.innerHTML = html;
```

---

## 4. 新增一个页面

1. 在 `template/<name>/index.ts` 写模板，使用 `tpl-*` 结构类与已有组件 include。
2. 在同文件导出 `<Name>PageData` 类型。
3. 在 `template/index.ts` 导出模板与类型。
4. 在 `src/templates.ts` 的 `templates` 注册表加一项。
5. 在 `src/demo.ts` 的 `pages` / `pageMap` 加演示数据（仅 demo 需要）。
6. 在 `docs/style-binding.md` 补页面结构映射。

约束：

- 页面模板不写 `fetch`、不绑定事件；交互通过 `data-action` 交给业务层。
- 页面模板不写死颜色，颜色只引用 token。
- 页面模板不加入场动画。
