/*
=========================================================
NEWSCARD.JSX

Tarjeta reutilizable de noticias.

La información llega mediante props.

Este componente acepta tanto:
- descripcion
- contenido

Esto permite trabajar con el JSON del proyecto
y también con las pruebas unitarias.
=========================================================
*/

import {
  Card,
  Badge,
} from "react-bootstrap";


function NewsCard({ noticia }) {

  /*
  =========================================================
  TEXTO DE LA NOTICIA

  Algunas noticias utilizan "descripcion"
  y las pruebas pueden utilizar "contenido".

  Se aceptan ambas propiedades.
  =========================================================
  */

  const textoNoticia =
    noticia.descripcion ||
    noticia.contenido ||
    "";


  return (

    <Card className="portfolio-news-card h-100">

      <Card.Body>

        {/* ==============================================
            CATEGORÍA
        ============================================== */}

        <div className="portfolio-news-top">

          <Badge bg="primary">

            {noticia.categoria}

          </Badge>

        </div>


        {/* ==============================================
            TÍTULO
        ============================================== */}

        <Card.Title>

          {noticia.titulo}

        </Card.Title>


        {/* ==============================================
            FECHA
        ============================================== */}

        <p className="portfolio-news-date">

          {noticia.fecha}

        </p>


        {/* ==============================================
            CONTENIDO
        ============================================== */}

        <Card.Text>

          {textoNoticia}

        </Card.Text>

      </Card.Body>

    </Card>

  );

}


export default NewsCard;