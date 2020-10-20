

let num1 = parseInt(window.prompt(`Escribe un número positivo`));
let numeroCifras = cifras(num1)

alert(numeroCifras)

function cifras(num1) {
    if (num1 > 0) {
        return num1.toString().length;
    } else {
        return num1 +` Número incorrecto`;
    }
}
