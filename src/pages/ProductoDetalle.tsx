import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productos } from "../data/productos";
import { useCart } from "../context/CartContext";
import { Accordion, type AccordionItem } from "../components/Accordion";
import { SizeGuideModal } from "../components/SizeGuideModal";

export const ProductoDetalle = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useCart();
  const navigate = useNavigate();

  const producto = productos.find(
    (item) => item.id === Number(id)
  );

  // Inicializamos el color por defecto si solo hay una opción disponible
  const [color, setColor] = useState<string | null>(() => {
    return producto && producto.colores.length === 1 ? producto.colores[0] : null;
  });
  const [talla, setTalla] = useState<number | null>(null);
  const [cantidad, setCantidad] = useState(1);
  const [modalTallasAbierto, setModalTallasAbierto] = useState(false);
  const [agregadoExitoso, setAgregadoExitoso] = useState(false);

  if (!producto) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center pt-24 pb-20">
        <div className="text-center px-6">
          <p className="text-yellow-500 tracking-[0.3em] text-xs uppercase mb-3">Urban Crown</p>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Modelo no encontrado
          </h1>
          <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm">
            El calzado que buscas no está disponible o el enlace ha cambiado.
          </p>
          <Link
            to="/productos"
            className="inline-block bg-yellow-500 text-black px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-yellow-400 transition"
          >
            Ver Colección Completa
          </Link>
        </div>
      </main>
    );
  }

  const handleAgregarAlCarrito = () => {
    if (!talla || !color) return;

    agregarAlCarrito(producto, talla, color, cantidad);
    setAgregadoExitoso(true);

    // Tras 2 segundos redirigir o permitir seguir comprando
    setTimeout(() => {
      navigate("/carrito");
    }, 800);
  };

  // Pestañas del Acordeón estilo Nike / Gucci
  const itemsAcordeon: AccordionItem[] = [
    {
      id: "materiales",
      title: "Materiales y Confección",
      defaultOpen: true,
      content: (
        <div className="space-y-2">
          <p>
            {producto.materiales ||
              "Confección en materiales sintéticos de alta densidad, suela vulcanizada de excelente amortiguación y costuras reforzadas pensadas para durabilidad y estética urbana premium."}
          </p>
          <p className="text-gray-500 text-xs">
            Ajuste anatómico con forro interior suave que previene la fricción en uso prolongado.
          </p>
        </div>
      ),
    },
    {
      id: "envios",
      title: "Envíos y Tiempos de Entrega",
      content: (
        <div className="space-y-2">
          <p>
            Despachos a toda Colombia con transportadoras aliadas (Interrapidísimo, Servientrega y Envía).
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>Ciudades principales: 2 a 4 días hábiles.</li>
            <li>Municipios secundarios: 3 a 5 días hábiles.</li>
            <li>Opción de <strong>Pago Contra Entrega</strong> disponible según cobertura.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "garantia",
      title: "Cambios de Talla y Garantía",
      content: (
        <div className="space-y-2">
          <p>
            En Urban Crown tu satisfacción es prioridad. Si al recibir tu par necesitas cambio de número o presentas cualquier inconformidad con tu calzado:
          </p>
          <p className="text-gray-300 font-medium">
            ✓ Te gestionamos el cambio de talla sin complicaciones por WhatsApp dentro de los primeros 5 días hábiles.
          </p>
        </div>
      ),
    },
    {
      id: "cuidados",
      title: "Cuidado y Limpieza",
      content: (
        <p>
          Para mantener la apariencia impecable de tus sneakers: limpiar en seco con paño suave o cepillo de cerdas blandas. No sumergir completamente ni lavar en lavadora automática. Secar siempre a la sombra.
        </p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-28 sm:pt-32 pb-24">
      
      {/* MODAL DE GUÍA DE TALLAS */}
      <SizeGuideModal
        isOpen={modalTallasAbierto}
        onClose={() => setModalTallasAbierto(false)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB / MIGA DE PAN */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-yellow-500 transition">
            Inicio
          </Link>
          <span>/</span>
          <Link to="/productos" className="hover:text-yellow-500 transition">
            Colección
          </Link>
          <span>/</span>
          <span className="text-gray-300 font-medium truncate">
            {producto.nombre}
          </span>
        </nav>

        {/* CONTENEDOR PRINCIPAL: 2 COLUMNAS BALANCEADAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* =========================================
              COLUMNA IZQUIERDA: FOTO DEL PRODUCTO
              (Sticky en pantallas de escritorio grandes)
          ========================================== */}
          <div className="lg:col-span-7 lg:sticky lg:top-32">
            <div className="relative group bg-[#0e0e0e] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
              
              {/* Badge si existe */}
              {producto.etiqueta && (
                <span className="absolute top-4 left-4 z-10 bg-yellow-500 text-black px-3 py-1.5 text-xs font-bold tracking-widest uppercase rounded shadow">
                  {producto.etiqueta}
                </span>
              )}

              {/* Imagen principal */}
              <div className="aspect-square w-full relative overflow-hidden bg-[#121212]">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Marca de agua sutil de autenticidad */}
              <div className="p-3 bg-black/60 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  Fotografía real del modelo
                </span>
                <span className="uppercase tracking-widest text-[10px] text-yellow-500/80">
                  Urban Crown Originals
                </span>
              </div>

            </div>
          </div>


          {/* =========================================
              COLUMNA DERECHA: BUY BOX & ACORDEÓN
          ========================================== */}
          <div className="lg:col-span-5 space-y-7">
            
            {/* ENCABEZADO DE PRODUCTO */}
            <div>
              <p className="text-yellow-500 tracking-[0.3em] text-xs uppercase font-semibold mb-2">
                Urban Crown • Calzado Urbano
              </p>

              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                {producto.nombre}
              </h1>

              {/* PRECIO */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-yellow-500 text-3xl font-bold font-mono">
                  ${producto.precio.toLocaleString("es-CO")}
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  COP
                </span>
              </div>

              <p className="mt-2 text-xs text-green-400 font-medium flex items-center gap-1.5">
                <span>✓</span> Envío a toda Colombia • Pago Contra Entrega disponible
              </p>
            </div>

            <div className="h-px bg-white/10" />

            {/* DESCRIPCIÓN CORTA */}
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              {producto.descripcion}
            </p>


            {/* SELECTOR DE COLOR */}
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-300">
                  Color / Combinación
                </span>
                {color && (
                  <span className="text-xs text-yellow-500 font-medium">
                    {color}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2.5">
                {producto.colores.map((colorDisponible) => (
                  <button
                    key={colorDisponible}
                    type="button"
                    onClick={() => setColor(colorDisponible)}
                    className={`px-4 py-2.5 text-xs font-medium rounded transition-all ${
                      color === colorDisponible
                        ? "bg-yellow-500 text-black border border-yellow-500 font-bold shadow-md"
                        : "border border-white/20 text-gray-300 hover:border-yellow-500/60 bg-white/5"
                    }`}
                  >
                    {colorDisponible}
                  </button>
                ))}
              </div>
            </div>


            {/* SELECTOR DE TALLA + BOTÓN GUÍA */}
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-300">
                  Selecciona tu talla (COL)
                </span>

                {/* BOTÓN GUÍA DE TALLAS */}
                <button
                  type="button"
                  onClick={() => setModalTallasAbierto(true)}
                  className="text-xs text-yellow-500 hover:text-yellow-400 underline underline-offset-4 flex items-center gap-1 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  Guía de tallas
                </button>
              </div>

              {/* GRILLA DE TALLAS */}
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                {producto.tallas.map((tallaDisponible) => (
                  <button
                    key={tallaDisponible}
                    type="button"
                    onClick={() => setTalla(tallaDisponible)}
                    className={`h-11 flex items-center justify-center text-xs font-bold rounded transition-all ${
                      talla === tallaDisponible
                        ? "bg-yellow-500 text-black border border-yellow-500 shadow-md scale-105"
                        : "border border-white/15 bg-white/5 text-gray-300 hover:border-yellow-500/60 hover:text-white"
                    }`}
                  >
                    {tallaDisponible}
                  </button>
                ))}
              </div>

              {!talla && (
                <p className="text-[11px] text-gray-500 mt-2">
                  * Selecciona un número de talla para habilitar el pedido.
                </p>
              )}
            </div>


            {/* SELECTOR DE CANTIDAD */}
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-300 block mb-2">
                Cantidad
              </span>

              <div className="flex items-center border border-white/20 bg-white/5 rounded w-fit">
                <button
                  type="button"
                  onClick={() => setCantidad((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-gray-400 hover:text-yellow-500 font-bold transition"
                  aria-label="Disminuir cantidad"
                >
                  −
                </button>

                <span className="px-4 text-sm font-semibold">
                  {cantidad}
                </span>

                <button
                  type="button"
                  onClick={() => setCantidad((prev) => prev + 1)}
                  className="px-4 py-2 text-gray-400 hover:text-yellow-500 font-bold transition"
                  aria-label="Aumentar cantidad"
                >
                  +
                </button>
              </div>
            </div>


            {/* BOTÓN PRINCIPAL DE COMPRA */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                disabled={!talla || !color}
                onClick={handleAgregarAlCarrito}
                className={`w-full py-4 text-xs font-bold tracking-widest uppercase rounded transition-all duration-300 shadow-lg ${
                  talla && color
                    ? "bg-yellow-500 text-black hover:bg-yellow-400 shadow-yellow-500/10 cursor-pointer active:scale-[0.99]"
                    : "bg-gray-800 text-gray-500 cursor-not-allowed border border-white/5"
                }`}
              >
                {!talla
                  ? "ELIGE TU TALLA PRIMERO"
                  : agregadoExitoso
                  ? "✓ AGREGADO AL CARRITO"
                  : "AGREGAR AL CARRITO 🛒"}
              </button>

              {/* CONSULTA RÁPIDA POR WHATSAPP */}
              <a
                href={`https://wa.me/573218196301?text=${encodeURIComponent(
                  `Hola Urban Crown, estoy interesado en el modelo ${producto.nombre}${
                    talla ? ` en talla ${talla}` : ""
                  }. ¿Tienen disponibilidad inmediata?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 border border-white/20 hover:border-green-500/80 bg-white/5 hover:bg-green-950/20 text-gray-300 hover:text-green-400 text-xs font-bold tracking-wider uppercase rounded transition flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-green-500" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Preguntar por este modelo en WhatsApp
              </a>
            </div>


            {/* =========================================
                EL ACORDEÓN DESPLEGABLE (ESTILO NIKE / GUCCI)
            ========================================== */}
            <div className="pt-4">
              <Accordion items={itemsAcordeon} />
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};