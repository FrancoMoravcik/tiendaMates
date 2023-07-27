/***** IMPORTACIONES *****/
import "./ItemCount.css"
import { useState } from "react"

/***** LOGICA *****/

const ItemCount = (props)  => {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        /*
        setContador(contador + 1)
        if(contador >= props.stock){
            alert(`la cantidad del pedido no puede exceder la cantidad del stock (${props.stock})`)
        */
            if(contador < props.stock){
                setContador(contador + 1)

                props.cantidades(contador)
    }
    }


    const restar = () => {
      /*
      setContador(contador - 1)
      if(contador <= 0){
          alert(`La cantidad del pedido no puede ser igual o menor que 0`) 
      */
        if(contador > 0){
            setContador(contador - 1)      
        
            props.cantidades(contador)
        }
    }


       /* const añadirAlCarrito = () => {
    
        if(contador <= 0 || contador > props.stock){
            alert("No se puedo completar la accion")
        }else {
            alert(`Añadio al carrito ${contador}`)
        }
   
        alert(`Añadio al carrito ${contador}`)
    }  */

    return (
    <div>

        <div className="divCount d-flex justify-content-evenly align-items-center">
        <button className="btnCount" onClick={sumar}>+</button>
           <p className="pCount">{contador}</p>
       <button className="btnCount" onClick={restar}>-</button>
       </div>

    </div>
)
}

/***** EXPORTACIONES *****/

export default ItemCount