/*
=========================================================
ABOUTME.JSX
Componente reutilizable para información personal.
=========================================================
*/

import {
  Card,
  Row,
  Col,
  Badge,
} from "react-bootstrap";


function AboutMe() {

  /*
  =======================================================
  TECNOLOGÍAS
  =======================================================
  */

  const tecnologias = [

    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "React Bootstrap",
    "SQL",
    "PL/SQL",
    "Kotlin",
    "Git",
    "GitHub",

  ];


  return (

    <Card className="portfolio-about-card">

      <Card.Body>

        <Row className="align-items-center">

          <Col
            xs={12}
            lg={7}
          >

            <p className="portfolio-about-role">

              Estudiante de Ingeniería en Informática

            </p>


            <h3>

              Mario González

            </h3>


            <p>

              Actualmente estudio Ingeniería en
              Informática y desarrollo proyectos
              relacionados con programación,
              desarrollo web, bases de datos y
              aplicaciones.

            </p>


            <p>

              Además cuento con experiencia
              profesional en logística y comercio
              exterior, por lo que busco combinar
              conocimientos de procesos reales
              con soluciones tecnológicas.

            </p>


            <p>

              Mi objetivo es continuar desarrollando
              habilidades en programación,
              automatización, bases de datos,
              desarrollo web y creación de
              soluciones digitales.

            </p>

          </Col>


          <Col
            xs={12}
            lg={5}
            className="mt-4 mt-lg-0"
          >

            <div className="portfolio-skills">

              <h4>

                Tecnologías

              </h4>


              <div className="portfolio-badges">

                {

                  tecnologias.map(
                    (tecnologia) => (

                      <Badge
                        bg="primary"
                        key={tecnologia}
                      >

                        {tecnologia}

                      </Badge>

                    )
                  )

                }

              </div>

            </div>

          </Col>

        </Row>

      </Card.Body>

    </Card>

  );

}


export default AboutMe;