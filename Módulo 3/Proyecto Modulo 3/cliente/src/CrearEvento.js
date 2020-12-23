import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CrearEvento = (props) => {

    const [data, setData] = useState([]);
    const [username, setUsername] = useState(props.username);
    const [evento, setEvento] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/categorias/${props.username}`)
            .then(function (results) {
                return results.json();
            })
            .then(function (data) {
                setData(data);
            });
    }, []);

    const mostrarCategory = data.map((category) => {
        return (
            <option key={category.category}>{category.category}</option>
        );
    });


    const event = {
        name: username,
        eventName: evento,
        category: category,
        fechaCategory: date
    };

    const crearEvent = () => {

        fetch("http://localhost:3000/eventos/nuevoEvento/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(event),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                //console.log(datos);
            });
    };


    const manageChangeEvento = (e) => {
        setEvento(e.target.value);
    };
    const manageChangeSelectCategory = (e) => {
        setCategory(e.target.value);
    };
    const manageChangeDate = (e) => {
        setDate(e.target.value);
    };

    return (
        <>
            <div className="login-box" id="panelCreate">
                <h2>Crear Evento</h2>
                <div className="user-box">
                    <input type="text" id="crearEvent" onChange={manageChangeEvento}></input>
                    <label>Evento</label>
                    <p className="ejemplos">Ej: Comprar Móvil, Fiesta con amigos, Mi boda, ...</p>
                    <select id="selectCategory" onChange={manageChangeSelectCategory}>
                        <option>Elije una categoría...</option>
                        {mostrarCategory}
                    </select>
                    <input type="date" name="" id="dateEvent" onChange={manageChangeDate}></input>
                </div>
                <div className="buttons">
                    <button onClick={crearEvent}><Link to="/Main">Crear</Link></button>
                    <button><Link to="/CrearCategoria">Categoria</Link></button>
                </div>
                <div className="buttons">
                    <button><Link to="/Main">Volver</Link></button>
                </div>
            </div>
        </>
    )
};

export default CrearEvento;