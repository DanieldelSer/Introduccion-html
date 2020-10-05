
document.getElementById("div1");

let suma = 0;
for (let i = 0; i < 10; i++) {
 let number = parseInt(window.prompt(`Escribe un número`));
 suma = suma + number;
}

let average = suma/10;

console.log(average);
div1.innerHTML = average;