import { Link } from "react-router-dom";
import { productos } from "../data/productos";
import { ProductCard } from "../components/ProductCard";

export const Home = () => {
  // Tomamos el primer producto con imagen para destacarlo en el Hero
  const productoHero = productos[0] || {
    id: 1,
    nombre: "Gucci Rhyton Blue Edition",
    precio: 450000,
    imagen: "/productos/gucci-rhyton-azul.jpg.jpeg",
  };

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* =========================
          HERO PRINCIPAL
      ========================== */}
      <section className="min-h-[92vh] pt-32 pb-20 flex items-center relative">

        {/* Luces y efectos de fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-black to-black pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] lg:w-[750px] h-[350px] sm:h-[550px] bg-yellow-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* COLUMNA DE TEXTO (7 de 12) */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-600/30 bg-yellow-950/20 text-yellow-500 text-xs tracking-[0.25em] uppercase">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                Urban Crown • Colección 2026
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.95] tracking-tight">
                CAMINA <br />
                <span className="text-yellow-500">CON ACTITUD.</span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Sneakers y calzado urbano seleccionados con carácter. Diseñados para quienes no siguen tendencias, sino que las imponen con su propio estilo.
              </p>

              {/* BOTONES DE ACCIÓN */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/productos"
                  className="w-full sm:w-auto text-center bg-yellow-500 text-black px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/25 rounded-sm"
                >
                  Ver Colección →
                </Link>

                <Link
                  to="/nosotros"
                  className="w-full sm:w-auto text-center border border-white/20 px-8 py-4 font-semibold text-sm tracking-widest uppercase text-white hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300 rounded-sm"
                >
                  Nuestra Historia
                </Link>
              </div>

              {/* PROPUESTA DE VALOR RÁPIDA */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="text-yellow-500">✓</span> Envíos a todo el país
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-yellow-500">✓</span> Pago Contra Entrega
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-yellow-500">✓</span> Garantía de talla
                </span>
              </div>

            </div>

            {/* COLUMNA VISUAL: SNEAKER DESTACADO (5 de 12) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md">
                
                {/* Marco con halo luminoso */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/30 to-yellow-500/10 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />
                
                <div className="relative bg-[#0d0d0d] border border-white/15 rounded-xl p-6 sm:p-8 overflow-hidden shadow-2xl">
                  
                  {/* Badge flotante */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-yellow-500 text-black text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                      Drop Destacado
                    </span>
                    <span className="text-xs text-gray-500">
                      Disponibilidad limitada
                    </span>
                  </div>

                  {/* Imagen de la zapatilla */}
                  <div className="aspect-square relative overflow-hidden rounded-lg bg-[#141414] my-2">
                    <img
                      src={productoHero.imagen}
                      alt={productoHero.nombre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Info de la zapatilla */}
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs tracking-widest text-yellow-500 uppercase font-semibold">
                        Urban Crown
                      </p>
                      <h2 className="text-xl font-serif font-bold text-white mt-0.5">
                        {productoHero.nombre}
                      </h2>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-gray-500 block">PRECIO</span>
                      <span className="text-yellow-500 font-bold text-lg">
                        ${productoHero.precio.toLocaleString("es-CO")}
                      </span>
                    </div>
                  </div>

                  {/* Botón rápido al producto */}
                  <Link
                    to={`/producto/${productoHero.id}`}
                    className="mt-5 block w-full py-3 text-center bg-white/5 hover:bg-yellow-500 hover:text-black border border-white/10 hover:border-yellow-500 transition-all duration-300 text-xs font-bold tracking-widest uppercase rounded"
                  >
                    Ver Detalles del Modelo
                  </Link>

                </div>

              </div>
            </div>

          </div>
        </div>

      </section>


      {/* =========================
          PILARES DE CONFIANZA (TRUST BANNER)
      ========================== */}
      <section className="border-y border-white/10 bg-[#090909] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Pilar 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-white">Envíos Nacionales</h3>
                <p className="text-xs text-gray-400 mt-0.5">Despachos asegurados a toda Colombia.</p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-white">Pago Contra Entrega</h3>
                <p className="text-xs text-gray-400 mt-0.5">Paga seguro cuando recibas en tu puerta.</p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-white">Garantía por Talla</h3>
                <p className="text-xs text-gray-400 mt-0.5">Cambios fáciles y sin complicaciones.</p>
              </div>
            </div>

            {/* Pilar 4 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-white">Atención 24/7</h3>
                <p className="text-xs text-gray-400 mt-0.5">Asesoría directa y personal por WhatsApp.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          PRODUCTOS DESTACADOS
      ========================== */}
      <section id="destacados" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ENCABEZADO TOTALMENTE CENTRADO */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-yellow-500 tracking-[0.4em] text-xs uppercase font-semibold">
              Selección de Temporada
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
              MODELOS DESTACADOS
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              Diseños icónicos seleccionados para representar la máxima expresión del estilo urbano.
            </p>
            <div className="pt-2">
              <Link
                to="/productos"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-yellow-500 hover:text-yellow-400 border-b border-yellow-500/30 hover:border-yellow-400 pb-1 transition-all"
              >
                <span>VER TODA LA COLECCIÓN</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* GRID DE PRODUCTOS CENTRADO */}
          {productos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {productos.slice(0, 3).map((producto) => (
                <ProductCard
                  key={producto.id}
                  producto={producto}
                />
              ))}
            </div>
          ) : (
            <div className="border border-white/10 bg-[#0b0b0b] py-20 text-center rounded-lg max-w-md mx-auto">
              <p className="text-gray-500">
                Próximamente tendremos nuevos drops disponibles.
              </p>
            </div>
          )}

        </div>
      </section>


      {/* =========================
          MANIFIESTO / ESENCIA URBAN CROWN
      ========================== */}
      <section className="py-24 border-t border-white/10 bg-gradient-to-b from-black via-[#0d0d0d] to-black w-full flex justify-center text-center">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center justify-center">
          
          <p className="text-yellow-500 tracking-[0.5em] text-xs uppercase mb-6 font-semibold">
            El Sello Urban Crown
          </p>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium leading-snug text-gray-200 max-w-2xl mx-auto">
            "No buscamos tener de todo. Creemos en seleccionar con intención aquello que realmente vale la pena llevar y que habla por ti sin decir una sola palabra."
          </blockquote>

          <div className="w-12 h-0.5 bg-yellow-500 mx-auto my-8" />

          <p className="text-sm text-gray-300 uppercase tracking-widest font-semibold">
            Juan Carlos Cuero Villa
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Fundador de Urban Crown
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/nosotros"
              className="inline-block border border-white/20 hover:border-yellow-500 text-gray-300 hover:text-yellow-500 px-7 py-3.5 text-xs tracking-widest uppercase transition rounded-sm"
            >
              Conocer Nuestra Historia Completa
            </Link>
          </div>

        </div>
      </section>


      {/* =========================
          CTA FINAL (CONEXIÓN DIRECTA)
      ========================== */}
      <section className="py-24 border-t border-white/10 relative overflow-hidden w-full flex justify-center text-center">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-yellow-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center justify-center">
          
          <p className="text-yellow-500 tracking-[0.5em] text-xs uppercase mb-4 font-semibold">
            ¿Buscas un modelo o talla específica?
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white">
            TU ESTILO. <br />
            <span className="text-yellow-500">TU CORONA.</span>
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto mt-6 text-sm sm:text-base leading-relaxed">
            Explora nuestro catálogo o escríbenos directamente por WhatsApp si deseas atención personalizada para tu pedido.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link
              to="/productos"
              className="w-full sm:w-auto bg-yellow-500 text-black px-10 py-4 font-bold text-xs tracking-widest uppercase hover:bg-yellow-400 transition rounded-sm text-center"
            >
              Explorar Colección
            </Link>

            <a
              href="https://wa.me/573218196301?text=Hola%20Urban%20Crown,%20estoy%20interesado%20en%20conocer%20m%C3%A1s%20sobre%20sus%20modelos%20disponibles."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-green-600/50 bg-green-950/20 text-green-400 hover:bg-green-600 hover:text-white px-8 py-4 font-bold text-xs tracking-widest uppercase transition flex items-center justify-center gap-2 rounded-sm text-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Asesoría Inmediata por WhatsApp
            </a>
          </div>

        </div>

      </section>

    </main>
  );
};