function countVowels(palabra) {
    let nump = palabra.match(/[aeiouáéíóú]/gi);
    let num = nump.length ?? 0
    return num
}

console.log(countVowels("hola")) // 2
console.log(countVowels("hello")) // 2
console.log(countVowels("hey")) // 1
console.log(countVowels("h")) // 0x