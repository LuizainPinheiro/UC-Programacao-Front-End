let maiorNumero = -Infinity; 

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt("Digite o número " + i + " de 5:"));

    
    if (numero > maiorNumero) {
        maiorNumero = numero; 
    }
}

alert("O maior número digitado foi: " + maiorNumero);