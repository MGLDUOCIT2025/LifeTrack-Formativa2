/*
============================================================
HOME.JSX
Portada principal LifeTrack
============================================================
*/

import { Link } from "react-router-dom";

import "./HomePremium.css";


/*
============================================================
IMÁGENES DE LA PORTADA
============================================================
*/

import heroMontanas from "../assets/lifetrack/hero-montanas.png";
import heroPersona from "../assets/lifetrack/hero-persona.png";

import bannerBoxeo from "../assets/lifetrack/banner-boxeo.png";

import testimonioCarlos from "../assets/lifetrack/testimonio-carlos.png";
import testimonioAndrea from "../assets/lifetrack/testimonio-andrea.png";
import testimonioLuis from "../assets/lifetrack/testimonio-luis.png";

import shaker from "../assets/lifetrack/shaker.png";
import cuaderno from "../assets/lifetrack/cuaderno.png";
import polera from "../assets/lifetrack/polera.png";
import guantes from "../assets/lifetrack/guantes.png";


function Home() {

    /*
    ============================================================
    ÁREAS
    ============================================================
    */

    const areas = [

        {
            icono: "💼",
            titulo: "Trabajo",
            texto: "Sé más productivo",
        },

        {
            icono: "📖",
            titulo: "Estudios",
            texto: "Aprende y avanza",
        },

        {
            icono: "🏋️",
            titulo: "Gimnasio",
            texto: "Cuida tu salud",
        },

        {
            icono: "🥊",
            titulo: "Boxeo",
            texto: "Disciplina tu mente",
        },

    ];


    /*
    ============================================================
    HERRAMIENTAS
    ============================================================
    */

    const herramientas = [

        {
            icono: "🗓️",
            titulo: "Planner Inteligente",
            texto:
                "Visualiza tu día, semana y mes de forma clara y flexible.",
        },

        {
            icono: "✅",
            titulo: "Gestión de Tareas",
            texto:
                "Organiza, prioriza y cumple tus objetivos importantes.",
        },

        {
            icono: "📊",
            titulo: "Seguimiento de Hábitos",
            texto:
                "Construye rutinas en trabajo, estudio, gimnasio y boxeo.",
        },

        {
            icono: "🛒",
            titulo: "Tienda LifeTrack",
            texto:
                "Productos para una vida más productiva y disciplinada.",
        },

    ];


    /*
    ============================================================
    PRODUCTOS DESTACADOS
    ============================================================
    */

    const productos = [

        {
            imagen: shaker,
            nombre: "Shaker LifeTrack",
            precio: "$9.990 CLP",
        },

        {
            imagen: cuaderno,
            nombre: "Cuaderno Vida en Equilibrio",
            precio: "$7.990 CLP",
        },

        {
            imagen: polera,
            nombre: "Polera LifeTrack",
            precio: "$12.990 CLP",
        },

        {
            imagen: guantes,
            nombre: "Guantes de Boxeo",
            precio: "$29.990 CLP",
        },

    ];


    /*
    ============================================================
    TESTIMONIOS
    ============================================================
    */

    const testimonios = [

        {
            imagen: testimonioCarlos,
            nombre: "Carlos M.",
            texto:
                "Ahora puedo balancear mi trabajo, los estudios y el gimnasio sin sentirme agobiado.",
        },

        {
            imagen: testimonioAndrea,
            nombre: "Andrea R.",
            texto:
                "Me ayuda a mantener la disciplina y organizar mejor todas mis actividades.",
        },

        {
            imagen: testimonioLuis,
            nombre: "Luis T.",
            texto:
                "Una plataforma completa, simple y poderosa. Por fin tengo todo en un solo lugar.",
        },

    ];


    return (

        <div className="lt-home-page">


            {/* ==================================================
                HERO PRINCIPAL
            ================================================== */}

            <section
                className="lt-hero"
                style={{
                    backgroundImage: `url(${heroMontanas})`,
                }}
            >

                {/* CAPA CLARA */}

                <div className="lt-hero-overlay"></div>


                <div className="lt-hero-container">


                    {/* ==================================================
                        TEXTO IZQUIERDO
                    ================================================== */}

                    <div className="lt-hero-left">


                        <p className="lt-hero-badge">

                            EQUILIBRIO · DISCIPLINA · PROGRESO

                        </p>


                        <h1 className="lt-hero-title">

                            Una vida en

                            <br />

                            equilibrio, un

                            <br />

                            <span>

                                mejor tú.

                            </span>

                        </h1>


                        <p className="lt-hero-text">

                            Organiza tu trabajo, avanza en tus estudios,
                            cumple tus metas en el gimnasio y boxeo,
                            y construye una mejor versión de ti con LifeTrack.

                        </p>


                        <div className="lt-hero-buttons">


                            <Link
                                to="/mi-dia"
                                className="lt-btn lt-btn-primary"
                            >

                                Comenzar gratis →

                            </Link>


                            <Link
                                to="/nosotros"
                                className="lt-btn lt-btn-secondary"
                            >

                                ▶ Ver cómo funciona

                            </Link>


                        </div>


                    </div>



                    {/* ==================================================
                        PERSONA CENTRAL
                    ================================================== */}

                    <div className="lt-person-column">


                        <img
                            src={heroPersona}
                            alt="Persona LifeTrack mirando las montañas"
                            className="lt-person-image"
                        />


                    </div>



                    {/* ==================================================
                        TABLET + CELULAR
                    ================================================== */}

                    <div className="lt-device-column">


                        {/* FRASE */}

                        <div className="lt-device-phrase">

                            Disciplina hoy,

                            <br />

                            libertad mañana.

                        </div>



                        {/* TABLET */}

                        <div className="lt-dashboard">


                            <div className="lt-dashboard-header">


                                <span>

                                    ✓ LifeTrack

                                </span>


                                <span>

                                    Mi Día

                                </span>


                            </div>


                            <div className="lt-dashboard-body">


                                {/* MENÚ */}

                                <div className="lt-dashboard-sidebar">


                                    <div>

                                        🏠 Inicio

                                    </div>


                                    <div className="active">

                                        📅 Mi Día

                                    </div>


                                    <div>

                                        ✅ Mis Tareas

                                    </div>


                                    <div>

                                        🛒 Tienda

                                    </div>


                                </div>



                                {/* MI DÍA */}

                                <div className="lt-dashboard-center">


                                    <h3>

                                        Mi Día

                                    </h3>


                                    <p>

                                        Octubre 2026

                                    </p>


                                    <div className="lt-schedule-item lt-green">


                                        <span>

                                            07:00

                                        </span>


                                        <strong>

                                            Gimnasio

                                        </strong>


                                    </div>


                                    <div className="lt-schedule-item lt-blue">


                                        <span>

                                            10:00

                                        </span>


                                        <strong>

                                            Estudios

                                        </strong>


                                    </div>


                                    <div className="lt-schedule-item lt-yellow">


                                        <span>

                                            14:00

                                        </span>


                                        <strong>

                                            Trabajo

                                        </strong>


                                    </div>


                                    <div className="lt-schedule-item lt-pink">


                                        <span>

                                            20:00

                                        </span>


                                        <strong>

                                            Boxeo

                                        </strong>


                                    </div>


                                </div>



                                {/* TAREAS */}

                                <div className="lt-dashboard-tasks">


                                    <h3>

                                        Mis Tareas

                                    </h3>


                                    <label>

                                        <input
                                            type="checkbox"
                                            checked
                                            readOnly
                                        />

                                        Revisar proyecto

                                    </label>


                                    <label>

                                        <input
                                            type="checkbox"
                                            checked
                                            readOnly
                                        />

                                        Estudiar curso

                                    </label>


                                    <label>

                                        <input
                                            type="checkbox"
                                            readOnly
                                        />

                                        Entrenamiento

                                    </label>


                                    <label>

                                        <input
                                            type="checkbox"
                                            readOnly
                                        />

                                        Leer 20 páginas

                                    </label>


                                </div>


                            </div>


                        </div>



                        {/* CELULAR */}

                        <div className="lt-phone">


                            <div className="lt-phone-top">

                                ✓ LifeTrack

                            </div>


                            <h4>

                                ¡Hola!

                            </h4>


                            <p>

                                Hoy es un gran día para avanzar.

                            </p>


                            <div className="lt-phone-grid">


                                <div>

                                    💼

                                    <span>Trabajo</span>

                                </div>


                                <div>

                                    📚

                                    <span>Estudios</span>

                                </div>


                                <div>

                                    🏋️

                                    <span>Gimnasio</span>

                                </div>


                                <div>

                                    🥊

                                    <span>Boxeo</span>

                                </div>


                            </div>


                        </div>


                    </div>


                </div>


            </section>



            {/* ==================================================
                ÁREAS
            ================================================== */}

            <section className="lt-areas-section">


                <div className="lt-areas-container">


                    {
                        areas.map((area, index) => (

                            <div
                                className="lt-area-card"
                                key={index}
                            >

                                <div className="lt-area-icon">

                                    {area.icono}

                                </div>


                                <div>

                                    <h4>

                                        {area.titulo}

                                    </h4>


                                    <p>

                                        {area.texto}

                                    </p>

                                </div>

                            </div>

                        ))
                    }


                </div>


            </section>



            {/* ==================================================
                HERRAMIENTAS
            ================================================== */}

            <section className="lt-tools-section">


                <div className="lt-section-container">


                    <div className="lt-section-header">


                        <div>


                            <h2>

                                Todo lo que necesitas para una vida organizada.

                            </h2>


                            <p>

                                LifeTrack te entrega herramientas para planificar,
                                priorizar y mantener el equilibrio entre todas
                                las áreas de tu vida.

                            </p>


                        </div>


                    </div>


                    <div className="lt-tools-grid">


                        {
                            herramientas.map((item, index) => (

                                <article
                                    className="lt-tool-card"
                                    key={index}
                                >


                                    <div className="lt-tool-icon">

                                        {item.icono}

                                    </div>


                                    <h3>

                                        {item.titulo}

                                    </h3>


                                    <p>

                                        {item.texto}

                                    </p>


                                </article>

                            ))
                        }


                    </div>


                </div>


            </section>



            {/* ==================================================
                BANNER
            ================================================== */}

            <section className="lt-banner-section">


                <div className="lt-section-container">


                    <div
                        className="lt-banner-boxeo"
                        style={{
                            backgroundImage: `
                                linear-gradient(
                                    90deg,
                                    rgba(8,30,70,0.94),
                                    rgba(8,30,70,0.72)
                                ),
                                url(${bannerBoxeo})
                            `,
                        }}
                    >


                        <div className="lt-banner-text">


                            <h2>

                                Disciplina en cada área.
                                Resultados en la vida real.

                            </h2>


                            <p>

                                “No se trata de hacerlo todo perfecto,
                                sino de ser constante.”

                            </p>


                        </div>


                        <Link
                            to="/mi-dia"
                            className="lt-btn lt-btn-banner"
                        >

                            Comienza hoy →

                        </Link>


                    </div>


                </div>


            </section>



            {/* ==================================================
                PRODUCTOS
            ================================================== */}

            <section className="lt-products-section">


                <div className="lt-section-container">


                    <div className="lt-section-header">


                        <div>


                            <h2>

                                Productos destacados

                            </h2>


                            <p>

                                Equipo, accesorios y herramientas
                                para acompañar tu progreso.

                            </p>


                        </div>


                        <Link
                            to="/productos"
                            className="lt-section-link"
                        >

                            Ver tienda completa →

                        </Link>


                    </div>


                    <div className="lt-products-grid">


                        {
                            productos.map((producto, index) => (

                                <article
                                    className="lt-product-card"
                                    key={index}
                                >


                                    <div className="lt-product-image-box">


                                        <img
                                            src={producto.imagen}
                                            alt={producto.nombre}
                                        />


                                    </div>


                                    <div className="lt-product-info">


                                        <h3>

                                            {producto.nombre}

                                        </h3>


                                        <p className="lt-product-price">

                                            {producto.precio}

                                        </p>


                                        <Link
                                            to="/productos"
                                            className="lt-mini-button"
                                        >

                                            Ver producto →

                                        </Link>


                                    </div>


                                </article>

                            ))
                        }


                    </div>


                </div>


            </section>



            {/* ==================================================
                TESTIMONIOS
            ================================================== */}

            <section className="lt-testimonials-section">


                <div className="lt-section-container">


                    <div className="lt-section-header">


                        <div>


                            <h2>

                                Historias reales, resultados reales.

                            </h2>


                            <p>

                                Personas que están construyendo
                                una vida más organizada con LifeTrack.

                            </p>


                        </div>


                    </div>


                    <div className="lt-testimonials-grid">


                        {
                            testimonios.map((testimonio, index) => (

                                <article
                                    className="lt-testimonial-card"
                                    key={index}
                                >


                                    <img
                                        src={testimonio.imagen}
                                        alt={testimonio.nombre}
                                        className="lt-testimonial-photo"
                                    />


                                    <div className="lt-testimonial-content">


                                        <p>

                                            “{testimonio.texto}”

                                        </p>


                                        <h4>

                                            {testimonio.nombre}

                                        </h4>


                                        <span>

                                            ★★★★★

                                        </span>


                                    </div>


                                </article>

                            ))
                        }


                    </div>


                </div>


            </section>


        </div>

    );

}


export default Home;