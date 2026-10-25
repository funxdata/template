// 页面布局组件：三栏壳与 thread（会话）布局
// 结构参考 assistant-ui 的 Thread / Composer，只保留静态布局，不引入动画。

export type ShellData = {
  /** 左侧栏模板名（可选） */
  asideTpl?: string;
  asideData?: Record<string, unknown>;
  /** 主区模板名 */
  mainTpl: string;
  mainData?: Record<string, unknown>;
  /** 右侧栏模板名（可选，窄屏隐藏） */
  panelTpl?: string;
  panelData?: Record<string, unknown>;
};

export type ThreadMessage = {
  role: "user" | "assistant" | "system";
  /** 已渲染的 HTML 或纯文本 */
  content: string;
  /** 时间、耗时等附加信息 */
  meta?: string;
};

export type ThreadData = {
  headerTpl?: string;
  headerData?: Record<string, unknown>;
  /** 欢迎语（无消息时显示） */
  welcome?: string;
  messages?: ThreadMessage[];
  /** 是否显示底部输入区 */
  composer?: boolean;
  composerPlaceholder?: string;
};

/** 三栏壳：aside + main + panel */
export const tpl_shell = `
<div class="tpl-shell">
  <% if (it.asideTpl) { %>
    <aside class="tpl-shell-aside">
      <%~ include(it.asideTpl, it.asideData || {}) %>
    </aside>
  <% } %>

  <main class="tpl-shell-main">
    <%~ include(it.mainTpl, it.mainData || {}) %>
  </main>

  <% if (it.panelTpl) { %>
    <aside class="tpl-shell-panel">
      <%~ include(it.panelTpl, it.panelData || {}) %>
    </aside>
  <% } %>
</div>
`;

/** 单条消息：接收 ThreadMessage */
export const tpl_thread_message = `
<div class="tpl-thread-message <%= it.role === 'user' ? 'is-user' : 'is-assistant' %>" data-role="<%= it.role %>">
  <div class="tpl-thread-bubble"><%~ it.content %></div>
  <% if (it.meta) { %>
    <p class="tpl-thread-meta"><%= it.meta %></p>
  <% } %>
</div>
`;

/** 会话布局：固定头 + 滚动消息区 + 底部输入区 */
export const tpl_thread = `
<div class="tpl-thread">
  <% if (it.headerTpl) { %>
    <header class="tpl-shell-header">
      <%~ include(it.headerTpl, it.headerData || {}) %>
    </header>
  <% } %>

  <div class="tpl-thread-scroll">
    <div class="tpl-thread-stack">
      <% if (it.welcome) { %>
        <div class="tpl-thread-welcome">
          <h1 class="tpl-page-title"><%= it.welcome %></h1>
        </div>
      <% } %>

      <% (it.messages || []).forEach(function(message){ %>
        <%~ include("tpl_thread_message", message) %>
      <% }) %>
    </div>
  </div>

  <% if (it.composer) { %>
    <div class="tpl-thread-composer">
      <div class="tpl-thread-composer-box">
        <div class="tpl-thread-composer-input"
             contenteditable="true"
             role="textbox"
             data-placeholder="<%= it.composerPlaceholder || '输入消息' %>"></div>
        <div class="tpl-thread-composer-actions">
          <button class="vg-btn btn-size-sm" type="button" data-action="attach">
            <i class="vg-icon ic-plus"></i>
          </button>
          <button class="vg-btn btn-size-sm is-end" type="button" data-action="send">
            <i class="vg-icon ic-arrow-up"></i>
          </button>
        </div>
      </div>
    </div>
  <% } %>
</div>
`;
