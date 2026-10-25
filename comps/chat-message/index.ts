import { uuidv4 } from "../utils/uuid.ts"
const createMessage = (text: string, type: string, delay = 3000) => {
    const popup = document.querySelector('#message-dialog') as HTMLDivElement;
    if (!popup) {
        console.warn('Popup container not found');
        return;
    }

    const messageID = `message-${uuidv4()}`; // 更安全的唯一 ID

    const div = document.createElement('div');
    div.className = `vg-message message-${type}`;
    div.id = messageID;
    div.textContent = text;

    // 不加淡入淡出，直接插入
    popup.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, delay);
};

export const message = {
  success: (text: string, delay?: number): void => createMessage(text, 'success', delay),
  error: (text: string, delay?: number): void => createMessage(text, 'error', delay),
  info: (text: string, delay?: number): void => createMessage(text, 'info', delay),
};
