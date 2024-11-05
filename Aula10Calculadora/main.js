document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector("h2");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent.trim();

            if (value === "") {
                display.textContent = "0";
            } else if (value === "=") {
                try {
                    display.textContent = eval(display.textContent);
                } catch (error) {
                    display.textContent = "Erro";
                }
            } else if (display.textContent === "0") {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        });
    });
});
