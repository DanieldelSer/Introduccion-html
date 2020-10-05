
let num1 = parseInt(window.prompt(`Escribe un número`));
let resultado = esPar(num1);

alert(resultado);

function esPar(num1) {
    if (num1 % 2 === 0) {
        return `Es par`;
    } else {
        return `Es impar`;
    }
}
