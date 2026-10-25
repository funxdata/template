import type { PageBase } from "@/types/page.ts";

export type DocItem = {
  name: string;
  desc: string;
  /** 对应源码路径或模板名 */
  path?: string;
};

export type DocSection = {
  key: string;
  title: string;
  extra?: string;
  items: DocItem[];
};

export type DocsPageData = PageBase & {
  sections: DocSection[];
};

/**
 * 模板文档页
 * 用于在 demo / 内部文档站里介绍页面模板、组件与样式约定，
 * 让「版面」和「模块说明」在同一个页面里可查。
 */
export const docs_tpl: string = `
<div class="tpl-page" data-page="docs">
  <%~ include("tpl_page_header", it) %>

  <div class="tpl-page-body">
    <% it.sections.forEach(function(section){ %>
      <section class="tpl-page-section">
        <%~ include("tpl_section_header", { title: section.title, extra: section.extra }) %>

        <ul class="tpl-setting-list">
          <% section.items.forEach(function(item){ %>
            <li class="tpl-setting-item" data-key="<%= item.name %>">
              <div class="tpl-setting-main">
                <p class="tpl-setting-title"><%= item.name %></p>
                <p class="tpl-setting-desc"><%= item.desc %></p>
                <% if (item.path) { %>
                  <p class="tpl-setting-desc"><code class="tpl-code"><%= item.path %></code></p>
                <% } %>
              </div>
            </li>
          <% }) %>
        </ul>
      </section>
    <% }) %>
  </div>
</div>
`;
