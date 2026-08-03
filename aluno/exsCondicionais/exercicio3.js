const salarioMinimo = 1518; 
const rendaMinima = salarioMinimo * 2;

let idade = Number(prompt("Digite sua idade:"));
let renda = Number(prompt("Digite sua renda mensal:"));

if (idade >= 18 && renda >= rendaMinima) {
    alert("Você está apto para realizar o consórcio.");
} else {
    alert("Você NÃO está apto para realizar o consórcio.");
}