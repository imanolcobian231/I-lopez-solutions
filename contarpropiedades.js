function countProperties(propiedades) {
    return Object.keys(propiedades).length
}

console.log(countProperties({ a: 1, b: 2, c: 3 })) // 3