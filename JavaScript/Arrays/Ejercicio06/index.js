
let array = [];
document.getElementById("div1")

for (let i = 0; i < 3; i++) {
    array.push(window.prompt("Escribe un valor"));
}

if (array[0] > array[1] && array[0] > array[2]) {
    div1.innerHTML = array[0];
} else if (array[1] < array[2]) {
    div1.innerHTML = array[2]
} else {
    div1.innerHTML = array[1]
}