let senhaDigitada;

do {
    senhaDigitada = prompt("Digite sua senha:");
    
    if (senhaDigitada != "senha123"){
        alert("A senha inserida está incorreta.");
}

} while (senhaDigitada != "senha123") 

alert("Senha correta! Acesso liberado.")

