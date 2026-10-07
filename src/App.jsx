/*
============================================================
APP.JSX
Sistema principal de rutas de LifeTrack
============================================================
*/

import {
  Routes,
  Route
} from "react-router-dom";


/*
============================================================
COMPONENTES GENERALES
============================================================
*/

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";


/*
============================================================
PÁGINAS
============================================================
*/

import Home from "./pages/Home.jsx";
import Productos from "./pages/Productos.jsx";
import ProductoDetalle from "./pages/ProductoDetalle.jsx";

import MiDia from "./pages/MiDia.jsx";
import Tareas from "./pages/Tareas.jsx";

import Blog from "./pages/Blog.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Contacto from "./pages/Contacto.jsx";

import Login from "./pages/Login.jsx";
import Registro from "./pages/Registro.jsx";

import Carrito from "./pages/Carrito.jsx";
import Admin from "./pages/Admin.jsx";


/*
============================================================
EVALUACIÓN FORMATIVA N°2
PORTAFOLIO
============================================================
*/

import Portafolio from "./pages/Portafolio.jsx";


/*
============================================================
APP
============================================================
*/

function App() {

  return (

    <div className="app">

      {/* HEADER GLOBAL */}

      <Header />


      {/* ==================================================
          CONTENIDO PRINCIPAL
      ================================================== */}

      <main>

        <Routes>


          {/* ===============================================
              INICIO
          =============================================== */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* ===============================================
              PRODUCTOS
          =============================================== */}

          <Route
            path="/productos"
            element={<Productos />}
          />


          <Route
            path="/producto/:codigo"
            element={<ProductoDetalle />}
          />


          {/* ===============================================
              ORGANIZACIÓN
          =============================================== */}

          <Route
            path="/mi-dia"
            element={<MiDia />}
          />


          <Route
            path="/tareas"
            element={<Tareas />}
          />


          {/* ===============================================
              INFORMACIÓN
          =============================================== */}

          <Route
            path="/blog"
            element={<Blog />}
          />


          <Route
            path="/nosotros"
            element={<Nosotros />}
          />


          <Route
            path="/contacto"
            element={<Contacto />}
          />


          {/* ===============================================
              AUTENTICACIÓN
          =============================================== */}

          <Route
            path="/login"
            element={<Login />}
          />


          <Route
            path="/registro"
            element={<Registro />}
          />


          {/* ===============================================
              CARRITO
          =============================================== */}

          <Route
            path="/carrito"
            element={<Carrito />}
          />


          {/* ===============================================
              ADMINISTRACIÓN
          =============================================== */}

          <Route
            path="/admin"
            element={<Admin />}
          />


          {/* ===============================================
              EVALUACIÓN FORMATIVA N°2
              PORTAFOLIO
          =============================================== */}

          <Route
            path="/portafolio"
            element={<Portafolio />}
          />


        </Routes>

      </main>


      {/* FOOTER GLOBAL */}

      <Footer />

    </div>

  );

}

export default App;