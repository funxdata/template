import type {
  EmptyState,
  PageBase,
  SettingItem,
  TabItem,
} from "@/types/page.ts";

/**
 * 设置页（对应 project/setting_ui、init_ui、workspace_ui 的设置页）
 * 结构：页头 → 标签页 → 设置列表 →（可选）设计软件列表
 */
export type SettingPageData = PageBase & {
  tabs?: TabItem[];
  activeTab?: string;
  /** 基础设置项 */
  items?: SettingItem[];
  /** 设计软件等分组设置项 */
  groups?: Array<{
    key: string;
    title: string;
    extra?: string;
    items: SettingItem[];
  }>;
  empty?: EmptyState;
};

export const setting_tpl: string = `
<div class="tpl-page" data-page="setting">
  <%~ include("tpl_page_header", it) %>

  <div class="tpl-page-body">
    <section class="tpl-page-section">
      <% if (it.tabs && it.tabs.length) { %>
        <div class="tpl-tabs-block">
          <%~ include("tpl_tabs", { items: it.tabs }) %>
        </div>
      <% } %>

      <%~ include("tpl_setting_list", { items: it.items, empty: it.empty }) %>
    </section>

    <% if (it.groups && it.groups.length) { %>
      <% it.groups.forEach(function(group){ %>
        <section class="tpl-page-section">
          <%~ include("tpl_section_header", group) %>
          <%~ include("tpl_setting_list", { items: group.items, empty: it.empty }) %>
        </section>
      <% }) %>
    <% } %>
  </div>
</div>
`;
