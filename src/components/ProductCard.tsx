import { Link } from "react-router-dom";
import type { Producto } from "../data/productos";

interface ProductCardProps {
  producto: Producto;
}

export const ProductCard = ({ producto }: ProductCardProps) => {
  return (
    <article className="group border border-white/10 bg-[#0b0b0b] overflow-hidden hover:border-yellow-600/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

      {/* IMAGEN */}

      <div className="aspect-square bg-[#111] overflow-hidden relative">

        {producto.etiqueta && (
          <span className="absolute top-4 left-4 z-10 bg-yellow-600 text-black px-3 py-2 text-[10px] font-bold tracking-[0.15em]">
            {producto.etiqueta}
          </span>
        )}

        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

      </div>


      {/* INFORMACIÓN */}

      <div className="p-5">

        <div className="flex items-start justify-between gap-4">

          <div>

            <h3 className="text-lg font-serif text-white">
              {producto.nombre}
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              {producto.colores.join(" · ")}
            </p>

          </div>

          <p className="text-yellow-500 font-semibold">
            ${producto.precio.toLocaleString("es-CO")}
          </p>

        </div>


        <p className="text-gray-500 text-sm mt-4 leading-relaxed">
          {producto.descripcion}
        </p>


        {/* BOTÓN */}

        <Link
          to={`/producto/${producto.id}`}
          className="block w-full mt-5 border border-yellow-600/60 text-yellow-500 py-3 text-sm text-center tracking-wide hover:bg-yellow-600 hover:text-black transition duration-300"
        >
          VER PRODUCTO
        </Link>

      </div>

    </article>
  );
};