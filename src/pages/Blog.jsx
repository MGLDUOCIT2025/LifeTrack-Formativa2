function Blog() {

  const publicaciones = [

    {
      id: 1,
      categoria: "LifeTrack",
      titulo:
        "Cómo nació LifeTrack",
      texto:
        "LifeTrack nació de la necesidad de organizar una rutina exigente entre trabajo, universidad, gimnasio, boxeo y vida personal.",
      fecha:
        "5 de octubre de 2026"
    },

    {
      id: 2,
      categoria: "Productividad",
      titulo:
        "Organizar el día también es cuidar tu tiempo",
      texto:
        "Planificar las actividades permite visualizar prioridades y aprovechar mejor cada momento del día.",
      fecha:
        "5 de octubre de 2026"
    },

    {
      id: 3,
      categoria: "Hábitos",
      titulo:
        "Pequeños avances pueden generar grandes cambios",
      texto:
        "LifeTrack busca transformar metas grandes en actividades simples que puedan realizarse día a día.",
      fecha:
        "5 de octubre de 2026"
    }

  ];


  return (

    <section className="seccion-general">

      <div className="container">

        <div className="cabecera-pagina">

          <span>
            LIFETRACK BLOG
          </span>

          <h1>
            Historias, organización y progreso
          </h1>

          <p>
            El espacio donde contamos cómo nació
            LifeTrack y compartimos ideas para
            organizar mejor nuestra vida.
          </p>

        </div>


        <div className="grid-blog">

          {
            publicaciones.map(
              publicacion => (

                <article
                  className="blog-card"
                  key={
                    publicacion.id
                  }
                >

                  <span>
                    {
                      publicacion.categoria
                    }
                  </span>

                  <h2>
                    {
                      publicacion.titulo
                    }
                  </h2>

                  <p>
                    {
                      publicacion.texto
                    }
                  </p>

                  <small>
                    {
                      publicacion.fecha
                    }
                  </small>

                </article>

              )
            )
          }

        </div>

      </div>

    </section>

  );

}

export default Blog;