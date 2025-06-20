const prompt = require('prompt-sync')();

function imcr(peso, altura) {

    let imc = peso / (altura * altura)

    if (imc <= 18.5) {
        return "Su IMC es", imc, "BAJO DE PESO"
    }

    if (imc > 18.5 && imc <= 24.9) {
        return "Su IMC es", imc, "PESO NORMAL"
    }

    if (imc >= 25 && imc <= 29.9) {
        return "Su IMC es", imc, "SOBREPESO"
    }

    if (imc >= 30) {
        return "Su IMC es", imc, "OBESIDAD"
    }

}

console.log(imcr(65, 1.8))
console.log(imcr(72, 1.6))
console.log(imcr(52, 1.75))
console.log(imcr(135, 1.7))

