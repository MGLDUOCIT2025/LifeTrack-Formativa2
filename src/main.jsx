import React from "react";

import ReactDOM from "react-dom/client";

import {
  BrowserRouter
} from "react-router-dom";


/* =========================================================
   APP PRINCIPAL
========================================================= */

import App from "./App.jsx";


/* =========================================================
   CONTEXTOS
========================================================= */

import {
  AuthProvider
} from "./context/AuthContext.jsx";

import {
  CartProvider
} from "./context/CartContext.jsx";

import {
  ProductProvider
} from "./context/ProductContext.jsx";


/* =========================================================
   ESTILOS
========================================================= */

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";


/* =========================================================
   INICIO DE REACT
========================================================= */

ReactDOM
  .createRoot(
    document.getElementById("root")
  )
  .render(

    <React.StrictMode>

      {/* React Router controla las rutas */}

      <BrowserRouter>


        {/* Controla usuario y sesión */}

        <AuthProvider>


          {/* Controla productos globales */}

          <ProductProvider>


            {/* Controla carrito de compras */}

            <CartProvider>


              {/* Aplicación completa */}

              <App />


            </CartProvider>


          </ProductProvider>


        </AuthProvider>


      </BrowserRouter>

    </React.StrictMode>

  );