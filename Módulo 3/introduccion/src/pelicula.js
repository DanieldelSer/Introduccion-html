const Peliculas = (props) => {
    return (
        <div key={props.titulo} className="card">
            <img src={props.cartel} alt="" />
            <h1>{props.titulo}</h1>
            <p>{props.sinopsis}</p>
        </div>
    );
};

export default Peliculas;