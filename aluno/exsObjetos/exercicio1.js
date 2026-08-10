const produto1 = {
    nome: "Pão de forma",
    preco: 9,
    categoria: "Pães"
}
 const produto2 = {
    nome: "Leite de soja", 
    preco: 7,
    categoria: "Laticinios"
 }


function valorMaior(p1, p2) {
    if(p1.preco > p2.preco){
        console.log("O produto mais caro é " + p1.nome + " - Categoria: "+ p1.categoria + " - Valor R$" + p1.preco);
    } else if (p2.preco > p1.preco) {
        console.log("O produto mais caro é " + p2.nome + " - Categoria: "+ p2.categoria + " - Valor R$" + p2.preco);
    } else {
        console.log("Os produtos " + p1.nome + " e " + p2.nome + " têm o mesmo preço: R$" + p1.preco);
    }
}

valorMaior(produto1, produto2);

