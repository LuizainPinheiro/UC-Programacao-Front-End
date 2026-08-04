let quantidadeMaiores50 = 0;

for (let i = 1; i <= 10; i++) {
    let numero = Number(prompt("Digite o " + i + "º número:"));

    if (numero > 50) {
        quantidadeMaiores50++; 
    }
}

alert("Quantidade de números maiores que 50: " + quantidadeMaiores50);