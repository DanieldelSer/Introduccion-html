import { useParams, Link } from "react-router-dom";
import { useState } from "react";


const Main = () => {

    const { user } = useParams();

    const [data, setData] = useState([]);

    const [username, setUsername] = useState(user);
    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const event = {
        username,
        eventName,
        description
    };

    const [guestName, setGuestName] = useState('');
    const [guestEmail, setGuestEmail] = useState('');
    const sendEmail = {
        username,
        guestName,
        guestEmail
    };

    const createEvent = () => {

        fetch("http://localhost:3000/events/newEvent", {
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
                if (datos === false) {
                    alert("Ese nombre de evento esta creado");
                } else {
                    alert("Evento creado con éxito");
                    fetch(`http://localhost:3000/events/${user}`)
                        .then(function (res) {
                            return res.json();
                        })
                        .then(function (datos) {
                            console.log(datos)
                            setData(datos);
                        })
                }
            });
    };

    const showAllEvents = () => {
        fetch(`http://localhost:3000/events/${user}`)
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                console.log(datos)
                setData(datos);
            })
    }

    //onClick={() => { deleteEvent(event._id) }}

    const addGuest = () => {

        fetch("http://localhost:3000/guests/newGuest", {
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
                if (datos === false) {
                    alert("Ese invitado ya está añadido");
                } else {
                    alert("Invitado con éxito");
                    fetch(`http://localhost:3000/send-email/`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(sendEmail),
                    })
                        .then(function (res) {
                            return res.json();
                        })
                        .then(function (datos) {
                            console.log(datos)
                            setData(datos);
                        })
                }
            });
    };

    const showEvents = data.map((event) => {
        return (
            <div className="datos" key={event.eventName}>
                <Link to={`/Main/${username}/${event.eventName}`}><h3><span>{event.eventName}</span></h3>
                <p><span>{event.description}</span></p></Link>
                <div className="mostrarMasEventosButton">
                    <input type="text" placeholder="Nombre del invitado" onChange></input>
                    <input type="text" placeholder="Email del invitado" onChange></input>
                    <button className="addFriend" onClick={addGuest}>Añadir invitado</button>
                </div>
                <hr></hr>
            </div>
        );
    });

    const manageChangeEventName = (e) => {
        setEventName(e.target.value);
    };
    const manageChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const manageChangeGuestName = (e) => {
        setGuestName(e.target.value);
    };
    const manageChangeGuestEmail = (e) => {
        setGuestEmail(e.target.value);
    };

    return (
        <div>
            <h1>{user}</h1>
            <input type="text" id="eventName" onChange={manageChangeEventName} placeholder="Nombre del evento"></input>
            <input type="text" id="description" onChange={manageChangeDescription} placeholder="Descripción del evento"></input>
            <button onClick={createEvent}>Crear Evento</button>
            <button onClick={showAllEvents}>Mostrar Eventos</button>
            {showEvents}
        </div>
    )
};

export default Main;