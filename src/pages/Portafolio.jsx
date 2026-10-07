/*
============================================================
PORTAFOLIO.JSX
Evaluación Formativa N°2
Proyecto LifeTrack
============================================================
*/

import { useState } from "react";


import {

    Container,
    Row,
    Col,
    Button,
    Form,
    Alert,

} from "react-bootstrap";


/* =========================================================
   COMPONENTES
========================================================= */

import AboutMe
    from "../components/AboutMe.jsx";

import PortfolioProjectCard
    from "../components/PortfolioProjectCard.jsx";

import NewsCard
    from "../components/NewsCard.jsx";


/* =========================================================
   DATOS
========================================================= */

import proyectos
    from "../data/proyectos.json";

import noticias
    from "../data/noticias.json";


/* =========================================================
   CSS
========================================================= */

import "../portfolio.css";


function Portafolio({ onEnviarMensaje }) {


    /* =====================================================
       STATE FORMULARIO
    ===================================================== */

    const [nombre, setNombre] =
        useState("");

    const [correo, setCorreo] =
        useState("");

    const [mensaje, setMensaje] =
        useState("");

    const [error, setError] =
        useState("");

    const [mensajeExito, setMensajeExito] =
        useState("");


    /* =====================================================
       VALIDAR CORREO
    ===================================================== */

    const validarCorreo =
        (correoUsuario) => {

            const expresionCorreo =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            return expresionCorreo.test(
                correoUsuario
            );

        };


    /* =====================================================
       ENVÍO FORMULARIO
    ===================================================== */

    const manejarEnvio = (evento) => {

        evento.preventDefault();

        setError("");

        setMensajeExito("");


        if (

            nombre.trim() === ""

            ||

            correo.trim() === ""

            ||

            mensaje.trim() === ""

        ) {

            setError(
                "Debes completar todos los campos."
            );

            return;

        }


        if (!validarCorreo(correo)) {

            setError(
                "Debes ingresar un correo electrónico válido."
            );

            return;

        }


        const datosFormulario = {

            nombre,

            correo,

            mensaje,

        };


        /*
        Si la evaluación envía un MOCK,
        también seguirá funcionando.
        */

        if (onEnviarMensaje) {

            onEnviarMensaje(
                datosFormulario
            );

        }


        setMensajeExito(
            "Mensaje enviado correctamente."
        );


        setNombre("");

        setCorreo("");

        setMensaje("");

    };


    /* =====================================================
       CATEGORÍAS NOTICIAS
    ===================================================== */

    const categoriasNoticias = [

        ...new Set(

            noticias.map(
                (noticia) =>
                    noticia.categoria
            )

        ),

    ];


    return (

        <div className="portfolio-page">


            {/* =================================================
                HERO
            ================================================= */}

            <section className="portfolio-hero">

                <Container>

                    <Row className="align-items-center">


                        {/* ===============================
                            TEXTO
                        =============================== */}

                        <Col
                            xs={12}
                            lg={7}
                        >

                            <div className="portfolio-intro">

                                <p className="portfolio-label">

                                    EVALUACIÓN FORMATIVA N°2

                                </p>


                                <h1 className="portfolio-title">

                                    Mi Portafolio{" "}

                                    <span>

                                        LifeTrack

                                    </span>

                                </h1>


                                <p className="portfolio-description">

                                    Portafolio desarrollado utilizando
                                    React, React Bootstrap, componentes
                                    reutilizables, propiedades, State,
                                    archivos JSON, eventos y pruebas
                                    unitarias.

                                </p>


                                <Button

                                    href="#proyectos-portafolio"

                                    variant="primary"

                                    size="lg"

                                >

                                    Ver mis proyectos

                                </Button>

                            </div>

                        </Col>


                        {/* ===============================
                            PERFIL
                        =============================== */}

                        <Col

                            xs={12}

                            lg={5}

                            className="text-center mt-5 mt-lg-0"

                        >

                            <div className="portfolio-profile">


                                <img

                                    src={
                                        `${import.meta.env.BASE_URL}mario.jpg`
                                    }

                                    alt="Mario González"

                                    className="portfolio-photo"

                                />


                                <h2 className="portfolio-name">

                                    Mario González

                                </h2>


                                <p className="portfolio-career">

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

            <section className="portfolio-section">

                <Container>

                    <div className="portfolio-section-header">

                        <p className="portfolio-label">

                            PERFIL

                        </p>


                        <h2 className="portfolio-section-title">

                            Sobre mí

                        </h2>

                    </div>


                    <AboutMe />

                </Container>

            </section>


            {/* =================================================
                PROYECTOS
            ================================================= */}

            <section

                id="proyectos-portafolio"

                className="
                    portfolio-section
                    portfolio-projects-section
                "

            >

                <Container>

                    <div className="portfolio-section-header">

                        <p className="portfolio-label">

                            PROYECTOS

                        </p>


                        <h2 className="portfolio-section-title">

                            Mis proyectos

                        </h2>


                        <p className="portfolio-section-description">

                            Proyectos desarrollados durante
                            mi formación académica en distintas
                            áreas de programación, desarrollo
                            web y bases de datos.

                        </p>

                    </div>


                    <Row className="g-4">

                        {proyectos.map(
                            (proyecto, indice) => (

                                <Col

                                    xs={12}

                                    md={6}

                                    lg={4}

                                    key={
                                        proyecto.id
                                        ||
                                        indice
                                    }

                                >

                                    <PortfolioProjectCard

                                        proyecto={
                                            proyecto
                                        }

                                    />

                                </Col>

                            )
                        )}

                    </Row>

                </Container>

            </section>


            {/* =================================================
                NOTICIAS
            ================================================= */}

            <section className="portfolio-section">

                <Container>

                    <div className="portfolio-section-header">

                        <p className="portfolio-label">

                            ACTUALIDAD

                        </p>


                        <h2 className="portfolio-section-title">

                            Noticias

                        </h2>


                        <p className="portfolio-section-description">

                            Contenido relacionado con LifeTrack,
                            React, desarrollo web y tecnología.

                        </p>

                    </div>


                    {categoriasNoticias.map(
                        (categoria) => (

                            <div

                                key={categoria}

                                className="portfolio-news-category"

                            >

                                <h3 className="portfolio-news-category-title">

                                    {categoria}

                                </h3>


                                <Row className="g-4">

                                    {noticias

                                        .filter(
                                            (noticia) =>
                                                noticia.categoria
                                                ===
                                                categoria
                                        )

                                        .map(
                                            (noticia, indice) => (

                                                <Col

                                                    xs={12}

                                                    md={6}

                                                    key={
                                                        noticia.id
                                                        ||
                                                        indice
                                                    }

                                                >

                                                    <NewsCard

                                                        noticia={
                                                            noticia
                                                        }

                                                    />

                                                </Col>

                                            )
                                        )}

                                </Row>

                            </div>

                        )
                    )}

                </Container>

            </section>


            {/* =================================================
                CONTACTO
            ================================================= */}

            <section className="
                portfolio-section
                portfolio-contact-section
            ">

                <Container>

                    <Row className="justify-content-center">

                        <Col

                            xs={12}

                            lg={9}

                        >

                            <div className="portfolio-contact-header">

                                <p className="portfolio-label">

                                    CONTACTO

                                </p>


                                <h2 className="portfolio-section-title">

                                    Contacto

                                </h2>


                                <p className="portfolio-section-description">

                                    Completa el formulario para
                                    enviar un mensaje.

                                </p>

                            </div>


                            <div className="portfolio-contact-card">


                                {error && (

                                    <Alert variant="danger">

                                        {error}

                                    </Alert>

                                )}


                                {mensajeExito && (

                                    <Alert variant="success">

                                        {mensajeExito}

                                    </Alert>

                                )}


                                <Form onSubmit={manejarEnvio}>


                                    <Form.Group

                                        className="mb-3"

                                        controlId="nombre"

                                    >

                                        <Form.Label>

                                            Nombre

                                        </Form.Label>


                                        <Form.Control

                                            type="text"

                                            placeholder="Ingresa tu nombre"

                                            value={nombre}

                                            onChange={
                                                (evento) =>
                                                    setNombre(
                                                        evento.target.value
                                                    )
                                            }

                                        />

                                    </Form.Group>


                                    <Form.Group

                                        className="mb-3"

                                        controlId="correo"

                                    >

                                        <Form.Label>

                                            Correo electrónico

                                        </Form.Label>


                                        <Form.Control

                                            type="email"

                                            placeholder="correo@ejemplo.cl"

                                            value={correo}

                                            onChange={
                                                (evento) =>
                                                    setCorreo(
                                                        evento.target.value
                                                    )
                                            }

                                        />

                                    </Form.Group>


                                    <Form.Group

                                        className="mb-4"

                                        controlId="mensaje"

                                    >

                                        <Form.Label>

                                            Mensaje

                                        </Form.Label>


                                        <Form.Control

                                            as="textarea"

                                            rows={5}

                                            placeholder="Escribe tu mensaje"

                                            value={mensaje}

                                            onChange={
                                                (evento) =>
                                                    setMensaje(
                                                        evento.target.value
                                                    )
                                            }

                                        />

                                    </Form.Group>


                                    <Button

                                        variant="primary"

                                        type="submit"

                                    >

                                        Enviar mensaje

                                    </Button>


                                </Form>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

        </div>

    );

}


export default Portafolio;