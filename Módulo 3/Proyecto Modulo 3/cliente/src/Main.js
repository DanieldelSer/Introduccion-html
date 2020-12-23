import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Main = (props) => {
    console.log(props);
    const [data, setData] = useState([]);
    const [boolean, setBoolean] = useState(false);


    const showAll = () => {

        fetch(`http://localhost:3000/eventos/${props.username}`)
            .then(function (results) {
                return results.json();
            })
            .then(function (data) {
                setData(data);
            });
    }

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
                setBoolean(!boolean)
            });
    };

    return (
        <>
            <div id="container">
                <input type="hidden" id="userhidden"></input>
                <input type="hidden" id="_idhidden"></input>
            </div>
            <div className="login-box" id="panelButtons">
                <h2>Eventos To Remember</h2>
                <div className="buttons">
                    <button><Link to="/BuscarEvento">Buscar</Link></button>
                    <button><Link to="/CrearCategoria">Crear</Link></button>
                    <button onClick={showAll}>Mostrar</button>
                    <button><Link to="/">Salir</Link></button>
                </div>
            </div>
            <div>
                {mostrarEvents}
            </div>
        </>
    )
};

export default Main;