import {
    Card,
    Col,
    Container,
    Row
} from "react-bootstrap";

function AboutMe() {

    return (

        <section
            id="sobre-mi"
            className="portfolio-section"
        >

            <Container>

                <h2 className="portfolio-title">
                    Sobre mí
                </h2>

                <Row className="justify-content-center">

                    <Col
                        xs={12}
                        md={10}
                        lg={8}
                    >

                        <Card className="portfolio-about-card shadow">

                            <Card.Body>

                                <Card.Title>
                                    Mario González
                                </Card.Title>

                                <Card.Subtitle className="mb-3 text-muted">
                                    Estudiante de Ingeniería en Informática
                                </Card.Subtitle>

                                <Card.Text>

                                    Actualmente estudio Ingeniería en
                                    Informática y desarrollo proyectos
                                    relacionados con programación,
                                    desarrollo web, bases de datos y
                                    aplicaciones.

                                </Card.Text>

                                <Card.Text>

                                    Además cuento con experiencia profesional
                                    en logística y comercio exterior, por lo
                                    que busco combinar el conocimiento de
                                    procesos reales con soluciones
                                    tecnológicas.

                                </Card.Text>

                                <h3 className="portfolio-subtitle">
                                    Tecnologías
                                </h3>

                                <ul>

                                    <li>HTML5 y CSS3</li>

                                    <li>JavaScript</li>

                                    <li>React</li>

                                    <li>React Bootstrap</li>

                                    <li>SQL y PL/SQL</li>

                                    <li>Kotlin</li>

                                    <li>Git y GitHub</li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

        </section>

    );

}

export default AboutMe;