
const Main = (props) => {

    return (
        <div>
            <h1>{props.nombre}</h1>
            <p>Eslora: {props.eslora}</p>
            <p>Tripulantes: {props.tripulantes}</p>
            <button>Añadir Tripulante</button>
        </div>
    );
};

export default Main;