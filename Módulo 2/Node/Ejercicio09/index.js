// Crea un módulo propio con una función.
// La función esPar() devuelve “true” en caso de que el número sea par y “false” en caso contrario.
// En el archivo index.js, genera un número aleatorio, llama a la función esPar() y muestra el resultado de la función.

let esPar = require("./funcioPar");

let numAleatorio = Math.floor((Math.random() * (100 - 0 + 1)) + 0);

console.log(numAleatorio);
console.log(esPar(numAleatorio));