document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.chat-input input');
    const button = document.querySelector('.chat-input button');
    const messages = document.querySelector('.chat-messages');

    button.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            const message = document.createElement('div');
            message.textContent = input.value;
            messages.appendChild(message);
            input.value = '';
            messages.scrollTop = messages.scrollHeight;
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            button.click();
        }
    });
});
