import {
    Route,
    Routes
} from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

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
NUEVA PÁGINA PARA LA EVALUACIÓN FORMATIVA 2
============================================================
*/

import Portafolio from "./pages/Portafolio.jsx";


function App() {

    return (

        <div className="app">

            <Header />


            <main>

                <Routes>


                    <Route
                        path="/"
                        element={<Home />}
                    />


                    <Route
                        path="/productos"
                        element={<Productos />}
                    />


                    <Route
                        path="/producto/:codigo"
                        element={<ProductoDetalle />}
                    />


                    <Route
                        path="/mi-dia"
                        element={<MiDia />}
                    />


                    <Route
                        path="/tareas"
                        element={<Tareas />}
                    />


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


                    <Route
                        path="/login"
                        element={<Login />}
                    />


                    <Route
                        path="/registro"
                        element={<Registro />}
                    />


                    <Route
                        path="/carrito"
                        element={<Carrito />}
                    />


                    <Route
                        path="/admin"
                        element={<Admin />}
                    />


                    {/*
                    ============================================
                    FORMativa 2
                    ============================================
                    */}

                    <Route
                        path="/portafolio"
                        element={<Portafolio />}
                    />


                </Routes>

            </main>


            <Footer />


        </div>

    );

}

export default App;