/*
=========================================================
PORTFOLIOPROJECTCARD.JSX

Componente reutilizable para mostrar proyectos.

Recibe la información mediante props.

Este componente acepta tanto:
- nombre
- titulo

Esto permite utilizar los proyectos reales del JSON
y también los datos utilizados en las pruebas.
=========================================================
*/

import {
  Card,
  Button,
} from "react-bootstrap";


function PortfolioProjectCard({ proyecto }) {

  /*
  =========================================================
  NOMBRE DEL PROYECTO

  El JSON puede utilizar "nombre".
  Las pruebas pueden utilizar "titulo".

  Se aceptan ambas propiedades.
  =========================================================
  */

  const nombreProyecto =
    proyecto.nombre ||
    proyecto.titulo ||
    "";


  return (

    <Card className="portfolio-project-card h-100">

      {/* ==============================================
          IMAGEN
      ============================================== */}

      <Card.Img
        variant="top"
        src={proyecto.imagen}
        alt={nombreProyecto}
        className="portfolio-project-image"
      />


      <Card.Body className="d-flex flex-column">

        {/* ==============================================
            TÍTULO
        ============================================== */}

        <Card.Title>

          {nombreProyecto}

        </Card.Title>


        {/* ==============================================
            DESCRIPCIÓN
        ============================================== */}

        <Card.Text>

          {proyecto.descripcion}

        </Card.Text>


        {/* ==============================================
            TECNOLOGÍAS
        ============================================== */}

        <div className="portfolio-project-tech">

          <strong>

            Tecnologías utilizadas:

          </strong>


          <p>

            {proyecto.tecnologias}

          </p>

        </div>


        {/* ==============================================
            BOTÓN DEL PROYECTO
        ============================================== */}

        <Button
          href={proyecto.enlace}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="mt-auto"
        >

          Ver proyecto

        </Button>

      </Card.Body>

    </Card>

  );

}


export default PortfolioProjectCard;