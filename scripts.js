// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.stream-thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const username = thumbnail.querySelector('p').textContent;
            alert(`Iniciando transmissão de ${username}`);
            // Aqui você pode adicionar a lógica para exibir detalhes ou iniciar a transmissão
        });
    });
});
