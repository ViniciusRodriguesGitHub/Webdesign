function tocaCoin() {
    playSound('som/Coin mario.wav');
}

function playSound(src) {
    const audio = new Audio(src);
    audio.play();
}
function alterarImagem() {
    const imagem = document.querySelector("img");
    imagem.src = imagem.src.includes("img/dog.jpeg") ? "img/cat.jpeg" : "img/dog.jpeg";
}
function alterarTitulo() {
    const h1 = document.querySelector("h1");
    h1.innerText = "Meu novo título";
}
function fToggle() {
    const botoes = document.querySelectorAll(".altera");
    botoes.forEach((botao) => {
        botao.classList.toggle("myButton");
    });
}
function paragrafo() {
    const paragrafo = document.querySelector("p");
    paragrafo.style.color = "blue";
}
