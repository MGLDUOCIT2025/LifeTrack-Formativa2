import {
    Card
} from "react-bootstrap";

function NewsCard({ noticia }) {

    return (

        <Card className="h-100 shadow portfolio-news-card">

            <Card.Body>

                <Card.Title>
                    {noticia.titulo}
                </Card.Title>

                <Card.Subtitle className="mb-3 text-muted">

                    {noticia.fecha}

                </Card.Subtitle>

                <Card.Text>

                    {noticia.contenido}

                </Card.Text>

            </Card.Body>

        </Card>

    );

}

export default NewsCard;