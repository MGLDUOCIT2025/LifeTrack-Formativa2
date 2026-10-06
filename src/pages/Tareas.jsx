import {
  useState
} from "react";


function Tareas() {

  const [tareas, setTareas] =
    useState([
      {
        id: 1,
        texto: "Terminar proyecto Full Stack II",
        completada: false
      },
      {
        id: 2,
        texto: "Estudiar para Taller de Base de Datos",
        completada: false
      },
      {
        id: 3,
        texto: "Ir al gimnasio",
        completada: true
      }
    ]);


  const [nuevaTarea, setNuevaTarea] =
    useState("");


  function agregarTarea(event) {

    event.preventDefault();


    if (!nuevaTarea.trim()) {
      return;
    }


    setTareas([

      ...tareas,

      {
        id: Date.now(),
        texto: nuevaTarea,
        completada: false
      }

    ]);


    setNuevaTarea("");

  }


  function cambiarEstado(id) {

    setTareas(

      tareas.map(tarea =>

        tarea.id === id
          ? {
              ...tarea,
              completada:
                !tarea.completada
            }
          : tarea

      )

    );

  }


  function eliminarTarea(id) {

    setTareas(
      tareas.filter(
        tarea =>
          tarea.id !== id
      )
    );

  }


  return (

    <section className="seccion-general">

      <div className="container">

        <div className="cabecera-pagina">

          <span>
            PRODUCTIVIDAD
          </span>

          <h1>
            ✅ Mis Tareas
          </h1>

          <p>
            Registra y controla tus pendientes.
          </p>

        </div>


        <form
          className="form-nueva-tarea"
          onSubmit={agregarTarea}
        >

          <input
            type="text"
            placeholder="Escribe una nueva tarea..."
            value={nuevaTarea}
            onChange={
              event =>
                setNuevaTarea(
                  event.target.value
                )
            }
          />


          <button
            type="submit"
            className="btn btn-primary"
          >

            + Agregar tarea

          </button>

        </form>


        <div className="lista-tareas">

          {
            tareas.map(tarea => (

              <div
                className="tarea-card"
                key={tarea.id}
              >

                <input
                  type="checkbox"
                  checked={
                    tarea.completada
                  }
                  onChange={
                    () =>
                      cambiarEstado(
                        tarea.id
                      )
                  }
                />


                <span
                  className={
                    tarea.completada
                      ? "tarea-completada"
                      : ""
                  }
                >

                  {tarea.texto}

                </span>


                <button
                  type="button"
                  onClick={
                    () =>
                      eliminarTarea(
                        tarea.id
                      )
                  }
                >

                  Eliminar

                </button>

              </div>

            ))
          }

        </div>

      </div>

    </section>

  );

}

export default Tareas;