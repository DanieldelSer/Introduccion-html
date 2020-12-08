import {useState} from "react";
import {BrowserRouter, Router, Link} from "react-router-dom"

const Nombres = () => {
    const [nombres, setNombres] = useState(["Mikel", "Javier", "Rolo", "Jesus", "Daniel"]);
    const mostrarNombres = nombres.map(nombre =>{
        return <li>{nombre}</li>
    })
    return (
        <ul>
            {mostrarNombres}
        </ul>
    )
};

export default Nombres;