import type { NavItem } from "@/types/page.ts";
import type { MaterialPageData } from "@/template/material/index.ts";
import type { ProjectPageData } from "@/template/project/index.ts";
import type { WorkspacePageData } from "@/template/workspace/index.ts";
import type { SettingPageData } from "@/template/setting/index.ts";
import type { DocsPageData } from "@/template/docs/index.ts";

const LOGO = "https://uicdn.funxdata.com/assets/logo_piksel.png";
const AVATAR = "https://book.funxdata.com/public/img/funxdata/website/feature-03.png";
const ICON_AI = "https://book.funxdata.com/public/img/webmanage/AI.png";

/** 侧栏导航：hash 对应演示页面 */
export const navItems: NavItem[] = [
  { href: "#material", icon: "ic-folder-on", title: "素材" },
  { href: "#project", icon: "ic-project", title: "项目" },
  { href: "#workspace", icon: "ic-layout-left", title: "工作区" },
  { href: "#setting", icon: "ic-setting", title: "设置" },
  { href: "#docs", icon: "ic-file-info", title: "文档" },
];

export const aside = {
  brand: "template",
  logo: LOGO,
  home: "#material",
  items: navItems,
  user: { name: "funxdata", avatar: AVATAR, href: "#setting" },
};

const materialPage: MaterialPageData = {
  title: "素材管理",
  subtitle: "管理图片、视频与文档素材，支持分类筛选与批量操作",
  actions: [
    { key: "upload", title: "上传素材", icon: "ic-cloud-up", variant: "brand" },
    { key: "new-folder", title: "新建文件夹", icon: "ic-folder-on" },
  ],
  search: { id: "material_search", placeholder: "搜索素材" },
  tabs: [
    { key: "all", title: "全部", active: true },
    { key: "image", title: "图片" },
    { key: "video", title: "视频" },
    { key: "doc", title: "文档" },
  ],
  items: [
    { id: 1, uuid: "m-1", name: "品牌主视觉", cover: ICON_AI, updated_at: "2026-10-20", actions: [{ key: "rename", title: "重命名" }, { key: "delete", title: "删除", variant: "error" }] },
    { id: 2, uuid: "m-2", name: "产品细节图", cover: AVATAR, updated_at: "2026-10-19", actions: [{ key: "rename", title: "重命名" }, { key: "delete", title: "删除", variant: "error" }] },
    { id: 3, uuid: "m-3", name: "首页 Banner", updated_at: "2026-10-18", actions: [{ key: "rename", title: "重命名" }, { key: "delete", title: "删除", variant: "error" }] },
    { id: 4, uuid: "m-4", name: "宣传视频", cover: AVATAR, updated_at: "2026-10-16", type_icon: ICON_AI, actions: [{ key: "rename", title: "重命名" }, { key: "delete", title: "删除", variant: "error" }] },
    { id: 5, uuid: "m-5", name: "设计规范", updated_at: "2026-10-12" },
    { id: 6, uuid: "m-6", name: "未命名素材", updated_at: "2026-10-08" },
  ],
  pagination: { total: 26, amount: 3, num: 1 },
  empty: { title: "暂无素材", description: "点击右上角上传素材，或拖拽文件到这里" },
};

const projectPage: ProjectPageData = {
  title: "所有项目",
  subtitle: "共 12 个项目，按更新时间排序",
  actions: [{ key: "create-project", title: "新建项目", icon: "ic-plus", variant: "brand" }],
  filters: [{ key: "filter-archived", title: "已归档" }],
  search: { id: "project_search", placeholder: "搜索项目" },
  addCard: { key: "create-project", title: "创建项目", icon: "ic-plus" },
  items: [
    { uuid: "p-1", name: "梵响品牌升级", cover: ICON_AI, icon: ICON_AI, updated_at: "2026-10-24 18:20", href: "#workspace" },
    { uuid: "p-2", name: "Piksel 官网", cover: AVATAR, icon: ICON_AI, updated_at: "2026-10-22 09:10", href: "#workspace" },
    { uuid: "p-3", name: "智能展厅", updated_at: "2026-10-18 14:05", href: "#workspace" },
  ],
  pagination: { total: 12, amount: 2, num: 1 },
  empty: { title: "还没有项目", description: "点击「创建项目」开始第一个项目" },
};

const workspacePage: WorkspacePageData = {
  title: "梵响品牌升级",
  subtitle: "项目文件与版本管理",
  project: { uuid: "p-1", name: "梵响品牌升级", description: "品牌视觉与官网改版" },
  tabs: [
    { key: "list", title: "文件", active: true },
    { key: "setting", title: "设置", href: "#setting" },
  ],
  breadcrumbs: [
    { title: "所有项目", href: "#project" },
    { title: "梵响品牌升级" },
  ],
  actions: [{ key: "new-file", title: "新建设计文件", icon: "ic-plus", variant: "brand" }],
  files: [
    { uuid: "f-1", name: "主视觉.psd", cover: ICON_AI, updated_at_display: "2026-10-24 18:20", actions: [{ key: "edit-file", title: "编辑文件" }, { key: "view-steps", title: "查看版本" }] },
    { uuid: "f-2", name: "包装设计.ai", cover: AVATAR, updated_at_display: "2026-10-23 11:02", actions: [{ key: "edit-file", title: "编辑文件" }, { key: "view-steps", title: "查看版本" }] },
    { uuid: "f-3", name: "官网首页.fig", updated_at_display: "2026-10-22 16:40", actions: [{ key: "edit-file", title: "编辑文件" }, { key: "view-steps", title: "查看版本" }] },
    { uuid: "f-4", name: "物料清单.xlsx", updated_at_display: "2026-10-20 10:15", actions: [{ key: "edit-file", title: "编辑文件" }, { key: "view-steps", title: "查看版本" }] },
  ],
  empty: { title: "暂无设计文件", description: "点击「新建设计文件」上传或创建" },
};

const settingPage: SettingPageData = {
  title: "设置",
  subtitle: "项目信息、封面与设计软件",
  tabs: [
    { key: "general", title: "通用", active: true },
    { key: "design", title: "设计软件" },
    { key: "member", title: "成员" },
  ],
  items: [
    { key: "name", title: "项目名称", value: "梵响品牌升级", button: { key: "edit-name", title: "编辑名称" } },
    { key: "cover", title: "项目封面", description: "支持 2M 以内的 JPG、PNG 图片", avatar: ICON_AI, accept: ".jpg,.jpeg,.png", button: { key: "edit-cover", title: "上传封面" } },
    { key: "description", title: "项目简介", value: "品牌视觉与官网改版", button: { key: "edit-description", title: "编辑信息" } },
    { key: "archive", title: "项目归档", description: "注：项目未完成前，请不要归档", button: { key: "archive", title: "归档项目" } },
    { key: "delete", title: "删除项目", description: "删除后项目文件将永久删除，所有成员都无法访问", danger: true, button: { key: "delete-project", title: "删除项目", variant: "error" } },
  ],
  groups: [
    {
      key: "design-soft",
      title: "设计软件",
      extra: "检测本机已安装的设计软件",
      items: [
        { key: "detect", title: "检测软件", description: "输入关键字，如 Illustrator", input: { placeholder: "输入软件关键字" }, button: { key: "detect-soft", title: "检测" } },
        { key: "photoshop", title: "Adobe Photoshop", value: "版本 25.1", description: "路径：C:/Program Files/Adobe/Photoshop" , button: { key: "remove-soft", title: "删除" } },
        { key: "illustrator", title: "Adobe Illustrator", value: "版本 28.0", description: "路径：C:/Program Files/Adobe/Illustrator", button: { key: "remove-soft", title: "删除" } },
      ],
    },
  ],
  empty: { title: "暂无配置项" },
};

const docsPage: DocsPageData = {
  title: "模板文档",
  subtitle: "页面模板、组件与样式约定速查",
  sections: [
    {
      key: "pages",
      title: "页面模板",
      extra: "template/template/*",
      items: [
        { name: "app_tpl", desc: "左侧图标栏 + 主内容壳，对应 init_ui 的应用结构", path: "template/app/index.ts" },
        { name: "material_tpl", desc: "素材管理：页头、搜索、类型标签、卡片网格、分页", path: "template/material/index.ts" },
        { name: "project_tpl", desc: "所有项目：搜索、归档筛选、新建卡、项目卡片", path: "template/project/index.ts" },
        { name: "workspace_tpl", desc: "工作区：文件/设置标签、面包屑、设计文件卡片", path: "template/workspace/index.ts" },
        { name: "setting_tpl", desc: "设置：标签页、设置列表、设计软件分组", path: "template/setting/index.ts" },
        { name: "docs_tpl", desc: "本文档页，演示数据驱动的说明版面", path: "template/docs/index.ts" },
        { name: "chattpl", desc: "聊天三栏页，沿用原 chat 组件", path: "template/chat/index.ts" },
      ],
    },
    {
      key: "comps",
      title: "组件模板",
      extra: "comps/*/tpl.ts",
      items: [
        { name: "page", desc: "页头、工具条、区块头、空状态、设置列表", path: "comps/page/tpl.ts" },
        { name: "nav", desc: "应用侧栏、标签页、面包屑", path: "comps/nav/tpl.ts" },
        { name: "card", desc: "素材卡、项目卡、设计文件卡、新建卡与网格", path: "comps/card/tpl.ts" },
        { name: "form", desc: "搜索框、输入行、表单行、上传行", path: "comps/form/tpl.ts" },
        { name: "dialog", desc: "提示/确认/多字段表单模板，openDialog() 返回 Promise", path: "comps/dialog/extra.ts + open.ts" },
        { name: "layout", desc: "三栏壳 tpl_shell、会话区 tpl_thread、消息 tpl_thread_message", path: "comps/layout/tpl.ts" },
      ],
    },
    {
      key: "styles",
      title: "布局与样式",
      extra: "styles/template.css",
      items: [
        { name: "尺寸 token", desc: "--tpl-aside-width、--tpl-thread-width、--tpl-gap、--tpl-radius 等，比例参考 Tailwind spacing", path: "styles/template.css" },
        { name: "颜色 token", desc: "--primary、--neutral、--surface 等，来自 stylesheet", path: "stylesheet/styles/light/color.css" },
        { name: "控件类", desc: "vg-*、btn-*、vg-icon 来自 vango 的 css-manage 产物", path: "docs/style-binding.md" },
        { name: "无动画约定", desc: "不使用 transition / animation / translate 入场；只做静态布局与 hover 状态", path: "docs/layout.md" },
        { name: "响应式", desc: "1024px 隐藏右栏，768px 收窄侧栏与网格间距", path: "styles/template.css" },
      ],
    },
    {
      key: "usage",
      title: "接入步骤",
      items: [
        { name: "1. 注册模板", desc: "registerTemplates(tpl) 同时写入同步/异步缓存，include 才能生效", path: "src/templates.ts" },
        { name: "2. 渲染页面", desc: "app_tpl + { aside, page: 'material_tpl', pageData }", path: "src/app.ts" },
        { name: "3. 绑定事件", desc: "模板只输出 data-action，交互统一走事件委托", path: "src/app.ts" },
        { name: "4. 注入样式", desc: "bindTemplateStyles() 本地注入 ./styles/template.css，线上传 { local: false }", path: "styles/index.ts" },
      ],
    },
  ],
};

/** 页面模板名 -> 页面数据 */
export const pages: Record<string, Record<string, unknown>> = {
  material_tpl: materialPage as unknown as Record<string, unknown>,
  project_tpl: projectPage as unknown as Record<string, unknown>,
  workspace_tpl: workspacePage as unknown as Record<string, unknown>,
  setting_tpl: settingPage as unknown as Record<string, unknown>,
  docs_tpl: docsPage as unknown as Record<string, unknown>,
};

/** hash -> 页面模板名 */
export const pageMap: Record<string, string> = {
  material: "material_tpl",
  project: "project_tpl",
  workspace: "workspace_tpl",
  setting: "setting_tpl",
  docs: "docs_tpl",
};
