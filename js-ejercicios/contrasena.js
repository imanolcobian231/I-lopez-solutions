const prompt = require('prompt-sync')();

function contrasena(contra) {
    if (/[A-Z]/.test(contra) && /[a-z]/.test(contra) && /[0-9]/ && /[a-zA-Z0-9]/.test(contra)) {
    return true;
} else {
    return false;
}
}

console.log(contrasena("lol"))
console.log(contrasena("FGHJKhjk9///&&"))



