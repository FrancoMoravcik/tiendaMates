/***** IMPORTACIONES *****/
import { useEffect, useState } from "react"
import "./Loader.css"

/***** LOGICA *****/

const Loader = ()  => {

    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setCargando(false)
        }, 5000)
    },[])

   

return (
    <div className="loader">
        { cargando ? "Esta cargando" : "Ya cargo"}
    </div>
)
}

/***** EXPORTACIONES *****/

export default Loader