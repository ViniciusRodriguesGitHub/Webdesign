let produto = {
    nome: "Computador",
    preco: 2500,
    quantidade: 5,
    calcularTotal: function() {
        return this.preco * this.quantidade;
    }
};
console.log(produto.calcularTotal());
