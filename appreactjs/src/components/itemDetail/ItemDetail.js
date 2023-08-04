/***** IMPORTACIONES *****/
import "./ItemDetail.css"
import Card from 'react-bootstrap/Card';
import ItemCount from "../itemCount/ItemCount";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemList from "../itemList/ItemList";

/***** LOGICA *****/

const ItemDetail = (props)  => {

   const {addItem} = useCartContext()
   
  const [cantidad, setCantidad] = useState(0)

  const {title, category, price, id,} = props.data
    
    
  const tomarCantidad = (numero) => {
    if(numero === 0){
      setCantidad (numero + 1)
    }else {
      setCantidad(numero)
    }
  }

    const agregarAlCarrito = () => {

      const producto = {
        id: id,
        title: title,
        category: category, 
        price: price,
        count: cantidad + 1
      }

      addItem(producto)
    }
    
    return (
        <div>
        <h3 className="h3Detalle">Detalle del Producto Seleccionado</h3>
    <Card className="m-5 divCard" style={{ width: '18rem' }}>
    <Card.Img className="imgDetail" variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title className="tituloDetail">{title}</Card.Title>
      <Card.Text className="textoDetail">
      ${price} - {category}
      </Card.Text>
      <div className="d-flex flex-column align-items-center">
      <ItemCount stock={10}  cantidades={tomarCantidad}></ItemCount>
      <button className="btnAgregarAlCarrito m-4" onClick={agregarAlCarrito}>Agregar Al Carrito</button>
      </div>
    </Card.Body>
  </Card>
   
   <h3 className="h3Mas">Mas Productos</h3>
   <ItemList></ItemList>
       </div>
)
}

/***** EXPORTACIONES *****/

export default ItemDetail