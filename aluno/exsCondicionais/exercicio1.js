let min = 23;
let max = 57;
let numeroConvertido; // undefined

let valorInserido = prompt("Insira um número"); // 10 -> "10"

numeroConvertido = Number(valorInserido); // "Dois" -> NaN, mas é do tipo Number

if (Number.isNaN(numeroConvertido)) {
    alert("O valor inserido não pode ser convertido em número");
    alert(typeof numeroConvertido);
} else {
    alert("O valor inserido foi convertido com sucesso!");
    alert(typeof numeroConvertido);

    if (numeroConvertido > min && numeroConvertido < max) {
        alert(`O número inserido está entre ${min} e ${max}.`);
    } else {
        alert(`O número inserido NÃO está entre ${min} e ${max}.`);
    }
}