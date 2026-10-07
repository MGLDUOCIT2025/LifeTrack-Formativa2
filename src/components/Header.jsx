/*
============================================================
HEADER.JSX
Encabezado principal de LifeTrack
============================================================
*/

import {
    Link,
    NavLink,
    useNavigate
} from "react-router-dom";

import {
    useAuth
} from "../context/AuthContext";

import {
    useCart
} from "../context/CartContext";


function Header() {

    /*
    ============================================================
    DATOS DE SESIÓN
    ============================================================
    */

    const {
        usuario,
        logout
    } = useAuth();


    /*
    ============================================================
    DATOS DEL CARRITO
    ============================================================
    */

    const {
        cantidadTotal
    } = useCart();


    /*
    ============================================================
    NAVEGACIÓN
    ============================================================
    */

    const navigate = useNavigate();


    /*
    ============================================================
    CERRAR SESIÓN
    ============================================================
    */

    function cerrarSesion() {

        logout();

        navigate("/");

    }


    return (

        <header className="header-principal">

            <div className="contenedor-header">


                {/* ==================================================
                    LOGO
                ================================================== */}

                <Link
                    to="/"
                    className="logo-lifetrack"
                >

                    <div className="logo-circulo">

                        ✓

                    </div>


                    <div>

                        <h2>
                            LifeTrack
                        </h2>

                        <span>
                            Organiza tu día. Cumple tus metas.
                        </span>

                    </div>

                </Link>



                {/* ==================================================
                    MENÚ PRINCIPAL
                ================================================== */}

                <nav className="menu-principal">


                    <NavLink to="/">

                        Inicio

                    </NavLink>


                    <NavLink to="/mi-dia">

                        Mi Día

                    </NavLink>


                    <NavLink to="/tareas">

                        Mis Tareas

                    </NavLink>


                    <NavLink to="/productos">

                        Tienda

                    </NavLink>


                    <NavLink to="/blog">

                        Blog

                    </NavLink>


                    <NavLink to="/nosotros">

                        Nosotros

                    </NavLink>


                    <NavLink to="/contacto">

                        Contacto

                    </NavLink>



                    {/* ==================================================
                        BOTÓN PORTAFOLIO
                        Evaluación Formativa N°2
                    ================================================== */}

                    <Link
                        to="/portafolio"
                        className="boton-portafolio-menu"
                    >

                        💼 Portafolio

                    </Link>


                </nav>



                {/* ==================================================
                    ACCIONES DEL HEADER
                ================================================== */}

                <div className="acciones-header">


                    {/* CARRITO */}

                    <Link
                        to="/carrito"
                        className="icono-carrito"
                    >

                        🛒


                        {
                            cantidadTotal > 0 && (

                                <span className="contador-carrito">

                                    {cantidadTotal}

                                </span>

                            )
                        }

                    </Link>



                    {/* ==================================================
                        USUARIO SIN SESIÓN
                    ================================================== */}

                    {
                        !usuario && (

                            <>

                                <Link
                                    to="/login"
                                    className="btn btn-outline-primary"
                                >

                                    Iniciar sesión

                                </Link>


                                <Link
                                    to="/registro"
                                    className="btn btn-primary"
                                >

                                    Registrarse

                                </Link>

                            </>

                        )
                    }



                    {/* ==================================================
                        USUARIO CON SESIÓN
                    ================================================== */}

                    {
                        usuario && (

                            <>

                                <span className="usuario-header">

                                    👤 Hola, {usuario.nombre}

                                </span>


                                {/* ADMINISTRADOR */}

                                {
                                    usuario.rol === "admin" && (

                                        <Link
                                            to="/admin"
                                            className="btn btn-outline-primary"
                                        >

                                            Administrar

                                        </Link>

                                    )
                                }


                                {/* CERRAR SESIÓN */}

                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={cerrarSesion}
                                >

                                    Cerrar sesión

                                </button>

                            </>

                        )
                    }


                </div>


            </div>

        </header>

    );

}


export default Header;