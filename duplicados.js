function removeDuplicates(num) {
    let nums = [...new Set(num)];
    return nums
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5]