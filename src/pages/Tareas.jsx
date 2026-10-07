/*
============================================================
TAREAS.JSX
LifeTrack
============================================================
*/

import { useState } from "react";

import "./TareasPremium.css";

import bannerBoxeo from "../assets/lifetrack/banner-boxeo.png";


function Tareas() {

    const [texto, setTexto] =
        useState("");


    const [filtro, setFiltro] =
        useState("Todas");


    const [tareas, setTareas] =
        useState([
            {
                id: 1,
                titulo: "Terminar proyecto LifeTrack",
                categoria: "Estudios",
                completada: true,
            },
            {
                id: 2,
                titulo: "Estudiar Base de Datos",
                categoria: "Estudios",
                completada: false,
            },
            {
                id: 3,
                titulo: "Revisar correos del trabajo",
                categoria: "Trabajo",
                completada: true,
            },
            {
                id: 4,
                titulo: "Entrenamiento gimnasio",
                categoria: "Personal",
                completada: true,
            },
            {
                id: 5,
                titulo: "Organizar actividades",
                categoria: "Personal",
                completada: true,
            },
        ]);


    /*
    ============================================================
    AGREGAR
    ============================================================
    */

    const agregarTarea = (evento) => {

        evento.preventDefault();


        if (!texto.trim()) {

            return;

        }


        setTareas((estadoActual) => [

            ...estadoActual,

            {
                id: Date.now(),
                titulo: texto,
                categoria: "Personal",
                completada: false,
            },

        ]);


        setTexto("");

    };


    /*
    ============================================================
    CAMBIAR ESTADO
    ============================================================
    */

    const cambiarEstado = (id) => {

        setTareas((estadoActual) =>

            estadoActual.map((tarea) =>

                tarea.id === id
                    ? {
                        ...tarea,
                        completada:
                            !tarea.completada,
                    }
                    : tarea

            )

        );

    };


    /*
    ============================================================
    ELIMINAR
    ============================================================
    */

    const eliminar = (id) => {

        setTareas((estadoActual) =>

            estadoActual.filter(
                (tarea) => tarea.id !== id
            )

        );

    };


    /*
    ============================================================
    UN SOLO CÁLCULO

    Este número controla:
    - cantidad completada
    - círculo
    - porcentaje
    - mensaje
    - texto "X de X"
    ============================================================
    */

    const totalTareas =
        tareas.length;


    const completadas =
        tareas.filter(
            (tarea) => tarea.completada
        ).length;


    const porcentaje =
        totalTareas === 0
            ? 0
            : Math.round(
                (completadas / totalTareas)
                * 100
            );


    /*
    ============================================================
    FILTRO
    ============================================================
    */

    const tareasFiltradas =

        filtro === "Todas"
            ? tareas
            : tareas.filter(
                (tarea) =>
                    tarea.categoria === filtro
            );


    /*
    ============================================================
    MENSAJE
    ============================================================
    */

    const obtenerMensaje = () => {

        if (porcentaje === 100) {

            return "¡Objetivos completados!";

        }

        if (porcentaje >= 80) {

            return "¡Excelente trabajo!";

        }

        if (porcentaje >= 50) {

            return "Vas por buen camino";

        }

        if (porcentaje > 0) {

            return "Buen comienzo";

        }

        return "Comienza con tu primera tarea";

    };


    return (

        <main className="task-page">


            {/* HERO */}

            <section
                className="task-hero"
                style={{
                    backgroundImage:
                        `url(${bannerBoxeo})`,
                }}
            >

                <div className="task-hero-overlay"></div>


                <div className="task-container task-hero-content">

                    <span className="task-label">
                        MIS TAREAS
                    </span>


                    <h1>
                        Menos pendientes.
                        <br />

                        <strong>
                            Más progreso.
                        </strong>
                    </h1>


                    <p>
                        Organiza tus objetivos,
                        prioriza lo importante y
                        avanza un paso a la vez.
                    </p>

                </div>

            </section>



            <section className="task-content">

                <div className="task-container">


                    <div className="task-dashboard">


                        <article className="task-stat">

                            <div className="task-stat-icon">
                                📋
                            </div>

                            <div>

                                <strong>
                                    {totalTareas}
                                </strong>

                                <span>
                                    Totales de tareas
                                </span>

                            </div>

                        </article>



                        <article className="task-stat">

                            <div className="task-stat-icon">
                                ✅
                            </div>

                            <div>

                                <strong>
                                    {completadas}
                                </strong>

                                <span>
                                    Completadas
                                </span>

                            </div>

                        </article>



                        <article className="task-progress-card">


                            <div
                                className="task-circle"
                                style={{
                                    "--task-progress":
                                        `${porcentaje * 3.6}deg`,
                                }}
                            >

                                <div className="task-circle-inner">

                                    <div className="task-percent">

                                        <span>
                                            {porcentaje}
                                        </span>

                                        <span>
                                            %
                                        </span>

                                    </div>

                                    <small>
                                        progreso
                                    </small>

                                </div>

                            </div>


                            <div className="task-progress-text">

                                <span>
                                    PROGRESO GENERAL
                                </span>

                                <h2>
                                    {obtenerMensaje()}
                                </h2>

                                <p>
                                    {completadas} de {totalTareas} tareas completadas.
                                </p>

                            </div>

                        </article>

                    </div>



                    {/* AGREGAR */}

                    <form
                        className="task-form"
                        onSubmit={agregarTarea}
                    >

                        <input
                            value={texto}
                            onChange={(evento) =>
                                setTexto(
                                    evento.target.value
                                )
                            }
                            placeholder="¿Qué necesitas hacer hoy?"
                        />


                        <button type="submit">
                            + Agregar tarea
                        </button>

                    </form>



                    {/* FILTROS */}

                    <div className="task-filters">

                        {[
                            "Todas",
                            "Trabajo",
                            "Estudios",
                            "Personal",
                        ].map((item) => (

                            <button
                                type="button"
                                key={item}
                                className={
                                    filtro === item
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setFiltro(item)
                                }
                            >

                                {item}

                            </button>

                        ))}

                    </div>



                    {/* LISTADO */}

                    <div className="task-list">

                        {tareasFiltradas.map((tarea) => (

                            <article
                                key={tarea.id}
                                className={
                                    `task-item ${
                                        tarea.completada
                                            ? "done"
                                            : ""
                                    }`
                                }
                            >

                                <button
                                    type="button"
                                    className="task-check"
                                    onClick={() =>
                                        cambiarEstado(
                                            tarea.id
                                        )
                                    }
                                >

                                    {
                                        tarea.completada
                                            ? "✓"
                                            : ""
                                    }

                                </button>


                                <div className="task-item-info">

                                    <strong>
                                        {tarea.titulo}
                                    </strong>

                                    <span>
                                        {tarea.categoria}
                                    </span>

                                </div>


                                <button
                                    type="button"
                                    className="task-delete"
                                    onClick={() =>
                                        eliminar(tarea.id)
                                    }
                                >

                                    Eliminar

                                </button>

                            </article>

                        ))}

                    </div>


                </div>

            </section>

        </main>

    );

}


export default Tareas;