function encontraMaiorNumero(numeros) {
    let maiorNumero = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
    }
    return maiorNumero;
}
console.log(encontraMaiorNumero([31, 62, 23, 74, 65, 6, 87, 18, 39, 10]));