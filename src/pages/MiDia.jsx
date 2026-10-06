function MiDia() {

  const actividades = [

    {
      hora: "08:00",
      icono: "🚗",
      titulo: "Traslado",
      descripcion: "Ir al trabajo",
      estado: "Pendiente"
    },

    {
      hora: "09:00",
      icono: "💼",
      titulo: "Trabajo",
      descripcion: "Jornada laboral",
      estado: "En curso"
    },

    {
      hora: "18:00",
      icono: "✅",
      titulo: "Salida trabajo",
      descripcion: "Fin de jornada",
      estado: "Pendiente"
    },

    {
      hora: "19:00",
      icono: "📚",
      titulo: "Universidad",
      descripcion: "Clases",
      estado: "Pendiente"
    },

    {
      hora: "22:30",
      icono: "🏁",
      titulo: "Fin de clases",
      descripcion: "Día completado",
      estado: "Pendiente"
    }

  ];


  return (

    <section className="pagina-mi-dia">

      <div className="container">

        <div className="cabecera-pagina">

          <span>
            TU ORGANIZACIÓN
          </span>

          <h1>
            📅 Mi Día
          </h1>

          <p>
            Organiza tus actividades y mantén
            el control de tu rutina diaria.
          </p>

        </div>


        <div className="panel-dia">


          <div className="agenda-dia">

            {
              actividades.map(
                (actividad, index) => (

                  <div
                    className="actividad-dia"
                    key={index}
                  >

                    <strong className="hora-dia">

                      {actividad.hora}

                    </strong>


                    <div className="icono-dia">

                      {actividad.icono}

                    </div>


                    <div className="info-dia">

                      <strong>
                        {actividad.titulo}
                      </strong>

                      <span>
                        {actividad.descripcion}
                      </span>

                    </div>


                    <span
                      className={
                        actividad.estado ===
                        "En curso"
                          ? "estado estado-curso"
                          : "estado"
                      }
                    >

                      {actividad.estado}

                    </span>

                  </div>

                )
              )
            }

          </div>


          <aside className="actividades-laterales">

            <h2>
              Mis actividades
            </h2>


            <div className="actividad-lateral gimnasio">

              🏋️

              <div>

                <strong>
                  Gimnasio
                </strong>

                <span>
                  Entrenamiento y salud
                </span>

              </div>

            </div>


            <div className="actividad-lateral boxeo">

              🥊

              <div>

                <strong>
                  Boxeo
                </strong>

                <span>
                  Entrenamiento de boxeo
                </span>

              </div>

            </div>


            <div className="actividad-lateral estudio">

              🎓

              <div>

                <strong>
                  Estudio
                </strong>

                <span>
                  Tareas, clases y pruebas
                </span>

              </div>

            </div>


            <div className="actividad-lateral tareas">

              ✅

              <div>

                <strong>
                  Tareas pendientes
                </strong>

                <span>
                  Revisa tus pendientes
                </span>

              </div>

            </div>

          </aside>

        </div>

      </div>

    </section>

  );

}

export default MiDia;