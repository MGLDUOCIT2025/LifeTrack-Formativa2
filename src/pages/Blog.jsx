/*
============================================================
BLOG.JSX
LifeTrack
============================================================
*/

import "./BlogPremium.css";


import heroPersona from "../assets/lifetrack/hero-persona.png";

import heroMontanas from "../assets/lifetrack/hero-montanas.png";

import bannerBoxeo from "../assets/lifetrack/banner-boxeo.png";

import cuaderno from "../assets/lifetrack/cuaderno.png";

import guantes from "../assets/lifetrack/guantes.png";

import shaker from "../assets/lifetrack/shaker.png";


function Blog() {

    const articulos = [

        {
            categoria: "PRODUCTIVIDAD",

            titulo:
                "Cómo organizar una semana realmente productiva",

            texto:
                "Aprende a equilibrar trabajo, estudios y vida personal.",

            imagen:
                heroMontanas,
        },

        {
            categoria: "ESTUDIOS",

            titulo:
                "Estudiar cuando trabajas tiempo completo",

            texto:
                "Planificación inteligente para aprovechar cada hora.",

            imagen:
                cuaderno,
        },

        {
            categoria: "BOXEO",

            titulo:
                "Disciplina antes que motivación",

            texto:
                "La constancia construye resultados.",

            imagen:
                bannerBoxeo,
        },

        {
            categoria: "ENTRENAMIENTO",

            titulo:
                "Entrenar también fortalece la mente",

            texto:
                "Tu cuerpo y tu concentración trabajan juntos.",

            imagen:
                guantes,
        },

        {
            categoria: "HÁBITOS",

            titulo:
                "Pequeños hábitos, grandes cambios",

            texto:
                "Las acciones simples generan resultados sostenibles.",

            imagen:
                shaker,
        },

        {
            categoria: "LIFETRACK",

            titulo:
                "Construyendo una vida en equilibrio",

            texto:
                "Una rutina organizada permite avanzar en todas tus áreas.",

            imagen:
                heroPersona,
        },

    ];


    return (

        <main className="blog-page">


            {/* HERO */}

            <section
                className="blog-hero"
                style={{
                    backgroundImage:
                        `url(${heroPersona})`,
                }}
            >

                <div className="blog-hero-overlay"></div>


                <div className="blog-container blog-hero-content">

                    <span>
                        BLOG · SEGUIMIENTO DE VIDA
                    </span>


                    <h1>

                        Ideas para construir

                        <br />

                        <strong>
                            una vida mejor.
                        </strong>

                    </h1>


                    <p>

                        Productividad, estudios,
                        entrenamiento, hábitos y
                        crecimiento personal.

                    </p>

                </div>

            </section>



            {/* ARTÍCULOS */}

            <section className="blog-content">

                <div className="blog-container blog-grid">


                    {articulos.map((articulo) => (

                        <article
                            className="blog-card"
                            key={articulo.titulo}
                        >


                            <img
                                src={articulo.imagen}
                                alt={articulo.titulo}
                            />


                            <div>

                                <span>
                                    {articulo.categoria}
                                </span>


                                <h2>
                                    {articulo.titulo}
                                </h2>


                                <p>
                                    {articulo.texto}
                                </p>


                                <button type="button">

                                    Leer artículo →

                                </button>

                            </div>


                        </article>

                    ))}


                </div>

            </section>


        </main>

    );

}


export default Blog;