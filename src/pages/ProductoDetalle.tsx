import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productos } from "../data/productos";
import { useCart } from "../context/CartContext";

export const ProductoDetalle = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useCart();
  const navigate = useNavigate();

  const producto = productos.find(
    (producto) => producto.id === Number(id)
  );

  const [talla, setTalla] = useState<number | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [cantidad, setCantidad] = useState(1);

  if (!producto) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">
            Producto no encontrado
          </h1>

          <p className="text-gray-500">
            El producto que buscas no está disponible.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* IMAGEN */}
          <div className="bg-[#0b0b0b] border border-white/10">
            <div className="aspect-square overflow-hidden">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* INFORMACIÓN */}
          <div className="lg:pt-8">

            <p className="text-yellow-500 tracking-[0.4em] text-xs mb-5">
              URBAN CROWN
            </p>

            <h1 className="text-4xl md:text-5xl font-serif">
              {producto.nombre}
            </h1>

            <p className="text-yellow-500 text-2xl mt-6">
              {producto.precio > 0
                ? `$${producto.precio.toLocaleString("es-CO")}`
                : "Consultar precio"}
            </p>

            <div className="h-px bg-white/10 my-8" />

            {/* DESCRIPCIÓN */}
            <p className="text-gray-400 leading-relaxed">
              {producto.descripcion}
            </p>

            {/* COLOR */}
            <div className="mt-8">

              <div className="flex justify-between items-center mb-3">

                <h2 className="text-sm uppercase tracking-widest">
                  Selecciona tu color
                </h2>

                {color && (
                  <span className="text-xs text-yellow-500">
                    {color}
                  </span>
                )}

              </div>

              <div className="flex flex-wrap gap-3">

                {producto.colores.map((colorDisponible) => (

                  <button
                    key={colorDisponible}
                    onClick={() => setColor(colorDisponible)}
                    className={`border px-5 py-3 text-sm transition ${
                      color === colorDisponible
                        ? "bg-yellow-600 text-black border-yellow-600"
                        : "border-white/20 text-gray-300 hover:border-yellow-500 hover:text-yellow-500"
                    }`}
                  >
                    {colorDisponible}
                  </button>

                ))}

              </div>

            </div>

            {/* TALLAS */}
            <div className="mt-8">

              <div className="flex justify-between items-center mb-3">

                <h2 className="text-sm uppercase tracking-widest">
                  Selecciona tu talla
                </h2>

                <span className="text-xs text-gray-500">
                  Tallas disponibles
                </span>

              </div>

              <div className="flex flex-wrap gap-3">

                {producto.tallas.map((tallaDisponible) => (

                  <button
                    key={tallaDisponible}
                    onClick={() => setTalla(tallaDisponible)}
                    className={`w-14 h-12 border transition ${
                      talla === tallaDisponible
                        ? "bg-yellow-600 text-black border-yellow-600"
                        : "border-white/20 text-white hover:border-yellow-500"
                    }`}
                  >
                    {tallaDisponible}
                  </button>

                ))}

              </div>

            </div>

            {/* CANTIDAD */}
            <div className="mt-8">

              <h2 className="text-sm uppercase tracking-widest mb-3">
                Cantidad
              </h2>

              <div className="flex items-center border border-white/20 w-fit">

                <button
                  onClick={() =>
                    setCantidad((cantidadActual) =>
                      Math.max(1, cantidadActual - 1)
                    )
                  }
                  className="px-5 py-3 text-gray-400 hover:text-yellow-500"
                >
                  −
                </button>

                <span className="px-5">
                  {cantidad}
                </span>

                <button
                  onClick={() =>
                    setCantidad((cantidadActual) =>
                      cantidadActual + 1
                    )
                  }
                  className="px-5 py-3 text-gray-400 hover:text-yellow-500"
                >
                  +
                </button>

              </div>

            </div>

            {/* BOTÓN */}
            <button
            
              disabled={!talla || !color}
              onClick={() => {

                if (!talla || !color) return;

                agregarAlCarrito(
                  producto,
                  talla,
                  color,
                  cantidad
                );

                navigate("/carrito");
              }}
              className={`w-full mt-10 py-4 font-semibold tracking-wide transition ${
                talla && color
                  ? "bg-yellow-600 text-black hover:bg-yellow-500"
                  : "bg-gray-800 text-gray-500 cursor-not-allowed"
              }`}
            >
              {!color
                ? "SELECCIONA UN COLOR"
                : !talla
                ? "SELECCIONA UNA TALLA"
                : "AGREGAR AL CARRITO"}
            </button>

            {/* INFORMACIÓN ADICIONAL */}
            <div className="mt-10 border-t border-white/10 pt-6">

              <div className="flex justify-between py-3 border-b border-white/10">

                <span className="text-gray-500">
                  Producto
                </span>

                <span>
                  {producto.nombre}
                </span>

              </div>

              <div className="flex justify-between py-3 border-b border-white/10">

                <span className="text-gray-500">
                  Colores
                </span>

                <span>
                  {producto.colores.join(", ")}
                </span>

              </div>

              <div className="flex justify-between py-3">

                <span className="text-gray-500">
                  Tallas
                </span>

                <span>
                  {producto.tallas.join(", ")}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
};