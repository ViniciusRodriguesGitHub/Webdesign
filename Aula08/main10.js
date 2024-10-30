console.log("Exercício 10:");
function verificaPalindromo(str) {
  let invertido = str.split("").reverse().join("");
  return str === invertido;
}

console.log("Considerando no primeiro teste - arara");
console.log(verificaPalindromo("arara"));
console.log("Considerando no segundo teste - javascript");
console.log(verificaPalindromo("javascript"));