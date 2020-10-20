// Instala el paquete exact-math usando npm. Crea un archivo .js
//y muestra por consola las siguientes operaciones utilizando el módulo instalado:
// 789+34+250443
// 2059-79
// 3.24*97.856
// 1205/12.002

const exactMath = require('exact-math');

let suma = exactMath.add(789, 34, 250443);
console.log(suma);

let resta = exactMath.sub(2059, 79);
console.log(resta);

let multiplicacion = exactMath.mul(3.24, 97.856);
console.log(multiplicacion);

let division = exactMath.div(1205, 12.002);
console.log(division);