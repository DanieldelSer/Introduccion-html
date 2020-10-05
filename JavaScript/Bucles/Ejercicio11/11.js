let numero;
do {
    numero = parseInt(prompt("mete un numero"));
    if (numero==0) {
        continue;
    }

    let copia=numero;
    let numReves = "";

    while (copia > 0) {
        numReves += "" + copia % 10;
        copia = parseInt(copia / 10);
    }

    alert(numReves);
} while (numero != 0);