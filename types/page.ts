/**
 * 页面结构类型
 * ------------------------------------------------------------------
 * 这些类型对应 project/* 中实际出现的页面数据形态，模板只依赖这里的字段，
 * 业务侧把接口数据映射成这些结构即可复用页面骨架。
 */

/** 侧栏导航项 */
export type NavItem = {
  /** 跳转地址，支持 hash（#material） */
  href: string;
  /** vg-icon 类名，如 ic-folder */
  icon: string;
  /** 显示文字 */
  title: string;
  /** 是否当前页 */
  active?: boolean;
};

/** 标签页项 */
export type TabItem = {
  /** 业务标识 */
  key: string;
  /** 显示文字 */
  title: string;
  /** 跳转地址；为空时按按钮处理 */
  href?: string;
  /** 是否选中 */
  active?: boolean;
};

/** 页头/工具条按钮 */
export type PageAction = {
  /** 业务标识，用于事件委托 */
  key: string;
  /** 显示文字 */
  title: string;
  /** vg-icon 类名 */
  icon?: string;
  /** 跳转地址 */
  href?: string;
  /** 按钮语义 */
  variant?: "brand" | "error" | "info" | "default";
  /** 按钮尺寸 */
  size?: "sm" | "md" | "xl";
  /** 是否禁用 */
  disabled?: boolean;
};

/** 搜索框 */
export type SearchConfig = {
  /** input id，默认 tpl_search */
  id?: string;
  placeholder?: string;
  value?: string;
};

/** 分页（与 comps/pagination 模板字段一致） */
export type PaginationInfo = {
  total: number;
  amount: number;
  num: number;
};

/** 空状态 */
export type EmptyState = {
  title?: string;
  description?: string;
  /** vg-icon 类名 */
  icon?: string;
};

/** 面包屑 */
export type BreadcrumbItem = {
  title: string;
  href?: string;
};

/** 素材/文件夹卡片 */
export type MediaCardItem = {
  id: string | number;
  uuid?: string;
  name: string;
  /** 封面地址 */
  cover?: string;
  /** 类型图标地址 */
  type_icon?: string;
  /** 更新时间（已格式化） */
  updated_at?: string;
  /** 右上角操作 */
  actions?: PageAction[];
};

/** 项目卡片 */
export type ProjectCardItem = {
  uuid: string;
  name: string;
  cover?: string;
  /** 项目图标地址或 svg */
  icon?: string;
  /** 已格式化的更新时间 */
  updated_at?: string;
  href?: string;
};

/** 设计文件卡片 */
export type DesignFileItem = {
  id?: string;
  uuid?: string;
  name: string;
  cover?: string;
  /** 内联 svg 图标 */
  icon_svg?: string;
  /** 已格式化的更新时间 */
  updated_at_display?: string;
  /** 卡片按钮 */
  actions?: PageAction[];
};

/** 设置列表行 */
export type SettingItem = {
  key: string;
  title: string;
  value?: string;
  description?: string;
  /** 左侧头像/封面地址 */
  avatar?: string;
  /** 右侧按钮 */
  button?: PageAction;
  /** 危险操作（按钮使用错误色） */
  danger?: boolean;
  /** 行内输入（如检测软件关键字） */
  input?: {
    placeholder?: string;
    type?: string;
    value?: string;
  };
  /** 文件输入 accept */
  accept?: string;
};

/** 上传设置行 */
export type UploadRow = {
  key: string;
  title: string;
  description?: string;
  accept?: string;
  buttonText?: string;
  avatar?: string;
};

/** 页面通用数据：所有页面模板都从这些字段取值 */
export type PageBase = {
  title: string;
  subtitle?: string;
  /** 页头右侧操作 */
  actions?: PageAction[];
  /** 工具条右侧操作（与页头区分，避免重复渲染） */
  toolbarActions?: PageAction[];
  search?: SearchConfig;
  pagination?: PaginationInfo;
  empty?: EmptyState;
};
