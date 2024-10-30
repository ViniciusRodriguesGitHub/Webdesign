let aluno = {
    nome: "Vinicius Rodrigues",
    idade: 34,
    curso: "Engenharia da Computação",
    matricula: "249378",
    mostrarInformacoes: function() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Curso: ${this.curso}`);
        console.log(`Matrícula: ${this.matricula}`);
    }
}
aluno.mostrarInformacoes();
