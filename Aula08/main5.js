console.log("Exercício 5:");
console.log("Imprimir números de 1 a 10 com traço.");
let resultado = "";
for (let i = 1; i <= 10; i++) {
  resultado += i;
  if (i < 10) {
    resultado += " - ";
  }
}
console.log(resultado);