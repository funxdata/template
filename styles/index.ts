/**
 * template 与 stylesheet/styles 的绑定声明
 * ------------------------------------------------------------------
 * template 只负责页面结构与交互，视觉全部来自 styles：
 *   - token：styles/light/color.css（--primary / --neutral / --surface…）
 *   - 结构层：styles/template.css（tpl-* 页面骨架，template 自带）
 *   - 控件层：vango 发布产物（vg-*、btn-*、vg-icon…）
 *
 * 发布到 CDN 后使用 `css-manage<version>.css`，本地开发直接引用上面的源文件。
 */

export type StyleSource = {
  /** 样式来源（仓库内路径或 CDN） */
  source: string;
  /** 该来源负责的类前缀 */
  prefixes: string[];
  /** 说明 */
  note?: string;
};

export const templateStyleSources: StyleSource[] = [
  {
    source: "stylesheet/styles/light/color.css",
    prefixes: ["--primary", "--secondary", "--accent", "--neutral", "--success", "--warning", "--error", "--background", "--surface"],
    note: "主题 token，light/dark 共用同一组变量名",
  },
  {
    source: "stylesheet/styles/light/fonts.css",
    prefixes: ["--font-size-*", "h1-h6", ".my-text-*"],
    note: "字号 token",
  },
  {
    source: "template/styles/template.css",
    prefixes: ["tpl-"],
    note: "template 页面骨架（壳/页头/工具栏/卡片/设置列表）",
  },
  {
    source: "https://static.funxdata.com/release/css/css-manage<version>.css",
    prefixes: ["vg-", "btn-", "color-", "font-size-", "prow-", "pcol-", "row", "rowcolumn", "flex1"],
    note: "vango 控件与原子类，由 history_ui/vango-ui 的 less 构建后发布",
  },
  {
    source: "https://static.funxdata.com/release/font<date>/icons.css",
    prefixes: ["ic-", "vg-icon"],
    note: "字体图标；按约定不主动更新",
  },
];

/** 当前 template 需要注入的样式表 */
export const templateStyleSheets = {
  /** 本地开发：template 自带的结构样式（token 由 styles 提供） */
  local: ["./styles/template.css"],
  /** 线上：vango 控件与图标；结构样式见 tplProduction */
  cdn: [
    "https://static.funxdata.com/release/css/css-manage33031.css",
    "https://static.funxdata.com/release/font20250304/icons.css",
  ],
  /**
   * tpl-* 结构样式的线上产物：
   * `deno task pack ./styles/template.css` 生成，按发布版本取实际文件名。
   */
  tplProduction: {
    entry: "styles/template.css",
    output: "template_template_<version>.css",
  },
};

export type BindStyleOptions = {
  /** true 注入本地源文件，false 注入 CDN；默认 true */
  local?: boolean;
  /** 追加的自定义样式表 */
  extra?: string[];
};

/**
 * 注入 template 所需样式，按 data-tpl-style 去重。
 * 在 template 入口（src/app.ts）调用一次即可。
 */
export const bindTemplateStyles = (
  options: BindStyleOptions = {},
  doc: Document = document,
): void => {
  const hrefs = [
    ...(options.local === false ? templateStyleSheets.cdn : templateStyleSheets.local),
    ...(options.extra ?? []),
  ];

  for (const href of hrefs) {
    if (doc.querySelector(`link[data-tpl-style="${href}"]`)) continue;
    const link = doc.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.dataset.tplStyle = href;
    doc.head.appendChild(link);
  }
};
