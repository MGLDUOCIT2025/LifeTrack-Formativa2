// ============================================================
// NEWSCARD.SPEC.JS
//
// Objetivo:
// comprobar que NewsCard se renderiza correctamente
// utilizando información recibida mediante props.
// ============================================================

import React from "react";

import {
    cleanup,
    render,
    screen
} from "@testing-library/react";

import NewsCard from
    "../components/NewsCard.jsx";


// ============================================================
// LIMPIAR DOM DESPUÉS DE CADA PRUEBA
// ============================================================

afterEach(() => {

    cleanup();

});


// ============================================================
// GRUPO DE PRUEBAS
// ============================================================

describe(
    "Componente NewsCard",

    function () {

        // ----------------------------------------------------
        // TEST 1
        // ----------------------------------------------------

        it(
            "debería mostrar correctamente una noticia recibida por props",

            function () {

                const noticiaPrueba = {

                    id: 1,

                    titulo:
                        "Noticia de prueba",

                    fecha:
                        "06-10-2026",

                    contenido:
                        "Contenido utilizado para probar el componente."

                };


                render(

                    <NewsCard
                        noticia={noticiaPrueba}
                    />

                );


                expect(

                    screen.getByText(
                        "Noticia de prueba"
                    )

                ).toBeTruthy();


                expect(

                    screen.getByText(
                        "06-10-2026"
                    )

                ).toBeTruthy();


                expect(

                    screen.getByText(
                        "Contenido utilizado para probar el componente."
                    )

                ).toBeTruthy();

            }

        );

    }

);