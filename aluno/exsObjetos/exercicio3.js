const carro = {
    nome: "Onix",
    cor: "Preto",
    modelo: "Hatch",
    opcionais: {
        arCondicionado: true,
        direcaoEletrica: true,
        multimidia: false
    }
};

function detalhesCarro(carro){
      console.log("Carro: " + carro.nome + " | Cor: " + carro.cor +  " | Modelo: " + carro.modelo);
      console.log("Opcionais - Ar Condicionado: " + carro.opcionais.arCondicionado + " | Direção Eletrica: " + carro.opcionais.direcaoEletrica + " | Multimidia: " + carro.opcionais.multimidia);
}

function alterarOpcional(carro, opcional, possui) {
    carro.opcionais[opcional] = possui;
}


detalhesCarro(carro);

console.log("\n Alterando o opcional");

alterarOpcional(carro, "multimidia", true);

alterarOpcional(carro, "tetoSolar", true);

console.log(carro.opcionais);

