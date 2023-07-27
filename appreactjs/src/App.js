import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const persona = {
  nombre: "Franco",
  apellido: "Moravcik",
  profesion:"Desarrolador WEB",
  edad:"21",
}

// Version larga
let nombrePersona = persona.nombre
let apellidoPersona = persona.apellido
let profesionPersona = persona.profesion
let edadPersona = persona.edad
console.log(nombrePersona, apellidoPersona, profesionPersona, edadPersona);

// version media
const {nombre, apellido, profesion, edad} = persona
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(profesion);

// version cortas
const {...resto} = persona
console.log(resto);



export default App;
