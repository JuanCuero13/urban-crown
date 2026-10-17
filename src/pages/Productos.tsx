import { useState } from "react";
import { Link } from "react-router-dom";
import { productos } from "../data/productos";
import { ProductCard } from "../components/ProductCard";

export const Productos = () => {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("todos");

  const categorias = ["todos", "Sneakers", "Sandalias"];

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda =
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.colores.some((c) => c.toLowerCase().includes(busqueda.toLowerCase()));
    
    const coincideCategoria =
      categoriaSeleccionada === "todos" || producto.categoria === categoriaSeleccionada;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <main className="min-h-screen bg-black text-white pt-24 sm:pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-12">
          <p className="text-yellow-500 tracking-[0.4em] text-xs uppercase mb-3 font-semibold">
            Catálogo Oficial
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold">
            COLECCIÓN URBAN CROWN
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto mt-4 text-sm sm:text-base font-light">
            Selección de calzado urbano y sneakers con acabados de primera calidad.
          </p>

          {/* BUSCADOR ELEGANTE (Lupa a la derecha que se oculta al escribir) */}
          <div className="max-w-md mx-auto mt-8 relative">
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por modelo o color..."
              className="w-full bg-[#0d0d0d] border border-white/15 px-4 py-3 pr-11 text-sm text-white placeholder:text-gray-500 rounded-lg outline-none focus:border-yellow-500/80 transition"
            />
            {busqueda ? (
              <button
                type="button"
                onClick={() => setBusqueda("")}
                aria-label="Limpiar búsqueda"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10 transition text-xs"
              >
                ✕
              </button>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </div>

          {/* FILTROS DE CATEGORÍA */}
          <div className="flex justify-center gap-2 mt-6">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaSeleccionada(cat)}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition ${
                  categoriaSeleccionada === cat
                    ? "bg-yellow-500 text-black shadow-sm"
                    : "border border-white/10 text-gray-400 hover:text-white hover:border-white/30"
                }`}
              >
                {cat === "todos" ? "Todos los modelos" : cat}
              </button>
            ))}
          </div>

        </div>

        {/* GRILLA DE PRODUCTOS */}
        {productosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {productosFiltrados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#0c0c0c] border border-white/10 rounded-lg max-w-lg mx-auto p-8">
            <p className="text-gray-400 text-sm mb-4">
              No encontramos modelos que coincidan con tu búsqueda.
            </p>
            <button
              onClick={() => {
                setBusqueda("");
                setCategoriaSeleccionada("todos");
              }}
              className="text-xs uppercase tracking-widest text-yellow-500 font-bold hover:text-yellow-400 transition"
            >
              Restablecer Filtros
            </button>
          </div>
        )}

        {/* VOLVER AL INICIO */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <Link
            to="/"
            className="text-xs uppercase tracking-widest text-gray-400 hover:text-yellow-500 transition"
          >
            ← Volver a la página principal
          </Link>
        </div>

      </section>
    </main>
  );
};