// 项目里出现的三类卡片：素材卡、项目卡、设计文件卡，以及统一的网格容器
// 注意：被 include 的模板拿到的 data 就是 `it`，因此卡片模板统一使用 `it.*`。

/** 素材/文件夹卡片：接收单个 MediaCardItem */
export const tpl_media_card = `
<div class="tpl-card" data-id="<%= it.id %>"<% if (it.uuid) { %> data-uuid="<%= it.uuid %>"<% } %>>
  <% if (it.actions && it.actions.length) { %>
    <div class="tpl-card-tools">
      <div class="vg-dropdowns">
        <button class="vg-btn btn-icons btn-size-sm" type="button" data-action="menu" title="更多">
          <i class="vg-icon ic-dots"></i>
        </button>
        <ul class="vg-dropdowns-content hide">
          <% it.actions.forEach(function(action){ %>
            <li class="vg-dropdowns-li<%= action.variant === 'error' ? ' color-error' : '' %>"
                data-action="<%= action.key %>"><%= action.title %></li>
          <% }) %>
        </ul>
      </div>
    </div>
  <% } %>

  <div class="tpl-card-cover"<% if (it.cover) { %> style="background-image:url('<%= it.cover %>')"<% } %>>
    <% if (it.cover) { %>
      <img src="<%= it.cover %>" alt="<%= it.name %>">
    <% } else { %>
      <i class="vg-icon ic-folder-off tpl-card-placeholder"></i>
    <% } %>
  </div>

  <div class="tpl-card-body">
    <div class="tpl-card-main">
      <p class="tpl-card-name" title="<%= it.name %>"><%= it.name %></p>
      <% if (it.updated_at) { %>
        <p class="tpl-card-meta">更新于 <%= it.updated_at %></p>
      <% } %>
    </div>
    <% if (it.type_icon) { %>
      <span class="tpl-card-avatar" style="background-image:url('<%= it.type_icon %>')"></span>
    <% } %>
  </div>
</div>
`;

/** 项目卡片：整卡可点击，接收单个 ProjectCardItem */
export const tpl_project_card = `
<a class="tpl-card" href="<%= it.href || ('/workspace?puid=' + it.uuid) %>">
  <div class="tpl-card-cover"<% if (it.cover) { %> style="background-image:url('<%= it.cover %>')"<% } %>>
    <% if (it.cover) { %>
      <img src="<%= it.cover %>" alt="<%= it.name %>">
    <% } %>
  </div>
  <div class="tpl-card-body">
    <div class="tpl-card-main">
      <p class="tpl-card-name" title="<%= it.name %>"><%= it.name %></p>
      <% if (it.updated_at) { %>
        <p class="tpl-card-meta">更新于 <%= it.updated_at %></p>
      <% } %>
    </div>
    <% if (it.icon) { %>
      <span class="tpl-card-avatar" style="background-image:url('<%= it.icon %>')"></span>
    <% } %>
  </div>
</a>
`;

/** 设计文件卡片：封面 + 名称 + 时间 + 悬停操作，接收单个 DesignFileItem */
export const tpl_design_card = `
<div class="tpl-card"<% if (it.uuid) { %> data-uuid="<%= it.uuid %>"<% } %>>
  <div class="tpl-card-cover"<% if (it.cover) { %> style="background-image:url('<%= it.cover %>')"<% } %>>
    <% if (it.icon_svg) { %>
      <span class="tpl-card-fileicon"><%~ it.icon_svg %></span>
    <% } %>
  </div>

  <div class="tpl-card-body">
    <div class="tpl-card-main">
      <p class="tpl-card-name" title="<%= it.name %>"><%= it.name %></p>
      <p class="tpl-card-meta">
        更新于：<span><%= it.updated_at_display || '' %></span>
      </p>
    </div>
  </div>

  <% if (it.actions && it.actions.length) { %>
    <div class="tpl-card-tools tpl-card-tools-bottom">
      <% it.actions.forEach(function(action){ %>
        <%~ include("tpl_action", action) %>
      <% }) %>
    </div>
  <% } %>
</div>
`;

/** 新建卡片：接收 { key, title, icon? } */
export const tpl_add_card = `
<button class="tpl-add-card" type="button" data-action="<%= it.key %>">
  <i class="vg-icon <%= it.icon || 'ic-plus' %> tpl-add-card-icon"></i>
  <span class="tpl-add-card-text"><%= it.title %></span>
</button>
`;

/** 素材网格：接收 { items: MediaCardItem[], empty?: EmptyState } */
export const tpl_media_grid = `
<% if (it.items && it.items.length) { %>
  <div class="tpl-grid">
    <% it.items.forEach(function(item){ %>
      <%~ include("tpl_media_card", item) %>
    <% }) %>
  </div>
<% } else { %>
  <%~ include("tpl_page_empty", { empty: it.empty }) %>
<% } %>
`;

/** 项目网格：接收 { items: ProjectCardItem[], addCard?: {...}, empty? } */
export const tpl_project_grid = `
<% var projectItems = it.items || []; %>
<% if (projectItems.length || it.addCard) { %>
  <div class="tpl-grid">
    <% if (it.addCard) { %>
      <%~ include("tpl_add_card", it.addCard) %>
    <% } %>
    <% projectItems.forEach(function(item){ %>
      <%~ include("tpl_project_card", item) %>
    <% }) %>
  </div>
<% } else { %>
  <%~ include("tpl_page_empty", { empty: it.empty }) %>
<% } %>
`;

/** 设计文件网格：接收 { items: DesignFileItem[], empty? } */
export const tpl_design_grid = `
<% if (it.items && it.items.length) { %>
  <div class="tpl-grid">
    <% it.items.forEach(function(item){ %>
      <%~ include("tpl_design_card", item) %>
    <% }) %>
  </div>
<% } else { %>
  <%~ include("tpl_page_empty", { empty: it.empty }) %>
<% } %>
`;
