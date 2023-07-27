// Use Context (Utilizar el contexto creado), createContext (crear el contexto de la aplicacion) => react

import { useContext, createContext, useState, } from "react";

// 1° crear el contexto      Valor dentro del argumento de la funcion es el valor por default del contenido
//2° Exportar el contexto creado 
export const CartContext = createContext([])

//3° Crear funcion para poder usar elcontexto, Podemos definirlo como un hook personalizado
//4° Exportar la funcion que almacena el hook useContext
export const useCartContext = () => {
    return useContext(CartContext)
}

//6° Crear el componenete del contexto proveedor
const CartProvider = ({children}) => {

    // Estado del CartProvider
const [items, setItems] = useState([])

 // Funciones del CartProvider 

 const addItem = (data) => {
     if(validarProductoExistente(data.id)){
         alert("El producto ya esta en el carrito")
     }else {
         const listaActual = items
         listaActual.push (data)
         setItems(listaActual)
         console.log(listaActual)
     }
 }

const borrarDelCarrito = (id) => {
    const nuevaLista = items.filter(e => e.id !== id)
setItems(nuevaLista) 
}

const limpiarCarrito = () => {
   setItems ({})
}

const validarProductoExistente = (id) => {
    if(items.find(e => e.id === id)){
        return true
}else {
    return false
}
}
 // Render del CartProvider
    return (
    <CartContext.Provider value={{items, addItem, borrarDelCarrito, limpiarCarrito}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider