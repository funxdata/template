import type { Tpl } from "@funxdata/pages/tplstype";

import { bindTemplateStyles } from "@/styles/index.ts";
import { app_tpl } from "@/template/app/index.ts";
import { aside, pageMap, pages } from "./demo.ts";
import { registerTemplates } from "./templates.ts";

// 注入 template 需要的样式（默认指向 stylesheet 仓库内的源文件）
bindTemplateStyles();

// deno-lint-ignore no-explicit-any
const TplToHtml = (globalThis as any)["TplToHtml"] as Tpl;

if (!TplToHtml) {
  console.error("[template] TplToHtml 未注入，请确认 index.html 已加载 pages 运行时");
} else {
  registerTemplates(TplToHtml);

  const app = document.getElementById("app") as HTMLElement;

  const render = async (): Promise<void> => {
    const key = location.hash.replace("#", "") || "material";
    const page = pageMap[key] ?? "material_tpl";

    const items = aside.items.map((item) => ({
      ...item,
      active: item.href === `#${key}`,
    }));

    const html = await TplToHtml.renderStringAsync(app_tpl, {
      aside: { ...aside, items },
      page,
      pageData: pages[page] ?? {},
    });

    app.innerHTML = html;
  };

  // 事件委托：卡片菜单、页面按钮
  const bindEvents = (): void => {
    app?.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const action = target.closest<HTMLElement>("[data-action]");
      if (!action) return;

      const key = action.dataset.action;

      // 卡片右上角更多菜单
      if (key === "menu") {
        const dropdown = action.closest(".vg-dropdowns");
        const content = dropdown?.querySelector(".vg-dropdowns-content");
        content?.classList.toggle("hide");
        event.stopPropagation();
        return;
      }

      // 其余操作交给业务接入
      console.log("[template] action:", key, action.dataset);
    });

    document.addEventListener("click", (event) => {
      if ((event.target as HTMLElement).closest(".vg-dropdowns")) return;
      document
        .querySelectorAll(".vg-dropdowns-content.hide")
        .forEach((el) => el.classList.remove("hide"));
    });
  };

  void render();
  bindEvents();
  window.addEventListener("hashchange", () => void render());
}
