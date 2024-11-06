// script.js

// Seleciona o elemento da bola
const bola = document.querySelector('.bola');

// Variáveis para controlar o arraste
let isDragging = false;
let offsetX, offsetY;

// Função para iniciar o arraste
bola.addEventListener('mousedown', (e) => {
    isDragging = true;
    bola.style.cursor = 'grabbing';
    
    // Calcula o offset para o arraste suave
    offsetX = e.clientX - bola.offsetLeft;
    offsetY = e.clientY - bola.offsetTop;
});

// Função para mover a bola
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        // Atualiza a posição da bola com base no mouse
        bola.style.left = `${e.clientX - offsetX}px`;
        bola.style.top = `${e.clientY - offsetY}px`;
    }
});

// Função para soltar a bola
document.addEventListener('mouseup', () => {
    isDragging = false;
    bola.style.cursor = 'grab';
});
