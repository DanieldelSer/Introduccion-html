
let pass = window.prompt("Escribe la contraseña");

if (pass.length >= 8) {
    for (let i = 0; i < pass.length; i++) {
        let esNum = !isNaN(pass.substring(i, i + 1));
        if (esNum = true) {
            console.log(`La contraseña es válida`);
            break;
        }
    }
    console.log(`La contraseña es incorrecta no hay números`)
} else {
    console.log(`La contraseña introducida tiene menos de 8 caracteres solo tiene ${pass.length}`)
}
