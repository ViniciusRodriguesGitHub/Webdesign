// Ação para mostrar a curiosidade ao clicar no botão
document.getElementById('revealFact').addEventListener('click', function() {
    var factElement = document.getElementById('fact');
    if (factElement.style.display === 'none') {
        factElement.style.display = 'block';
    } else {
        factElement.style.display = 'none';
    }
});
