import {
  useState
} from "react";

import {
  Link
} from "react-router-dom";

import {
  useAuth
} from "../context/AuthContext.jsx";

import {
  useProducts
} from "../context/ProductContext.jsx";


const productoVacio = {

  codigo: "",

  nombre: "",

  categoria: "Fitness",

  precio: "",

  stock: "",

  icono: "📦",

  imagen: "",

  descripcion: ""

};


function Admin() {

  const {
    usuario
  } = useAuth();


  const {
    productos,
    agregarProducto,
    editarProducto,
    eliminarProducto,
    restaurarProductos
  } = useProducts();


  const [seccion, setSeccion] =
    useState("resumen");


  const [formularioVisible,
    setFormularioVisible] =
    useState(false);


  const [modoEdicion,
    setModoEdicion] =
    useState(false);


  const [codigoOriginal,
    setCodigoOriginal] =
    useState("");


  const [formulario,
    setFormulario] =
    useState(
      productoVacio
    );


  const [mensaje,
    setMensaje] =
    useState("");


  /* =====================================================
     SEGURIDAD
     ===================================================== */

  if (
    !usuario ||
    usuario.rol !== "admin"
  ) {

    return (

      <section
        className="seccion-general"
      >

        <div className="container">

          <div
            className="alert alert-danger"
          >

            No tienes permisos para
            acceder al panel administrador.

          </div>


          <Link
            to="/login"
            className="btn btn-primary"
          >

            Iniciar sesión

          </Link>

        </div>

      </section>

    );

  }


  /* =====================================================
     USUARIOS
     ===================================================== */

  const usuarios =
    JSON.parse(
      localStorage.getItem(
        "usuarios"
      )
    ) || [];


  /* =====================================================
     CAMBIO INPUTS
     ===================================================== */

  function cambiarCampo(
    event
  ) {

    const {
      name,
      value
    } = event.target;


    setFormulario({

      ...formulario,

      [name]: value

    });

  }


  /* =====================================================
     NUEVO PRODUCTO
     ===================================================== */

  function abrirNuevoProducto() {

    setModoEdicion(false);

    setCodigoOriginal("");

    setFormulario(
      productoVacio
    );

    setMensaje("");

    setFormularioVisible(true);

  }


  /* =====================================================
     EDITAR
     ===================================================== */

  function abrirEditar(
    producto
  ) {

    setModoEdicion(true);

    setCodigoOriginal(
      producto.codigo
    );

    setFormulario({
      ...producto
    });

    setMensaje("");

    setFormularioVisible(true);

  }


  /* =====================================================
     CANCELAR
     ===================================================== */

  function cancelarFormulario() {

    setFormularioVisible(false);

    setModoEdicion(false);

    setCodigoOriginal("");

    setFormulario(
      productoVacio
    );

    setMensaje("");

  }


  /* =====================================================
     GUARDAR
     ===================================================== */

  function guardarProducto(
    event
  ) {

    event.preventDefault();


    if (
      !formulario.codigo.trim() ||
      !formulario.nombre.trim() ||
      !formulario.descripcion.trim()
    ) {

      setMensaje(
        "Debes completar los campos obligatorios."
      );

      return;

    }


    if (
      Number(formulario.precio) <= 0
    ) {

      setMensaje(
        "El precio debe ser mayor que cero."
      );

      return;

    }


    if (
      Number(formulario.stock) < 0
    ) {

      setMensaje(
        "El stock no puede ser negativo."
      );

      return;

    }


    const productoPreparado = {

      codigo:
        formulario.codigo
          .trim()
          .toUpperCase(),

      nombre:
        formulario.nombre
          .trim(),

      categoria:
        formulario.categoria,

      precio:
        Number(
          formulario.precio
        ),

      stock:
        Number(
          formulario.stock
        ),

      icono:
        formulario.icono ||
        "📦",

      imagen:
        formulario.imagen
          .trim(),

      descripcion:
        formulario.descripcion
          .trim()

    };


    if (modoEdicion) {

      editarProducto(
        codigoOriginal,
        productoPreparado
      );


      setMensaje(
        "Producto actualizado correctamente."
      );

    } else {

      const resultado =
        agregarProducto(
          productoPreparado
        );


      if (!resultado.ok) {

        setMensaje(
          resultado.mensaje
        );

        return;

      }


      setMensaje(
        "Producto agregado correctamente."
      );

    }


    setFormulario(
      productoVacio
    );

    setModoEdicion(false);

    setCodigoOriginal("");

    setFormularioVisible(false);

  }


  /* =====================================================
     ELIMINAR
     ===================================================== */

  function confirmarEliminar(
    producto
  ) {

    const confirmar =
      window.confirm(

        `¿Deseas eliminar "${producto.nombre}"?`

      );


    if (!confirmar) {

      return;

    }


    eliminarProducto(
      producto.codigo
    );

  }


  /* =====================================================
     RENDER
     ===================================================== */

  return (

    <section
      className="seccion-general"
    >

      <div className="container">

        {/* =================================================
            CABECERA
        ================================================= */}

        <div
          className="cabecera-pagina"
        >

          <span>
            LIFETRACK ADMIN
          </span>

          <h1>
            Panel de control
          </h1>

          <p>
            Administración general
            de LifeTrack.
          </p>

        </div>


        {/* =================================================
            NAVEGACIÓN ADMIN
        ================================================= */}

        <div
          className="admin-menu"
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "30px"
          }}
        >

          <button
            className={
              seccion === "resumen"
                ? "btn btn-primary"
                : "btn btn-outline-primary"
            }
            onClick={
              () =>
                setSeccion(
                  "resumen"
                )
            }
          >

            📊 Resumen

          </button>


          <button
            className={
              seccion === "productos"
                ? "btn btn-primary"
                : "btn btn-outline-primary"
            }
            onClick={
              () =>
                setSeccion(
                  "productos"
                )
            }
          >

            📦 Productos

          </button>


          <button
            className={
              seccion === "usuarios"
                ? "btn btn-primary"
                : "btn btn-outline-primary"
            }
            onClick={
              () =>
                setSeccion(
                  "usuarios"
                )
            }
          >

            👥 Usuarios

          </button>

        </div>


        {/* =================================================
            RESUMEN
        ================================================= */}

        {
          seccion === "resumen" && (

            <>

              <div
                className="admin-estadisticas"
              >

                <div>

                  <span>
                    📦
                  </span>

                  <p>
                    Productos
                  </p>

                  <strong>
                    {
                      productos.length
                    }
                  </strong>

                </div>


                <div>

                  <span>
                    👥
                  </span>

                  <p>
                    Usuarios
                  </p>

                  <strong>
                    {
                      usuarios.length
                    }
                  </strong>

                </div>


                <div>

                  <span>
                    🛒
                  </span>

                  <p>
                    Plataforma
                  </p>

                  <strong>
                    Activa
                  </strong>

                </div>

              </div>


              <div
                className="admin-tabla"
              >

                <h2>
                  Productos registrados
                </h2>


                <table>

                  <thead>

                    <tr>

                      <th>
                        Código
                      </th>

                      <th>
                        Producto
                      </th>

                      <th>
                        Categoría
                      </th>

                      <th>
                        Precio
                      </th>

                      <th>
                        Stock
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {
                      productos.map(
                        producto => (

                          <tr
                            key={
                              producto.codigo
                            }
                          >

                            <td>
                              {
                                producto.codigo
                              }
                            </td>

                            <td>
                              {
                                producto.icono
                              }
                              {" "}
                              {
                                producto.nombre
                              }
                            </td>

                            <td>
                              {
                                producto.categoria
                              }
                            </td>

                            <td>

                              $

                              {
                                producto.precio
                                  .toLocaleString(
                                    "es-CL"
                                  )
                              }

                            </td>

                            <td>
                              {
                                producto.stock
                              }
                            </td>

                          </tr>

                        )
                      )
                    }

                  </tbody>

                </table>

              </div>

            </>

          )
        }


        {/* =================================================
            PRODUCTOS
        ================================================= */}

        {
          seccion ===
          "productos" && (

            <>

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                  marginBottom: "25px",
                  gap: "20px"
                }}
              >

                <div>

                  <h2>
                    Gestión de productos
                  </h2>

                  <p>
                    Agrega, edita o
                    elimina productos.
                  </p>

                </div>


                <button
                  className="btn btn-primary"
                  onClick={
                    abrirNuevoProducto
                  }
                >

                  + Nuevo producto

                </button>

              </div>


              {/* FORMULARIO */}

              {
                formularioVisible && (

                  <div
                    className="admin-tabla"
                    style={{
                      marginBottom:
                        "30px"
                    }}
                  >

                    <h2>

                      {
                        modoEdicion
                          ? "Editar producto"
                          : "Agregar producto"
                      }

                    </h2>


                    {
                      mensaje && (

                        <div
                          className="alert alert-warning"
                        >

                          {mensaje}

                        </div>

                      )
                    }


                    <form
                      onSubmit={
                        guardarProducto
                      }
                    >

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(2, 1fr)",
                          gap: "20px"
                        }}
                      >


                        <div>

                          <label>
                            Código
                          </label>

                          <input
                            className="form-control"
                            name="codigo"
                            value={
                              formulario.codigo
                            }
                            onChange={
                              cambiarCampo
                            }
                            placeholder="Ej: BOX002"
                          />

                        </div>


                        <div>

                          <label>
                            Nombre
                          </label>

                          <input
                            className="form-control"
                            name="nombre"
                            value={
                              formulario.nombre
                            }
                            onChange={
                              cambiarCampo
                            }
                            placeholder="Nombre del producto"
                          />

                        </div>


                        <div>

                          <label>
                            Precio
                          </label>

                          <input
                            className="form-control"
                            name="precio"
                            type="number"
                            min="1"
                            value={
                              formulario.precio
                            }
                            onChange={
                              cambiarCampo
                            }
                          />

                        </div>


                        <div>

                          <label>
                            Stock
                          </label>

                          <input
                            className="form-control"
                            name="stock"
                            type="number"
                            min="0"
                            value={
                              formulario.stock
                            }
                            onChange={
                              cambiarCampo
                            }
                          />

                        </div>


                        <div>

                          <label>
                            Categoría
                          </label>

                          <select
                            className="form-control"
                            name="categoria"
                            value={
                              formulario.categoria
                            }
                            onChange={
                              cambiarCampo
                            }
                          >

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


                        <div>

                          <label>
                            Icono
                          </label>

                          <input
                            className="form-control"
                            name="icono"
                            value={
                              formulario.icono
                            }
                            onChange={
                              cambiarCampo
                            }
                            placeholder="Ej: 🥊"
                          />

                        </div>


                        <div
                          style={{
                            gridColumn:
                              "1 / -1"
                          }}
                        >

                          <label>
                            URL de imagen
                          </label>

                          <input
                            className="form-control"
                            name="imagen"
                            value={
                              formulario.imagen
                            }
                            onChange={
                              cambiarCampo
                            }
                            placeholder="https://..."
                          />

                        </div>


                        <div
                          style={{
                            gridColumn:
                              "1 / -1"
                          }}
                        >

                          <label>
                            Descripción
                          </label>

                          <textarea
                            className="form-control"
                            rows="4"
                            name="descripcion"
                            value={
                              formulario.descripcion
                            }
                            onChange={
                              cambiarCampo
                            }
                          />

                        </div>

                      </div>


                      <div
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          gap: "10px"
                        }}
                      >

                        <button
                          type="submit"
                          className="btn btn-primary"
                        >

                          {
                            modoEdicion
                              ? "Guardar cambios"
                              : "Guardar producto"
                          }

                        </button>


                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={
                            cancelarFormulario
                          }
                        >

                          Cancelar

                        </button>

                      </div>

                    </form>

                  </div>

                )
              }


              {/* TABLA */}

              <div
                className="admin-tabla"
              >

                <table>

                  <thead>

                    <tr>

                      <th>
                        Código
                      </th>

                      <th>
                        Producto
                      </th>

                      <th>
                        Categoría
                      </th>

                      <th>
                        Precio
                      </th>

                      <th>
                        Stock
                      </th>

                      <th>
                        Acciones
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {
                      productos.map(
                        producto => (

                          <tr
                            key={
                              producto.codigo
                            }
                          >

                            <td>
                              {
                                producto.codigo
                              }
                            </td>

                            <td>

                              {
                                producto.icono
                              }

                              {" "}

                              {
                                producto.nombre
                              }

                            </td>

                            <td>
                              {
                                producto.categoria
                              }
                            </td>

                            <td>

                              $

                              {
                                producto.precio
                                  .toLocaleString(
                                    "es-CL"
                                  )
                              }

                            </td>

                            <td>
                              {
                                producto.stock
                              }
                            </td>

                            <td>

                              <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={
                                  () =>
                                    abrirEditar(
                                      producto
                                    )
                                }
                              >

                                Editar

                              </button>

                              {" "}

                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={
                                  () =>
                                    confirmarEliminar(
                                      producto
                                    )
                                }
                              >

                                Eliminar

                              </button>

                            </td>

                          </tr>

                        )
                      )
                    }

                  </tbody>

                </table>


                <div
                  style={{
                    marginTop: "20px"
                  }}
                >

                  <button
                    className="btn btn-outline-secondary"
                    onClick={
                      restaurarProductos
                    }
                  >

                    Restaurar productos originales

                  </button>

                </div>

              </div>

            </>

          )
        }


        {/* =================================================
            USUARIOS
        ================================================= */}

        {
          seccion ===
          "usuarios" && (

            <div
              className="admin-tabla"
            >

              <h2>
                Usuarios registrados
              </h2>


              {
                usuarios.length === 0 ? (

                  <p>
                    No existen usuarios registrados.
                  </p>

                ) : (

                  <table>

                    <thead>

                      <tr>

                        <th>
                          RUN
                        </th>

                        <th>
                          Nombre
                        </th>

                        <th>
                          Correo
                        </th>

                        <th>
                          Región
                        </th>

                        <th>
                          Comuna
                        </th>

                        <th>
                          Rol
                        </th>

                      </tr>

                    </thead>


                    <tbody>

                      {
                        usuarios.map(
                          usuarioRegistrado => (

                            <tr
                              key={
                                usuarioRegistrado.id
                              }
                            >

                              <td>
                                {
                                  usuarioRegistrado.run
                                }
                              </td>

                              <td>

                                {
                                  usuarioRegistrado.nombre
                                }

                                {" "}

                                {
                                  usuarioRegistrado.apellido
                                }

                              </td>

                              <td>
                                {
                                  usuarioRegistrado.correo
                                }
                              </td>

                              <td>
                                {
                                  usuarioRegistrado.region
                                }
                              </td>

                              <td>
                                {
                                  usuarioRegistrado.comuna
                                }
                              </td>

                              <td>
                                {
                                  usuarioRegistrado.rol
                                }
                              </td>

                            </tr>

                          )
                        )
                      }

                    </tbody>

                  </table>

                )
              }

            </div>

          )
        }

      </div>

    </section>

  );

}


export default Admin;