document.addEventListener('DOMContentLoaded', function() {
    // Exemplo: Adicionar funcionalidade de clique em miniaturas
    const thumbnails = document.querySelectorAll('.stream-thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            alert(`You clicked on ${this.querySelector('p').textContent}`);
        });
    });
});
