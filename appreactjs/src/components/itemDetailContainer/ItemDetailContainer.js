/***** IMPORTACIONES *****/
import "./ItemDetailContainer.css"

import ItemDetail from "../itemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom" 

/***** LOGICA *****/

const ItemDetailContainer = ()  => {

 const {productoId} = useParams()

 const [productosFetch,setProductosFetch] = useState([])

 useEffect(() => {
  fetch(`https://fakestoreapi.com/products/${productoId}`)
  .then(res=>res.json())
  .then(productos=> setProductosFetch(<ItemDetail key={productos.id} data={productos}></ItemDetail> ))
 }, [productoId])

    return (
   <div className="divItemDetail">
    {productosFetch}
       </div>
)
}

/***** EXPORTACIONES *****/

export default ItemDetailContainer