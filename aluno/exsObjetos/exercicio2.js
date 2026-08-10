const aluno = {
    nome: "Luiza",
    idade: 17,
    curso: "ADS",
    notas: [8.0, 7.0, 2.0, 6.5]
}

function mediaNota(notaAluno) {

    let soma = 0;

    for(let i = 0; i < notaAluno.notas.length; i++) {
        soma = soma + notaAluno.notas[i];
    }
    notaAluno.media = soma / notaAluno.notas.length;
}


mediaNota(aluno);

console.log(aluno);