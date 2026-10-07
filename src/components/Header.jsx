/*
============================================================
HEADER.JSX
LifeTrack
============================================================

Header principal de LifeTrack.

Incluye:
- Logo
- Navegación
- Carrito
- Iniciar sesión
- Comenzar gratis

============================================================
*/

import { NavLink, Link } from "react-router-dom";

import "./HeaderPremium.css";


function Header() {

    return (

        <header className="lifetrack-header">

            <div className="lifetrack-header-container">


                {/* =================================================
                    LOGO
                ================================================= */}

                <Link
                    to="/"
                    className="lifetrack-logo"
                >

                    <div className="lifetrack-logo-icon">

                        ✓

                    </div>


                    <div className="lifetrack-logo-text">

                        <strong>

                            LifeTrack

                        </strong>

                        <span>

                            Organiza tu día. Cumple tus metas.

                        </span>

                    </div>

                </Link>


                {/* =================================================
                    MENÚ PRINCIPAL
                ================================================= */}

                <nav className="lifetrack-nav">


                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "lifetrack-nav-link active"
                                : "lifetrack-nav-link"
                        }
                    >

                        Inicio

                    </NavLink>


                    <NavLink
                        to="/mi-dia"
                        className={({ isActive }) =>
                            isActive
                                ? "lifetrack-nav-link active"
                                : "lifetrack-nav-link"
                        }
                    >

                        Mi Día

                    </NavLink>


                    <NavLink
                        to="/tareas"
                        className={({ isActive }) =>
                            isActive
                                ? "lifetrack-nav-link active"
                                : "lifetrack-nav-link"
                        }
                    >

                        Mis Tareas

                    </NavLink>


                    <NavLink
                        to="/productos"
                        className={({ isActive }) =>
                            isActive
                                ? "lifetrack-nav-link active"
                                : "lifetrack-nav-link"
                        }
                    >

                        Tienda

                    </NavLink>


                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive
                                ? "lifetrack-nav-link active"
                                : "lifetrack-nav-link"
                        }
                    >

                        Blog

                    </NavLink>


                    <NavLink
                        to="/nosotros"
                        className={({ isActive }) =>
                            isActive
                                ? "lifetrack-nav-link active"
                                : "lifetrack-nav-link"
                        }
                    >

                        Nosotros

                    </NavLink>


                    <NavLink
                        to="/contacto"
                        className={({ isActive }) =>
                            isActive
                                ? "lifetrack-nav-link active"
                                : "lifetrack-nav-link"
                        }
                    >

                        Contacto

                    </NavLink>


                    <NavLink
                        to="/portafolio"
                        className={({ isActive }) =>
                            isActive
                                ? "lifetrack-nav-link active"
                                : "lifetrack-nav-link"
                        }
                    >

                        <span className="portfolio-icon">

                            💼

                        </span>

                        Portafolio

                    </NavLink>


                </nav>


                {/* =================================================
                    ACCIONES DERECHA
                ================================================= */}

                <div className="lifetrack-header-actions">


                    {/* =============================================
                        CARRITO
                    ============================================= */}

                    <Link
                        to="/productos"
                        className="header-cart-button"
                        aria-label="Ir a la tienda"
                        title="Tienda LifeTrack"
                    >

                        🛒

                    </Link>


                    {/* =============================================
                        INICIAR SESIÓN
                    ============================================= */}

                    <Link
                        to="/login"
                        className="header-login-button"
                    >

                        <span className="header-login-icon">

                            👤

                        </span>

                        <span>

                            Iniciar sesión

                        </span>

                    </Link>


                    {/* =============================================
                        COMENZAR GRATIS
                    ============================================= */}

                    <Link
                        to="/registro"
                        className="header-start-button"
                    >

                        <span>

                            Comenzar gratis

                        </span>

                        <span className="header-arrow">

                            →

                        </span>

                    </Link>


                </div>


            </div>

        </header>

    );

}


export default Header;