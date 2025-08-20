// cartaz_agricultura.js
// Exemplo: animação simples nos cards ao clicar

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card').forEach(function(card) {
        card.addEventListener('click', function() {
            card.classList.toggle('ativo');
        });
    });
});
