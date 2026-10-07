/*
============================================================
MAIN.JSX
Punto de entrada principal de LifeTrack
============================================================
*/

import React from "react";
import ReactDOM from "react-dom/client";

/*
============================================================
REACT ROUTER
============================================================
*/

import { BrowserRouter } from "react-router-dom";


/*
============================================================
BOOTSTRAP
============================================================
*/

import "bootstrap/dist/css/bootstrap.min.css";


/*
============================================================
CONTEXTOS DE LIFETRACK
============================================================
*/

import { AuthProvider } from "./context/AuthContext.jsx";

import { CartProvider } from "./context/CartContext.jsx";

import { ProductProvider } from "./context/ProductContext.jsx";


/*
============================================================
APP PRINCIPAL
============================================================
*/

import App from "./App.jsx";


/*
============================================================
ESTILOS GENERALES
============================================================
*/

import "./styles.css";


/*
============================================================
RENDER PRINCIPAL

El basename es necesario porque GitHub Pages publica
LifeTrack dentro de:

/LifeTrack-Formativa2/
============================================================
*/

ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <BrowserRouter basename="/LifeTrack-Formativa2">

            <AuthProvider>

                <ProductProvider>

                    <CartProvider>

                        <App />

                    </CartProvider>

                </ProductProvider>

            </AuthProvider>

        </BrowserRouter>

    </React.StrictMode>

);