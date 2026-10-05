import { useState } from "react";
import { Link } from "react-router-dom";
import { productos } from "../data/productos";
import { ProductCard } from "../components/ProductCard";

export const Productos = () => {
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">

      <section className="max-w-7xl mx-auto px-6">

        {/* ENCABEZADO */}
        <div className="text-center mb-16">

          <p className="text-yellow-500 tracking-[0.5em] text-xs mb-5">
            URBAN CROWN
          </p>

          <h1 className="text-5xl md:text-7xl font-serif">
            COLECCIÓN
          </h1>

          <p className="text-gray-500 max-w-xl mx-auto mt-6">
            Descubre nuestra selección de calzado urbano.
            Diseños pensados para destacar.
          </p>

          {/* BUSCADOR */}
          <div className="max-w-xl mx-auto mt-10">

            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar zapatillas..."
              className="w-full bg-[#0b0b0b] border border-white/10 px-5 py-4 text-white placeholder:text-gray-600 outline-none focus:border-yellow-600 transition"
            />

          </div>

        </div>

        {/* PRODUCTOS */}
        {productos.length > 0 ? (

          <>
            {productosFiltrados.length > 0 ? (

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {productosFiltrados.map((producto) => (
                  <ProductCard
                    key={producto.id}
                    producto={producto}
                  />
                ))}

              </div>

            ) : (

              <div className="text-center py-20">

                <p className="text-gray-500">
                  No encontramos productos con ese nombre.
                </p>

                <button
                  onClick={() => setBusqueda("")}
                  className="mt-5 text-yellow-500 hover:text-yellow-400 transition"
                >
                  VER TODOS LOS PRODUCTOS
                </button>

              </div>

            )}
          </>

        ) : (

          <div className="text-center py-20">

            <p className="text-gray-500">
              No hay productos disponibles.
            </p>

          </div>

        )}

        {/* VOLVER */}
        <div className="text-center mt-16">

          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-yellow-500 transition"
          >
            ← VOLVER AL INICIO
          </Link>

        </div>

      </section>

    </main>
  );
};