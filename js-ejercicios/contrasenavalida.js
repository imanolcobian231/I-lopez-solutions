function isEmailValid(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

console.log(isEmailValid("hola@gmail.com")) // true
console.log(isEmailValid("hola@gmail.com.com")) // true
console.log(isEmailValid("hola@192.168.0.1")) // true
console.log(isEmailValid("hola@")) // false
console.log(isEmailValid("hola@gmail.com@")) // false
console.log(isEmailValid("hola@.com")) // false
console.log(isEmailValid("hola@.com.com")) // false
console.log(isEmailValid("hola@.com.com@")) // false
console.log(isEmailValid("hola@gmail.com.com@")) // false
console.log(isEmailValid("hola@gmail.com.com@gmail.com")) // false