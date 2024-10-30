// 1. Operações matemáticas básicas
let num1 = 10;
let num2 = 5;
console.log("Exercício 1:");
console.log("Considerando o primeiro número igual a 10, e o segundo igual a 5 temos:");
console.log("Soma: " + (num1 + num2));
console.log("Subtração: " + (num1 - num2));
console.log("Multiplicação: " + (num1 * num2));
console.log("Divisão: " + (num1 / num2));
console.log("---------------");

// 2. Números ímpares entre 0 e 100
console.log("Exercício 2:");
console.log("Números ímpares entre 0 e 100.");

for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}
console.log("---------------");

// 3. Quantidade de caracteres da frase
console.log("Exercício 3:");
console.log("Quantidade de caracteres da frase.");
console.log("Frase sugerida - Aula de Web Design");
let texto = "Aula de Web Design";
console.log("Quantidade de caracteres: " + texto.length);
console.log("---------------");

// 4. Transformar nome completo em e-mail
console.log("Exercício 4:");
console.log("E-mail.");
let nomeCompleto = "Vinicius Rodrigues";
let partesNome = nomeCompleto.split(" ");
let primeiroNome = "Vinicius";
let ultimoNome = "Rodrigues";
let email = "@facens.br";
console.log("Considerando o nome completo como Vinicius Rodrigues.");
console.log("Primeiro nome é " + primeiroNome);
console.log("Último nome é " + ultimoNome);
console.log("E-mail sugerido é " + primeiroNome.toLowerCase() + "." + ultimoNome.toLowerCase() + email);
console.log("---------------");

// 5. Imprimir números de 1 a 10 com traço
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
console.log("---------------");

// 6. Função que mostra o dobro ou mensagem de erro
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
console.log("---------------");

// 7. Função que inverte uma string
console.log("Exercício 7:");
console.log("Função que inverte uma string.");
console.log("Considerando a frase - Texto ao contrario");
function inverteString(str) {
  return str.split("").reverse().join("");
}
console.log(inverteString("Texto ao contrario"));
console.log("---------------");

// 8. Função que conta vogais minúsculas
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
console.log("---------------");

// 9. Validação de e-mail
console.log("Exercício 9:");
console.log("Validar de e-mail.");


function validaEmail(email) {
  let temArroba = email.includes('@');
  let temPontoDepoisDoArroba = email.lastIndexOf('.') > email.indexOf('@');
  
  return temArroba && temPontoDepoisDoArroba;
}

console.log("Considerando no primeiro teste - teste@facens.br");
console.log(validaEmail("teste@facens.br")); // Exemplo de e-mail válido
console.log("Considerando no segundo teste - testefacens.br");
console.log(validaEmail("testefacensbr"));   // Exemplo de e-mail inválido
console.log("---------------");

// 10. Verificar se string é palíndromo
console.log("Exercício 10:");
function verificaPalindromo(str) {
  let invertido = str.split("").reverse().join("");
  return str === invertido;
}

console.log("Considerando no primeiro teste - arara");
console.log(verificaPalindromo("arara"));
console.log("Considerando no segundo teste - javascript");
console.log(verificaPalindromo("javascript"));
