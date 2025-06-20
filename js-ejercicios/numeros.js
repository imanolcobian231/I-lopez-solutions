const prompt = require('prompt-sync')();
let numero = 0;
function rnumero(numero) {

    if(numero <= 999) {
        return numero;
    }
    if(numero >= 1000 && numero <= 999999) {
        return Math.floor(numero/1000) + "K";
    }
    if (numero >= 1000000) {
        return Math.floor(numero/1000000) + "M";
    }
}

console.log(rnumero(983))
console.log(rnumero(1900))
console.log(rnumero(54000))
console.log(rnumero(120800))
console.log(rnumero(2522244465656.5656))

