/***** IMPORTACIONES *****/
import "./ItemDetail.css"
import Card from 'react-bootstrap/Card';
import ItemCount from "../itemCount/ItemCount";
import { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemList from "../itemList/ItemList";

/***** LOGICA *****/

const ItemDetail = (props)  => {

   const {addItem} = useCartContext()
   
  const [cantidad, setCantidad] = useState(0)

  const {title, category, price, id} = props.data
    
    
    const tomarCantidad = (numero) => {
      setCantidad (numero)
    }

    const agregarAlCarrito = () => {

      const producto = {
        id: id,
        title: title,
        category: category, 
        price: price,
        count: cantidad
      }

      addItem(producto)
    }
 
    useEffect(() => {
      
       console.log(`Tiene ${cantidad} productos cn un total de ${cantidad * price}`);

    },[cantidad])
    
    return (
        <div>
        <h3 className="h3Detalle">Detalle del Producto Seleccionado</h3>
    <Card className="m-5" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
      {price} - {category}
      </Card.Text>
      <ItemCount stock={10}  cantidades={tomarCantidad}></ItemCount>
      <div className="d-flex justify-content-center">
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