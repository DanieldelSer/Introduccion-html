// Escribe un módulo propio con una función que crea un array con 10 valores consecutivos.
// Estos valores serán los 10 números siguientes a un número que recibe por parámetro.
// Escribe otro módulo en el que se genera un número aleatorio.
// Importa los dos y pasa el parámetro aleatorio al que crea el array de 10 números y muestra por consola el resultado.

let numAleatorio = require("./generar");
let numArray = require("./crearArray");

numArray(numAleatorio(5, 10));