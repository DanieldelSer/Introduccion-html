
const Coche = (props) => {

    return (
        <div>
            <h1>{props.nombre}</h1>
            <p>{props.numruedas}</p>
            <p>{props.altura}</p>
            <p>{props.longuitud}</p>
            <p>{props.color}</p>
        </div>
    );
};

export default Coche;