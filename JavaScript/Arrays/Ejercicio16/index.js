
let nombres = [];
let notas = [];

for (let i = 0; i < 5; i++) {
    let nombre = window.prompt("Escribe tu nombre");
    nombres.push(nombre);
    let nota = Math.floor(Math.random() * (11 - 0) + 0);
    notas.push(nota);
}

let suma = 0;

for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}

let media = suma / notas.length;
console.log(media);

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        console.log(
            `El alumno ${nombres[i]} tiene la nota: ${notas[i]}. La media es ${media}`
        );
    }
}

let alta = 0;
let personasAlta = [];

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > alta) {
        alta = notas[i];
  }
}

for (let i = 0; i < notas.length; i++) {
    if (notas[i] === alta) {
        personasAlta.push(nombres[i]);
  }
}

let minima = 10;
let personasMinima = [];

for (let i = 0; i < notas.length; i++) {
    if (notas[i] < minima) {
        minima = notas[i];
  }
}

for (let i = 0; i < notas.length; i++) {
    if (notas[i] === minima) {
        personasMinima.push(nombres[i]);
  }
}

for (let i = 0; i < notas.length; i++) {
    console.log(`El alumno ${nombres[i]} ha sacado la nota ${notas[i]}`);
}

console.log(personasMinima);
console.log(minima);
console.log(personasAlta);
console.log(alta);