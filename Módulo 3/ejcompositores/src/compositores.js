
const Compositores = (props) => {
    //i = compositor
    const mostrarArrayCompositores = props.compositores.map((i) => {
        return <li>
            <h1>{i.nombre}</h1>
            <p>Fecha: {i.fecha}</p>
            {i.canciones.map((cancion) =>{
                return <p>{cancion}</p>
            })}
        </li>
    });
    return <ul>{mostrarArrayCompositores}</ul>
};

export default Compositores;