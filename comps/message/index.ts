const createMessage = (text: string, type: string, delay = 3000) => {
    const popup = document.querySelector('#popup') as HTMLDivElement;
    if (!popup) {
        console.warn('Popup container not found');
        return;
    }

    const messageID = `message-${crypto.randomUUID()}`; // 更安全的唯一 ID

    const div = document.createElement('div');
    div.className = `vg-message message-${type}`;
    div.id = messageID;
    div.textContent = text;

    // 可选：添加渐入动画
    div.style.opacity = '0';
    div.style.transition = 'opacity 0.3s ease';

    popup.appendChild(div);

    requestAnimationFrame(() => {
        div.style.opacity = '1';
    });

    setTimeout(() => {
        div.style.opacity = '0';
        div.addEventListener('transitionend', () => {
            div.remove();
        }, { once: true });
    }, delay);
};

const Message = {
    warn: (text: string, delay?: number) => createMessage(text, 'warn', delay),
    error: (text: string, delay?: number) => createMessage(text, 'error', delay),
    success: (text: string, delay?: number) => createMessage(text, 'success', delay),
};

export default Message;
