function reverseNumber(num) {
    let numr
    if (num.toString()[0] == "-" ) {
        let numn = num.toString().slice(1)
        numn = numn.toString().split('').reverse().join('')
        numr = "-" + numn
        return numr
    } else {
        numr = num.toString().split('').reverse().join('')
        return numr
    }
    

}

console.log(reverseNumber(1234))   // 4321
console.log(reverseNumber(-567))   // -765
console.log(reverseNumber(1000))   // 1
console.log(reverseNumber(0))      // 0