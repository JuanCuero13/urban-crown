import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo-urban-crown.png.png";

export const Navbar = () => {
  const { cantidadProductos } = useCart();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link 
          to="/" 
          onClick={cerrarMenu}
          className="flex items-center gap-3 group transition"
        >
          <img
            src={logo}
            alt="Urban Crown"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-serif tracking-[0.22em] text-xs sm:text-sm font-bold text-white group-hover:text-yellow-500 transition-colors">
            URBAN CROWN
          </span>
        </Link>

        {/* MENÚ DESKTOP CENTRADO */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className={`text-xs uppercase tracking-[0.2em] font-medium transition duration-300 relative py-1 ${
              isActive("/")
                ? "text-yellow-500 font-semibold"
                : "text-gray-300 hover:text-yellow-500"
            }`}
          >
            Inicio
            {isActive("/") && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 rounded-full" />
            )}
          </Link>

          <Link
            to="/productos"
            onClick={cerrarMenu}
            className={`text-xs uppercase tracking-[0.2em] font-medium transition duration-300 relative py-1 ${
              isActive("/productos")
                ? "text-yellow-500 font-semibold"
                : "text-gray-300 hover:text-yellow-500"
            }`}
          >
            Colección
            {isActive("/productos") && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 rounded-full" />
            )}
          </Link>

          <Link
            to="/nosotros"
            onClick={cerrarMenu}
            className={`text-xs uppercase tracking-[0.2em] font-medium transition duration-300 relative py-1 ${
              isActive("/nosotros")
                ? "text-yellow-500 font-semibold"
                : "text-gray-300 hover:text-yellow-500"
            }`}
          >
            Nosotros
            {isActive("/nosotros") && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 rounded-full" />
            )}
          </Link>
        </div>

        {/* LADO DERECHO: CARRITO + BOTÓN MÓVIL */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* BOTÓN CARRITO */}
          <Link
            to="/carrito"
            className="group relative flex items-center gap-2 px-3 py-2 rounded border border-white/10 hover:border-yellow-600/50 bg-[#0c0c0c] hover:bg-[#141414] transition-all duration-300"
            aria-label="Ver carrito"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-4 h-4 text-gray-300 group-hover:text-yellow-500 transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={1.75}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>

            <span className="hidden sm:inline-block text-xs uppercase tracking-wider text-gray-300 group-hover:text-yellow-500 font-medium">
              Carrito
            </span>

            {/* BADGE CONTADOR */}
            <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full transition-colors ${
              cantidadProductos > 0
                ? "bg-yellow-500 text-black shadow-sm"
                : "bg-white/10 text-gray-400 group-hover:text-white"
            }`}>
              {cantidadProductos}
            </span>
          </Link>

          {/* BOTÓN MENÚ MÓVIL (SVG) */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          >
            {menuAbierto ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>

      </nav>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {menuAbierto && (
        <div className="md:hidden border-t border-white/10 bg-black/98 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          <Link
            to="/"
            onClick={cerrarMenu}
            className={`block text-sm uppercase tracking-wider py-2 ${
              isActive("/") ? "text-yellow-500 font-bold" : "text-gray-300 hover:text-yellow-500"
            }`}
          >
            Inicio
          </Link>

          <Link
            to="/productos"
            onClick={cerrarMenu}
            className={`block text-sm uppercase tracking-wider py-2 ${
              isActive("/productos") ? "text-yellow-500 font-bold" : "text-gray-300 hover:text-yellow-500"
            }`}
          >
            Colección
          </Link>

          <Link
            to="/nosotros"
            onClick={cerrarMenu}
            className={`block text-sm uppercase tracking-wider py-2 ${
              isActive("/nosotros") ? "text-yellow-500 font-bold" : "text-gray-300 hover:text-yellow-500"
            }`}
          >
            Nosotros
          </Link>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              to="/carrito"
              onClick={cerrarMenu}
              className="flex items-center justify-between bg-[#141414] border border-yellow-600/30 px-4 py-3 rounded text-yellow-500 font-semibold text-sm"
            >
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Mi Carrito
              </span>
              <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                {cantidadProductos}
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};