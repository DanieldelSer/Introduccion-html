
import './App.css';
import evento from './evento';

function App() {
  
       return (
         <div key={evento.nombre} className="card">
           <h1>{evento.nombre}</h1>
           <p>Fecha: {evento.fecha}</p>
           <p>Hora: {evento.hora}</p>
           <p>Lugar: {evento.lugar.direccion}</p>
           <p>Ciudad: {evento.lugar.ciudad}</p>
         </div>
       );
   
}

export default App;
