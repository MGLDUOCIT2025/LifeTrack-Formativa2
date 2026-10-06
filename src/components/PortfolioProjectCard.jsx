import {
    Button,
    Card
} from "react-bootstrap";

function PortfolioProjectCard({ proyecto }) {

    return (

        <Card className="h-100 shadow portfolio-project-card">

            <Card.Img
                variant="top"
                src={proyecto.imagen}
                alt={`Proyecto ${proyecto.titulo}`}
                className="portfolio-project-image"
            />

            <Card.Body className="d-flex flex-column">

                <Card.Title>
                    {proyecto.titulo}
                </Card.Title>

                <Card.Text>
                    {proyecto.descripcion}
                </Card.Text>

                <Card.Text>

                    <strong>
                        Tecnologías utilizadas:
                    </strong>

                    <br />

                    {proyecto.tecnologias}

                </Card.Text>

                <Button
                    variant="primary"
                    href={proyecto.enlace}
                    className="mt-auto"
                >
                    Ver proyecto
                </Button>

            </Card.Body>

        </Card>

    );

}

export default PortfolioProjectCard;