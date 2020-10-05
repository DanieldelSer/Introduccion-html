let pass = window.prompt("Escribe la contraseña");
let esNum = false;

if (pass.length >= 8) {
    for (let i = 0; i < pass.length; i++) {
        esNum = !isNaN(pass.substring(i, i + 1));
        if (esNum) {
            break;
        }
    }

    if (esNum) {
        if(pass.substring(0,1).toUpperCase()==pass.substring(0,1)){
            console.log("la contraseña es correcta");
        }else{
            console.log("la contraseña no es correcta porque no empieza por mayuscula.");
        }
    } else {
        console.log(`La contraseña es incorrecta no hay números`);
    }
} else {
    console.log(`La contraseña introducida tiene menos de 8 caracteres solo tiene ${pass.length}`)
}