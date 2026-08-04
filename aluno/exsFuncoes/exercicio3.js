function minutosParaHoras(minutos) {
    let horas = minutos / 60;
    return horas;
}

let minutosDigitados = Number(prompt("Digite os minutos:"));

let tempoEmHoras = minutosParaHoras(minutosDigitados);

alert(minutosDigitados + " minutos equivalem a " + tempoEmHoras + " horas.");