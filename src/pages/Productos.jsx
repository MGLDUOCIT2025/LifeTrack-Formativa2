import {
  useMemo,
  useState
} from "react";

import ProductCard
  from "../components/ProductCard.jsx";

import {
  useProducts
} from "../context/ProductContext.jsx";


function Productos() {

  const {
    productos
  } = useProducts();


  const [busqueda, setBusqueda] =
    useState("");

  const [categoria, setCategoria] =
    useState("Todas");


  /* =====================================================
     FILTRADO
     ===================================================== */

  const productosFiltrados =
    useMemo(() => {

      return productos.filter(
        producto => {

          const coincideBusqueda =
            producto.nombre
              .toLowerCase()
              .includes(
                busqueda.toLowerCase()
              );


          const coincideCategoria =
            categoria === "Todas" ||
            producto.categoria ===
              categoria;


          return (
            coincideBusqueda &&
            coincideCategoria
          );

        }
      );

    }, [
      productos,
      busqueda,
      categoria
    ]);


  return (

    <>

      {/* ================================================
          PORTADA
      ================================================ */}

      <section
        className="portada-pagina"
      >

        <div className="container">

          <span>
            LIFETRACK STORE
          </span>

          <h1>
            Productos para acompañar tus metas
          </h1>

          <p>
            Encuentra productos para estudio,
            trabajo, gimnasio y boxeo.
          </p>

        </div>

      </section>


      {/* ================================================
          PRODUCTOS
      ================================================ */}

      <section
        className="seccion-general"
      >

        <div className="container">

          <div
            className="barra-productos"
          >

            <div>

              <h2>
                Nuestros productos
              </h2>

              <p>
                {
                  productosFiltrados.length
                } productos encontrados
              </p>

            </div>


            <div
              className="filtros-productos"
            >

              <input
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={
                  event =>
                    setBusqueda(
                      event.target.value
                    )
                }
              />


              <select
                value={categoria}
                onChange={
                  event =>
                    setCategoria(
                      event.target.value
                    )
                }
              >

                <option value="Todas">
                  Todas las categorías
                </option>

                <option value="Fitness">
                  Fitness
                </option>

                <option value="Estudio">
                  Estudio
                </option>

                <option value="Trabajo">
                  Trabajo
                </option>

                <option value="Boxeo">
                  Boxeo
                </option>

              </select>

            </div>

          </div>


          {
            productosFiltrados.length ===
            0 ? (

              <div
                className="carrito-vacio"
              >

                <h2>
                  No se encontraron productos
                </h2>

                <p>
                  Prueba con otra búsqueda
                  o categoría.
                </p>

              </div>

            ) : (

              <div
                className="grid-productos"
              >

                {
                  productosFiltrados.map(
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

            )
          }

        </div>

      </section>

    </>

  );

}


export default Productos;