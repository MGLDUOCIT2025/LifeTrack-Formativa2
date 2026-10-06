import {
  useMemo,
  useState
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";


const regionesComunas = {
  "Arica y Parinacota": [
    "Arica",
    "Camarones",
    "General Lagos",
    "Putre"
  ],

  "Tarapacá": [
    "Alto Hospicio",
    "Camiña",
    "Colchane",
    "Huara",
    "Iquique",
    "Pica",
    "Pozo Almonte"
  ],

  "Antofagasta": [
    "Antofagasta",
    "Calama",
    "María Elena",
    "Mejillones",
    "Ollagüe",
    "San Pedro de Atacama",
    "Sierra Gorda",
    "Taltal",
    "Tocopilla"
  ],

  "Atacama": [
    "Alto del Carmen",
    "Caldera",
    "Chañaral",
    "Copiapó",
    "Diego de Almagro",
    "Freirina",
    "Huasco",
    "Tierra Amarilla",
    "Vallenar"
  ],

  "Coquimbo": [
    "Andacollo",
    "Canela",
    "Combarbalá",
    "Coquimbo",
    "Illapel",
    "La Higuera",
    "La Serena",
    "Los Vilos",
    "Monte Patria",
    "Ovalle",
    "Paihuano",
    "Punitaqui",
    "Río Hurtado",
    "Salamanca",
    "Vicuña"
  ],

  "Valparaíso": [
    "Algarrobo",
    "Cabildo",
    "Calera",
    "Calle Larga",
    "Cartagena",
    "Casablanca",
    "Catemu",
    "Concón",
    "El Quisco",
    "El Tabo",
    "Hijuelas",
    "Isla de Pascua",
    "Juan Fernández",
    "La Cruz",
    "La Ligua",
    "Limache",
    "Llaillay",
    "Los Andes",
    "Nogales",
    "Olmué",
    "Panquehue",
    "Papudo",
    "Petorca",
    "Puchuncaví",
    "Putaendo",
    "Quillota",
    "Quilpué",
    "Quintero",
    "Rinconada",
    "San Antonio",
    "San Esteban",
    "San Felipe",
    "Santa María",
    "Santo Domingo",
    "Valparaíso",
    "Villa Alemana",
    "Viña del Mar",
    "Zapallar"
  ],

  "Metropolitana de Santiago": [
    "Alhué",
    "Buin",
    "Calera de Tango",
    "Cerrillos",
    "Cerro Navia",
    "Colina",
    "Conchalí",
    "Curacaví",
    "El Bosque",
    "El Monte",
    "Estación Central",
    "Huechuraba",
    "Independencia",
    "Isla de Maipo",
    "La Cisterna",
    "La Florida",
    "La Granja",
    "La Pintana",
    "La Reina",
    "Lampa",
    "Las Condes",
    "Lo Barnechea",
    "Lo Espejo",
    "Lo Prado",
    "Macul",
    "Maipú",
    "María Pinto",
    "Melipilla",
    "Ñuñoa",
    "Padre Hurtado",
    "Paine",
    "Pedro Aguirre Cerda",
    "Peñaflor",
    "Peñalolén",
    "Pirque",
    "Providencia",
    "Pudahuel",
    "Puente Alto",
    "Quilicura",
    "Quinta Normal",
    "Recoleta",
    "Renca",
    "San Bernardo",
    "San Joaquín",
    "San José de Maipo",
    "San Miguel",
    "San Pedro",
    "San Ramón",
    "Santiago",
    "Talagante",
    "Tiltil",
    "Vitacura"
  ],

  "O'Higgins": [
    "Chépica",
    "Chimbarongo",
    "Codegua",
    "Coinco",
    "Coltauco",
    "Doñihue",
    "Graneros",
    "La Estrella",
    "Las Cabras",
    "Litueche",
    "Lolol",
    "Machalí",
    "Malloa",
    "Marchihue",
    "Mostazal",
    "Nancagua",
    "Navidad",
    "Olivar",
    "Palmilla",
    "Paredones",
    "Peralillo",
    "Peumo",
    "Pichidegua",
    "Pichilemu",
    "Placilla",
    "Pumanque",
    "Quinta de Tilcoco",
    "Rancagua",
    "Rengo",
    "Requínoa",
    "San Fernando",
    "San Vicente"
  ],

  "Maule": [
    "Cauquenes",
    "Chanco",
    "Colbún",
    "Constitución",
    "Curepto",
    "Curicó",
    "Empedrado",
    "Hualañé",
    "Licantén",
    "Linares",
    "Longaví",
    "Maule",
    "Molina",
    "Parral",
    "Pelarco",
    "Pelluhue",
    "Pencahue",
    "Rauco",
    "Retiro",
    "Río Claro",
    "Romeral",
    "Sagrada Familia",
    "San Clemente",
    "San Javier",
    "San Rafael",
    "Talca",
    "Teno",
    "Vichuquén",
    "Villa Alegre",
    "Yerbas Buenas"
  ],

  "Ñuble": [
    "Bulnes",
    "Chillán",
    "Chillán Viejo",
    "Cobquecura",
    "Coelemu",
    "Coihueco",
    "El Carmen",
    "Ninhue",
    "Ñiquén",
    "Pemuco",
    "Pinto",
    "Portezuelo",
    "Quillón",
    "Quirihue",
    "Ránquil",
    "San Carlos",
    "San Fabián",
    "San Ignacio",
    "San Nicolás",
    "Treguaco",
    "Yungay"
  ],

  "Biobío": [
    "Alto Biobío",
    "Antuco",
    "Arauco",
    "Cabrero",
    "Cañete",
    "Chiguayante",
    "Concepción",
    "Contulmo",
    "Coronel",
    "Curanilahue",
    "Florida",
    "Hualpén",
    "Hualqui",
    "Laja",
    "Lebu",
    "Los Álamos",
    "Los Ángeles",
    "Lota",
    "Mulchén",
    "Nacimiento",
    "Negrete",
    "Penco",
    "Quilaco",
    "Quilleco",
    "San Pedro de la Paz",
    "San Rosendo",
    "Santa Bárbara",
    "Santa Juana",
    "Talcahuano",
    "Tirúa",
    "Tomé",
    "Tucapel"
  ],

  "La Araucanía": [
    "Angol",
    "Carahue",
    "Cholchol",
    "Collipulli",
    "Cunco",
    "Curacautín",
    "Curarrehue",
    "Ercilla",
    "Freire",
    "Galvarino",
    "Gorbea",
    "Lautaro",
    "Loncoche",
    "Lonquimay",
    "Los Sauces",
    "Lumaco",
    "Melipeuco",
    "Nueva Imperial",
    "Padre Las Casas",
    "Perquenco",
    "Pitrufquén",
    "Pucón",
    "Purén",
    "Renaico",
    "Saavedra",
    "Temuco",
    "Teodoro Schmidt",
    "Toltén",
    "Traiguén",
    "Victoria",
    "Vilcún",
    "Villarrica"
  ],

  "Los Ríos": [
    "Corral",
    "Futrono",
    "La Unión",
    "Lago Ranco",
    "Lanco",
    "Los Lagos",
    "Máfil",
    "Mariquina",
    "Paillaco",
    "Panguipulli",
    "Río Bueno",
    "Valdivia"
  ],

  "Los Lagos": [
    "Ancud",
    "Calbuco",
    "Castro",
    "Chaitén",
    "Chonchi",
    "Cochamó",
    "Curaco de Vélez",
    "Dalcahue",
    "Fresia",
    "Frutillar",
    "Futaleufú",
    "Hualaihué",
    "Llanquihue",
    "Los Muermos",
    "Maullín",
    "Osorno",
    "Palena",
    "Puerto Montt",
    "Puerto Octay",
    "Puerto Varas",
    "Puqueldón",
    "Purranque",
    "Puyehue",
    "Queilén",
    "Quellón",
    "Quemchi",
    "Quinchao",
    "Río Negro",
    "San Juan de la Costa",
    "San Pablo"
  ],

  "Aysén": [
    "Aysén",
    "Chile Chico",
    "Cisnes",
    "Cochrane",
    "Coyhaique",
    "Guaitecas",
    "Lago Verde",
    "O'Higgins",
    "Río Ibáñez",
    "Tortel"
  ],

  "Magallanes y de la Antártica Chilena": [
    "Antártica",
    "Cabo de Hornos",
    "Laguna Blanca",
    "Natales",
    "Porvenir",
    "Primavera",
    "Punta Arenas",
    "Río Verde",
    "San Gregorio",
    "Timaukel",
    "Torres del Paine"
  ]
};


function Registro() {

  const navigate =
    useNavigate();

  const [mensaje, setMensaje] =
    useState("");

  const [tipoMensaje, setTipoMensaje] =
    useState("danger");

  const [region, setRegion] =
    useState("");

  const [comuna, setComuna] =
    useState("");


  const comunasDisponibles =
    useMemo(() => {

      if (!region) {
        return [];
      }

      return regionesComunas[region] || [];

    }, [region]);


  function registrar(event) {

    event.preventDefault();

    const formulario =
      new FormData(event.target);

    const run =
      formulario.get("run").trim();

    const nombre =
      formulario.get("nombre").trim();

    const apellido =
      formulario.get("apellido").trim();

    const correo =
      formulario
        .get("correo")
        .trim()
        .toLowerCase();

    const password =
      formulario.get("password");

    const confirmarPassword =
      formulario.get("confirmarPassword");

    const direccion =
      formulario.get("direccion").trim();


    if (
      !run ||
      !nombre ||
      !apellido ||
      !correo ||
      !password ||
      !confirmarPassword ||
      !region ||
      !comuna ||
      !direccion
    ) {

      setTipoMensaje("danger");

      setMensaje(
        "Debes completar todos los campos."
      );

      return;
    }


    if (password.length < 4) {

      setTipoMensaje("danger");

      setMensaje(
        "La contraseña debe tener al menos 4 caracteres."
      );

      return;
    }


    if (
      password !== confirmarPassword
    ) {

      setTipoMensaje("danger");

      setMensaje(
        "Las contraseñas no coinciden."
      );

      return;
    }


    const usuarios =
      JSON.parse(
        localStorage.getItem("usuarios")
      ) || [];


    const correoExiste =
      usuarios.some(
        usuario =>
          usuario.correo
            .toLowerCase() === correo
      );


    if (correoExiste) {

      setTipoMensaje("danger");

      setMensaje(
        "Ese correo ya está registrado."
      );

      return;
    }


    const runExiste =
      usuarios.some(
        usuario =>
          usuario.run === run
      );


    if (runExiste) {

      setTipoMensaje("danger");

      setMensaje(
        "Ese RUN ya está registrado."
      );

      return;
    }


    const nuevoUsuario = {

      id: Date.now(),

      run,

      nombre,

      apellido,

      correo,

      password,

      region,

      comuna,

      direccion,

      rol: "cliente"

    };


    const usuariosActualizados = [
      ...usuarios,
      nuevoUsuario
    ];


    localStorage.setItem(
      "usuarios",
      JSON.stringify(
        usuariosActualizados
      )
    );


    setTipoMensaje("success");

    setMensaje(
      "Cuenta creada correctamente."
    );


    event.target.reset();

    setRegion("");

    setComuna("");


    setTimeout(() => {

      navigate("/login");

    }, 1000);

  }


  return (

    <section className="pagina-formulario">

      <div className="formulario-layout">

        <div className="formulario-panel">

          <span>
            CREA TU CUENTA
          </span>

          <h1>
            Comienza a organizar tu vida
          </h1>

          <p>
            Regístrate en LifeTrack y comienza
            a organizar tus actividades,
            metas y hábitos.
          </p>

          <ul>

            <li>
              ✅ Organiza tus tareas
            </li>

            <li>
              📚 Controla tus estudios
            </li>

            <li>
              🏋️ Planifica tus entrenamientos
            </li>

            <li>
              🥊 Registra tus actividades deportivas
            </li>

          </ul>

        </div>


        <div className="formulario-card">

          <h2>
            Crear cuenta
          </h2>

          <p>
            Completa tus datos para registrarte.
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
            onSubmit={registrar}
          >

            <label>
              RUN
            </label>

            <input
              name="run"
              type="text"
              placeholder="Ej: 12345678-9"
              required
            />


            <label>
              Nombre
            </label>

            <input
              name="nombre"
              type="text"
              placeholder="Ingrese su nombre"
              required
            />


            <label>
              Apellido
            </label>

            <input
              name="apellido"
              type="text"
              placeholder="Ingrese su apellido"
              required
            />


            <label>
              Correo electrónico
            </label>

            <input
              name="correo"
              type="email"
              placeholder="correo@ejemplo.cl"
              required
            />


            <label>
              Contraseña
            </label>

            <input
              name="password"
              type="password"
              placeholder="Ingrese una contraseña"
              required
            />


            <label>
              Confirmar contraseña
            </label>

            <input
              name="confirmarPassword"
              type="password"
              placeholder="Repita su contraseña"
              required
            />


            <label>
              Región
            </label>

            <select
              name="region"
              value={region}
              required
              onChange={
                event => {

                  setRegion(
                    event.target.value
                  );

                  setComuna("");

                }
              }
            >

              <option value="">
                Seleccione una región
              </option>

              {
                Object.keys(
                  regionesComunas
                ).map(
                  nombreRegion => (

                    <option
                      key={nombreRegion}
                      value={nombreRegion}
                    >

                      {nombreRegion}

                    </option>

                  )
                )
              }

            </select>


            <label>
              Comuna
            </label>

            <select
              name="comuna"
              value={comuna}
              required
              disabled={!region}
              onChange={
                event =>
                  setComuna(
                    event.target.value
                  )
              }
            >

              <option value="">
                Seleccione una comuna
              </option>

              {
                comunasDisponibles.map(
                  nombreComuna => (

                    <option
                      key={nombreComuna}
                      value={nombreComuna}
                    >

                      {nombreComuna}

                    </option>

                  )
                )
              }

            </select>


            <label>
              Dirección
            </label>

            <input
              name="direccion"
              type="text"
              placeholder="Ingrese su dirección"
              required
            />


            <button
              type="submit"
              className="btn btn-primary"
            >

              Crear cuenta

            </button>

          </form>


          <p className="form-enlace">

            ¿Ya tienes una cuenta?

            {" "}

            <Link to="/login">
              Iniciar sesión
            </Link>

          </p>

        </div>

      </div>

    </section>

  );

}

export default Registro;