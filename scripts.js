document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.querySelector('.chat-messages');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita o envio padrão do formulário

        const messageText = messageInput.value.trim();
        if (messageText) {
            const messageElement = document.createElement('div');
            messageElement.textContent = messageText;
            chatMessages.appendChild(messageElement);
            messageInput.value = '';

            // Rola para baixo a caixa de mensagens para mostrar a nova mensagem
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
});
