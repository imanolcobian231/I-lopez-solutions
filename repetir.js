function repeat(palabra, num) {
        if (num <= 0) {
            return " "
        } else {
            return palabra.repeat(num)
        }
        
}

console.log(repeat("hola", 3)) // "holaholahola"
console.log(repeat("hola", 0)) // ""
console.log(repeat("hola", -1)) // ""