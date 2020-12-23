import { useState } from "react";
import { Link } from "react-router-dom";

import useUser from "./hooks/useUser";

const CrearCategoria = (props) => {

    const { name } = useUser();
    console.log(name);


    const [username, setUsername] = useState(props.username);
    const [category, setCategory] = useState('');
    const categoria = {
        name: username,
        category
    };

    const crearCategory = () => {

        fetch("http://localhost:3000/categorias/nuevaCategoria/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(categoria),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                //console.log(datos);
            });
    };

    const manageChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    return (
        <>
            <div className="login-box" id="panelCategoria2">
                <h2>Crear Categoria</h2>
                <h2>{name}</h2>
                <div className="user-box">
                    <input type="text" id="category2" onChange={manageChangeCategory}></input>
                    <label>Categoria</label>
                    <p className="ejemplos">Ej: Deportes, Social, Familia, ...</p>
                </div>
                <div className="buttons">
                    <button onClick={crearCategory}><Link to="/CrearEvento">Crear</Link></button>
                    <button ><Link to="/CrearEvento">Siguiente</Link></button>
                </div>
            </div>
        </>
    )
};

export default CrearCategoria;