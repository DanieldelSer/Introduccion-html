
let array = [];
let suma = 0;

for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 99 + 1));
}

for (let j = 0; j < array.length; j++){
    suma += array[j]
}

document.getElementById("div1").innerHTML = suma/10;