import type {
  EmptyState,
  PageAction,
  PageBase,
  PaginationInfo,
  ProjectCardItem,
  SearchConfig,
} from "@/types/page.ts";

/**
 * 项目列表页（对应 project/workspace_ui 的「所有项目」）
 * 结构：页头 → 工具条（搜索/归档筛选/分页）→ 新建卡 + 项目卡网格
 */
export type ProjectPageData = PageBase & {
  items?: ProjectCardItem[];
  addCard?: { key: string; title: string; icon?: string };
  filters?: PageAction[];
  pagination?: PaginationInfo;
  search?: SearchConfig;
  empty?: EmptyState;
};

export const project_tpl: string = `
<div class="tpl-page" data-page="project">
  <%~ include("tpl_page_header", it) %>
  <%~ include("tpl_page_toolbar", it) %>

  <div class="tpl-page-body">
    <section class="tpl-page-section">
      <%~ include("tpl_project_grid", { items: it.items, addCard: it.addCard, empty: it.empty }) %>
    </section>
  </div>
</div>
`;
