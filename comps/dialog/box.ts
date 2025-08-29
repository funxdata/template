import type { dialogtpl, Callback, DialogBox as DialogBoxType } from "./type.ts";
import { dialog } from "./tpl.ts";
import type { Tpl } from "@funxdata/pages/tplstype";
import { message } from "../message/index.ts"

// deno-lint-ignore no-explicit-any
const TplToHtml = (globalThis as any)["TplToHtml"] as Tpl;

export const DialogBox: DialogBoxType = async (
  node: HTMLElement,
  cfg_data: dialogtpl,
  sure_cb: Callback,
  change_cb: Callback | null
) => {
  try {
    node.innerHTML = await TplToHtml.renderString(dialog, cfg_data);

    const input = node.querySelector<HTMLInputElement>("input");
    const cancel_btn = node.querySelector<HTMLButtonElement>("#cancel");
    const sure_btn = node.querySelector<HTMLButtonElement>("#sure");

    if (!input || !cancel_btn || !sure_btn) {
      message.error("Dialog template is missing required elements.");
      return;
    }

    // 初始化
    sure_btn.disabled = true;
    
    input.addEventListener("input", () => {
      const valueChanged = input.value !== cfg_data.value;
      sure_btn.disabled = !valueChanged;
      change_cb?.(input.value);
    });

    sure_btn.addEventListener("click", () => {
      sure_cb(input.value);
      node.innerHTML = ""; // 关闭对话框
    });

    cancel_btn.addEventListener("click", () => {
      node.innerHTML = ""; // 只是关闭，不触发 sure_cb
    });
  } catch (err: unknown) {
    message.error(`Failed to render dialog:${err}`);
  }
};