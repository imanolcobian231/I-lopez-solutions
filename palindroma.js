function isPalindrome(num) {
    let numr = num.toString().split('').reverse().join('');
    if (num == numr) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome(121)) // true
console.log(isPalindrome(12321)) // true
console.log(isPalindrome(12)) // false