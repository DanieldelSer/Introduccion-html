
document.getElementById("div1");

let array = [];
let num;
let parrafos;


for (let i = 0; i < 11; i++) {
    array.push(0)
}


do {
    num = parseInt(window.prompt(`Escribe un número entre 0 y 10.Negativo para parar.`))
    if (num < 0) {
        break;
    }

    if (num > 10) {
        alert(`Ese número es incorrecto`);
        continue;
    }
    array[num]++;

} while (num >= 0);

for (let i = 0; i < array.length; i++) {
    parrafos += `<p>${i}---${array[i]}</p>`;
    
}
div1.innerHTML = parrafos
