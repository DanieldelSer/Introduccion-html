let acumulado=1;

for (let fila = 1; fila <= 10; fila++) {
    for (let i = fila; i > 1; i--) {
        acumulado*=i;
    }
    
    console.log(`Fila: ${fila}: ${acumulado}`); 
    acumulado=1;   
}





/*
4x3x2x1=24
*/