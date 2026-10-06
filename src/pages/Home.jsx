import {
  Link
} from "react-router-dom";

import ProductCard
  from "../components/ProductCard.jsx";

import {
  useProducts
} from "../context/ProductContext.jsx";


function Home() {

  const {
    productos
  } = useProducts();


  const productosDestacados =
    productos.slice(0, 4);


  return (

    <>

      {/* ==================================================
          HERO
      ================================================== */}

      <section
        className="hero-lifetrack"
      >

        <div
          className="hero-overlay"
        >

          <div className="container">

            <div
              className="hero-contenido"
            >

              <span
                className="hero-etiqueta"
              >

                TU VIDA, EN UN SOLO LUGAR

              </span>


              <h1>

                Organiza tu día,

                <span>
                  cumple tus metas.
                </span>

              </h1>


              <p>

                Gestiona tu trabajo,
                estudios, gimnasio,
                boxeo y vida personal
                desde una sola plataforma.

                Además, encuentra productos
                que pueden acompañarte
                en cada etapa de tu rutina.

              </p>


              <div
                className="hero-botones"
              >

                <Link
                  to="/mi-dia"
                  className="btn btn-primary btn-lg"
                >

                  📅 Comenzar ahora

                </Link>


                <Link
                  to="/productos"
                  className="btn btn-outline-light btn-lg"
                >

                  🛒 Ver tienda

                </Link>

              </div>


              <div
                className="hero-beneficios"
              >

                <span>
                  📈 Más productividad
                </span>

                <span>
                  ❤️ Mejores hábitos
                </span>

                <span>
                  🌱 Vida equilibrada
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          RUTINA
      ================================================== */}

      <section
        className="seccion-general"
      >

        <div className="container">

          <div
            className="titulo-seccion"
          >

            <span>
              ORGANIZA TU RUTINA
            </span>

            <h2>
              Todo lo importante en un solo lugar
            </h2>

          </div>


          <div
            className="grid-areas"
          >


            <article
              className="area-card area-trabajo"
            >

              <div
                className="area-icono"
              >
                💼
              </div>

              <h3>
                Trabajo
              </h3>

              <p>
                Organiza horarios,
                reuniones y pendientes.
              </p>

              <Link to="/mi-dia">
                Ver más →
              </Link>

            </article>


            <article
              className="area-card area-estudio"
            >

              <div
                className="area-icono"
              >
                🎓
              </div>

              <h3>
                Estudios
              </h3>

              <p>
                Gestiona tareas,
                pruebas y clases.
              </p>

              <Link to="/tareas">
                Ver más →
              </Link>

            </article>


            <article
              className="area-card area-gimnasio"
            >

              <div
                className="area-icono"
              >
                🏋️
              </div>

              <h3>
                Gimnasio
              </h3>

              <p>
                Planifica entrenamientos
                y controla tus metas.
              </p>

              <Link to="/mi-dia">
                Ver más →
              </Link>

            </article>


            <article
              className="area-card area-boxeo"
            >

              <div
                className="area-icono"
              >
                🥊
              </div>

              <h3>
                Boxeo
              </h3>

              <p>
                Registra entrenamientos
                y mejora cada día.
              </p>

              <Link to="/mi-dia">
                Ver más →
              </Link>

            </article>

          </div>

        </div>

      </section>


      {/* ==================================================
          TIENDA
      ================================================== */}

      <section
        className="seccion-productos-home"
      >

        <div className="container">

          <div
            className="cabecera-productos-home"
          >

            <div>

              <span>
                LIFETRACK STORE
              </span>

              <h2>
                Productos para acompañar tus metas
              </h2>

              <p>
                Todo lo que necesitas
                para tu día a día.
              </p>

            </div>


            <Link
              to="/productos"
              className="btn btn-primary"
            >

              Ver todos los productos →

            </Link>

          </div>


          <div
            className="grid-productos"
          >

            {
              productosDestacados.map(
                producto => (

                  <ProductCard
                    key={
                      producto.codigo
                    }
                    producto={
                      producto
                    }
                  />

                )
              )
            }

          </div>

        </div>

      </section>


      {/* ==================================================
          ESTADÍSTICAS
      ================================================== */}

      <section
        className="estadisticas-home"
      >

        <div className="container">

          <div
            className="grid-estadisticas"
          >

            <div>

              <strong>
                +500
              </strong>

              <span>
                Usuarios activos
              </span>

            </div>


            <div>

              <strong>
                +1.000
              </strong>

              <span>
                Metas cumplidas
              </span>

            </div>


            <div>

              <strong>
                4.8
              </strong>

              <span>
                Valoración promedio
              </span>

            </div>


            <div>

              <strong>
                95%
              </strong>

              <span>
                Recomiendan LifeTrack
              </span>

            </div>

          </div>

        </div>

      </section>

    </>

  );

}


export default Home;