import { Link } from "react-router-dom";
import { productos } from "../data/productos";
import { ProductCard } from "../components/ProductCard";

export const Home = () => {
  return (
    <main className="bg-black text-white">

      {/* =========================
          HERO
      ========================== */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-black" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[650px] md:h-[650px] bg-yellow-600/10 blur-[140px] rounded-full" />

        <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.03]" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-white/[0.03]" />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

          <p className="text-yellow-500 tracking-[0.6em] text-xs md:text-sm mb-8">
            URBAN CROWN
          </p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.9] tracking-tight">
            CAMINA
          </h1>

          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.9] tracking-tight text-yellow-500">
            CON ACTITUD.
          </h2>

          <div className="w-16 h-px bg-yellow-600 mx-auto my-8" />

          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Calzado urbano para quienes no siguen el camino.
            <br className="hidden md:block" />
            Lo convierten en su propio estilo.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/productos"
              className="group bg-yellow-600 text-black px-9 py-4 font-semibold tracking-wide hover:bg-yellow-500 transition duration-300"
            >
              VER COLECCIÓN

              <span className="inline-block ml-2 group-hover:translate-x-1 transition">
                →
              </span>
            </Link>

            <a
              href="#nosotros"
              className="border border-white/20 px-9 py-4 font-semibold tracking-wide text-white hover:border-yellow-500 hover:text-yellow-500 transition duration-300"
            >
              NUESTRA HISTORIA
            </a>

          </div>

        </div>

        <a
          href="#destacados"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-600 hover:text-yellow-500 transition"
        >
          <span className="text-[10px] tracking-[0.4em]">
            DESCUBRE
          </span>

          <span className="w-px h-8 bg-current" />
        </a>

      </section>


      {/* =========================
          PRODUCTOS DESTACADOS
      ========================== */}
      <section
        id="destacados"
        className="py-24 border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

            <div>

              <p className="text-yellow-500 tracking-[0.5em] text-xs mb-4">
                URBAN CROWN
              </p>

              <h2 className="text-4xl md:text-6xl font-serif">
                PRODUCTOS DESTACADOS
              </h2>

              <p className="text-gray-500 max-w-xl mt-5">
                Descubre algunos de nuestros modelos seleccionados
                para representar el estilo de Urban Crown.
              </p>

            </div>

            <Link
              to="/productos"
              className="text-sm text-yellow-500 hover:text-yellow-400 transition"
            >
              VER TODA LA COLECCIÓN →
            </Link>

          </div>


          {/* PRODUCTOS */}

          {productos.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {productos.slice(0, 3).map((producto) => (

                <ProductCard
                  key={producto.id}
                  producto={producto}
                />

              ))}

            </div>

          ) : (

            <div className="border border-white/10 bg-[#0b0b0b] py-20 text-center">

              <p className="text-gray-500">
                Próximamente tendremos nuevos productos.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =========================
          NUESTRA ESENCIA
      ========================== */}
      


      {/* =========================
          CTA FINAL
      ========================== */}
      <section className="py-28 border-t border-white/10">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-yellow-500 tracking-[0.5em] text-xs mb-6">
            URBAN CROWN
          </p>

          <h2 className="text-5xl md:text-7xl font-serif">
            TU ESTILO.
            <br />
            <span className="text-yellow-500">
              TU CORONA.
            </span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mt-6">
            Encuentra el modelo que representa tu personalidad.
          </p>

          <Link
            to="/productos"
            className="inline-block mt-10 bg-yellow-600 text-black px-10 py-4 font-semibold tracking-wide hover:bg-yellow-500 transition"
          >
            EXPLORAR COLECCIÓN
          </Link>

        </div>

      </section>

    </main>
  );
};