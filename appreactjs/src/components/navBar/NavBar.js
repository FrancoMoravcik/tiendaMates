/*** IMPORTACIONES ***/

import { Link } from "react-router-dom"
// Estilos
import "./NavBar.css" 
import { useState } from "react"

/*** LOGICA ***/

function NavBar (props) { // Funcion constructura
    
    const [linkActive, setLinkActive] = useState("Home")

    const linkClick = (label) => {
        setLinkActive(label);
      };

    // Retorno que se va a renderizar
    return (


        <header>
            <div>
                <h1 className="h1Tienda">TIENDA</h1>
            </div>
            <ul >
                <li>
                <Link className={linkActive === "Home"? "selected" : ""}
                onClick={() => linkClick("Home")} to='/home'>Home
                </Link>
                </li>

                <li>
                <Link className={linkActive === "Productos" ? "selected" : ""}
                onClick={() => linkClick("Productos")} to='/productos'>Productos
                </Link>
                </li>

                <li className="liCarrito">
                <Link className={linkActive === "Carrito" ? "selected" : ""}
                onClick={() => linkClick("Carrito")} to='/carrito'><img className="imgCarrito" src="./img/carrito-de-compras.png" alt="Carrito-De-Compras"/>
                </Link>
                </li>

            </ul>
        </header>
        // Solo se renderiza un solo elemento por modulo, es decir no puede haber 2 headers, ni otro div fuera del header. Unicamente hay mas de un elemento solo si esta dentro de una sola y primera etiqueta. En este caso el (header)
    )
}

/*** EXPORTACIONES ***/
export default NavBar