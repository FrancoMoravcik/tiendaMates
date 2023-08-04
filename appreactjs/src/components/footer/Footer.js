/***** IMPORTACIONES *****/
import { useEffect, useState } from "react"
import "./Footer.css"

/***** LOGICA *****/

const Footer = ()  => {
    
   const [mostrarFooter, setMostrarFooter] = useState(false)

useEffect(() => {
    setTimeout(() => {
        setMostrarFooter(true)
    },5000)
},[])

return (
    <div>
        {mostrarFooter ? (
         <div className="divFooter d-flex justify-content-center align-items-center">
        <p className="pFooter">©Copyright <span><a target="blank" href="https://github.com/FrancoMoravcik">Franco Moravcik</a></span> / 2023 / Tienda ReactJs</p>
    </div>
        ) : (
            <div></div>
    )}
    </div>
    
   
)
}

/***** EXPORTACIONES *****/

export default Footer