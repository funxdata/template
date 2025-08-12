import { selecttpl } from "./tpl.ts"
import type { selecttpltype,select_option_type,callback } from "./types.ts"
import type { Tpl } from "@funxdata/pages/tplstype";
// deno-lint-ignore no-explicit-any
const TplToHtml = (globalThis as any)["TplToHtml"] as Tpl;
export const select_option:select_option_type = async (node:HTMLElement,cfg_data:selecttpltype,cb:callback)=>{
    node.innerHTML = await TplToHtml.renderString(selecttpl,cfg_data)
    const content =   node.querySelector(".select-content")  as HTMLElement;
    const select_btn = node.querySelector(".select_title") as HTMLElement;
    const title_p = select_btn.querySelector("p") as HTMLElement;
    const title_i = select_btn.querySelector("i") as HTMLElement;
    const select_items = content.querySelectorAll(".vg-dropdowns-li") as unknown as [HTMLElement];
    select_btn.onclick= ()=>{
        content.classList.toggle("hide");
        title_i.classList.toggle("ic-down");
        title_i.classList.toggle("ic-up");
    }
    // 绑定事件
    for (let index = 0; index < select_items.length; index++) {
        const select_item = select_items[index];
        select_item.onclick = ()=>{
            const uuid = select_item.dataset.uuid as string;
            title_p.innerText = select_item.innerText;
            title_i.classList.toggle("ic-down");
            title_i.classList.toggle("ic-up");
            content.classList.toggle("hide");
            cb(uuid)
        }
    }
}