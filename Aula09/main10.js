let aluno1 = {
    nome: "Vinicius Rodrigues",
    idade: 34,
    curso: "Engenharia da Computação",
    matricula: "249378",
}
let aluno2 = {
    nome: "Pedro Silva",
    idade: 17,
    curso: "Engenharia da Computação",
    matricula: "249379",
}

function alunosMaior(arrayAlunos) {
    let alunosMaiores = [];
    for (let i = 0; i < arrayAlunos.length; i++) {
        if (arrayAlunos[i].idade > 18) {
            alunosMaiores.push(arrayAlunos[i]);
        }
    }
    return alunosMaiores;
}
console.log(alunosMaior([aluno1, aluno2]));  

