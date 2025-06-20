function convertTemperature(temp1, temp2, grados) {
    let conversion 
    if (temp1 === "c" && temp2 === "f") {
        conversion = (grados*9/5) + 32
        return conversion
    } 
     if (temp1 === "f" && temp2 === "c") {
        conversion = (grados-32)*5/9
        return conversion
    } else if (temp1 === "c" && temp2 === "k") {
        conversion = grados + 273.15
        return conversion
    } else if (temp1 === "k" && temp2 === "c") {
        conversion = grados - 273.15
        return conversion
    } else if (temp1 === "f" && temp2 === "k") {
        conversion = (grados-32)*5/9+273.15
        return conversion
    } else if (temp1 === "k" && temp2 === "f") {
        conversion = (grados-273.15)*9/5+32
        return conversion
    } else {
        return grados
    }     
}


console.log(convertTemperature("c", "c", 0)) // 0
console.log(convertTemperature("c", "f", 0)) // 32
console.log(convertTemperature("c", "k", 0)) // 273.15
console.log(convertTemperature("f", "c", 32)) // 0
console.log(convertTemperature("f", "f", 32)) // 32
console.log(convertTemperature("f", "k", 32)) // 273.15
console.log(convertTemperature("k", "c", 273.15)) // 0
console.log(convertTemperature("k", "f", 273.15)) // 32
console.log(convertTemperature("k", "k", 273.15)) // 273.15
   