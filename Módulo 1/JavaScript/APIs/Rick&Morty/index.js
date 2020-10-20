
let url = "https://rickandmortyapi.com/api/character/";
let personajes = "";

fetch(url)
  //Con el .then() esperamos que nos llegue la respuesta
  .then(function recibirRespuesta(respuesta) {
    //una vez tengamos la respuesta la parseamos y accedemos al body con .json() y la devolvemos
    return respuesta.json();
  })
  //Con este .then() esperamos a que la respuesta se parsee y se acceda a su body
  .then(function cogerDatos(datos) {
    //Una vez nos devuelva la respuesta parseada (parametro datos) y sabiendo que queremos recorrer el array results
    //que está dentro del objeto datos, hacemos un for. La condición para que este bucle se ejecute
    // es que i sea menor que la longitud del array results. Que como sabemos está dentro del objeto datos.
    //Entonces i deberá ser menor que datos.results.length

    for (let i = 0; i < datos.results.length; i++) {
      //Sumamos cada vuelta el código html necesario en formato string con los datos que nos pide el ejercicio
      //En este caso la imagen y el nombre de los personajes.
      personajes += `
            <div>
                <img src=${datos.results[i].image} alt="" />
                <h1>${datos.results[i].name} </h1>
             </div>
        `;
    }

    //introducimos en el HTML nuestra variable personajes. Que contiene el código HTML en formato stirng
    //con todos los personajes
    document.getElementById("personajes").innerHTML = personajes;
  });