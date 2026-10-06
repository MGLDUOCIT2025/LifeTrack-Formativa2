import {
  createContext,
  useContext,
  useState
} from "react";


/* ======================================================
   CONTEXTO DE AUTENTICACIÓN
   ======================================================

   Este contexto se encargará de:

   - Saber si existe una sesión iniciada.
   - Permitir iniciar sesión.
   - Permitir cerrar sesión.
   - Diferenciar cliente y administrador.
   - Mantener la sesión utilizando localStorage.

====================================================== */


const AuthContext = createContext();


export function AuthProvider({ children }) {

  /* ====================================================
     RECUPERAR SESIÓN GUARDADA
     ==================================================== */

  const [usuario, setUsuario] = useState(() => {

    const usuarioGuardado =
      localStorage.getItem("usuarioActivo");

    if (usuarioGuardado) {

      return JSON.parse(usuarioGuardado);

    }

    return null;

  });


  /* ====================================================
     INICIAR SESIÓN
     ==================================================== */

  function login(correo, password) {

    /* --------------------------------------------------
       USUARIO ADMINISTRADOR
       -------------------------------------------------- */

    if (
      correo === "admin@lifetrack.cl" &&
      password === "1234"
    ) {

      const administrador = {

        id: 0,

        nombre: "Administrador",

        apellido: "LifeTrack",

        correo: "admin@lifetrack.cl",

        rol: "admin"

      };


      localStorage.setItem(
        "usuarioActivo",
        JSON.stringify(administrador)
      );


      setUsuario(administrador);


      return {
        ok: true,
        usuario: administrador
      };

    }


    /* --------------------------------------------------
       BUSCAR CLIENTE REGISTRADO
       -------------------------------------------------- */

    const usuarios =
      JSON.parse(
        localStorage.getItem("usuarios")
      ) || [];


    const usuarioEncontrado =
      usuarios.find(
        usuario =>
          usuario.correo === correo &&
          usuario.password === password
      );


    if (!usuarioEncontrado) {

      return {
        ok: false,
        mensaje: "Correo o contraseña incorrectos."
      };

    }


    /* --------------------------------------------------
       GUARDAR SESIÓN DEL CLIENTE
       -------------------------------------------------- */

    localStorage.setItem(
      "usuarioActivo",
      JSON.stringify(usuarioEncontrado)
    );


    setUsuario(usuarioEncontrado);


    return {
      ok: true,
      usuario: usuarioEncontrado
    };

  }


  /* ====================================================
     CERRAR SESIÓN
     ==================================================== */

  function logout() {

    localStorage.removeItem("usuarioActivo");

    setUsuario(null);

  }


  /* ====================================================
     VALORES DISPONIBLES PARA TODA LA APLICACIÓN
     ==================================================== */

  return (

    <AuthContext.Provider
      value={{
        usuario,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}


/* ======================================================
   HOOK PERSONALIZADO
   ====================================================== */

export function useAuth() {

  return useContext(AuthContext);

}