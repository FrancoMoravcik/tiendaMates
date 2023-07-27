/*** IMPORTACIONES ***/

import { Link } from "react-router-dom"
// Estilos
import "./NavBar.css" 


/*** LOGICA ***/

function NavBar (props) { // Funcion constructura

    // Retorno que se va a renderizar
    return (

        <header>
            <div>
                <h1 className="h1Tienda">TIENDA</h1>
            </div>
            <ul >
                <li className="selected"><Link className="a" to='/home'>Home</Link></li>
                <li className="selected"><Link className="a" to='/productos'>Productos</Link></li>
                <li className="selected"><Link className="a" to='/nosotros'>Nosotros</Link></li>
            </ul>
        </header>
        // Solo se renderiza un solo elemento por modulo, es decir no puede haber 2 headers, ni otro div fuera del header. Unicamente hay mas de un elemento solo si esta dentro de una sola y primera etiqueta. En este caso el (header)
    )
}

/*** EXPORTACIONES ***/
export default NavBar