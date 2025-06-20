function generatePassword() {
    let password = "";
    for (let i = 0; i <= 2; i++) {
        let mayuscula = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        password += mayuscula
    }

    for (let i = 0; i <= 2; i++) {
        let minuscula = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        password += minuscula
    }

    for (let i = 0; i <= 2; i++) {
        let numero = Math.floor(Math.random() * 10);
        password += numero
    }

    for (let i = 0; i <= 2; i++) {
        let especiales = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
        let especial = especiales.charAt(Math.floor(Math.random() * especiales.length));
        password += especial
    }
    
    return password
}

console.log(generatePassword())