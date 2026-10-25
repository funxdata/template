// 页面级结构组件：页头、工具栏、区块头、空状态、设置列表
// 约定：每个被 include 的模板拿到的 data 就是 `it`。

/** 通用按钮/链接，供页头、工具栏、卡片复用。接收单个 PageAction */
export const tpl_action = `
<% if (it.href) { %>
  <a class="vg-btn btn-size-<%= it.size || 'md' %><%= it.variant && it.variant !== 'default' ? ' btn-type-' + it.variant : '' %><%= it.disabled ? ' disabled' : '' %>"
     href="<%= it.disabled ? 'javascript:;' : it.href %>"
     data-action="<%= it.key %>"
     <% if (it.disabled) { %>aria-disabled="true" tabindex="-1"<% } %>>
    <% if (it.icon) { %><i class="vg-icon <%= it.icon %>"></i><% } %>
    <% if (it.title) { %><span><%= it.title %></span><% } %>
  </a>
<% } else { %>
  <button class="vg-btn btn-size-<%= it.size || 'md' %><%= it.variant && it.variant !== 'default' ? ' btn-type-' + it.variant : '' %>"
          type="button"
          data-action="<%= it.key %>"
          <% if (it.disabled) { %>disabled<% } %>>
    <% if (it.icon) { %><i class="vg-icon <%= it.icon %>"></i><% } %>
    <% if (it.title) { %><span><%= it.title %></span><% } %>
  </button>
<% } %>
`;

/** 页头：标题 + 副标题 + 右侧操作。接收页面数据 */
export const tpl_page_header = `
<header class="tpl-page-header">
  <div class="tpl-page-heading">
    <h5 class="tpl-page-title"><%= it.title %></h5>
    <% if (it.subtitle) { %>
      <p class="tpl-page-subtitle"><%= it.subtitle %></p>
    <% } %>
  </div>
  <% if (it.actions && it.actions.length) { %>
    <div class="tpl-page-actions">
      <% it.actions.forEach(function(action){ %>
        <%~ include("tpl_action", action) %>
      <% }) %>
    </div>
  <% } %>
</header>
`;

/** 工具栏：搜索 + 筛选按钮 + 右侧工具栏操作/分页。接收页面数据 */
export const tpl_page_toolbar = `
<div class="tpl-page-toolbar">
  <% if (it.search) { %>
    <%~ include("tpl_search", it.search) %>
  <% } %>

  <% if (it.filters && it.filters.length) { %>
    <% it.filters.forEach(function(filter){ %>
      <%~ include("tpl_action", filter) %>
    <% }) %>
  <% } %>

  <% if ((it.toolbarActions && it.toolbarActions.length) || it.pagination) { %>
    <div class="tpl-toolbar-right">
      <% if (it.toolbarActions && it.toolbarActions.length) { %>
        <% it.toolbarActions.forEach(function(action){ %>
          <%~ include("tpl_action", action) %>
        <% }) %>
      <% } %>
      <% if (it.pagination) { %>
        <%~ include("tpl_pagination", it.pagination) %>
      <% } %>
    </div>
  <% } %>
</div>
`;

/** 区块头：接收 { title, extra? } */
export const tpl_section_header = `
<div class="tpl-page-section-header">
  <h6 class="tpl-page-section-title"><%= it.title %></h6>
  <% if (it.extra) { %>
    <span class="tpl-page-section-extra"><%= it.extra %></span>
  <% } %>
</div>
`;

/** 空状态：接收 { empty: EmptyState } */
export const tpl_page_empty = `
<div class="tpl-empty">
  <i class="vg-icon <%= (it.empty && it.empty.icon) || 'ic-folder-off' %> tpl-empty-icon"></i>
  <p class="tpl-empty-title"><%= (it.empty && it.empty.title) || '暂无内容' %></p>
  <% if (it.empty && it.empty.description) { %>
    <p class="tpl-empty-desc"><%= it.empty.description %></p>
  <% } %>
</div>
`;

/** 设置行：接收单个 SettingItem */
export const tpl_setting_item = `
<li class="tpl-setting-item" data-key="<%= it.key %>">
  <% if (it.avatar) { %>
    <span class="tpl-setting-avatar" style="background-image:url('<%= it.avatar %>')"></span>
  <% } %>

  <div class="tpl-setting-main">
    <p class="tpl-setting-title"><%= it.title %></p>
    <% if (it.value) { %>
      <p class="tpl-setting-desc"><span data-role="value"><%= it.value %></span></p>
    <% } %>
    <% if (it.description) { %>
      <p class="tpl-setting-desc"><%= it.description %></p>
    <% } %>
    <% if (it.input) { %>
      <input class="tpl-input tpl-setting-input"
             type="<%= it.input.type || 'text' %>"
             placeholder="<%= it.input.placeholder || '' %>"
             value="<%= it.input.value || '' %>">
    <% } %>
    <% if (it.accept) { %>
      <input class="tpl-setting-file" type="file" accept="<%= it.accept %>">
    <% } %>
  </div>

  <% if (it.button) { %>
    <div class="tpl-setting-actions">
      <%~ include("tpl_action", it.button) %>
    </div>
  <% } %>
</li>
`;

/** 设置列表：接收 { items: SettingItem[], empty?: EmptyState } */
export const tpl_setting_list = `
<% if (it.items && it.items.length) { %>
  <ul class="tpl-setting-list">
    <% it.items.forEach(function(item){ %>
      <%~ include("tpl_setting_item", item) %>
    <% }) %>
  </ul>
<% } else { %>
  <%~ include("tpl_page_empty", { empty: it.empty }) %>
<% } %>
`;
