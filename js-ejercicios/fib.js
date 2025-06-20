function fibonacci(num) {
    let fib = []
    for (let i = 0; i <  num; i++) {
        if (i === 0) {
            fib[0] = 0 
        }

        if (i === 1) {
            fib[1] = 1
        }

        if (i >= 2) {
            let f = fib[i-2] + fib[i-1]
            fib[i] = f
        }      
    }

    return fib
}

console.log(fibonacci(5))  // [0, 1, 1, 2, 3]
console.log(fibonacci(0))  // []
console.log(fibonacci(1))  // [0]
console.log(fibonacci(2))  // [0, 1]
console.log(fibonacci(3))  // [0, 1, 1]
console.log(fibonacci(4))  // [0, 1, 1, 2]
console.log(fibonacci(1000000)) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]