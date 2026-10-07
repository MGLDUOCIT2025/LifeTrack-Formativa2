/*
============================================================
PRODUCTOS.JSX
LifeTrack - Tienda
============================================================

Página completa de Tienda.

Incluye:
- Hero con imagen oficial
- Botón REAL sobre el botón dibujado en la imagen
- Categorías
- Productos
- Carrito
- Contador
- Precios CLP

============================================================
*/

import { useMemo, useState } from "react";

import "./ProductosPremium.css";

/* =========================================================
   IMÁGENES
========================================================= */

import tiendaHero from "../assets/lifetrack/tienda-hero.png";
import shaker from "../assets/lifetrack/shaker.png";
import cuaderno from "../assets/lifetrack/cuaderno.png";
import polera from "../assets/lifetrack/polera.png";
import guantes from "../assets/lifetrack/guantes.png";


function Productos() {

    /* =====================================================
       LISTADO DE PRODUCTOS
    ===================================================== */

    const productos = [

        {
            id: 1,
            nombre: "Shaker LifeTrack",
            categoria: "Fitness",
            descripcion:
                "Shaker deportivo para acompañarte en entrenamientos y mantener tu hidratación.",
            precio: 12990,
            imagen: shaker,
            icono: "🥤",
        },

        {
            id: 2,
            nombre: "Cuaderno Vida en Equilibrio",
            categoria: "Organización",
            descripcion:
                "Cuaderno premium para planificar tus metas, hábitos, estudios y actividades.",
            precio: 9990,
            imagen: cuaderno,
            icono: "📓",
        },

        {
            id: 3,
            nombre: "Polera LifeTrack",
            categoria: "Ropa",
            descripcion:
                "Polera deportiva LifeTrack cómoda, ligera y pensada para acompañar tu rutina.",
            precio: 14990,
            imagen: polera,
            icono: "👕",
        },

        {
            id: 4,
            nombre: "Guantes de Boxeo LifeTrack",
            categoria: "Boxeo",
            descripcion:
                "Guantes deportivos para entrenamiento técnico, saco y acondicionamiento.",
            precio: 39990,
            imagen: guantes,
            icono: "🥊",
        },

    ];


    /* =====================================================
       STATE
    ===================================================== */

    const [categoria, setCategoria] =
        useState("Todos");

    const [carrito, setCarrito] =
        useState([]);


    /* =====================================================
       CATEGORÍAS
    ===================================================== */

    const categorias = [

        "Todos",
        "Fitness",
        "Organización",
        "Ropa",
        "Boxeo",

    ];


    /* =====================================================
       FILTRAR PRODUCTOS
    ===================================================== */

    const productosFiltrados =
        useMemo(() => {

            if (categoria === "Todos") {

                return productos;

            }

            return productos.filter(
                (producto) =>
                    producto.categoria === categoria
            );

        }, [categoria]);


    /* =====================================================
       AGREGAR AL CARRITO
    ===================================================== */

    const agregarCarrito = (producto) => {

        setCarrito((carritoActual) => {

            const productoExistente =
                carritoActual.find(
                    (item) =>
                        item.id === producto.id
                );

            if (productoExistente) {

                return carritoActual.map(
                    (item) =>
                        item.id === producto.id

                            ? {
                                ...item,
                                cantidad:
                                    item.cantidad + 1,
                            }

                            : item
                );

            }

            return [

                ...carritoActual,

                {
                    ...producto,
                    cantidad: 1,
                },

            ];

        });

    };


    /* =====================================================
       TOTAL DE PRODUCTOS DEL CARRITO
    ===================================================== */

    const cantidadCarrito =
        carrito.reduce(

            (total, item) =>
                total + item.cantidad,

            0

        );


    /* =====================================================
       FORMATO PESOS CHILENOS
    ===================================================== */

    const formatoPrecio = (precio) => {

        return new Intl.NumberFormat(
            "es-CL",
            {
                style: "currency",
                currency: "CLP",
                maximumFractionDigits: 0,
            }
        ).format(precio);

    };


    /* =====================================================
       RETURN
    ===================================================== */

    return (

        <main
            className="tienda-page"
            translate="no"
        >

            {/* =================================================
                HERO
            ================================================= */}

            <section className="tienda-hero">

                <img

                    src={tiendaHero}

                    alt="Productos LifeTrack"

                    className="tienda-hero-image"

                />


                {/*
                =================================================
                BOTÓN FUNCIONAL

                Este botón se coloca EXACTAMENTE encima
                del botón que viene dibujado en la imagen.

                Además tiene una capa más grande detrás
                para que NO sobresalga el botón falso.
                =================================================
                */}

                <a

                    href="#productos"

                    className="productos-real-button"

                >

                    Ver productos →

                </a>

            </section>


            {/* =================================================
                CONTENIDO
            ================================================= */}

            <section

                id="productos"

                className="tienda-main"

            >

                <div className="tienda-container">


                    {/* =========================================
                        CABECERA
                    ========================================= */}

                    <div className="tienda-section-heading">

                        <div>

                            <span className="tienda-small-title">

                                TIENDA LIFETRACK

                            </span>


                            <h2>

                                Productos destacados

                            </h2>


                            <p>

                                Herramientas y accesorios
                                pensados para acompañarte
                                en tu rutina diaria.

                            </p>

                        </div>


                        <div className="tienda-carrito-card">

                            <span>

                                🛒

                            </span>


                            <div>

                                <strong>

                                    Mi carrito

                                </strong>

                                <small>

                                    {cantidadCarrito}
                                    {" "}
                                    productos

                                </small>

                            </div>

                        </div>

                    </div>


                    {/* =========================================
                        FILTROS
                    ========================================= */}

                    <div className="tienda-filters">

                        {categorias.map(
                            (item) => (

                                <button

                                    key={item}

                                    type="button"

                                    className={
                                        categoria === item
                                            ? "active"
                                            : ""
                                    }

                                    onClick={() =>
                                        setCategoria(item)
                                    }

                                >

                                    {item}

                                </button>

                            )
                        )}

                    </div>


                    {/* =========================================
                        PRODUCTOS
                    ========================================= */}

                    <div className="tienda-products-grid">

                        {productosFiltrados.map(
                            (producto) => (

                                <article

                                    key={producto.id}

                                    className="tienda-product-card"

                                >

                                    <div className="tienda-product-image">

                                        <span className="tienda-product-tag">

                                            {producto.categoria}

                                        </span>


                                        <img

                                            src={producto.imagen}

                                            alt={producto.nombre}

                                        />

                                    </div>


                                    <div className="tienda-product-info">

                                        <div className="tienda-product-title-row">

                                            <span>

                                                {producto.icono}

                                            </span>


                                            <h3>

                                                {producto.nombre}

                                            </h3>

                                        </div>


                                        <p>

                                            {producto.descripcion}

                                        </p>


                                        <div className="tienda-rating">

                                            <span>

                                                ★★★★★

                                            </span>

                                            <small>

                                                4.9

                                            </small>

                                        </div>


                                        <div className="tienda-product-footer">

                                            <strong>

                                                {
                                                    formatoPrecio(
                                                        producto.precio
                                                    )
                                                }

                                            </strong>


                                            <button

                                                type="button"

                                                onClick={() =>
                                                    agregarCarrito(
                                                        producto
                                                    )
                                                }

                                            >

                                                Agregar

                                                <span>

                                                    ＋

                                                </span>

                                            </button>

                                        </div>

                                    </div>

                                </article>

                            )
                        )}

                    </div>


                    {/* =========================================
                        BENEFICIOS
                    ========================================= */}

                    <section className="tienda-benefits">

                        <article>

                            <span>

                                🚚

                            </span>

                            <div>

                                <h3>

                                    Despacho

                                </h3>

                                <p>

                                    Recibe tus productos
                                    cómodamente.

                                </p>

                            </div>

                        </article>


                        <article>

                            <span>

                                🔒

                            </span>

                            <div>

                                <h3>

                                    Compra segura

                                </h3>

                                <p>

                                    Tus datos siempre
                                    protegidos.

                                </p>

                            </div>

                        </article>


                        <article>

                            <span>

                                ⭐

                            </span>

                            <div>

                                <h3>

                                    Calidad LifeTrack

                                </h3>

                                <p>

                                    Productos seleccionados
                                    para tu rutina.

                                </p>

                            </div>

                        </article>

                    </section>

                </div>

            </section>

        </main>

    );

}


export default Productos;