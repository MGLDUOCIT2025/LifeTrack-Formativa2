import {
  Link
} from "react-router-dom";

import {
  useCart
} from "../context/CartContext.jsx";


function Carrito() {

  const {
    carrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    vaciarCarrito,
    cantidadTotal,
    total
  } = useCart();


  return (

    <section className="seccion-general">

      <div className="container">

        <div className="cabecera-pagina">

          <span>
            LIFETRACK STORE
          </span>

          <h1>
            Tu carrito
          </h1>

          <p>
            Revisa tus productos antes de finalizar.
          </p>

        </div>


        {
          carrito.length === 0 ? (

            <div className="carrito-vacio">

              <h2>
                🛒 Tu carrito está vacío
              </h2>

              <Link
                to="/productos"
                className="btn btn-primary"
              >

                Ir a la tienda

              </Link>

            </div>

          ) : (

            <div className="carrito-layout">


              <div className="lista-carrito">

                {
                  carrito.map(
                    producto => (

                      <article
                        key={
                          producto.codigo
                        }
                        className="carrito-item"
                      >

                        <img
                          src={
                            producto.imagen
                          }
                          alt={
                            producto.nombre
                          }
                        />


                        <div className="carrito-info">

                          <strong>
                            {
                              producto.nombre
                            }
                          </strong>

                          <span>
                            {
                              producto.categoria
                            }
                          </span>

                          <strong>
                            $
                            {
                              producto.precio
                                .toLocaleString(
                                  "es-CL"
                                )
                            }
                          </strong>


                          <div className="control-cantidad">

                            <button
                              onClick={
                                () =>
                                  disminuirCantidad(
                                    producto.codigo
                                  )
                              }
                            >
                              -
                            </button>

                            <strong>
                              {
                                producto.cantidad
                              }
                            </strong>

                            <button
                              onClick={
                                () =>
                                  aumentarCantidad(
                                    producto.codigo
                                  )
                              }
                            >
                              +
                            </button>

                          </div>


                          <button
                            className="btn-eliminar"
                            onClick={
                              () =>
                                eliminarProducto(
                                  producto.codigo
                                )
                            }
                          >

                            Eliminar

                          </button>

                        </div>


                        <strong className="subtotal">

                          $

                          {
                            (
                              producto.precio *
                              producto.cantidad
                            ).toLocaleString(
                              "es-CL"
                            )
                          }

                        </strong>

                      </article>

                    )
                  )
                }

              </div>


              <aside className="resumen-carrito">

                <h2>
                  Resumen
                </h2>

                <div>

                  <span>
                    Productos
                  </span>

                  <strong>
                    {cantidadTotal}
                  </strong>

                </div>


                <hr />


                <div className="total-carrito">

                  <span>
                    Total
                  </span>

                  <strong>

                    $

                    {
                      total.toLocaleString(
                        "es-CL"
                      )
                    }

                  </strong>

                </div>


                <button
                  className="btn btn-primary"
                  onClick={
                    () =>
                      alert(
                        "Compra simulada correctamente."
                      )
                  }
                >

                  Finalizar compra

                </button>


                <button
                  className="btn btn-outline-danger"
                  onClick={
                    vaciarCarrito
                  }
                >

                  Vaciar carrito

                </button>


                <Link to="/productos">

                  ← Seguir comprando

                </Link>

              </aside>

            </div>

          )
        }

      </div>

    </section>

  );

}

export default Carrito;