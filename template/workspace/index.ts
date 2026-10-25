import type {
  BreadcrumbItem,
  DesignFileItem,
  EmptyState,
  PageAction,
  PageBase,
  TabItem,
} from "@/types/page.ts";

/**
 * 工作区页（对应 project/workspace_ui）
 * 结构：页头（项目名）→ 标签页 + 面包屑/新建 → 设计文件卡片网格
 */
export type WorkspacePageData = PageBase & {
  project?: { uuid?: string; name: string; description?: string };
  tabs?: TabItem[];
  /** 当前标签：list / setting */
  activeTab?: string;
  breadcrumbs?: BreadcrumbItem[];
  files?: DesignFileItem[];
  actions?: PageAction[];
  empty?: EmptyState;
};

export const workspace_tpl: string = `
<div class="tpl-page" data-page="workspace">
  <%~ include("tpl_page_header", it) %>

  <div class="tpl-page-toolbar">
    <% if (it.tabs && it.tabs.length) { %>
      <%~ include("tpl_tabs", { items: it.tabs }) %>
    <% } %>

    <div class="tpl-toolbar-right">
      <% if (it.breadcrumbs && it.breadcrumbs.length) { %>
        <%~ include("tpl_breadcrumbs", { items: it.breadcrumbs }) %>
      <% } %>
      <% if (it.actions && it.actions.length) { %>
        <% it.actions.forEach(function(action){ %>
          <%~ include("tpl_action", action) %>
        <% }) %>
      <% } %>
    </div>
  </div>

  <div class="tpl-page-body">
    <section class="tpl-page-section">
      <%~ include("tpl_design_grid", { items: it.files, empty: it.empty }) %>
    </section>
  </div>
</div>
`;
