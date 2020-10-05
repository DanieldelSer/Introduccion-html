
document.getElementById("div1")

let array = [2, 5, 7, 9, 45, 25, 55, 32, 47, 63];
let num = 0;


for (let i = 0; i < 10; i++) {
    array[i] = 1;
}

do {
    num = parseInt(window.prompt(`Escribe un número entre 0 y 9`))
    if (num > 0 && num <= 9) {
        div1.innerHTML = `${array[num]}---${array[num] * 2}`
        
    } else {
        div1.innerHTML = `Número no válido`
    }
} while (num < 0 && num >= 9)