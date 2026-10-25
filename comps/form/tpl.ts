// 表单类原子模板：搜索框、输入行、上传行

/** 搜索框：接收 SearchConfig */
export const tpl_search = `
<label class="tpl-search">
  <i class="vg-icon ic-search tpl-search-icon"></i>
  <input id="<%= it.id || 'tpl_search' %>"
         type="search"
         placeholder="<%= it.placeholder || '搜索' %>"
         value="<%= it.value || '' %>"
         autocomplete="off">
</label>
`;

/** 单行输入：接收 { label?, name?, type?, placeholder?, value? } */
export const tpl_input = `
<label class="tpl-input-row">
  <% if (it.label) { %>
    <span class="tpl-input-label"><%= it.label %></span>
  <% } %>
  <input class="tpl-input"
         type="<%= it.type || 'text' %>"
         <% if (it.name) { %>name="<%= it.name %>"<% } %>
         placeholder="<%= it.placeholder || '' %>"
         value="<%= it.value || '' %>"
         autocomplete="off">
</label>
`;

/** 表单行：左侧说明 + 右侧输入（设置/软件检测场景） */
export const tpl_form_row = `
<div class="tpl-form-row" data-key="<%= it.key %>">
  <div class="tpl-setting-main">
    <p class="tpl-setting-title"><%= it.title %></p>
    <% if (it.description) { %>
      <p class="tpl-setting-desc"><%= it.description %></p>
    <% } %>
  </div>
  <div class="tpl-setting-actions">
    <input class="tpl-input"
           type="<%= it.type || 'text' %>"
           placeholder="<%= it.placeholder || '' %>"
           value="<%= it.value || '' %>">
    <% if (it.button) { %>
      <%~ include("tpl_action", it.button) %>
    <% } %>
  </div>
</div>
`;

/** 上传行：头像/封面 + 说明 + 按钮 + 隐藏 file input */
export const tpl_upload_row = `
<div class="tpl-form-row" data-key="<%= it.key %>">
  <% if (it.avatar) { %>
    <span class="tpl-setting-avatar" style="background-image:url('<%= it.avatar %>')"></span>
  <% } %>
  <div class="tpl-setting-main">
    <p class="tpl-setting-title"><%= it.title %></p>
    <% if (it.description) { %>
      <p class="tpl-setting-desc"><%= it.description %></p>
    <% } %>
  </div>
  <div class="tpl-setting-actions">
    <button class="vg-btn btn-size-md" type="button" data-action="upload">
      <%= it.buttonText || '上传' %>
    </button>
    <input class="tpl-setting-file"
           type="file"
           accept="<%= it.accept || '.png,.jpg,.jpeg' %>">
  </div>
</div>
`;
