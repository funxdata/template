import type { Tpl } from "@funxdata/pages/tplstype";

import { pagination } from "@/comps/pagination/index.ts";
import { tpl_action, tpl_page_empty, tpl_page_header, tpl_page_toolbar, tpl_section_header, tpl_setting_item, tpl_setting_list } from "@/comps/page/tpl.ts";
import { tpl_app_aside, tpl_breadcrumbs, tpl_tabs } from "@/comps/nav/tpl.ts";
import { tpl_add_card, tpl_design_card, tpl_design_grid, tpl_media_card, tpl_media_grid, tpl_project_card, tpl_project_grid } from "@/comps/card/tpl.ts";
import { tpl_form_row, tpl_input, tpl_search, tpl_upload_row } from "@/comps/form/tpl.ts";
import { tpl_shell, tpl_thread, tpl_thread_message } from "@/comps/layout/tpl.ts";
import { tpl_dialog_alert, tpl_dialog_confirm, tpl_dialog_form, tpl_dialog_input } from "@/comps/dialog/extra.ts";
import { aside_body, aside_footer, aside_header, screen_body, screen_footer, screen_header } from "@/comps/chat/index.ts";
import { chatinput_tpl } from "@/comps/chat-input/index.ts";
import { app_tpl, chattpl, docs_tpl, material_tpl, project_tpl, setting_tpl, workspace_tpl } from "@/template/index.ts";

/**
 * 模板注册表：name -> 模板字符串
 * 组件之间通过 include("name", data) 组合，页面通过 app_tpl 的 it.page 动态载入。
 */
export const templates: Record<string, string> = {
  // 页面
  material_tpl,
  project_tpl,
  workspace_tpl,
  setting_tpl,
  chattpl,
  docs_tpl,
  app_tpl,

  // 骨架
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

  // 聊天页依赖的子模板
  chat_aside_header: aside_header,
  chat_aside_body: aside_body,
  chat_aside_footer: aside_footer,
  chat_screen_header: screen_header,
  chat_screen_body: screen_body,
  chat_screen_footer: screen_footer,
  chat_input: chatinput_tpl,

  // 复用既有组件，统一使用 tpl_ 前缀注册，避免与其他库重名
  tpl_pagination: pagination,
};

/**
 * 同时注册同步与异步缓存：
 * Tpl 的 loadTemplate 默认只写 templatesSync，而 renderStringAsync 的 include
 * 走 templatesAsync；两边都注册后，sync/async 渲染都可以 include。
 */
export const registerTemplates = (tpl: Tpl): void => {
  const compile = tpl.compile;
  if (!compile) throw new Error("Tpl.compile is not available");

  for (const [name, source] of Object.entries(templates)) {
    const compiled = compile.call(tpl, source);
    tpl.loadTemplate(name, compiled);
    tpl.loadTemplate(name, compiled, { async: true });
  }
};
