import { message } from "./message/index.ts";
import { formatfileSize } from "./formate/size.ts";
import { DxDate } from "./formate/date.ts";
import { pagination } from "./pagination/index.ts";
import { select_option } from "./select/index.ts";
import { DialogBox, DialogPreview, openDialog } from "./dialog/index.ts";

// 页面骨架
import {
  tpl_action,
  tpl_page_header,
  tpl_page_toolbar,
  tpl_section_header,
  tpl_page_empty,
  tpl_setting_item,
  tpl_setting_list,
} from "./page/tpl.ts";

// 导航
import { tpl_app_aside, tpl_tabs, tpl_breadcrumbs } from "./nav/tpl.ts";

// 卡片
import {
  tpl_media_card,
  tpl_project_card,
  tpl_design_card,
  tpl_add_card,
  tpl_media_grid,
  tpl_project_grid,
  tpl_design_grid,
} from "./card/tpl.ts";

// 表单
import { tpl_search, tpl_input, tpl_form_row, tpl_upload_row } from "./form/tpl.ts";

// 布局
import { tpl_shell, tpl_thread, tpl_thread_message } from "./layout/tpl.ts";

// 对话框模板
import {
  tpl_dialog_alert,
  tpl_dialog_confirm,
  tpl_dialog_form,
  tpl_dialog_input,
} from "./dialog/index.ts";

export {
  message,
  formatfileSize,
  DxDate,
  pagination,
  select_option,
  DialogBox,
  DialogPreview,
  openDialog,
  // 页面骨架
  tpl_action,
  tpl_page_header,
  tpl_page_toolbar,
  tpl_section_header,
  tpl_page_empty,
  tpl_setting_item,
  tpl_setting_list,
  // 导航
  tpl_app_aside,
  tpl_tabs,
  tpl_breadcrumbs,
  // 卡片
  tpl_media_card,
  tpl_project_card,
  tpl_design_card,
  tpl_add_card,
  tpl_media_grid,
  tpl_project_grid,
  tpl_design_grid,
  // 表单
  tpl_search,
  tpl_input,
  tpl_form_row,
  tpl_upload_row,
  // 布局
  tpl_shell,
  tpl_thread,
  tpl_thread_message,
  // 对话框
  tpl_dialog_alert,
  tpl_dialog_confirm,
  tpl_dialog_form,
  tpl_dialog_input,
};

export type { DialogField, DialogOptions, DialogResult } from "./dialog/index.ts";
export type { ShellData, ThreadData, ThreadMessage } from "./layout/tpl.ts";
export type {
  NavItem,
  TabItem,
  PageAction,
  SearchConfig,
  PaginationInfo,
  EmptyState,
  BreadcrumbItem,
  MediaCardItem,
  ProjectCardItem,
  DesignFileItem,
  SettingItem,
  UploadRow,
  PageBase,
} from "@/types/page.ts";
