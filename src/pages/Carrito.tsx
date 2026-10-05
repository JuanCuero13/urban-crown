import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Carrito = () => {
  const {
    carrito,
    actualizarCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
  } = useCart();

  const total = carrito.reduce(
    (totalActual, item) =>
      totalActual +
      item.producto.precio * item.cantidad,
    0
  );

  const enviarPedidoWhatsApp = () => {
    const numero = "573218196301";

    const productosMensaje = carrito
      .map(
        (item) =>
          `👟 ${item.producto.nombre}\n` +
          `Color: ${item.color}\n` +
          `Talla: ${item.talla}\n` +
          `Cantidad: ${item.cantidad}\n` +
          `Subtotal: $${(
            item.producto.precio * item.cantidad
          ).toLocaleString("es-CO")}`
      )
      .join("\n\n");

    const mensaje =
      `Hola, quiero realizar un pedido en Urban Crown. 👑\n\n` +
      `${productosMensaje}\n\n` +
      `💰 TOTAL: $${total.toLocaleString("es-CO")}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">

      <div className="max-w-6xl mx-auto px-6">

        <p className="text-yellow-500 tracking-[0.4em] text-xs mb-5">
          URBAN CROWN
        </p>

        <h1 className="text-4xl md:text-5xl font-serif">
          MI CARRITO
        </h1>

        {carrito.length === 0 ? (

          <div className="text-center py-24">

            <p className="text-gray-500 mb-8">
              Tu carrito está vacío.
            </p>

            <Link
              to="/"
              className="inline-block bg-yellow-600 text-black px-8 py-4 font-semibold hover:bg-yellow-500 transition"
            >
              EXPLORAR COLECCIÓN
            </Link>

          </div>

        ) : (

          <div className="mt-12">

            {/* PRODUCTOS */}
            <div className="space-y-4">

              {carrito.map((item) => (

                <div
                  key={`${item.producto.id}-${item.talla}-${item.color}`}
                  className="border border-white/10 bg-[#0b0b0b] p-5 flex flex-col md:flex-row gap-5 md:items-center"
                >

                  {/* IMAGEN */}
                  <img
                    src={item.producto.imagen}
                    alt={item.producto.nombre}
                    className="w-28 h-28 object-cover"
                  />

                  {/* INFORMACIÓN */}
                  <div className="flex-1">

                    <h2 className="text-xl font-serif">
                      {item.producto.nombre}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Color: {item.color}
                    </p>

                    <p className="text-gray-500 mt-1">
                      Talla: {item.talla}
                    </p>

                    {/* CANTIDAD */}
                    <div className="flex items-center gap-4 mt-4">

                      <span className="text-gray-500 text-sm">
                        CANTIDAD
                      </span>

                      <div className="flex items-center border border-white/10">

                        <button
                          onClick={() =>
                            actualizarCantidad(
                              item.producto.id,
                              item.talla,
                              item.color,
                              item.cantidad - 1
                            )
                          }
                          className="px-3 py-1 text-gray-400 hover:text-yellow-500 transition"
                        >
                          −
                        </button>

                        <span className="px-4 text-sm">
                          {item.cantidad}
                        </span>

                        <button
                          onClick={() =>
                            actualizarCantidad(
                              item.producto.id,
                              item.talla,
                              item.color,
                              item.cantidad + 1
                            )
                          }
                          className="px-3 py-1 text-gray-400 hover:text-yellow-500 transition"
                        >
                          +
                        </button>

                      </div>

                    </div>

                  </div>

                  {/* PRECIO */}
                  <div className="text-right">

                    <p className="text-yellow-500 text-lg">
                      $
                      {(
                        item.producto.precio *
                        item.cantidad
                      ).toLocaleString("es-CO")}
                    </p>

                    <button
                      onClick={() =>
                        eliminarDelCarrito(
                          item.producto.id,
                          item.talla,
                          item.color
                        )
                      }
                      className="text-gray-500 text-sm mt-3 hover:text-red-400 transition"
                    >
                      ELIMINAR
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* RESUMEN */}
            <div className="mt-10 border-t border-white/10 pt-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6">

              <button
                onClick={vaciarCarrito}
                className="text-gray-500 text-sm hover:text-white transition text-left"
              >
                VACIAR CARRITO
              </button>

              <div className="text-right">

                <p className="text-gray-500 text-sm">
                  TOTAL
                </p>

                <p className="text-3xl text-yellow-500 mt-2">
                  ${total.toLocaleString("es-CO")}
                </p>

                <button
                  onClick={enviarPedidoWhatsApp}
                  className="mt-6 bg-yellow-600 text-black px-10 py-4 font-semibold hover:bg-yellow-500 transition"
                >
                  CONTINUAR CON EL PEDIDO
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </main>
  );
};