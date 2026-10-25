import type {
  EmptyState,
  MediaCardItem,
  PageAction,
  PageBase,
  PaginationInfo,
  SearchConfig,
  TabItem,
} from "@/types/page.ts";

/**
 * 素材管理页（对应 project/material_ui）
 * 结构：页头 → 工具条（搜索/分页）→ 类型标签 → 卡片网格
 */
export type MaterialPageData = PageBase & {
  /** 类型标签：全部/图片/视频/文档… */
  tabs?: TabItem[];
  /** 素材卡片 */
  items?: MediaCardItem[];
  /** 工具条左侧额外筛选 */
  filters?: PageAction[];
  pagination?: PaginationInfo;
  search?: SearchConfig;
  empty?: EmptyState;
};

export const material_tpl: string = `
<div class="tpl-page" data-page="material">
  <%~ include("tpl_page_header", it) %>
  <%~ include("tpl_page_toolbar", it) %>

  <div class="tpl-page-body">
    <section class="tpl-page-section">
      <% if (it.tabs && it.tabs.length) { %>
        <div class="tpl-tabs-block">
          <%~ include("tpl_tabs", { items: it.tabs }) %>
        </div>
      <% } %>

      <%~ include("tpl_media_grid", { items: it.items, empty: it.empty }) %>
    </section>
  </div>
</div>
`;
