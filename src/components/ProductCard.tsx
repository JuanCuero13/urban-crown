import { Link } from "react-router-dom";
import type { Producto } from "../data/productos";

interface ProductCardProps {
  producto: Producto;
}

export const ProductCard = ({ producto }: ProductCardProps) => {
  return (
    <article className="group relative border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-yellow-600/50 hover:shadow-2xl hover:shadow-yellow-950/20 transition-all duration-500 flex flex-col justify-between">
      
      {/* LINK QUE ABARCA TODO EL PRODUCTO */}
      <Link to={`/producto/${producto.id}`} className="block">
        
        {/* IMAGEN */}
        <div className="aspect-square bg-[#121212] overflow-hidden relative">
          {producto.etiqueta && (
            <span className="absolute top-3 left-3 z-10 bg-yellow-500 text-black px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm shadow-md">
              {producto.etiqueta}
            </span>
          )}

          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* INFORMACIÓN DEL SNEAKER */}
        <div className="p-5 flex flex-col gap-2">
          
          <div className="flex items-center justify-between">
            <span className="text-[10px] tracking-[0.25em] text-yellow-500 uppercase font-semibold">
              Urban Crown
            </span>
            <span className="text-xs text-gray-500">
              {producto.tallas.length > 0 ? `${producto.tallas.length} tallas disp.` : ""}
            </span>
          </div>

          <h3 className="text-lg font-serif font-bold text-white group-hover:text-yellow-400 transition-colors line-clamp-1">
            {producto.nombre}
          </h3>

          <p className="text-xs text-gray-400 line-clamp-1">
            {producto.colores.join(" · ")}
          </p>

          <div className="pt-2 mt-1 border-t border-white/5 flex items-baseline justify-between">
            <div>
              <span className="text-[10px] text-gray-500 block uppercase tracking-wider">Precio</span>
              <span className="text-yellow-500 font-semibold text-base sm:text-lg">
                ${producto.precio.toLocaleString("es-CO")}
              </span>
            </div>

            <span className="text-xs text-gray-400 group-hover:text-white flex items-center gap-1 transition-colors">
              Ver detalles
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>

        </div>

      </Link>

    </article>
  );
};