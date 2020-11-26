
const Cabecera = (props) => {

    return (
        <div>
            <h1>{props.nombre}</h1>
            <img src={props.imagen} alt="" />
        </div>
    );
};

export default Cabecera;