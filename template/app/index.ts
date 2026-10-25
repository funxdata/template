import type { NavItem } from "@/types/page.ts";

/**
 * 应用壳：左侧栏 + 右侧页面
 *
 * ```ts
 * const html = await tpl.renderStringAsync(app_tpl, {
 *   aside: { logo, home, items, user },
 *   page: "material_tpl",     // 已注册的页面模板名
 *   pageData: { title: "素材管理", ... },
 * });
 * ```
 */
export type AppShellData = {
  aside: {
    brand?: string;
    logo?: string;
    home?: string;
    items: NavItem[];
    user?: { name?: string; avatar?: string; href?: string };
  };
  /** 已注册的页面模板名 */
  page: string;
  pageData: Record<string, unknown>;
};

export const app_tpl: string = `
<div class="tpl-app">
  <%~ include("tpl_app_aside", it.aside) %>
  <main class="tpl-app-main">
    <%~ include(it.page, it.pageData) %>
  </main>
</div>
`;
