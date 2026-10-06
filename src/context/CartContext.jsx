import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


/* ======================================================
   CONTEXTO DEL CARRITO
   ======================================================

   Este contexto permitirá:

   - Agregar productos.
   - Aumentar cantidad.
   - Disminuir cantidad.
   - Eliminar productos.
   - Vaciar carrito.
   - Calcular cantidad total.
   - Calcular precio total.
   - Guardar carrito en localStorage.

====================================================== */


const CartContext = createContext();


export function CartProvider({ children }) {

  /* ====================================================
     RECUPERAR CARRITO GUARDADO
     ==================================================== */

  const [carrito, setCarrito] = useState(() => {

    const carritoGuardado =
      localStorage.getItem("carritoLifeTrack");

    if (carritoGuardado) {

      return JSON.parse(carritoGuardado);

    }

    return [];

  });


  /* ====================================================
     GUARDAR AUTOMÁTICAMENTE EL CARRITO
     ==================================================== */

  useEffect(() => {

    localStorage.setItem(
      "carritoLifeTrack",
      JSON.stringify(carrito)
    );

  }, [carrito]);


  /* ====================================================
     AGREGAR PRODUCTO
     ==================================================== */

  function agregarProducto(producto) {

    setCarrito(carritoActual => {

      const productoExistente =
        carritoActual.find(
          item =>
            item.codigo === producto.codigo
        );


      if (productoExistente) {

        return carritoActual.map(item => {

          if (item.codigo === producto.codigo) {

            return {
              ...item,
              cantidad: item.cantidad + 1
            };

          }

          return item;

        });

      }


      return [

        ...carritoActual,

        {
          ...producto,
          cantidad: 1
        }

      ];

    });

  }


  /* ====================================================
     AUMENTAR CANTIDAD
     ==================================================== */

  function aumentarCantidad(codigo) {

    setCarrito(carritoActual =>

      carritoActual.map(item => {

        if (item.codigo === codigo) {

          return {
            ...item,
            cantidad: item.cantidad + 1
          };

        }

        return item;

      })

    );

  }


  /* ====================================================
     DISMINUIR CANTIDAD
     ==================================================== */

  function disminuirCantidad(codigo) {

    setCarrito(carritoActual =>

      carritoActual.map(item => {

        if (item.codigo === codigo) {

          return {
            ...item,
            cantidad: Math.max(
              1,
              item.cantidad - 1
            )
          };

        }

        return item;

      })

    );

  }


  /* ====================================================
     ELIMINAR PRODUCTO
     ==================================================== */

  function eliminarProducto(codigo) {

    setCarrito(carritoActual =>

      carritoActual.filter(
        item =>
          item.codigo !== codigo
      )

    );

  }


  /* ====================================================
     VACIAR CARRITO
     ==================================================== */

  function vaciarCarrito() {

    setCarrito([]);

  }


  /* ====================================================
     CANTIDAD TOTAL DE PRODUCTOS
     ==================================================== */

  const cantidadTotal =
    carrito.reduce(
      (acumulador, producto) =>
        acumulador + producto.cantidad,
      0
    );


  /* ====================================================
     PRECIO TOTAL
     ==================================================== */

  const total =
    carrito.reduce(
      (acumulador, producto) =>
        acumulador +
        producto.precio * producto.cantidad,
      0
    );


  /* ====================================================
     PROVEEDOR
     ==================================================== */

  return (

    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        aumentarCantidad,
        disminuirCantidad,
        eliminarProducto,
        vaciarCarrito,
        cantidadTotal,
        total
      }}
    >

      {children}

    </CartContext.Provider>

  );

}


/* ======================================================
   HOOK PERSONALIZADO
   ====================================================== */

export function useCart() {

  return useContext(CartContext);

}