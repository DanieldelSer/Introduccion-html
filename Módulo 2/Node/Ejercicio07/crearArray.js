

function crearArrayValores(num1) {
    let array = [];
    for (let i = num1; i < num1 + 10; i++) {
        array.push(i)
    }
    console.log(array);
}

module.exports = crearArrayValores;