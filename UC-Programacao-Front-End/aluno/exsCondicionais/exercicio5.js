let nota = Number(prompt("Digite a nota:"));

if (Number.isNaN(nota)) {
    alert("Valor inválido.");
} else if (nota >= 7.0 && nota <= 10.0) {
    alert(`A nota ${nota} está entre 7.0 e 10.0. Aprovado!`);
} else {
    alert(`A nota ${nota} NÃO está entre 7.0 e 10.0.`);
}