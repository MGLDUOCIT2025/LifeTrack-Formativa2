// ============================================================
// PORTAFOLIO.JSX
// Evaluación Formativa N°2
// Desarrollo Full Stack II
//
// En esta página utilizamos:
// - React
// - useState
// - useEffect
// - Props
// - Componentes reutilizables
// - React Bootstrap
// - Grid responsivo
// - Archivos JSON
// - Formularios controlados
// - Manejo de eventos
// - Función externa para pruebas mediante Mock
// ============================================================

import {
    useEffect,
    useState
} from "react";

import {
    Alert,
    Button,
    Col,
    Container,
    Form,
    Row
} from "react-bootstrap";


// ============================================================
// COMPONENTES
// ============================================================

import AboutMe from "../components/AboutMe.jsx";

import PortfolioProjectCard from
    "../components/PortfolioProjectCard.jsx";

import NewsCard from
    "../components/NewsCard.jsx";


// ============================================================
// DATOS JSON
// ============================================================

import proyectosData from
    "../data/proyectos.json";

import noticiasData from
    "../data/noticias.json";


// ============================================================
// CSS EXCLUSIVO DE LA FORMativa
// ============================================================

import "../portfolio.css";


// ============================================================
// COMPONENTE PRINCIPAL
//
// onEnviarMensaje:
// propiedad opcional que será utilizada durante las pruebas
// para demostrar el uso de un Mock con Jasmine.
// ============================================================

function Portafolio({ onEnviarMensaje }) {

    // ========================================================
    // STATE - PROYECTOS
    // ========================================================

    const [proyectos, setProyectos] =
        useState([]);


    // ========================================================
    // STATE - NOTICIAS
    // ========================================================

    const [noticias, setNoticias] =
        useState([]);


    // ========================================================
    // STATE - FORMULARIO
    // ========================================================

    const [formulario, setFormulario] =
        useState({

            nombre: "",
            email: "",
            mensaje: ""

        });


    // ========================================================
    // STATE - MENSAJES
    // ========================================================

    const [error, setError] =
        useState("");


    const [enviado, setEnviado] =
        useState(false);


    // ========================================================
    // CARGAR DATOS JSON
    // ========================================================

    useEffect(() => {

        setProyectos(
            proyectosData
        );

        setNoticias(
            noticiasData
        );

    }, []);


    // ========================================================
    // FILTRAR NOTICIAS
    // ========================================================

    const noticiasLifeTrack =
        noticias.filter(

            (noticia) =>
                noticia.categoria === "lifetrack"

        );


    const noticiasTecnologia =
        noticias.filter(

            (noticia) =>
                noticia.categoria === "tecnologia"

        );


    // ========================================================
    // MANEJAR CAMBIOS DEL FORMULARIO
    // ========================================================

    function handleChange(event) {

        const {
            name,
            value
        } = event.target;


        setFormulario({

            ...formulario,

            [name]: value

        });

    }


    // ========================================================
    // ENVIAR FORMULARIO
    // ========================================================

    function handleSubmit(event) {

        event.preventDefault();


        setError("");

        setEnviado(false);


        // ----------------------------------------------------
        // VALIDACIÓN CAMPOS VACÍOS
        // ----------------------------------------------------

        if (
            formulario.nombre.trim() === "" ||
            formulario.email.trim() === "" ||
            formulario.mensaje.trim() === ""
        ) {

            setError(
                "Todos los campos son obligatorios."
            );

            return;

        }


        // ----------------------------------------------------
        // VALIDACIÓN DE CORREO
        // ----------------------------------------------------

        if (
            !formulario.email.includes("@")
        ) {

            setError(
                "Debes ingresar un correo electrónico válido."
            );

            return;

        }


        // ----------------------------------------------------
        // MOCK / FUNCIÓN EXTERNA
        //
        // Durante las pruebas enviaremos una función simulada
        // creada con jasmine.createSpy().
        // ----------------------------------------------------

        if (onEnviarMensaje) {

            onEnviarMensaje(
                formulario
            );

        }


        // ----------------------------------------------------
        // ENVÍO CORRECTO
        // ----------------------------------------------------

        setEnviado(true);


        // ----------------------------------------------------
        // LIMPIAR FORMULARIO
        // ----------------------------------------------------

        setFormulario({

            nombre: "",
            email: "",
            mensaje: ""

        });

    }


    return (

        <div className="formativa-page">


            {/* =================================================
                HERO
            ================================================= */}

            <section className="formativa-hero">

                <Container>

                    <Row className="align-items-center gy-5">


                        {/* COLUMNA TEXTO */}

                        <Col
                            xs={12}
                            lg={7}
                        >

                            <p className="formativa-eyebrow">

                                EVALUACIÓN FORMATIVA N°2

                            </p>


                            <h1 className="formativa-main-title">

                                Mi Portafolio

                                <span>
                                    {" "}LifeTrack
                                </span>

                            </h1>


                            <p className="formativa-description">

                                Portafolio desarrollado utilizando
                                React, React Bootstrap, componentes
                                reutilizables, archivos JSON y manejo
                                dinámico de datos.

                            </p>


                            <Button
                                href="#proyectos-portafolio"
                                variant="primary"
                                size="lg"
                            >

                                Ver mis proyectos

                            </Button>

                        </Col>


                        {/* COLUMNA PERFIL */}

                        <Col
                            xs={12}
                            lg={5}
                        >

                            <div className="formativa-profile">

                                <img
                                    src="/mario.jpg"
                                    alt="Mario González"
                                    className="formativa-profile-photo"
                                />


                                <h2>

                                    Mario González

                                </h2>


                                <p>

                                    Estudiante de Ingeniería
                                    en Informática

                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>


            {/* =================================================
                SOBRE MÍ
            ================================================= */}

            <section className="formativa-content-section">

                <AboutMe />

            </section>


            {/* =================================================
                PROYECTOS
            ================================================= */}

            <section
                id="proyectos-portafolio"
                className="formativa-projects-section"
            >

                <Container>

                    <h2 className="formativa-section-title light">

                        Mis proyectos

                    </h2>


                    <Row className="g-4">

                        {

                            proyectos.map(

                                (proyecto) => (

                                    <Col
                                        xs={12}
                                        md={6}
                                        lg={4}
                                        key={proyecto.id}
                                    >

                                        <PortfolioProjectCard
                                            proyecto={proyecto}
                                        />

                                    </Col>

                                )

                            )

                        }

                    </Row>

                </Container>

            </section>


            {/* =================================================
                NOTICIAS
            ================================================= */}

            <section className="formativa-news-section">

                <Container>

                    <h2 className="formativa-section-title">

                        Noticias

                    </h2>


                    {/* ==========================================
                        NOTICIAS LIFETRACK
                    ========================================== */}

                    <h3 className="formativa-news-title">

                        LifeTrack

                    </h3>


                    <Row className="g-4 mb-5">

                        {

                            noticiasLifeTrack.map(

                                (noticia) => (

                                    <Col
                                        xs={12}
                                        md={6}
                                        key={noticia.id}
                                    >

                                        <NewsCard
                                            noticia={noticia}
                                        />

                                    </Col>

                                )

                            )

                        }

                    </Row>


                    {/* ==========================================
                        NOTICIAS TECNOLOGÍA
                    ========================================== */}

                    <h3 className="formativa-news-title">

                        Tecnología

                    </h3>


                    <Row className="g-4">

                        {

                            noticiasTecnologia.map(

                                (noticia) => (

                                    <Col
                                        xs={12}
                                        md={6}
                                        key={noticia.id}
                                    >

                                        <NewsCard
                                            noticia={noticia}
                                        />

                                    </Col>

                                )

                            )

                        }

                    </Row>

                </Container>

            </section>


            {/* =================================================
                CONTACTO
            ================================================= */}

            <section className="formativa-contact-section">

                <Container>

                    <h2 className="formativa-section-title">

                        Contacto

                    </h2>


                    <Form
                        onSubmit={handleSubmit}
                        className="formativa-form"
                    >


                        {/* ERROR */}

                        {

                            error && (

                                <Alert
                                    variant="danger"
                                    role="alert"
                                >

                                    {error}

                                </Alert>

                            )

                        }


                        {/* ÉXITO */}

                        {

                            enviado && (

                                <Alert
                                    variant="success"
                                    role="status"
                                >

                                    Mensaje enviado correctamente.

                                </Alert>

                            )

                        }


                        {/* NOMBRE */}

                        <Form.Group className="mb-3">

                            <Form.Label
                                htmlFor="portfolio-nombre"
                            >

                                Nombre

                            </Form.Label>


                            <Form.Control
                                id="portfolio-nombre"
                                type="text"
                                name="nombre"
                                value={formulario.nombre}
                                onChange={handleChange}
                                placeholder="Ingresa tu nombre"
                            />

                        </Form.Group>


                        {/* CORREO */}

                        <Form.Group className="mb-3">

                            <Form.Label
                                htmlFor="portfolio-email"
                            >

                                Correo electrónico

                            </Form.Label>


                            <Form.Control
                                id="portfolio-email"
                                type="email"
                                name="email"
                                value={formulario.email}
                                onChange={handleChange}
                                placeholder="correo@ejemplo.cl"
                            />

                        </Form.Group>


                        {/* MENSAJE */}

                        <Form.Group className="mb-3">

                            <Form.Label
                                htmlFor="portfolio-mensaje"
                            >

                                Mensaje

                            </Form.Label>


                            <Form.Control
                                id="portfolio-mensaje"
                                as="textarea"
                                rows={5}
                                name="mensaje"
                                value={formulario.mensaje}
                                onChange={handleChange}
                                placeholder="Escribe tu mensaje"
                            />

                        </Form.Group>


                        {/* BOTÓN */}

                        <Button
                            variant="primary"
                            type="submit"
                        >

                            Enviar mensaje

                        </Button>

                    </Form>

                </Container>

            </section>

        </div>

    );

}

export default Portafolio;