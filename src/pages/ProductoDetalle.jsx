import {
  Link,
  useParams
} from "react-router-dom";

import {
  useProducts
} from "../context/ProductContext.jsx";

import {
  useCart
} from "../context/CartContext.jsx";


function ProductoDetalle() {

  const {
    codigo
  } = useParams();


  const {
    obtenerProducto
  } = useProducts();


  const {
    agregarProducto
  } = useCart();


  const producto =
    obtenerProducto(
      codigo
    );


  /* =====================================================
     PRODUCTO NO EXISTE
     ===================================================== */

  if (!producto) {

    return (

      <section
        className="seccion-general"
      >

        <div className="container">

          <div
            className="carrito-vacio"
          >

            <h1>
              Producto no encontrado
            </h1>

            <p>
              El producto solicitado
              no existe o fue eliminado.
            </p>

            <Link
              to="/productos"
              className="btn btn-primary"
            >

              Volver a la tienda

            </Link>

          </div>

        </div>

      </section>

    );

  }


  /* =====================================================
     AGREGAR AL CARRITO
     ===================================================== */

  function agregarAlCarrito() {

    agregarProducto(
      producto
    );

    alert(
      `${producto.nombre} fue agregado al carrito.`
    );

  }


  return (

    <section
      className="detalle-producto"
    >

      <div className="container">

        <div
          className="detalle-producto-grid"
        >


          {/* IMAGEN */}

          <div
            className="detalle-imagen"
          >

            {
              producto.imagen ? (

                <img
                  src={
                    producto.imagen
                  }
                  alt={
                    producto.nombre
                  }
                />

              ) : (

                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "120px"
                  }}
                >

                  {
                    producto.icono ||
                    "📦"
                  }

                </div>

              )
            }

          </div>


          {/* INFORMACIÓN */}

          <div
            className="detalle-info"
          >

            <span>
              {
                producto.categoria
              }
            </span>


            <h1>
              {
                producto.nombre
              }
            </h1>


            <p>
              {
                producto.descripcion
              }
            </p>


            <div
              className="detalle-stock"
            >

              Stock disponible:

              <strong>

                {" "}

                {
                  producto.stock
                }

              </strong>

            </div>


            <div
              className="detalle-precio"
            >

              $

              {
                producto.precio
                  .toLocaleString(
                    "es-CL"
                  )
              }

            </div>


            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={
                agregarAlCarrito
              }
            >

              🛒 Agregar al carrito

            </button>


            <Link
              to="/productos"
              className="btn btn-outline-primary"
            >

              ← Volver a productos

            </Link>

          </div>

        </div>

      </div>

    </section>

  );

}


export default ProductoDetalle;