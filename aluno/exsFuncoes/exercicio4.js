function retornarQuantidadeDeGasolina(distanciaKm, consumoPor100km) {
    let distanciaTotal = distanciaKm * 2; 
    let litrosNecessarios = (distanciaTotal / 100) * consumoPor100km;
    
    return litrosNecessarios;
}

let distancia = Number(prompt("Digite a distância até o destino em km (apenas ida):"));
let consumo = Number(prompt("Digite o consumo médio do carro (litros por 100 km):"));

let gasolinaTotal = retornarQuantidadeDeGasolina(distancia, consumo);

alert("Gasolina necessária: " + gasolinaTotal + " litros.");