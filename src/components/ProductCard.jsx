import {
  Link
} from "react-router-dom";

import {
  useCart
} from "../context/CartContext";


function ProductCard({ producto }) {

  /* ====================================================
     ACCESO AL CARRITO
     ==================================================== */

  const {
    agregarProducto
  } = useCart();


  /* ====================================================
     AGREGAR PRODUCTO
     ==================================================== */

  function agregarAlCarrito() {

    agregarProducto(producto);

  }


  return (

    <article className="producto-card">


      {/* =============================================
          IMAGEN
      ============================================= */}

      <div className="producto-imagen-contenedor">

        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="producto-imagen"
        />

      </div>


      {/* =============================================
          INFORMACIÓN
      ============================================= */}

      <div className="producto-contenido">


        <span className="producto-categoria">

          {producto.categoria}

        </span>


        <h3>

          {producto.nombre}

        </h3>


        <p>

          {producto.descripcion}

        </p>


        <div className="producto-stock">

          Stock disponible:

          <strong>

            {" "}
            {producto.stock}

          </strong>

        </div>


        <div className="producto-precio">

          $

          {
            producto.precio.toLocaleString(
              "es-CL"
            )
          }

        </div>


        {/* ===========================================
            BOTONES
        =========================================== */}

        <div className="producto-botones">


          <Link
            to={`/producto/${producto.codigo}`}
            className="btn btn-outline-primary"
          >

            Ver detalle

          </Link>


          <button
            type="button"
            className="btn btn-primary"
            onClick={agregarAlCarrito}
          >

            🛒 Agregar

          </button>


        </div>


      </div>


    </article>

  );

}


export default ProductCard;