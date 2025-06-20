function factorial(num) {
    if (num == 0) {
        return 1
    } else {
        let fac = 1
        for (let i = 1; i <= num; i++) {
            fac *= i
        }
        return fac
    }
}

console.log(factorial(5))  // 120
console.log(factorial(0))  // 1
console.log(factorial(1))  // 1
console.log(factorial(2))  // 2
console.log(factorial(3))  // 6
console.log(factorial(4))  // 24
console.log(factorial(10)) // 3628800