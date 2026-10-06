import {
  useState
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  useAuth
} from "../context/AuthContext.jsx";


function Login() {

  const {
    login
  } = useAuth();

  const navigate =
    useNavigate();

  const [correo, setCorreo] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [mensaje, setMensaje] =
    useState("");

  const [tipoMensaje, setTipoMensaje] =
    useState("danger");


  function iniciarSesion(event) {

    event.preventDefault();

    const correoLimpio =
      correo.trim().toLowerCase();


    if (
      !correoLimpio ||
      !password
    ) {

      setTipoMensaje("danger");

      setMensaje(
        "Debes ingresar correo y contraseña."
      );

      return;
    }


    const resultado =
      login(
        correoLimpio,
        password
      );


    if (!resultado.ok) {

      setTipoMensaje("danger");

      setMensaje(
        resultado.mensaje
      );

      return;
    }


    setTipoMensaje("success");

    setMensaje(
      "Inicio de sesión correcto."
    );


    setTimeout(() => {

      if (
        resultado.usuario.rol ===
        "admin"
      ) {

        navigate("/admin");

      } else {

        navigate("/");

      }

    }, 600);

  }


  return (

    <section className="pagina-formulario">

      <div className="formulario-layout">

        <div className="formulario-panel">

          <span>
            BIENVENIDO
          </span>

          <h1>
            Sigue avanzando hacia tus metas
          </h1>

          <p>
            Inicia sesión y continúa organizando
            tu día con LifeTrack.
          </p>

        </div>


        <div className="formulario-card">

          <h2>
            Iniciar sesión
          </h2>

          <p>
            Ingresa tu correo y contraseña.
          </p>


          {
            mensaje && (

              <div
                className={
                  `alert alert-${tipoMensaje}`
                }
              >

                {mensaje}

              </div>

            )
          }


          <form
            onSubmit={iniciarSesion}
          >

            <label>
              Correo electrónico
            </label>

            <input
              type="email"
              placeholder="correo@ejemplo.cl"
              value={correo}
              required
              onChange={
                event =>
                  setCorreo(
                    event.target.value
                  )
              }
            />


            <label>
              Contraseña
            </label>

            <input
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              required
              onChange={
                event =>
                  setPassword(
                    event.target.value
                  )
              }
            />


            <button
              type="submit"
              className="btn btn-primary"
            >

              Iniciar sesión

            </button>

          </form>


          <div
            style={{
              marginTop: "18px",
              padding: "14px",
              background: "#f3f7fc",
              borderRadius: "10px",
              fontSize: "13px"
            }}
          >

            <strong>
              Acceso administrador de prueba
            </strong>

            <br />

            Correo: admin@lifetrack.cl

            <br />

            Contraseña: 1234

          </div>


          <p className="form-enlace">

            ¿No tienes cuenta?

            {" "}

            <Link to="/registro">
              Registrarse
            </Link>

          </p>

        </div>

      </div>

    </section>

  );

}

export default Login;