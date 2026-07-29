let idade = Number(prompt("Digite sua idade:"));
let renda = Number(prompt("Digite sua renda mensal:"));

if (idade >= 21 && renda >= 3000) {
    alert("Você está apto para o financiamento!");
} else {
    alert("Você NÃO está apto para o financiamento.");
}