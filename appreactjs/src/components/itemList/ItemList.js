/***** IMPORTACIONES *****/

import "./ItemList.css"
import Item from "../item/Item"
import { useState } from "react"

/***** LOGICA *****/

const ItemList = (props)  => {

    const [productosFetch,setProductosFetch] = useState([])
 
    /*
    const productos = [
        {
            id:"1",
            nombre:"Mate Imperial Arg",
            categoria:"Mates",
            precio:"$5500",
            stock:"3"
        },
        {
            id:"2",
            nombre:"Set Matero simil cuero",
            categoria:"SetsMateros",
            precio:"$2900",
            stock:"5"
        },
        {
            id:"3",
            nombre:"Mate Camionero",
            categoria:"Mates",
            precio:"$4200",
            stock:"7"
        },
        {
            id:"4",
            nombre:"Mate Uruguayo",
            categoria:"Mates",
            precio:"$4000",
            stock:"7"
        },
        {
            id:"5",
            nombre:"Termo Stanley",
            categoria:"Termos",
            precio:"$12000",
            stock:"4"
        },
        {
            id:"6",
            nombre:"Termo media manija",
            categoria:"Termos",
            precio:"$12000",
            stock:"4"
        },
        {
            id:"7",
            nombre:"Set Matero cuero",
            categoria:"SetsMateros",
            precio:"$3500",
            stock:"2"
        },
    ]
*/ 

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json => setProductosFetch(json.map ( productos => <Item key={productos.id} data={productos}></Item> )))

/*
     let productosPorCategoria

       if(props.categoria === "Todo"){
        productosRenderizables = productos.map ( productos => <Item key={productos.id} data={productos}></Item> )
       }else {
           productosPorCategoria = productos.filter(productos => productos.categoria === props.categoria)
           productosRenderizables = productosPorCategoria.map ( productos => <Item key={productos.id} data={productos}></Item> )
       }
*/

return (
    <div className="row d-flex justify-content-center align-items-center">
        {productosFetch}
    </div>
)
}

/***** EXPORTACIONES *****/

export default ItemList