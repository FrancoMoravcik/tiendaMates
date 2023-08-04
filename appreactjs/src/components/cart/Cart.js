/***** IMPORTACIONES *****/
import "./Cart.css"
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import Swal from "sweetalert2";


/***** LOGICA *****/


const Cart = () => {

    const { items, borrarDelCarrito, limpiarCarrito } = useCartContext("")

    const handleBorrarDelCarrito = (itemId) => {
        borrarDelCarrito(itemId);
    };

    let totalPrecio
    totalPrecio = items.reduce ((acumulador, elemento) => acumulador + elemento.price * elemento.count, 0)
    console.log(totalPrecio);

    const showAlert = () => {
          Swal.fire({
            title: 'TIENDA',
            text: `Quieres comprar el carrito por un total de $${totalPrecio}?`,
            icon: 'info',
            confirmButtonColor: '#023047',
            confirmButtonText: 'Aceptar',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#dc2f02', 
          }).then((resultado) => {
            if(resultado.isConfirmed){
                Swal.fire({
                    title:'COMPRA',
                    icon: 'success',
                    text: 'Compraste el carrito!',
                    confirmButtonColor: '#023047',
                    confirmButtonText: 'Aceptar',
                })
                limpiarCarrito()
            }
          })
        }

        const handleLimpiarCarrito = () => {
            Swal.fire({
              title: "Seguro que quieres eliminar todos los productos?",
              icon: "warning",
              confirmButtonText: "Aceptar",
              confirmButtonColor: '#023047',
              showCancelButton: true,
              cancelButtonText: "Cancelar",
              cancelButtonColor: "#dc2f02"
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  text: "CARRITO VACIO",
                  icon: "success",
                  confirmButtonText: "Aceptar",
                  confirmButtonColor: '#023047',
                });
                limpiarCarrito();
              }
            });
          };


    /******************* 
     * if para bajar el footer --- LISTO    
     * agregar titulo de PRODUCTOS a productos --- LISTO
     * mover titulo de carrito al medio junto con el link --- LISTO
     * Agregar contador --- LISTO
     * que reste de a uno --- LISTO
     * que sume al carrito la cantidad que aparezca en el contador del detail --- LISTO 
     * Agregar local Storage
     * Toastify  o Sweet Alert (Agregado, Borrado y Agregar funcion de comprar) --- LISTO
     * Estilos al Carrito --- LISTO
     * Toastify para el agregado de productos --- LISTO
    ******************/


    if (items.length === 0) {
        return (
            <div className="divCarritoVacio d-flex flex-column align-items-center">
                <h2 className="m-5 h2Carrito">Carrito  De Compras Vacio</h2>
                <Link className="linkAProductos" to="/productos">Ver Productos</Link>
            </div>
        )
    } else {
        return (
            <div className="divCarritoConProductos d-flex flex-column align-items-center">
                <div className="divProductoEnCarrito m-5">
                    <h2 className="m-3 h2Carrito">Carrito  De Compras
                    </h2> 
                    <h5 className="h5Total">TOTAL -<span className="spanTotal">${totalPrecio.toFixed(2)}</span></h5>
                    <hr/>
                    {items.map((item) => (
                        <div className="m-1 divInfoProducto" key={item.id}>
                            <p className="pTitle">{item.title}</p>
                            <p className="pCategory">{item.category}</p>
                            <p className="pCountCarrito">{item.count}</p>
                            <p className="pPrice">${item.price * item.count}</p>
                            <button className="btnBorrar" onClick={() => handleBorrarDelCarrito(item.id)}><img className="imgBorrar" src="./img/eliminar.png" alt="" /></button>
                        </div>

                    ))}
                    <div className="divBtnsCarrito d-flex justify-content-around align-items-center">

                    <button className="limpiarCarrito" id="btnEliminar" onClick={handleLimpiarCarrito}>Limpiar Carrito</button> 

                     <Link className="btnCarrito" to="/productos">Agregar Mas Productos</Link>

                     <button onClick={showAlert} className="btnCarrito">Comprar</button>

                    </div>
                    
                </div>
          
            </div>

        )

    }
}

/***** EXPORTACIONES *****/

export default Cart