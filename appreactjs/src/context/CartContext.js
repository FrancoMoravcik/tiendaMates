// Use Context (Utilizar el contexto creado), createContext (crear el contexto de la aplicacion) => react

import { useContext, createContext, useState, } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CartContext.css" 
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

 const notifyAgregado = () => {
  toast.success('Producto agregado al carrito', {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1200, 
    className: 'mi-clase-toastify'
  })
 }

 const notifyBorrado = () => {
  toast.success('Producto Borrado', {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1200, 
    className: 'mi-clase-toastify'
  })
 }

 const addItem = (data) => {
  notifyAgregado()
  const itemExistente = items.find((item) => item.id === data.id)

  if(itemExistente){
    const itemsActualizados = items.map((item) => 
    item.id === data.id ? { ...item, count: item.count + 1 || (item.count * item.cantidad) + 1 } : item 
       );
       setItems(itemsActualizados)
      }else{
        const listaActual = items
        listaActual.push (data)
        setItems(listaActual)
      }
    }

 const borrarDelCarrito = (id) => {
  notifyBorrado()
    const nuevaLista = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count > 1 ? item.count - 1 : 0,
        };
      }
      return item;
        });
  
    setItems(nuevaLista.filter((item) => item.count > 0));
  };

const limpiarCarrito = () => {
   setItems ([])
}

 // Render del CartProvider
    return (
    <CartContext.Provider value={{items, addItem, borrarDelCarrito, limpiarCarrito}}>
        {children}
        <ToastContainer/>
    </CartContext.Provider>
    )
}

export default CartProvider