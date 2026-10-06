import {
  Link
} from "react-router-dom";


function Footer() {

  return (

    <footer className="footer-principal">

      <div className="container">

        <div className="row g-4 py-5">


          {/* =============================================
              LIFETRACK
          ============================================= */}

          <div className="col-lg-4">

            <h3>
              ✓ LifeTrack
            </h3>

            <p>

              Organiza tu día,
              administra tus actividades
              y avanza hacia tus metas.

            </p>

          </div>


          {/* =============================================
              NAVEGACIÓN
          ============================================= */}

          <div className="col-lg-3">

            <h5>
              Navegación
            </h5>

            <Link to="/">
              Inicio
            </Link>

            <Link to="/mi-dia">
              Mi Día
            </Link>

            <Link to="/tareas">
              Mis Tareas
            </Link>

            <Link to="/productos">
              Tienda
            </Link>

          </div>


          {/* =============================================
              INFORMACIÓN
          ============================================= */}

          <div className="col-lg-3">

            <h5>
              Información
            </h5>

            <Link to="/blog">
              Blog
            </Link>

            <Link to="/nosotros">
              Nosotros
            </Link>

            <Link to="/contacto">
              Contacto
            </Link>

          </div>


          {/* =============================================
              PROYECTO
          ============================================= */}

          <div className="col-lg-2">

            <h5>
              Proyecto
            </h5>

            <p>
              Full Stack II
            </p>

            <p>
              LifeTrack
            </p>

          </div>


        </div>

      </div>


      <div className="footer-final">

        © 2026 LifeTrack |
        Proyecto Desarrollo Full Stack II

      </div>

    </footer>

  );

}


export default Footer;