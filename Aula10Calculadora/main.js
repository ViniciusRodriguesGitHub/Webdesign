document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector("h2");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent.trim();

            if (value === "") {
                // Limpar o display se o botão de limpar for clicado
                display.textContent = "0";
            } else if (value === "=") {
                try {
                    // Avalia a expressão no display e exibe o resultado
                    display.textContent = eval(display.textContent);
                } catch (error) {
                    display.textContent = "Erro";
                }
            } else if (display.textContent === "0") {
                // Substituir "0" pelo primeiro valor inserido
                display.textContent = value;
            } else {
                // Adicionar o valor do botão ao display
                display.textContent += value;
            }
        });
    });
});
