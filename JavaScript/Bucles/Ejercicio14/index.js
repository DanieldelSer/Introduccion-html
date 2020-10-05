
let num = parseInt(window.prompt(`Escribe un número`));
let linea="";

for (let i = 0; i < num; i++) {
    //console.log("".repeat(i+1));
    for (let j = 0; j <= i; j++) {
        linea+="*";
    }
    console.log(linea);
    linea="";
}