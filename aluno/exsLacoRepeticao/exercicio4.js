let valorInserido 

do {
    valorInserido= prompt("Insira o número 0 ou 1"); 
    
    if (isNaN(valorInserido)) {
        alert("O valor inserido não é um número.");
    
    } else if (valorInserido != 0 && valorInserido != 1){
        alert("O valor inserido está incorreto. Digite 0 ou 1");
    }

} while (isNaN(valorInserido) || (valorInserido != 0 && valorInserido != 1));


alert("Você digitou um valor válido!");

