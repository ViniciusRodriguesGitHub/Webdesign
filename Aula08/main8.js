console.log("Exercício 8:");
console.log("Função que conta vogais minúsculas:");
console.log("Considerando a palavra Ariranha:");
function contaVogais(str) {
  let vogais = 'aeiou';
  let contador = 0;
  for (let letra of str) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }
  return contador;
}
console.log(contaVogais("Ariranha"));