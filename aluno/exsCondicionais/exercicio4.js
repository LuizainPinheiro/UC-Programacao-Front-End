let experiencia = Number(prompt("Digite os anos de experiência:"));
let formacao = prompt("Digite a formação (graduacao, especializacao, mestrado, doutorado):");

let pontosExperiencia = 0;
let pontosFormacao = 0;

// Pontuação por experiência
if (experiencia >= 5) {
    pontosExperiencia = 20;
} else {
    pontosExperiencia = 10;
}

// Pontuação por formação
if (formacao === "graduacao") {
    pontosFormacao = 10;
} else if (formacao === "especializacao") {
    pontosFormacao = 20;
} else if (formacao === "mestrado") {
    pontosFormacao = 30;
} else if (formacao === "doutorado") {
    pontosFormacao = 40;
} else {
    alert("Formação inválida!");
}

let pontuacaoTotal = pontosExperiencia + pontosFormacao;
alert(`Pontuação total do candidato: ${pontuacaoTotal} pontos`);
