console.log("Exercício 9:");
console.log("Validar de e-mail.");


function validaEmail(email) {
  let temArroba = email.includes('@');
  let temPontoDepoisDoArroba = email.lastIndexOf('.') > email.indexOf('@');
  
  return temArroba && temPontoDepoisDoArroba;
}

console.log("Considerando no primeiro teste - teste@facens.br");
console.log(validaEmail("teste@facens.br"));
console.log("Considerando no segundo teste - testefacens.br");
console.log(validaEmail("testefacensbr"));