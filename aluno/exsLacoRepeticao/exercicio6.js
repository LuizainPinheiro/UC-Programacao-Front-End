let contador = 1;
let maiorNumero = -Infinity; 

do {
    let numero = Number(prompt("Digite o número " + contador + " de 5:"));

    if (numero > maiorNumero) {
        maiorNumero = numero;
    }

    contador++; 

} while (contador <= 5); 

alert("O maior número digitado foi: " + maiorNumero);