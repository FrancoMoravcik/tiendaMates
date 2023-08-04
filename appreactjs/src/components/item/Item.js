/***** IMPORTACIONES *****/
import "./Item.css"

import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import { useState } from "react";

/***** LOGICA *****/

const Item = (props)  => {

    const {title, category, price,id, imagen, stock} = props.data

    const {addItem} = useCartContext()

       
  const [cantidad, setCantidad] = useState(0)


  
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
        count: cantidad + 1,
        imagen: imagen,
        stock: stock,
      }

      

      addItem(producto)
    }

return (
  <Card className="cardDiv  m-3" style={{ width: '18rem' }} to={`/producto/${id}`}>
    <Card.Img className="imgItem" variant="top" src={`${imagen}`}/>
    <Card.Body>
      <Card.Title className="tituloItem">{title}</Card.Title>
      <Card.Text className="textoItem">
      ${price} - {category}
      </Card.Text>
      <div className="d-flex flex-column align-items-center">
      <ItemCount stock={stock}  cantidades={tomarCantidad}></ItemCount>
      <button className="btnAgregar" onClick={agregarAlCarrito}>añadir Al Carrito</button>
      <Link className="aLink1" to={`/producto/${id}`}>Ver detalle del producto</Link>
      </div>
    </Card.Body>
  </Card>
)}


/***** EXPORTACIONES *****/

export default Item