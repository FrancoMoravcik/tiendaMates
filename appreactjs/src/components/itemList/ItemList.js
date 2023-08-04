/***** IMPORTACIONES *****/

import "./ItemList.css"
import Item from "../item/Item"
import { useState } from "react"

/***** LOGICA *****/

const ItemList = (props)  => {

    const [productosFetch,setProductosFetch] = useState([])
 
    fetch('/data/productos.json')
    .then(res=>res.json())
    .then(json => setProductosFetch(json.map ( productos => <Item key={productos.id} data={productos}></Item> )))



return (
    <div className="divProductosFetch row d-flex justify-content-center align-items-center">
        {productosFetch}
    </div>
)
}

/***** EXPORTACIONES *****/

export default ItemList

