/*
============================================================
NOSOTROS.JSX
LifeTrack
============================================================
*/

import { Link } from "react-router-dom";

import "./NosotrosPremium.css";


/* =========================================================
   IMÁGENES DEL EQUIPO
========================================================= */

import nosotrosHero from "../assets/lifetrack/nosotros-hero.png";

import nosotrosMario from "../assets/lifetrack/nosotros-mario.png";

import nosotrosAndrea from "../assets/lifetrack/nosotros-andrea.png";

import nosotrosLuis from "../assets/lifetrack/nosotros-luis.png";

import nosotrosValentina from "../assets/lifetrack/nosotros-valentina.png";


function Nosotros() {

    return (

        <main className="nosotros-page">


            {/* =================================================
                HERO NOSOTROS
            ================================================= */}

            <section className="nosotros-hero">

                <img

                    src={nosotrosHero}

                    alt="Equipo LifeTrack"

                />

            </section>


            {/* =================================================
                MARIO
            ================================================= */}

            <section className="nosotros-integrante nosotros-mario">

                <img

                    src={nosotrosMario}

                    alt="Mario - fundador de LifeTrack"

                />


                {/*
                El botón está separado del texto.

                Lo dejamos a la DERECHA para no tapar
                los cuadros de la imagen.
                */}

                <Link

                    to="/portafolio"

                    className="nosotros-portafolio-button"

                >

                    Ver mi portafolio →

                </Link>

            </section>


            {/* =================================================
                ANDREA
            ================================================= */}

            <section className="nosotros-integrante">

                <img

                    src={nosotrosAndrea}

                    alt="Andrea - Diseñadora y cofundadora"

                />

            </section>


            {/* =================================================
                LUIS
            ================================================= */}

            <section className="nosotros-integrante">

                <img

                    src={nosotrosLuis}

                    alt="Luis - Soporte y Operaciones"

                />

            </section>


            {/* =================================================
                VALENTINA
            ================================================= */}

            <section className="nosotros-integrante">

                <img

                    src={nosotrosValentina}

                    alt="Valentina - Marketing y Contenido"

                />

            </section>


        </main>

    );

}


export default Nosotros;