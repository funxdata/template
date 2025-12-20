import type { Tpl } from "@funxdata/pages/tplstype";
import { docs_html } from "../views/docs.ts"
import { aside_html } from "../views/aside.ts"
import { aside_info } from "../data/aside.ts"
// deno-lint-ignore no-explicit-any
const TplToHtml = (globalThis as any)["TplToHtml"] as Tpl;
// // deno-lint-ignore no-explicit-any
// const GlobalPagesRouter = (globalThis as any)["GlobalPagesRouter"] as PagesRouterInfo;

// const app_main = document.getElementById("app") as HTMLElement;
// app_main.innerHTML = main_pages;
export const init_docs = () => {
    const container_node = document.querySelector(".main-containers") as HTMLElement;
    console.log(container_node)
    container_node.innerHTML = docs_html;
    const aside_node = container_node.querySelector("#asides") as HTMLElement;
    init_aside(aside_node);
}

// 初始化侧边栏
const init_aside = async (root: HTMLElement) => {
    root.innerHTML = await TplToHtml.renderString(aside_html, { "tabledata": aside_info });
}

init_docs();