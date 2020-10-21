
function random(min, max) {
    let x = Math.floor((Math.random() * (max - min + 1)) + min);
    console.log(x) 
}

module.exports = random;