import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Carrito = () => {
  const {
    carrito,
    actualizarCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
  } = useCart();

  // Estados del formulario de despacho
  const [nombre, setNombre] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [metodoPago, setMetodoPago] = useState("Contra Entrega");
  const [errorValidacion, setErrorValidacion] = useState("");

  const total = carrito.reduce(
    (totalActual, item) =>
      totalActual + item.producto.precio * item.cantidad,
    0
  );

  const enviarPedidoWhatsApp = () => {
    if (!nombre.trim() || !ciudad.trim()) {
      setErrorValidacion("Por favor escribe al menos tu Nombre y tu Ciudad para preparar tu orden.");
      return;
    }
    setErrorValidacion("");

    const numero = "573218196301";

    const productosTexto = carrito
      .map(
        (item, index) =>
          `👟 *Producto #${index + 1}:* ${item.producto.nombre}\n` +
          `   • Talla: ${item.talla}\n` +
          `   • Color: ${item.color}\n` +
          `   • Cantidad: ${item.cantidad}\n` +
          `   • Subtotal: $${(item.producto.precio * item.cantidad).toLocaleString("es-CO")}`
      )
      .join("\n\n");

    const mensaje =
      `👑 *NUEVO PEDIDO — URBAN CROWN*\n` +
      `==============================\n\n` +
      `👤 *Cliente:* ${nombre.trim()}\n` +
      `📍 *Ciudad:* ${ciudad.trim()}\n` +
      `${direccion.trim() ? `🏠 *Dirección:* ${direccion.trim()}\n` : ""}` +
      `💳 *Método de Pago:* ${metodoPago}\n\n` +
      `📦 *DETALLE DEL PEDIDO:*\n` +
      `${productosTexto}\n\n` +
      `==============================\n` +
      `💰 *TOTAL A PAGAR: $${total.toLocaleString("es-CO")} COP*\n` +
      `==============================\n\n` +
      `Hola Urban Crown, acabo de generar mi orden en la tienda web y quiero confirmar la disponibilidad para el despacho. 🚚`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white pt-28 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="mb-10">
          <p className="text-yellow-500 tracking-[0.3em] text-xs uppercase font-semibold mb-2">
            Urban Crown Checkout
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
            TU CARRITO DE COMPRAS
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Revisa tus pares seleccionados y confirma tus datos para coordinar el envío por WhatsApp.
          </p>
        </div>

        {carrito.length === 0 ? (
          /* ESTADO VACÍO */
          <div className="text-center py-24 bg-[#0a0a0a] border border-white/10 rounded-xl max-w-xl mx-auto px-6">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-gray-500 mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-xl font-serif font-bold text-white mb-2">
              Tu carrito está vacío
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mb-8 max-w-sm mx-auto">
              Aún no has seleccionado tus zapatillas. Explora nuestros últimos lanzamientos y encuentra tu estilo.
            </p>
            <Link
              to="/productos"
              className="inline-block bg-yellow-500 text-black px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-yellow-400 transition rounded"
            >
              Explorar Colección →
            </Link>
          </div>
        ) : (
          /* CONTENIDO DEL CARRITO: 2 COLUMNAS EN ESCRITORIO */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* COLUMNA 1 (7 de 12): LISTA DE PRODUCTOS */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-gray-400">
                <span>Modelos seleccionados ({carrito.length})</span>
                <button
                  onClick={vaciarCarrito}
                  className="hover:text-red-400 transition text-[11px] underline"
                >
                  Vaciar carrito
                </button>
              </div>

              {carrito.map((item) => (
                <div
                  key={`${item.producto.id}-${item.talla}-${item.color}`}
                  className="border border-white/10 bg-[#0d0d0d] p-4 sm:p-5 rounded-lg flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center hover:border-yellow-600/30 transition-colors"
                >
                  {/* IMAGEN MINIATURA */}
                  <img
                    src={item.producto.imagen}
                    alt={item.producto.nombre}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded bg-[#151515] shrink-0"
                  />

                  {/* INFO */}
                  <div className="flex-1 space-y-1.5">
                    <span className="text-[10px] tracking-widest text-yellow-500 uppercase font-semibold">
                      Urban Crown
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-white">
                      {item.producto.nombre}
                    </h3>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400">
                      <span>
                        Talla: <strong className="text-white font-mono">{item.talla} COL</strong>
                      </span>
                      <span>•</span>
                      <span>
                        Color: <strong className="text-white">{item.color}</strong>
                      </span>
                    </div>

                    {/* CONTROLES DE CANTIDAD */}
                    <div className="flex items-center gap-3 pt-2">
                      <span className="text-[11px] text-gray-400 uppercase tracking-wider">
                        Cant:
                      </span>
                      <div className="flex items-center border border-white/15 bg-white/5 rounded text-xs">
                        <button
                          type="button"
                          onClick={() =>
                            actualizarCantidad(
                              item.producto.id,
                              item.talla,
                              item.color,
                              item.cantidad - 1
                            )
                          }
                          className="px-2.5 py-1 text-gray-400 hover:text-yellow-500 font-bold transition"
                          aria-label="Restar una unidad"
                        >
                          −
                        </button>
                        <span className="px-3 font-semibold text-white">
                          {item.cantidad}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            actualizarCantidad(
                              item.producto.id,
                              item.talla,
                              item.color,
                              item.cantidad + 1
                            )
                          }
                          className="px-2.5 py-1 text-gray-400 hover:text-yellow-500 font-bold transition"
                          aria-label="Sumar una unidad"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* PRECIO Y ELIMINAR */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                    <span className="text-yellow-500 text-lg font-bold font-mono">
                      ${(item.producto.precio * item.cantidad).toLocaleString("es-CO")}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        eliminarDelCarrito(
                          item.producto.id,
                          item.talla,
                          item.color
                        )
                      }
                      className="text-gray-500 hover:text-red-400 text-xs transition flex items-center gap-1 mt-2"
                      title="Eliminar producto"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Quitar
                    </button>
                  </div>

                </div>
              ))}

              <div className="pt-4">
                <Link
                  to="/productos"
                  className="text-xs uppercase tracking-wider text-gray-400 hover:text-yellow-500 transition flex items-center gap-1.5"
                >
                  ← Seguir agregando más zapatillas
                </Link>
              </div>

            </div>


            {/* COLUMNA 2 (5 de 12): FORMULARIO DE ENVÍO Y RESUMEN */}
            <div className="lg:col-span-5 bg-[#0e0e0e] border border-white/10 rounded-xl p-6 sm:p-7 space-y-6 shadow-xl lg:sticky lg:top-32">
              
              <div className="pb-4 border-b border-white/10">
                <h2 className="text-lg font-serif font-bold text-white">
                  Datos para Despacho
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Completa tus datos para generar tu orden lista para envío en WhatsApp.
                </p>
              </div>

              {/* FORMULARIO RÁPIDO */}
              <div className="space-y-4">
                
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                    Nombre completo <span className="text-yellow-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. Juan Carlos Cuero Villa"
                    className="w-full bg-[#151515] border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-gray-600 rounded outline-none focus:border-yellow-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                    Ciudad / Municipio de Entrega <span className="text-yellow-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                    placeholder="Ej. Cali, Valle del Cauca"
                    className="w-full bg-[#151515] border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-gray-600 rounded outline-none focus:border-yellow-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                    Dirección de entrega (Opcional)
                  </label>
                  <input
                    type="text"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    placeholder="Ej. Calle 10 # 20-30 (Apto 302)"
                    className="w-full bg-[#151515] border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-gray-600 rounded outline-none focus:border-yellow-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-2">
                    Forma de Pago Preferida
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setMetodoPago("Contra Entrega")}
                      className={`p-2.5 text-xs text-left rounded border transition ${
                        metodoPago === "Contra Entrega"
                          ? "border-yellow-500 bg-yellow-950/20 text-yellow-400 font-bold"
                          : "border-white/10 bg-white/5 text-gray-400 hover:border-white/30"
                      }`}
                    >
                      <span className="block text-[11px] font-bold">📦 Contra Entrega</span>
                      <span className="text-[10px] text-gray-400">Pagas al recibir</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMetodoPago("Transferencia (Nequi/Bancolombia)")}
                      className={`p-2.5 text-xs text-left rounded border transition ${
                        metodoPago.includes("Transferencia")
                          ? "border-yellow-500 bg-yellow-950/20 text-yellow-400 font-bold"
                          : "border-white/10 bg-white/5 text-gray-400 hover:border-white/30"
                      }`}
                    >
                      <span className="block text-[11px] font-bold">💳 Transferencia</span>
                      <span className="text-[10px] text-gray-400">Nequi / Bancolombia</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* ALERTA DE VALIDACIÓN */}
              {errorValidacion && (
                <div className="p-3 bg-red-950/40 border border-red-500/50 rounded text-red-300 text-xs flex items-center gap-2">
                  <span>⚠️</span> {errorValidacion}
                </div>
              )}

              {/* RESUMEN DE TOTALES */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Subtotal</span>
                  <span className="font-mono text-white">${total.toLocaleString("es-CO")}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Envío nacional</span>
                  <span className="text-green-400 font-semibold">Calculado al despachar</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 border-t border-white/10">
                  <span className="text-white">TOTAL</span>
                  <span className="text-yellow-500 text-xl font-mono">
                    ${total.toLocaleString("es-CO")} COP
                  </span>
                </div>
              </div>

              {/* BOTÓN OFICIAL DE WHATSAPP */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={enviarPedidoWhatsApp}
                  className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-lg shadow-green-950/30 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Confirmar Pedido por WhatsApp
                </button>

                <p className="text-[11px] text-gray-500 text-center leading-relaxed">
                  🔒 Al hacer clic, se abrirá WhatsApp con tu pedido estructurado para que un asesor de Urban Crown confirme tus detalles y número de guía.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </main>
  );
};