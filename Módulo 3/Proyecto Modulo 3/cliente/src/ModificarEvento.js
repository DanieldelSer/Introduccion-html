import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ModificarEvento = (props) => {

    const [eventModify, setEventModify] = useState('');
    const [dato, setDato] = useState([]);
    const [eventDate, setEventDate] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/eventos/id/5fb4f6aa2f3695522c3a5be3`)
            .then(function (results) {
                return results.json();
            })
            .then(function (data) {
                console.log(data);
                setEventModify(data[0].eventName)
                setEventDate(data[0].fechaCategory)
                setName(data[0].name)
                console.log(name);
                fetch(`http://localhost:3000/categorias/Daniel`)
                    .then(function (results) {
                        return results.json();
                    })
                    .then(function (dato) {
                        setDato(dato);
                    });
            });

    }, []);

    const mostrarCategory = dato.map((category) => {
        return (
            <option key={category.category}>{category.category}</option>
        );
    });


    const modifyEvent = () => {

        fetch("http://localhost:3000/eventos/modificarEvento/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(event),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                alert("Evento modificado")
            });
    };

    const _id = "5fb4f6aa2f3695522c3a5be3"
    const [eventName, setEventName] = useState('');
    const [category, setCategory] = useState('');
    const [fechaCategory, setFechaCategory] = useState('');

    const event = {
        _id,
        category,
        eventName,
        fechaCategory
    };

    const manageChangeEvent = (e) => {
        setEventName(e.target.value);
    };
    const manageChangeCategory = (e) => {
        setCategory(e.target.value);
    };
    const manageChangeDate = (e) => {
        setFechaCategory(e.target.value);
    };

    return (
        <>
            <div className="login-box" id="panelModifyEvent">
                <div className="user-box">
                    <h2>Modificar Evento</h2>
                    <p>{eventModify}</p>
                    <input type="text" id="nameModifyEvent" onChange={manageChangeEvent}></input>
                    <label></label>
                    <select id="selectModidyCategory" onChange={manageChangeCategory}>
                        <option>Elije una categoría...</option>
                        {mostrarCategory}
                    </select>
                    <p>{eventDate}</p>
                    <input type="date" name="" id="dateModifyEvent" onChange={manageChangeDate}></input>
                    <label></label>
                    <div className="buttons">
                        <button onClick={modifyEvent}>Modificar</button>
                        <button ><Link to="/Main">Volver</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ModificarEvento;