import {
  useState
} from "react";


function Contacto() {

  const [enviado, setEnviado] =
    useState(false);


  function enviarFormulario(event) {

    event.preventDefault();

    setEnviado(true);

    event.target.reset();

  }


  return (

    <section className="seccion-general">

      <div className="container">

        <div className="cabecera-pagina">

          <span>
            CONTACTO
          </span>

          <h1>
            Hablemos
          </h1>

          <p>
            ¿Tienes alguna pregunta,
            sugerencia o comentario sobre LifeTrack?
          </p>

        </div>


        <div className="contacto-grid">

          <div className="contacto-info">

            <h2>
              LifeTrack
            </h2>

            <p>
              Estamos construyendo una plataforma
              enfocada en productividad,
              organización y bienestar.
            </p>

            <p>
              📧 contacto@lifetrack.cl
            </p>

            <p>
              📍 Santiago, Chile
            </p>

          </div>


          <form
            className="formulario-contacto"
            onSubmit={enviarFormulario}
          >

            {
              enviado && (

                <div className="alert alert-success">

                  Mensaje enviado correctamente.

                </div>

              )
            }


            <label>
              Nombre
            </label>

            <input
              type="text"
              required
            />


            <label>
              Correo electrónico
            </label>

            <input
              type="email"
              required
            />


            <label>
              Mensaje
            </label>

            <textarea
              rows="5"
              required
            />


            <button
              className="btn btn-primary"
              type="submit"
            >

              Enviar mensaje

            </button>

          </form>

        </div>

      </div>

    </section>

  );

}

export default Contacto;