/***** IMPORTACIONES *****/
import "./Item.css"

import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

/***** LOGICA *****/

const Item = (props)  => {

    const {title, category, price,id} = props.data

return (
    <Card className="cardDiv m-3" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
      {price} - {category}
      </Card.Text>
      <Link className="aLink1" to={`/producto/${id}`}>Ver detalle del producto</Link>

    </Card.Body>
  </Card>
)}


/***** EXPORTACIONES *****/

export default Item