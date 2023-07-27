/***** IMPORTACIONES *****/
import "./Hooks.css"

// Modulos
import { useState } from "react"
import { useEffect } from "react"
/***** LOGICA *****/

const Hooks = ()  => {
    
    // Hooks de estado
    // constructor [ESTADO, Funcion que actualiza el estado] = Inicializacion del Estado (El valor por default del estado)
    const [contador, setContador] = useState(0)

 
    // Hooks de efectos
    // useEfectt (funcion(inicio , fin)), cantidad de instancias
    useEffect(() => {
        console.log("componenete Iniciado");

        return () => {
            console.log("componenete Finalizado");
        }
    })

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    return (
        <div>
            <button onClick={sumar}>Sumar</button>
              <p>{contador}</p>
            <button onClick={restar}>Restar</button>
 
        </div>
)
}

/***** EXPORTACIONES *****/

export default Hooks