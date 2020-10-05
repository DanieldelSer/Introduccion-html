
document.getElementById("div1");

let suma = 0;
let num;

do {
    num = parseInt(window.prompt(`Escribe un número`));
    for (let i = 1; i < num; i++) {
        suma = suma + i;
        console.log(suma);
        div1.innerHTML = suma;
    }
} while (num !== 0);