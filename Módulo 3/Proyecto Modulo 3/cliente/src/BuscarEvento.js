import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useUser from "./hooks/useUser";

const BuscarEvento = (props) => {

    const { name } = useUser();
    console.log(name);

    const [data, setData] = useState([]);
    const [dato, setDato] = useState([]);
    const [evento, setEvento] = useState('');
    const [category, setCategory] = useState('');

    const event = {
        username: props.username,
        eventName: evento,
        category
    };

    useEffect(() => {
        fetch(`http://localhost:3000/categorias/${name}`)
            .then(function (results) {
                return results.json();
            })
            .then(function (dato) {
                setDato(dato);
            });
    }, []);

    const mostrarCategory = dato.map((category) => {
        return (
            <option key={category.category}>{category.category}</option>
        );
    });

    const searchEvent = () => {

        fetch(`http://localhost:3000/eventos/buscar/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(event),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                setData(data);
                console.log(data);
            });
    };

    const mostrarEvents = data.map((event) => {
        return (
            <div className="mostrarMasEventos">
                <div className="datos">
                    <h3><span>{event.eventName}</span></h3>
                    <hr></hr>
                    <h5>Categoría: <span>{event.category}</span></h5>
                    <p>Fecha: <span>{event.fechaCategory}</span></p>
                    <div className="mostrarMasEventosButton">
                        <button className="mostrarMasEventosbutton" onClick={event._id}><Link to="/ModificarEvento">Modificar</Link></button>
                        <button className="mostrarMasEventosbutton" onClick={() => { deleteEvent(event._id) }}>Eliminar</button>
                    </div>
                </div>
            </div>
        );
    });

    const deleteEvent = (_id) => {
        fetch(`http://localhost:3000/eventos/deleteEvent/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
            });
    };


    const manageChangeEvento = (e) => {
        setEvento(e.target.value);
    };
    const manageChangeSelectCategory = (e) => {
        setCategory(e.target.value);
    };

    return (
        <>
            <div className="login-box" id="panelSearch">
                <h2>Buscar Evento</h2>
                <div className="user-box">
                    <input type="text" id="event" onChange={manageChangeEvento}></input>
                    <label>Evento</label>
                    <select id="selectCategorySearch" onChange={manageChangeSelectCategory}>
                        <option>Elije una categoria...</option>
                        {mostrarCategory}
                    </select>

                    <div className="buttons">
                        <button onClick={() => { searchEvent() }}>Buscar</button>
                        <button><Link to="/Main">Volver</Link></button>
                    </div>
                </div>
            </div>
            {mostrarEvents}
        </>
    )
};

export default BuscarEvento;