/*
============================================================
HOME.JSX
Página principal del proyecto LifeTrack
============================================================
*/

import { Link } from "react-router-dom";

import heroImage from "../assets/hero.png";


function Home() {

    return (

        <div className="home-page">

            {/* ==================================================
                HERO PRINCIPAL
            ================================================== */}

            <section
                className="hero-lifetrack"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            90deg,
                            rgba(4, 25, 57, 0.98) 0%,
                            rgba(8, 49, 101, 0.92) 42%,
                            rgba(7, 39, 82, 0.45) 100%
                        ),
                        url(${heroImage})
                    `
                }}
            >

                {/* ==================================================
                    CAPA VISUAL
                ================================================== */}

                <div className="hero-overlay">

                    <div className="container">

                        <div className="hero-contenido">


                            {/* ==================================================
                                TEXTO SUPERIOR
                            ================================================== */}

                            <span className="hero-etiqueta">

                                TU VIDA, EN UN SOLO LUGAR

                            </span>



                            {/* ==================================================
                                TÍTULO PRINCIPAL
                            ================================================== */}

                            <h1>

                                Organiza tu día,

                                <span>

                                    cumple tus metas.

                                </span>

                            </h1>



                            {/* ==================================================
                                DESCRIPCIÓN
                            ================================================== */}

                            <p>

                                Gestiona tu trabajo, estudios, gimnasio,
                                boxeo y vida personal desde una sola plataforma.

                                Además, encuentra productos que pueden acompañarte
                                en cada etapa de tu rutina.

                            </p>



                            {/* ==================================================
                                BOTONES
                            ================================================== */}

                            <div className="hero-botones">


                                {/* MI DÍA */}

                                <Link
                                    to="/mi-dia"
                                    className="btn btn-primary"
                                >

                                    📅 Comenzar ahora

                                </Link>



                                {/* TIENDA */}

                                <Link
                                    to="/productos"
                                    className="btn btn-outline-light"
                                >

                                    🛒 Ver tienda

                                </Link>



                                {/* PORTAFOLIO */}

                                <Link
                                    to="/portafolio"
                                    className="btn btn-light"
                                >

                                    💼 Ver mi portafolio

                                </Link>


                            </div>



                            {/* ==================================================
                                BENEFICIOS
                            ================================================== */}

                            <div className="hero-beneficios">

                                <span>

                                    📈 Más productividad

                                </span>


                                <span>

                                    ❤️ Mejores hábitos

                                </span>


                                <span>

                                    🌱 Vida equilibrada

                                </span>

                            </div>


                        </div>

                    </div>

                </div>

            </section>

        </div>

    );

}


export default Home;