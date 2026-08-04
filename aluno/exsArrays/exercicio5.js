function gerarTextoCompras(formato, itens) {
    if (formato === "texto") {
        return itens.join(", ");
    } else if (formato === "lista") {
        return "• " + itens.join("\n• ");
    }
}

let compras = ["Arroz", "Feijão", "Macarrão", "Leite"];


let listaVirgula = gerarTextoCompras("texto", compras);
console.log(listaVirgula);


let listaEmLinhas = gerarTextoCompras("lista", compras);
console.log(listaEmLinhas);
