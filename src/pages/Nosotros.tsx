import { useState } from "react";
import { Link } from "react-router-dom";

export const Nosotros = () => {
  const [fotoError, setFotoError] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* =========================================
            1. ENCABEZADO PRINCIPAL (100% CENTRADO)
        ========================================== */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-yellow-600/30 bg-yellow-950/20 text-yellow-500 text-xs tracking-[0.25em] uppercase mx-auto">
            Urban Crown • Manifiesto
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight">
            MÁS QUE CALZADO.
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            Una marca forjada para representar actitud, carácter y una forma diferente de entender la cultura de los sneakers.
          </p>
        </div>


        {/* =========================================
            2. NUESTRA HISTORIA (BLOQUE CENTRADO)
        ========================================== */}
        <section className="border border-white/10 bg-[#0a0a0a] rounded-xl p-8 sm:p-14 shadow-2xl text-center space-y-6 flex flex-col items-center">
          <span className="text-yellow-500 tracking-[0.3em] text-xs uppercase font-semibold">
            Nuestra Historia
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
            CALZADO CON <span className="text-yellow-500">IDENTIDAD.</span>
          </h2>

          <div className="w-16 h-0.5 bg-yellow-500 mx-auto" />

          <div className="max-w-2xl mx-auto space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed font-light text-center">
            <p>
              Urban Crown nació de una idea sencilla: transformar el gusto por el estilo urbano, la calidad de los materiales y los pequeños detalles en una experiencia auténtica.
            </p>
            <p>
              No buscamos tener de todo, ni competir por volumen. Creemos firmemente en el poder de <strong className="text-white font-medium">seleccionar con criterio</strong>. Elegir únicamente aquello que realmente merece la pena llevar y que expresa tu personalidad sin necesidad de decir una sola palabra.
            </p>
            <p className="text-yellow-500 font-serif italic text-base sm:text-lg pt-2">
              "Queremos que cada persona que use Urban Crown sienta seguridad, presencia y distinción en cada paso."
            </p>
          </div>
        </section>


        {/* =========================================
            3. NUESTRA IDEOLOGÍA (3 PILARES CENTRADOS)
        ========================================== */}
        <section className="text-center space-y-10">
          <div className="space-y-2">
            <span className="text-yellow-500 tracking-[0.3em] text-xs uppercase font-semibold block">
              Nuestra Ideología
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              ELEGIR CON INTENCIÓN
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
              Tres principios innegociables que guían cada decisión en Urban Crown.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-7 rounded-lg bg-[#0d0d0d] border border-white/10 text-center flex flex-col items-center space-y-3 hover:border-yellow-600/40 transition-colors">
              <span className="text-3xl">👑</span>
              <h3 className="font-serif font-bold text-lg text-white">Carácter Urbano</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Modelos seleccionados para destacar. Líneas sobrias, siluetas contundentes y colores atemporales que combinan con todo.
              </p>
            </div>

            <div className="p-7 rounded-lg bg-[#0d0d0d] border border-white/10 text-center flex flex-col items-center space-y-3 hover:border-yellow-600/40 transition-colors">
              <span className="text-3xl">🔍</span>
              <h3 className="font-serif font-bold text-lg text-white">Atención al Detalle</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Inspeccionamos cada par antes de despacharlo: acabados, costuras, cordones y confort de plantilla.
              </p>
            </div>

            <div className="p-7 rounded-lg bg-[#0d0d0d] border border-white/10 text-center flex flex-col items-center space-y-3 hover:border-yellow-600/40 transition-colors">
              <span className="text-3xl">🤝</span>
              <h3 className="font-serif font-bold text-lg text-white">Confianza Real</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Respaldo en cada compra: pago contra entrega, atención personal y facilidad en cambios de talla por WhatsApp.
              </p>
            </div>

          </div>
        </section>


        {/* =========================================
            4. SECCIÓN DEL FUNDADOR (100% CENTRADO EN LA MITAD)
        ========================================== */}
        <section className="w-full border-t border-white/10 pt-20 flex flex-col items-center justify-center text-center">
          <div className="max-w-xl w-full mx-auto flex flex-col items-center justify-center text-center space-y-6">
            
            <span className="text-yellow-500 tracking-[0.35em] text-xs uppercase font-semibold block text-center">
              Liderazgo & Visión
            </span>

            {/* MARCO PARA FOTO PROFESIONAL (ESTRICTAMENTE CENTRADO) */}
            <div className="relative group flex justify-center items-center my-3 mx-auto">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-600/40 via-yellow-500/30 to-yellow-600/40 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-700" />
              
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-2 border-yellow-500/80 p-1 bg-[#111] overflow-hidden flex items-center justify-center shadow-2xl mx-auto">
                {!fotoError ? (
                  <img
                    src="/fundador.jpg"
                    alt="Juan Carlos Cuero Villa"
                    className="w-full h-full object-cover rounded-full"
                    onError={() => setFotoError(true)}
                  />
                ) : (
                  /* Avatar de alta gama con Corona si aún no ha subido su foto */
                  <div className="text-center p-4 flex flex-col items-center justify-center">
                    <span className="text-4xl sm:text-5xl block animate-pulse">👑</span>
                    <span className="text-[10px] tracking-widest text-yellow-500 uppercase font-bold mt-2 block">
                      Fundador
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-1.5 text-center w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                JUAN CARLOS CUERO VILLA
              </h2>
              <p className="text-yellow-500/90 text-xs uppercase tracking-widest font-semibold">
                Fundador & Director de Urban Crown
              </p>
            </div>

            <blockquote className="w-full border-y border-white/10 py-6 my-2 text-gray-300 italic text-base sm:text-lg leading-relaxed font-serif text-center px-4">
              "Mi intención con Urban Crown es darle identidad a una forma de entender el estilo: elegir con intención, cuidar los detalles y llevar aquello que realmente nos representa."
            </blockquote>

            <div className="pt-3 w-full flex justify-center text-center">
              <Link
                to="/productos"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-9 py-4 text-xs font-bold uppercase tracking-widest rounded transition shadow-lg shadow-yellow-500/10 text-center"
              >
                Explorar Nuestra Colección →
              </Link>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
};