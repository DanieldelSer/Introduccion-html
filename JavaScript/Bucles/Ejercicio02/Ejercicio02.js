
document.getElementById("div1");

let number = parseInt(window.prompt(`Escribe un número`));
let cont = 1;
let i = 0;

while (cont < number) {
    i = i + cont;
    cont++;
    console.log(i);
    div1.innerHTML =i
}

