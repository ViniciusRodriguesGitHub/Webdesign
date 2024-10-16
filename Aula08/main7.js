console.log("Exercício 7:");
console.log("Função que inverte uma string.");
console.log("Considerando a frase - Texto ao contrario");
function inverteString(str) {
  return str.split("").reverse().join("");
}
console.log(inverteString("Texto ao contrario"));