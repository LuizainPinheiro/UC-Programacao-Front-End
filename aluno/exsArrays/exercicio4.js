function gerarTextoCompras(itens) {
    
    return itens.join(", ");
}

let compras = ["Arroz", "Feijão", "Macarrão", "Leite"];
let listaVirgula = gerarTextoCompras(compras);

console.log(listaVirgula);
