/*
============================================================
MI DIA.JSX
LifeTrack

OBJETIVO:
- Marcar actividades realizadas.
- Calcular automáticamente el porcentaje.
- 0 de 4 = 0%
- 1 de 4 = 25%
- 2 de 4 = 50%
- 3 de 4 = 75%
- 4 de 4 = 100%
============================================================
*/

import { useState } from "react";

import "./MiDiaPremium.css";

import heroMontanas from "../assets/lifetrack/hero-montanas.png";


function MiDia() {

    /*
    ============================================================
    ESTADO ÚNICO DE ACTIVIDADES

    IMPORTANTE:
    Todo el porcentaje se calcula desde este mismo arreglo.
    No existe ningún porcentaje escrito manualmente.
    ============================================================
    */

    const [actividades, setActividades] = useState([
        {
            id: 1,
            hora: "07:00",
            icono: "🏋️",
            titulo: "Gimnasio",
            detalle: "Entrenamiento de fuerza",
            realizado: true,
        },
        {
            id: 2,
            hora: "09:00",
            icono: "💼",
            titulo: "Trabajo",
            detalle: "Jornada laboral",
            realizado: true,
        },
        {
            id: 3,
            hora: "19:00",
            icono: "📚",
            titulo: "Estudios",
            detalle: "Ingeniería en Informática",
            realizado: false,
        },
        {
            id: 4,
            hora: "21:30",
            icono: "🥊",
            titulo: "Boxeo",
            detalle: "Entrenamiento",
            realizado: false,
        },
    ]);


    /*
    ============================================================
    MARCAR / DESMARCAR
    ============================================================
    */

    const cambiarEstado = (id) => {

        setActividades((estadoActual) =>

            estadoActual.map((actividad) =>

                actividad.id === id
                    ? {
                        ...actividad,
                        realizado: !actividad.realizado,
                    }
                    : actividad

            )

        );

    };


    /*
    ============================================================
    CÁLCULOS
    ============================================================
    */

    const totalActividades =
        actividades.length;


    const actividadesCompletadas =
        actividades.filter(
            (actividad) => actividad.realizado
        ).length;


    const porcentaje =
        totalActividades === 0
            ? 0
            : Math.round(
                (actividadesCompletadas / totalActividades)
                * 100
            );


    /*
    ============================================================
    MENSAJE
    ============================================================
    */

    const obtenerMensaje = () => {

        if (porcentaje === 100) {

            return {
                titulo: "¡Día completado!",
                texto:
                    "Cumpliste todos tus objetivos de hoy. Excelente disciplina.",
            };

        }

        if (porcentaje >= 75) {

            return {
                titulo: "Excelente progreso",
                texto:
                    "Ya completaste gran parte de tu rutina. Falta muy poco.",
            };

        }

        if (porcentaje >= 50) {

            return {
                titulo: "Vas por buen camino",
                texto:
                    `${actividadesCompletadas} de ${totalActividades} actividades completadas.`,
            };

        }

        if (porcentaje > 0) {

            return {
                titulo: "Buen comienzo",
                texto:
                    "Ya comenzaste tu día. Cada actividad completada suma.",
            };

        }

        return {
            titulo: "Comienza tu día",
            texto:
                "Marca cada actividad cuando la completes y observa tu progreso.",
        };

    };


    const mensaje =
        obtenerMensaje();


    return (

        <main className="dia-page">


            {/* ==================================================
                HERO
            ================================================== */}

            <section
                className="dia-hero"
                style={{
                    backgroundImage:
                        `url(${heroMontanas})`,
                }}
            >

                <div className="dia-hero-overlay"></div>


                <div className="dia-container dia-hero-content">

                    <span className="dia-label">
                        MI DÍA
                    </span>


                    <h1>
                        Organiza hoy.
                        <br />

                        <strong>
                            Avanza mañana.
                        </strong>
                    </h1>


                    <p>
                        Mantén el equilibrio entre trabajo,
                        estudios, gimnasio, boxeo y vida personal.
                    </p>

                </div>

            </section>



            {/* ==================================================
                DASHBOARD
            ================================================== */}

            <section className="dia-dashboard">

                <div className="dia-container dia-grid">


                    {/* ==================================================
                        PLANIFICACIÓN
                    ================================================== */}

                    <section className="dia-card agenda-card">

                        <div className="dia-card-header">

                            <div>

                                <span className="mini-label">
                                    ORDEN DEL DÍA
                                </span>

                                <h2>
                                    Mi planificación
                                </h2>

                            </div>


                            <strong>
                                Octubre 2026
                            </strong>

                        </div>



                        <div className="agenda-list">

                            {actividades.map((actividad) => (

                                <article
                                    key={actividad.id}
                                    className={
                                        `agenda-item ${
                                            actividad.realizado
                                                ? "actividad-realizada"
                                                : ""
                                        }`
                                    }
                                >

                                    <button
                                        type="button"
                                        className={
                                            `agenda-check ${
                                                actividad.realizado
                                                    ? "checked"
                                                    : ""
                                            }`
                                        }
                                        onClick={() =>
                                            cambiarEstado(
                                                actividad.id
                                            )
                                        }
                                    >

                                        {
                                            actividad.realizado
                                                ? "✓"
                                                : ""
                                        }

                                    </button>


                                    <div className="agenda-hora">
                                        {actividad.hora}
                                    </div>


                                    <div className="agenda-icono">
                                        {actividad.icono}
                                    </div>


                                    <div className="agenda-info">

                                        <strong>
                                            {actividad.titulo}
                                        </strong>

                                        <span>
                                            {actividad.detalle}
                                        </span>

                                    </div>


                                    <div
                                        className={
                                            actividad.realizado
                                                ? "agenda-estado completado"
                                                : "agenda-estado pendiente"
                                        }
                                    >

                                        {
                                            actividad.realizado
                                                ? "Completado"
                                                : "Pendiente"
                                        }

                                    </div>

                                </article>

                            ))}

                        </div>

                    </section>



                    {/* ==================================================
                        LADO DERECHO
                    ================================================== */}

                    <aside className="dia-side">


                        {/* PROGRESO */}

                        <section className="dia-card progreso-card">

                            <span className="mini-label">
                                PROGRESO DIARIO
                            </span>


                            <div className="progreso-layout">


                                <div
                                    className="circulo-progreso"
                                    style={{
                                        "--progreso":
                                            `${porcentaje * 3.6}deg`,
                                    }}
                                >

                                    <div className="circulo-interior">

                                        <div className="numero-porcentaje">

                                            <span>
                                                {porcentaje}
                                            </span>

                                            <span>
                                                %
                                            </span>

                                        </div>

                                        <small>
                                            completado
                                        </small>

                                    </div>

                                </div>



                                <div className="progreso-texto">

                                    <h3>
                                        {mensaje.titulo}
                                    </h3>

                                    <p>
                                        {mensaje.texto}
                                    </p>

                                </div>

                            </div>

                        </section>



                        {/* HÁBITOS */}

                        <section className="dia-card habitos-card">

                            <span className="mini-label">
                                HÁBITOS
                            </span>

                            <h2>
                                Hábitos de hoy
                            </h2>


                            {actividades.map((actividad) => (

                                <div
                                    className="habito-item"
                                    key={`habito-${actividad.id}`}
                                >

                                    <div className="habito-row">

                                        <span>
                                            {actividad.icono}
                                            {" "}
                                            {actividad.titulo}
                                        </span>


                                        <strong>
                                            {
                                                actividad.realizado
                                                    ? "100%"
                                                    : "0%"
                                            }
                                        </strong>

                                    </div>


                                    <div className="progress-line">

                                        <div
                                            style={{
                                                width:
                                                    actividad.realizado
                                                        ? "100%"
                                                        : "0%",
                                            }}
                                        ></div>

                                    </div>

                                </div>

                            ))}

                        </section>


                    </aside>

                </div>



                {/* ==================================================
                    RESUMEN
                ================================================== */}

                <div className="dia-container">

                    <section className="dia-card dia-resumen">

                        <div>

                            <span className="mini-label">
                                RESUMEN DEL DÍA
                            </span>

                            <h2>
                                Tu progreso de hoy
                            </h2>

                            <p>
                                Cada check actualiza automáticamente
                                tu progreso.
                            </p>

                        </div>


                        <div className="dia-resumen-numeros">

                            <div>
                                <strong>
                                    {totalActividades}
                                </strong>

                                <span>
                                    Actividades
                                </span>
                            </div>


                            <div>
                                <strong>
                                    {actividadesCompletadas}
                                </strong>

                                <span>
                                    Completadas
                                </span>
                            </div>


                            <div>
                                <strong>
                                    {
                                        totalActividades -
                                        actividadesCompletadas
                                    }
                                </strong>

                                <span>
                                    Pendientes
                                </span>
                            </div>


                            <div>
                                <strong>
                                    {porcentaje}%
                                </strong>

                                <span>
                                    Progreso
                                </span>
                            </div>

                        </div>

                    </section>

                </div>

            </section>

        </main>

    );

}


export default MiDia;