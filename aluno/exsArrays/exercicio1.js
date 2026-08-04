let pessoas = ["Luiza", "Bruna", "Kauana"];

// Adiciona uma pessoa no final da lista
pessoas.push("Lucas");

// Exibe cada pessoa
for (let i = 0; i < pessoas.length; i++) {
    alert("Pessoa " + (i + 1) + ": " + pessoas[i]);
}

// Remove a primeira pessoa
let pessoaRemovida = pessoas.shift();

alert("Pessoa removida do início: " + pessoaRemovida);
alert("Lista atualizada: " + pessoas);