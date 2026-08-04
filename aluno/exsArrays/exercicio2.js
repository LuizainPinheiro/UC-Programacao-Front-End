function filtrarNumeros(array) {
    let numeros = [];

    for (let item of array) {
        // Verifica se o item é do tipo número
        if (typeof item === "number") {
           numeros.push(item);
        }
    }

    return numeros;
}

let dadosMisturados = ["Luiza", 10, true, 25, "Front-end", 42];
let resultado = filtrarNumeros(dadosMisturados);

alert("Apenas os números: " + resultado); 