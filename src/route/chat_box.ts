import { chat_message_box_html } from "../views/chat_message_box.ts";
// 聊天对话，信息输入框
export const chat_message_box = (root: HTMLElement) => {
    // let app = document
    root.innerHTML = chat_message_box_html;
    const chat_input = root.querySelector(".chat-message-box-input textarea") as HTMLTextAreaElement;
    chat_input.addEventListener("input", (event: any) => {
        const textarea = event.target as HTMLTextAreaElement;
        check_autoResize(textarea);
        checkLength(textarea)
    });
}

//  输入框尺寸的自动变化
const check_autoResize = (node: HTMLTextAreaElement) => {
    if (!node) return; // 安全检查，防止 null
    node.style.height = "auto"; // 重置高度
    node.style.height = Math.min(node.scrollHeight, 300) + "px"; // 自适应高度，最大 300px
}

// 检查字符数并更新边框
const checkLength = (node: HTMLTextAreaElement) => {
    if (node.value.length > 1000) {
        node.value = node.value.slice(0, 1000); // 截断到 1000 字
        node.classList.add("overflow-limit"); // 超过 1000 字，添加类
    } else {
        node.classList.remove("overflow-limit"); // 小于 1000 字，移除类
    }
};
