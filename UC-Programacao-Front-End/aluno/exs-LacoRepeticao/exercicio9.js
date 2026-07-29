let renda = Number(prompt("Digite a renda familiar:"));
let media = Number(prompt("Digite a média acadêmica:"));

let pontosRenda = 0;
let pontosMedia = 0;

// Pontuação por renda familiar
if (renda <= 2000) {
    pontosRenda = 30;
} else if (renda <= 4000) {
    pontosRenda = 20;
} else {
    pontosRenda = 10;
}

// Pontuação por desempenho acadêmico
if (media <= 6.9) {
    pontosMedia = 5;
} else if (media <= 8.4) {
    pontosMedia = 15;
} else {
    pontosMedia = 25;
}

let pontuacaoTotal = pontosRenda + pontosMedia;
alert(`A pontuação total do estudante é: ${pontuacaoTotal} pontos`);