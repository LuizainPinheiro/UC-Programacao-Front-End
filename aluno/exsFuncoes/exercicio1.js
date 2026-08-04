function encontrarMaior(num1, num2, num3) {
    let maior;

    if (num1 >= num2 && num1 >= num3) {
        maior = num1;
    } 
    else if (num2 >= num1 && num2 >= num3) {
        maior = num2;
    } 
    else {
        maior = num3;
    }

    alert("O maior número é: " + maior);
}

let primeiroNumero = Number(prompt("Digite o primeiro número:"));
let segundoNumero = Number(prompt("Digite o segundo número:"));
let terceiroNumero = Number(prompt("Digite o terceiro número:"));

encontrarMaior(primeiroNumero, segundoNumero, terceiroNumero);