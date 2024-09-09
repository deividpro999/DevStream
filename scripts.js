// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar evento de clique nas miniaturas
    const thumbnails = document.querySelectorAll('.stream-thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const username = thumbnail.querySelector('p').textContent;
            alert(`Iniciando transmissão de ${username}`);
            // Aqui você pode adicionar a lógica para exibir detalhes ou iniciar a transmissão
        });
    });

    // Atualizar a lista de transmissões
    const updateButton = document.getElementById('update-streams');
    const streamGrid = document.querySelector('.stream-grid');

    updateButton.addEventListener('click', () => {
        // Lógica para adicionar novas miniaturas
        const newThumbnail = document.createElement('div');
        newThumbnail.classList.add('stream-thumbnail');
        newThumbnail.innerHTML = `
            <img src="path/to/new-image.jpg" alt="New Stream">
            <p>Nome do usuário Novo</p>
        `;
        streamGrid.appendChild(newThumbnail);
    });
});
