function getProperties(propiedades) {
    return Object.keys(propiedades)
}

console.log(getProperties({ a: 1, b: 2, c: 3 })) // ["a", "b", "c"]