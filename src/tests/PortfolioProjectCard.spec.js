// ============================================================
// PORTFOLIOPROJECTCARD.SPEC.JS
//
// Objetivo:
// verificar que el componente reutilizable recibe
// correctamente los datos mediante props.
// ============================================================

import React from "react";

import {
    cleanup,
    render,
    screen
} from "@testing-library/react";

import PortfolioProjectCard from
    "../components/PortfolioProjectCard.jsx";


// ============================================================
// LIMPIEZA
// ============================================================

afterEach(() => {

    cleanup();

});


// ============================================================
// PRUEBAS
// ============================================================

describe(
    "Componente PortfolioProjectCard",

    function () {

        it(
            "debería mostrar los datos del proyecto recibidos por props",

            function () {

                const proyectoPrueba = {

                    id: 1,

                    titulo:
                        "LifeTrack Test",

                    descripcion:
                        "Proyecto utilizado durante una prueba unitaria.",

                    tecnologias:
                        "React y JavaScript",

                    imagen:
                        "https://example.com/imagen.jpg",

                    enlace:
                        "https://github.com/"

                };


                render(

                    <PortfolioProjectCard
                        proyecto={proyectoPrueba}
                    />

                );


                // ---------------------------------------------
                // TÍTULO
                // ---------------------------------------------

                expect(

                    screen.getByText(
                        "LifeTrack Test"
                    )

                ).toBeTruthy();


                // ---------------------------------------------
                // DESCRIPCIÓN
                // ---------------------------------------------

                expect(

                    screen.getByText(
                        "Proyecto utilizado durante una prueba unitaria."
                    )

                ).toBeTruthy();


                // ---------------------------------------------
                // TECNOLOGÍAS
                // ---------------------------------------------

                expect(

                    screen.getByText(
                        "React y JavaScript"
                    )

                ).toBeTruthy();


                // ---------------------------------------------
                // BOTÓN
                // ---------------------------------------------

                const boton =
                    screen.getByText(
                        "Ver proyecto"
                    );


                expect(
                    boton
                ).toBeTruthy();

            }

        );

    }

);