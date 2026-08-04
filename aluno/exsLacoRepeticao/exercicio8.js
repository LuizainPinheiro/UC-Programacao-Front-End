let soma = 0;

for (let i = 1; i <= 10; i++) {
    let peso = prompt("Digite o peso da pessoa " + i + ":");
    soma = soma + Number(peso);
}

let media = soma / 10;

alert("A média dos pesos é: " + media);