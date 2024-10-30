console.log(UnirNome("Vinicius Jose Rodrigues"));
function UnirNome(NomeCompleto) {
    let partesNome = NomeCompleto.split(" ");
    let primeiroNome = partesNome[0];
    let ultimoNome = partesNome[partesNome.length - 1];
    return primeiroNome + " " + ultimoNome;
}
