// 通用对话框模板：提示、确认、单/多输入
// 与 comps/dialog/open.ts 配套使用，按钮统一用 data-dialog-action 标记。

/** 提示框：只有一个确认按钮 */
export const tpl_dialog_alert = `
<section class="vg-dialog-box" data-dialog="alert">
  <div class="vg-dialog" role="dialog" aria-modal="true">
    <div class="vg-dialog-header"><%= it.title || '提示' %></div>
    <div class="vg-dialog-body">
      <p class="font-size-13 color-gray-700 line-height-lg"><%= it.message || '' %></p>
    </div>
    <div class="vg-dialog-footer">
      <button class="vg-btn btn-type-brand" type="button" data-dialog-action="confirm">
        <%= it.confirmText || '确定' %>
      </button>
    </div>
  </div>
</section>
`;

/** 确认框：确定 + 取消，danger 时确认按钮使用错误色 */
export const tpl_dialog_confirm = `
<section class="vg-dialog-box" data-dialog="confirm">
  <div class="vg-dialog" role="dialog" aria-modal="true">
    <div class="vg-dialog-header"><%= it.title || '确认操作' %></div>
    <div class="vg-dialog-body">
      <p class="font-size-13 color-gray-700 line-height-lg"><%= it.message || '' %></p>
    </div>
    <div class="vg-dialog-footer">
      <button class="vg-btn <%= it.danger ? 'btn-type-error' : 'btn-type-brand' %>"
              type="button" data-dialog-action="confirm"><%= it.confirmText || '确定' %></button>
      <button class="vg-btn" type="button" data-dialog-action="cancel"><%= it.cancelText || '取消' %></button>
    </div>
  </div>
</section>
`;

/**
 * 表单框：支持一个或多个字段
 * fields: [{ name, label?, type?, placeholder?, value?, accept? }]
 */
export const tpl_dialog_form = `
<section class="vg-dialog-box" data-dialog="form">
  <div class="vg-dialog" role="dialog" aria-modal="true">
    <div class="vg-dialog-header"><%= it.title || '编辑' %></div>
    <div class="vg-dialog-body">
      <% if (it.message) { %>
        <p class="font-size-13 color-gray-700 line-height-lg mb-12"><%= it.message %></p>
      <% } %>
      <% it.fields.forEach(function(field){ %>
        <div class="vg-input-group mb-16" data-field="<%= field.name %>">
          <% if (field.label) { %>
            <label class="font-size-13 color-gray-700"><%= field.label %></label>
          <% } %>
          <input class="vg-input"
                 type="<%= field.type || 'text' %>"
                 name="<%= field.name %>"
                 placeholder="<%= field.placeholder || '' %>"
                 value="<%= field.value || '' %>"
                 autocomplete="off"
                 <% if (field.accept) { %>accept="<%= field.accept %>"<% } %>>
          <p class="error-tip"></p>
        </div>
      <% }) %>
    </div>
    <div class="vg-dialog-footer">
      <button class="vg-btn btn-type-brand" type="button" data-dialog-action="confirm">
        <%= it.confirmText || '确定' %>
      </button>
      <button class="vg-btn" type="button" data-dialog-action="cancel">
        <%= it.cancelText || '取消' %>
      </button>
    </div>
  </div>
</section>
`;

/** 单输入框（兼容旧 DialogBox 的字段形态） */
export const tpl_dialog_input = `
<%~ include("tpl_dialog_form", it) %>
`;
