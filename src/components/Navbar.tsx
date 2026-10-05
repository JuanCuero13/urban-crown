import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo-urban-crown.png.png";

export const Navbar = () => {
  const { cantidadProductos } = useCart();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" onClick={cerrarMenu}>
          <img
            src={logo}
            alt="Urban Crown"
            className="w-20"
          />
        </Link>

        {/* MENÚ DESKTOP */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-sm text-gray-300 hover:text-yellow-500 transition"
          >
            INICIO
          </Link>

          <Link
            to="/productos"
            onClick={cerrarMenu}
            className="text-sm text-gray-300 hover:text-yellow-500 transition"
          >
            COLECCIÓN
          </Link>

          <Link
            to="/nosotros"
            onClick={cerrarMenu}
            className="text-sm text-gray-300 hover:text-yellow-500 transition"
          >
            NOSOTROS
          </Link>

        </div>

        {/* PARTE DERECHA */}
        <div className="flex items-center gap-5">

          {/* CARRITO */}
          <Link
            to="/carrito"
            className="relative flex items-center gap-2 text-white hover:text-yellow-500 transition"
          >
            <span className="text-xl">🛒</span>

            <span className="hidden sm:block text-sm">
              CARRITO
            </span>

            {cantidadProductos > 0 && (
              <span className="absolute -top-2 -right-3 bg-yellow-600 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cantidadProductos}
              </span>
            )}
          </Link>

          {/* BOTÓN MENÚ MÓVIL */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden text-white text-2xl"
            aria-label="Abrir menú"
          >
            {menuAbierto ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* MENÚ MÓVIL */}
      {menuAbierto && (
        <div className="md:hidden border-t border-white/10 bg-black">

          <div className="flex flex-col px-6 py-6 gap-6">

            <Link
              to="/"
              onClick={cerrarMenu}
              className="text-gray-300 hover:text-yellow-500 transition"
            >
              INICIO
            </Link>

            <a
              href="/#coleccion"
              onClick={cerrarMenu}
              className="text-gray-300 hover:text-yellow-500 transition"
            >
              COLECCIÓN
            </a>

            <Link
              to="/nosotros"
              onClick={cerrarMenu}
              className="text-gray-300 hover:text-yellow-500 transition"
            >
              NOSOTROS
            </Link>

            <Link
              to="/carrito"
              onClick={cerrarMenu}
              className="text-yellow-500 font-semibold"
            >
              🛒 CARRITO ({cantidadProductos})
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
};