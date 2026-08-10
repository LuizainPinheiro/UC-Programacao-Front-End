const produtos_vendas = {
	cafes: [
		{
			sku: 7654,
			marca: "Povo Brasileiro",
			preco: 24.00,
			categoria: "Mercearia"
		},
		{
			sku: 8765,
			marca: "Soberano - Gourmet",
			preco: 29.00,
			categoria: "Mercearia",
		},
		{
			sku: 3467,
			marca: "Dose Certa",
			preco: 27.00,
			categoria: "Mercearia"
		}
	]	
}

const produtos_estoque = {
	cafes: [
		{
			sku: 3467,
			peso: 500.00,
			unidade: "mg",
			estoque: 101
		},
		{
			sku: 7654,
			peso: 250.00,
			unidade: "mg",
			estoque: 182
		},
		{
			sku: 8765,
			peso: 250.00,
			unidade: "mg",
			estoque: 46
		}
	]
}

const produtosConsolidados = [];

for (let i = 0; i < produtos_vendas.cafes.length; i++) {
    
    let produtoVenda = produtos_vendas.cafes[i];

    let produtoCompleto = {
        sku: produtoVenda.sku,
        marca: produtoVenda.marca,
        preco: produtoVenda.preco,
        categoria: produtoVenda.categoria
    };

    for (let j = 0; j < produtos_estoque.cafes.length; j++) {
        
        let produtoEstoque = produtos_estoque.cafes[j];

        if (produtoEstoque.sku === produtoVenda.sku) {

            produtoCompleto.peso = produtoEstoque.peso;
            produtoCompleto.unidade = produtoEstoque.unidade;
            produtoCompleto.estoque = produtoEstoque.estoque;
            
        }
    }
    produtosConsolidados.push(produtoCompleto);
}

console.log(produtosConsolidados);