
let array = [];
let mensaje = "";

for (let i = 20; i > 10; i--) {
    array.push(i)

}
for (let j = 0; j < array.length; j++) {
    mensaje += `<p>${array[j]}</p>`
}

document.getElementById("div1").innerHTML = mensaje;
