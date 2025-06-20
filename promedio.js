function promedior(...numeros) {
    let suma = 0
    for (let i=0;i<numeros.length ; i++){
        suma += numeros[i]
    }
    let promedio = suma/numeros.length
    return promedio
}

console.log(promedior(7,10,9))