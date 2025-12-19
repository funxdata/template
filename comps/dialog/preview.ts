import type { DialogPreview as DialogPreviewType } from "./type.ts";
import { dialog_preview } from "./tpl.ts";
import type { Tpl } from "@funxdata/pages/tplstype";
// deno-lint-ignore no-explicit-any
const TplToHtml = (globalThis as any)["TplToHtml"] as Tpl;
export const DialogPreview:DialogPreviewType = async (node:HTMLImageElement)=>{
    const popup = document.getElementById("popup") as HTMLElement;
    popup.innerHTML = await TplToHtml.renderString(dialog_preview,{url:node.src});
    const close_btn = popup.querySelector("#cancel") as HTMLElement;
    close_btn.onclick = ()=>{
        popup.innerHTML = "";
    }
}