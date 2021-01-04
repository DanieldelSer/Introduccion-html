import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Event = () => {

    const { user } = useParams();
    const { event } = useParams();

    const [data, setData] = useState([]);
    const [guests, setGuests] = useState([]);

    const [username, setUsername] = useState(user);
    const [eventName, setEventName] = useState('');
    const [guestName, setGuestName] = useState('');
    const [guestEmail, setGuestEmail] = useState('');
    const eventGuest = {
        username,
        eventName,
        guestName,
        guestEmail
    };

    const sendEmail = {
        username,
        guestName,
        guestEmail
    };

    useEffect(() => {
        fetch(`http://localhost:3000/events/${user}/${event}`)
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                setData(res)
                setEventName(res[0].eventName)
            });
    }, []);

    const manageChangeGuestName = (e) => {
        setGuestName(e.target.value);
    };
    const manageChangeGuestEmail = (e) => {
        setGuestEmail(e.target.value);
    };
    const addGuest = () => {

        fetch("http://localhost:3000/guests/newGuest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(eventGuest),
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (datos) {
                if (datos === false) {
                    alert("Ese invitado ya está añadido");
                } else {
                    alert("Invitado");
                    console.log(datos)
                    setGuests(datos);
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

                        })
                }
            });
    };

    const showEvent = data.map((eventPrint) => {
        return (
            <div className="datos" key={eventPrint.eventName}>
                <h3><span>{eventPrint.eventName}</span></h3>
                <p><span>{eventPrint.description}</span></p>
                <div className="mostrarMasEventosButton">
                    <input type="text" placeholder="Nombre del invitado" onChange={manageChangeGuestName}></input>
                    <input type="text" placeholder="Email del invitado" onChange={manageChangeGuestEmail}></input>
                    <button className="addFriend" onClick={() => addGuest()}>Añadir invitado</button>
                </div>
                <hr></hr>
            </div>
        );
    });

    const showGuests = guests.map((guest) => {
        return (
            <div className="datos" key={guest.guestName}>
                <h3><span>{guest.guestName}</span></h3>
                <p><span>{guest.state}</span></p>
                <div className="mostrarMasEventosButton">
                    <button className="addFriend" onClick>Eliminar</button>
                </div>
                <hr></hr>
            </div>
        );
    });

    return (
        <>
            {showEvent}
            {showGuests}
        </>
    )
};


export default Event;