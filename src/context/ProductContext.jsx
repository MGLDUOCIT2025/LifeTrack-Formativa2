import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import {
  productos as productosIniciales
} from "../data/productos.js";


/* =========================================================
   CONTEXTO GLOBAL DE PRODUCTOS
========================================================= */

const ProductContext = createContext(null);


/* =========================================================
   PRODUCT PROVIDER
   Permite que toda la aplicación pueda acceder a productos
========================================================= */

export function ProductProvider({ children }) {

  const [productos, setProductos] = useState(() => {

    const productosGuardados =
      localStorage.getItem("lifetrack_productos");


    if (productosGuardados) {

      try {

        return JSON.parse(productosGuardados);

      } catch (error) {

        console.error(
          "Error leyendo productos guardados:",
          error
        );

      }

    }


    return productosIniciales;

  });


  /* =======================================================
     GUARDAR PRODUCTOS EN LOCALSTORAGE
  ======================================================= */

  useEffect(() => {

    localStorage.setItem(
      "lifetrack_productos",
      JSON.stringify(productos)
    );

  }, [productos]);


  /* =======================================================
     AGREGAR PRODUCTO
  ======================================================= */

  function agregarProducto(nuevoProducto) {

    const codigoExiste =
      productos.some(
        producto =>
          producto.codigo.toUpperCase() ===
          nuevoProducto.codigo.toUpperCase()
      );


    if (codigoExiste) {

      return {
        ok: false,
        mensaje:
          "Ya existe un producto con ese código."
      };

    }


    setProductos(
      productosActuales => [
        ...productosActuales,
        nuevoProducto
      ]
    );


    return {
      ok: true,
      mensaje:
        "Producto agregado correctamente."
    };

  }


  /* =======================================================
     EDITAR PRODUCTO
  ======================================================= */

  function editarProducto(
    codigoOriginal,
    productoEditado
  ) {

    setProductos(
      productosActuales =>
        productosActuales.map(
          producto =>
            producto.codigo === codigoOriginal
              ? productoEditado
              : producto
        )
    );


    return {
      ok: true,
      mensaje:
        "Producto actualizado correctamente."
    };

  }


  /* =======================================================
     ELIMINAR PRODUCTO
  ======================================================= */

  function eliminarProducto(codigo) {

    setProductos(
      productosActuales =>
        productosActuales.filter(
          producto =>
            producto.codigo !== codigo
        )
    );

  }


  /* =======================================================
     BUSCAR PRODUCTO POR CÓDIGO
  ======================================================= */

  function obtenerProducto(codigo) {

    return productos.find(
      producto =>
        producto.codigo === codigo
    );

  }


  /* =======================================================
     RESTAURAR PRODUCTOS ORIGINALES
  ======================================================= */

  function restaurarProductos() {

    localStorage.removeItem(
      "lifetrack_productos"
    );

    setProductos(
      productosIniciales
    );

  }


  /* =======================================================
     VALORES DISPONIBLES EN TODA LA APP
  ======================================================= */

  const valoresContexto = {

    productos,
    agregarProducto,
    editarProducto,
    eliminarProducto,
    obtenerProducto,
    restaurarProductos

  };


  return (

    <ProductContext.Provider
      value={valoresContexto}
    >

      {children}

    </ProductContext.Provider>

  );

}


/* =========================================================
   HOOK PERSONALIZADO
========================================================= */

export function useProducts() {

  const contexto =
    useContext(ProductContext);


  if (!contexto) {

    throw new Error(
      "useProducts debe utilizarse dentro de ProductProvider."
    );

  }


  return contexto;

}