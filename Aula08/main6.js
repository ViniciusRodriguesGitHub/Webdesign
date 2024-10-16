console.log("Exercício 6:");
console.log("Função que mostra o dobro ou mensagem de erro.");
function mostraDobro(numero) {
  if (numero <= 0) {
    console.log("Só é aceito números positivos maiores que zero");
  } else {
    console.log("O dobro é: " + (numero * 2));
  }
}
console.log("teste com o número 5");
mostraDobro(5);
console.log("teste com o número -1");
mostraDobro(-1);