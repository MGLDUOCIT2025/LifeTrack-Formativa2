// ============================================================
// PORTAFOLIO.SPEC.JS
// Evaluación Formativa N°2
//
// Pruebas realizadas:
// - Renderizado de componentes
// - Datos provenientes de JSON
// - Manipulación del DOM
// - State
// - Eventos
// - Validaciones
// - Mock con Jasmine
// ============================================================

import React from "react";

import {
    cleanup,
    fireEvent,
    render,
    screen
} from "@testing-library/react";

import Portafolio from "../pages/Portafolio.jsx";


// ============================================================
// LIMPIEZA DEL DOM
// ============================================================

afterEach(() => {

    cleanup();

});


// ============================================================
// GRUPO DE PRUEBAS
// ============================================================

describe(
    "Página Portafolio",

    function () {


        // ====================================================
        // TEST 1
        // RENDERIZADO PRINCIPAL
        // ====================================================

        it(
            "debería renderizar el título principal",

            function () {

                render(
                    <Portafolio />
                );


                const titulo =
                    screen.getByText(
                        /Mi Portafolio/i
                    );


                expect(
                    titulo
                ).toBeTruthy();

            }

        );


        // ====================================================
        // TEST 2
        // DATOS CARGADOS DESDE JSON
        // ====================================================

        it(
            "debería mostrar los proyectos cargados desde JSON",

            async function () {

                render(
                    <Portafolio />
                );


                /*
                LifeTrack aparece en varias partes de la página:
                título, noticias y proyectos.

                Por eso utilizamos findAllByText en lugar de
                findByText.
                */

                const elementosLifeTrack =
                    await screen.findAllByText(
                        "LifeTrack"
                    );


                expect(
                    elementosLifeTrack.length
                ).toBeGreaterThan(0);


                /*
                Sáltate la Fila corresponde a uno de nuestros
                proyectos almacenados en proyectos.json.
                */

                const saltateLaFila =
                    screen.getByText(
                        "Sáltate la Fila"
                    );


                expect(
                    saltateLaFila
                ).toBeTruthy();

            }

        );


        // ====================================================
        // TEST 3
        // FORMULARIO VACÍO
        // ====================================================

        it(
            "debería mostrar error si el formulario está vacío",

            function () {

                render(
                    <Portafolio />
                );


                const boton =
                    screen.getByText(
                        "Enviar mensaje"
                    );


                /*
                Obtenemos el formulario al que pertenece
                el botón.
                */

                const formulario =
                    boton.closest(
                        "form"
                    );


                /*
                Disparamos directamente el evento submit.
                */

                fireEvent.submit(
                    formulario
                );


                const mensajeError =
                    screen.getByText(
                        "Todos los campos son obligatorios."
                    );


                expect(
                    mensajeError
                ).toBeTruthy();

            }

        );


        // ====================================================
        // TEST 4
        // EVENTOS + STATE + MOCK
        // ====================================================

        it(
            "debería procesar correctamente un formulario válido",

            function () {

                /*
                Creamos una función simulada con Jasmine.

                Esta función representa una operación externa,
                como podría ser enviar información a una API.
                */

                const mockEnviar =
                    jasmine.createSpy(
                        "onEnviarMensaje"
                    );


                render(

                    <Portafolio
                        onEnviarMensaje={mockEnviar}
                    />

                );


                // ---------------------------------------------
                // LOCALIZAR CAMPOS DEL DOM
                // ---------------------------------------------

                const campoNombre =
                    screen.getByLabelText(
                        "Nombre"
                    );


                const campoEmail =
                    screen.getByLabelText(
                        "Correo electrónico"
                    );


                const campoMensaje =
                    screen.getByLabelText(
                        "Mensaje"
                    );


                // ---------------------------------------------
                // SIMULAR EVENTO CHANGE - NOMBRE
                // ---------------------------------------------

                fireEvent.change(

                    campoNombre,

                    {
                        target: {

                            value:
                                "Mario González"

                        }
                    }

                );


                // ---------------------------------------------
                // SIMULAR EVENTO CHANGE - EMAIL
                // ---------------------------------------------

                fireEvent.change(

                    campoEmail,

                    {
                        target: {

                            value:
                                "mario@email.cl"

                        }
                    }

                );


                // ---------------------------------------------
                // SIMULAR EVENTO CHANGE - MENSAJE
                // ---------------------------------------------

                fireEvent.change(

                    campoMensaje,

                    {
                        target: {

                            value:
                                "Mensaje de prueba"

                        }
                    }

                );


                // ---------------------------------------------
                // OBTENER FORMULARIO
                // ---------------------------------------------

                const boton =
                    screen.getByText(
                        "Enviar mensaje"
                    );


                const formulario =
                    boton.closest(
                        "form"
                    );


                // ---------------------------------------------
                // SIMULAR EVENTO SUBMIT
                // ---------------------------------------------

                fireEvent.submit(
                    formulario
                );


                // ---------------------------------------------
                // COMPROBAR MOCK
                // ---------------------------------------------

                expect(
                    mockEnviar
                ).toHaveBeenCalled();


                // ---------------------------------------------
                // COMPROBAR CAMBIO EN EL DOM
                // ---------------------------------------------

                const mensajeExito =
                    screen.getByText(
                        "Mensaje enviado correctamente."
                    );


                expect(
                    mensajeExito
                ).toBeTruthy();

            }

        );


        // ====================================================
        // TEST 5
        // VALIDACIÓN DE CORREO
        // ====================================================

        it(
            "debería rechazar un correo electrónico inválido",

            function () {

                render(
                    <Portafolio />
                );


                // ---------------------------------------------
                // NOMBRE
                // ---------------------------------------------

                fireEvent.change(

                    screen.getByLabelText(
                        "Nombre"
                    ),

                    {
                        target: {

                            value:
                                "Mario"

                        }
                    }

                );


                // ---------------------------------------------
                // EMAIL INVÁLIDO
                // ---------------------------------------------

                fireEvent.change(

                    screen.getByLabelText(
                        "Correo electrónico"
                    ),

                    {
                        target: {

                            value:
                                "correo-invalido"

                        }
                    }

                );


                // ---------------------------------------------
                // MENSAJE
                // ---------------------------------------------

                fireEvent.change(

                    screen.getByLabelText(
                        "Mensaje"
                    ),

                    {
                        target: {

                            value:
                                "Mensaje de prueba"

                        }
                    }

                );


                /*
                Como el input utiliza type="email", Chrome posee
                validación HTML propia.

                Si hacemos clic directamente sobre el botón,
                Chrome puede bloquear el envío antes de que
                React ejecute handleSubmit.

                Para probar específicamente nuestra validación
                React, disparamos directamente el evento submit.
                */

                const boton =
                    screen.getByText(
                        "Enviar mensaje"
                    );


                const formulario =
                    boton.closest(
                        "form"
                    );


                fireEvent.submit(
                    formulario
                );


                const mensajeError =
                    screen.getByText(
                        "Debes ingresar un correo electrónico válido."
                    );


                expect(
                    mensajeError
                ).toBeTruthy();

            }

        );

    }

);