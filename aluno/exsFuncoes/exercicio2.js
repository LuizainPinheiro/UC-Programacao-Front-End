function concatenar3(palavra1, palavra2, palavra3, separador = " | ") {
    
    let resultado = palavra1 + separador + palavra2 + separador + palavra3;
    
    return resultado;
}

alert(concatenar3("Sol", "Praia", "Mar"));

alert(concatenar3("Ana", "Bia", "Leo", " - "));

alert(concatenar3("Dois", "Um", "Cinco", " * "));