function adicionarPedido(pedidos, novoCodigo) {
    // Se tiver mais de 10, remove o primeiro
    if (pedidos.length >= 10) {
        pedidos.shift();
    }
    
    // Adiciona o novo pedido no final
    pedidos.push(novoCodigo);
    return pedidos;
}

let historico = ["0001", "0002", "0003", "0004", "0005", "0006",
     "0007", "0008", "0009", "0010"];
adicionarPedido(historico, "0011");

alert(historico); 