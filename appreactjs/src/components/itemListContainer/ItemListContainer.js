/***** IMPORTACIONES *****/
import "./ItemListContainer.css"
import ItemList from "../itemList/ItemList"
//import { useState } from "react"
//import Hooks from "../hooks/Hooks"


/***** LOGICA *****/

function ItemListContainer () {

   /* 
   const [categoriaNombre, setCategoriaNombre] = useState("")


    const categoriaTermos = () => {
        setCategoriaNombre("Termos")
    }

    const categoriaMates = () => {
        setCategoriaNombre("Mates")
    }


    const categoriaSetMateros = () => {
        setCategoriaNombre("SetsMateros")
    }


    const categoriaTodo = () => {
        setCategoriaNombre("Todo")
    }
    */



    return (
    <div>
     <ItemList></ItemList>
    </div>
)
}

/***** EXPORTACIONES *****/

export default ItemListContainer