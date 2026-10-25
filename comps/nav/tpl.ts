// 页面骨架中的导航组件：侧栏、标签页、面包屑

/** 应用侧栏：logo + 图标菜单 + 底部用户 */
export const tpl_app_aside = `
<aside class="tpl-app-aside">
  <div class="tpl-aside-logo">
    <a href="<%= it.home || '/' %>" title="<%= it.brand || 'home' %>">
      <img src="<%= it.logo %>" alt="<%= it.brand || 'logo' %>">
    </a>
  </div>

  <nav class="tpl-aside-menus">
    <% it.items.forEach(function(item){ %>
      <a class="tpl-aside-item <%= item.active ? 'is-active' : '' %>"
         href="<%= item.href %>"
         title="<%= item.title %>"
         <% if (item.active) { %>aria-current="page"<% } %>>
        <i class="vg-icon <%= item.icon %> tpl-aside-item-icon"></i>
        <span class="tpl-aside-item-title"><%= item.title %></span>
      </a>
    <% }) %>
  </nav>

  <% if (it.user) { %>
  <div class="tpl-aside-footer">
    <a class="vg-avatar border-radius-max" href="<%= it.user.href || '/setting' %>" title="<%= it.user.name || '' %>">
      <img src="<%= it.user.avatar || '' %>" alt="<%= it.user.name || '' %>">
    </a>
  </div>
  <% } %>
</aside>
`;

/** 标签页：带 href 渲染为链接，否则渲染为按钮（data-tab 供事件委托） */
export const tpl_tabs = `
<div class="tpl-tabs" role="tablist">
  <% it.items.forEach(function(item){ %>
    <% if (item.href) { %>
      <a class="tpl-tabs-item <%= item.active ? 'is-active' : '' %>"
         href="<%= item.href %>"
         role="tab"
         aria-selected="<%= item.active ? 'true' : 'false' %>"><%= item.title %></a>
    <% } else { %>
      <button class="tpl-tabs-item <%= item.active ? 'is-active' : '' %>"
              type="button"
              role="tab"
              data-tab="<%= item.key %>"
              aria-selected="<%= item.active ? 'true' : 'false' %>"><%= item.title %></button>
    <% } %>
  <% }) %>
</div>
`;

/** 面包屑：最后一项为当前页 */
export const tpl_breadcrumbs = `
<ul class="tpl-breadcrumbs">
  <% it.items.forEach(function(item, index){ %>
    <li>
      <% if (index > 0) { %><span class="tpl-breadcrumbs-sep">/</span><% } %>
      <% if (item.href && index < it.items.length - 1) { %>
        <a href="<%= item.href %>"><%= item.title %></a>
      <% } else { %>
        <span class="tpl-breadcrumbs-current"><%= item.title %></span>
      <% } %>
    </li>
  <% }) %>
</ul>
`;
