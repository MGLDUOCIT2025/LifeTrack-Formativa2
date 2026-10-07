/*
============================================================
CONTACTO.JSX
LifeTrack
============================================================
*/

import { useState } from "react";

import "./ContactoPremium.css";


import testimonioAndrea from "../assets/lifetrack/testimonio-andrea.png";

import bannerBoxeo from "../assets/lifetrack/banner-boxeo.png";


function Contacto() {

    const [enviado, setEnviado] =
        useState(false);


    const enviar = (evento) => {

        evento.preventDefault();

        setEnviado(true);

    };


    return (

        <main className="contact-page">


            {/* HERO */}

            <section
                className="contact-hero"
                style={{
                    backgroundImage:
                        `url(${testimonioAndrea})`,
                }}
            >

                <div className="contact-hero-overlay"></div>


                <div className="contact-container contact-hero-content">

                    <span>
                        CONTACTO
                    </span>


                    <h1>

                        ¿Hablamos?

                        <br />

                        <strong>
                            Estamos para ayudarte.
                        </strong>

                    </h1>


                    <p>

                        Escríbenos tus preguntas,
                        sugerencias o comentarios
                        sobre LifeTrack.

                    </p>

                </div>

            </section>



            {/* CONTENIDO */}

            <section className="contact-content">

                <div className="contact-container contact-grid">


                    <aside
                        className="contact-info-image"
                        style={{
                            backgroundImage:
                                `linear-gradient(
                                    rgba(5,31,68,0.78),
                                    rgba(5,31,68,0.88)
                                ),
                                url(${bannerBoxeo})`,
                        }}
                    >

                        <span className="contact-mini-label">
                            LIFETRACK
                        </span>


                        <h2>
                            Siempre avanzando.
                        </h2>


                        <p>

                            Queremos ayudarte a construir
                            una rutina más organizada,
                            productiva y equilibrada.

                        </p>


                        <div className="contact-info-row">

                            <div>
                                📧
                            </div>

                            <div>

                                <strong>
                                    Correo
                                </strong>

                                <span>
                                    contacto@lifetrack.cl
                                </span>

                            </div>

                        </div>


                        <div className="contact-info-row">

                            <div>
                                📍
                            </div>

                            <div>

                                <strong>
                                    Ubicación
                                </strong>

                                <span>
                                    Santiago, Chile
                                </span>

                            </div>

                        </div>


                        <div className="contact-info-row">

                            <div>
                                🕐
                            </div>

                            <div>

                                <strong>
                                    Horario
                                </strong>

                                <span>
                                    Lunes a viernes
                                    <br />
                                    09:00 - 18:00
                                </span>

                            </div>

                        </div>


                        <div className="contact-info-row">

                            <div>
                                🌐
                            </div>

                            <div>

                                <strong>
                                    Comunidad
                                </strong>

                                <span>
                                    Instagram · LinkedIn · TikTok
                                </span>

                            </div>

                        </div>


                        <blockquote>

                            “Disciplina hoy,
                            libertad mañana.”

                        </blockquote>

                    </aside>



                    {/* FORMULARIO */}

                    <form
                        className="contact-form"
                        onSubmit={enviar}
                    >

                        <span className="contact-form-label">
                            ESCRÍBENOS
                        </span>


                        <h2>
                            Envíanos un mensaje
                        </h2>


                        <p>

                            Completa tus datos y nos pondremos
                            en contacto contigo.

                        </p>


                        <label>
                            Nombre
                        </label>

                        <input
                            required
                            type="text"
                            placeholder="Tu nombre"
                        />


                        <label>
                            Correo electrónico
                        </label>

                        <input
                            required
                            type="email"
                            placeholder="correo@ejemplo.com"
                        />


                        <label>
                            Asunto
                        </label>

                        <input
                            required
                            type="text"
                            placeholder="¿En qué podemos ayudarte?"
                        />


                        <label>
                            Mensaje
                        </label>

                        <textarea
                            required
                            rows="6"
                            placeholder="Escribe tu mensaje..."
                        ></textarea>


                        <button type="submit">

                            Enviar mensaje →

                        </button>


                        {enviado && (

                            <div className="mensaje-exito">

                                ✅ Mensaje enviado correctamente.

                            </div>

                        )}


                    </form>


                </div>

            </section>


        </main>

    );

}


export default Contacto;