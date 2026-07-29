let senhaCorreta = "senha123";

let senhaDigitada = prompt("Digite sua senha:");

if (senhaDigitada === senhaCorreta) {
    alert("Senha correta! Acesso liberado.");
} else {
    alert("Senha incorreta! Acesso negado.");
}
