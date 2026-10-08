import { Link } from "react-router-dom";
import logo from "../assets/logo-urban-crown.png.png";

export const Footer = () => {
  return (
    <footer className="bg-[#070707] border-t border-white/10 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FILA PRINCIPAL EN 4 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* COLUMNA 1 (5 de 12): BRANDING & IDENTIDAD */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={logo}
                alt="Urban Crown"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-serif tracking-[0.25em] text-sm font-bold text-white group-hover:text-yellow-500 transition-colors">
                URBAN CROWN
              </span>
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Calzado y sneakers urbanos seleccionados con intención y carácter. Calidad premium, acabados cuidados y atención directa para quienes caminan con estilo propio.
            </p>

            <div className="pt-2">
              <p className="text-yellow-500 font-serif italic text-sm">
                "Tu estilo. Tu corona."
              </p>
            </div>
          </div>

          {/* COLUMNA 2 (2 de 12): NAVEGACIÓN */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-bold">
              Explorar
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link to="/" className="hover:text-yellow-500 transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="hover:text-yellow-500 transition">
                  Colección Oficial
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-yellow-500 transition">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link to="/carrito" className="hover:text-yellow-500 transition">
                  Mi Carrito
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3 (2 de 12): ATENCIÓN & CONTACTO */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-bold">
              Atención
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a
                  href="https://wa.me/573218196301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition flex items-center gap-1.5"
                >
                  <span>💬</span> WhatsApp Oficial
                </a>
              </li>
              <li className="text-gray-500">
                Lunes a Sábado: <br />
                <span className="text-gray-400">8:00 AM – 8:00 PM</span>
              </li>
              <li className="text-gray-500 pt-1">
                📍 Despachos seguros a toda Colombia
              </li>
            </ul>
          </div>

          {/* COLUMNA 4 (3 de 12): GARANTÍAS Y MÉTODOS DE PAGO */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-bold">
              Compra Segura
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Aceptamos los principales métodos de pago del país para tu total tranquilidad:
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
              <span className="p-2 rounded bg-white/5 border border-white/10 text-gray-300 text-center font-medium">
                📦 Contra Entrega
              </span>
              <span className="p-2 rounded bg-white/5 border border-white/10 text-gray-300 text-center font-medium">
                💳 Bancolombia
              </span>
              <span className="p-2 rounded bg-white/5 border border-white/10 text-gray-300 text-center font-medium">
                📲 Nequi / Daviplata
              </span>
              <span className="p-2 rounded bg-white/5 border border-white/10 text-gray-300 text-center font-medium">
                🚚 Envío Asegurado
              </span>
            </div>
          </div>

        </div>

        {/* BARRA INFERIOR: DERECHOS RESERVADOS & FIRMA */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} <strong className="text-gray-300 font-semibold">Urban Crown</strong>. Todos los derechos reservados.
          </p>

          <p className="flex items-center gap-1.5 text-gray-400">
            <span>👑</span> Calzado & Streetwear Exclusivo
          </p>
        </div>

      </div>
    </footer>
  );
};
