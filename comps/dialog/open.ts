import type { Tpl } from "@funxdata/pages/tplstype";
import { tpl_dialog_alert, tpl_dialog_confirm, tpl_dialog_form } from "./extra.ts";

// deno-lint-ignore no-explicit-any
const TplToHtml = (globalThis as any)["TplToHtml"] as Tpl;

export type DialogField = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  accept?: string;
};

export type DialogOptions = {
  /**
   * 对话框类型：
   * - alert：仅提示
   * - confirm：确认/取消（默认）
   * - form：表单（fields 非空时自动使用）
   */
  kind?: "alert" | "confirm" | "form";
  title?: string;
  message?: string;
  /** 表单字段；为空时按 confirm 渲染 */
  fields?: DialogField[];
  confirmText?: string;
  cancelText?: string;
  /** 危险操作：确认按钮使用错误色 */
  danger?: boolean;
  /** 是否点击遮罩关闭，默认 true */
  closeOnMask?: boolean;
};

export type DialogResult =
  | { confirmed: true; values: Record<string, string> }
  | { confirmed: false; values: Record<string, string> };

/**
 * 打开对话框并等待用户操作。
 *
 * ```ts
 * const result = await openDialog(popup, {
 *   title: "重命名",
 *   fields: [{ name: "name", value: "旧名称" }],
 * });
 * if (result.confirmed) console.log(result.values.name);
 * ```
 */
export const openDialog = async (
  node: HTMLElement,
  options: DialogOptions,
): Promise<DialogResult> => {
  const hasFields = Array.isArray(options.fields) && options.fields.length > 0;
  const kind = options.kind ?? (hasFields ? "form" : "confirm");

  const template = kind === "form"
    ? tpl_dialog_form
    : kind === "alert"
    ? tpl_dialog_alert
    : tpl_dialog_confirm;

  node.innerHTML = await TplToHtml.renderString(template, {
    ...options,
    fields: options.fields ?? [],
  });

  const dialog = node.querySelector<HTMLElement>("[data-dialog]");

  return await new Promise<DialogResult>((resolve) => {
    const readValues = (): Record<string, string> => {
      const values: Record<string, string> = {};
      node.querySelectorAll<HTMLElement>("[data-field]").forEach((field) => {
        const key = field.dataset.field as string;
        const input = field.querySelector("input");
        if (key && input) values[key] = input.value;
      });
      return values;
    };

    const close = (confirmed: boolean) => {
      document.removeEventListener("keydown", onKeydown);
      const values = readValues();
      node.innerHTML = "";
      resolve({ confirmed, values } as DialogResult);
    };

    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close(false);
    };

    node.querySelectorAll<HTMLElement>("[data-dialog-action]").forEach((btn) => {
      btn.addEventListener("click", () => {
        close(btn.dataset.dialogAction === "confirm");
      });
    });

    if (options.closeOnMask !== false && dialog) {
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) close(false);
      });
    }

    document.addEventListener("keydown", onKeydown);

    // 表单场景聚焦第一个输入
    const firstInput = node.querySelector<HTMLInputElement>("[data-field] input");
    firstInput?.focus();
    firstInput?.select();
  });
};
