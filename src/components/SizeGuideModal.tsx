interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal = ({ isOpen, onClose }: SizeGuideModalProps) => {
  if (!isOpen) return null;

  const tablaTallas = [
    { col: "36", eur: "36", us: "5.5", cm: "23.5" },
    { col: "37", eur: "37", us: "6.0", cm: "24.0" },
    { col: "38", eur: "38", us: "6.5", cm: "24.5" },
    { col: "39", eur: "39", us: "7.0", cm: "25.0" },
    { col: "40", eur: "40", us: "8.0", cm: "26.0" },
    { col: "41", eur: "41", us: "8.5", cm: "26.5" },
    { col: "42", eur: "42", us: "9.5", cm: "27.5" },
    { col: "43", eur: "43", us: "10.0", cm: "28.0" },
    { col: "44", eur: "44", us: "11.0", cm: "29.0" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Fondo clickeable para cerrar */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Contenedor del Modal */}
      <div className="relative bg-[#0d0d0d] border border-white/15 rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 overflow-hidden">
        
        {/* Encabezado */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-[10px] tracking-[0.25em] text-yellow-500 uppercase font-semibold block">
              Urban Crown Calzado
            </span>
            <h3 className="text-xl font-serif font-bold text-white mt-1">
              Guía de Tallas & Medidas
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition"
            aria-label="Cerrar modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabla de equivalencias */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-center text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/20 bg-white/5 text-yellow-500 uppercase font-semibold">
                <th className="py-2.5 px-3">Talla COL</th>
                <th className="py-2.5 px-3">EUR</th>
                <th className="py-2.5 px-3">US</th>
                <th className="py-2.5 px-3">Longitud (CM)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {tablaTallas.map((item) => (
                <tr key={item.col} className="hover:bg-white/5 transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-white">{item.col}</td>
                  <td className="py-2.5 px-3 text-gray-400">{item.eur}</td>
                  <td className="py-2.5 px-3 text-gray-400">{item.us}</td>
                  <td className="py-2.5 px-3 text-yellow-500/90 font-mono">{item.cm} cm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tips para medir el pie */}
        <div className="mt-6 p-4 rounded bg-[#141414] border border-white/5 space-y-2">
          <p className="text-xs font-semibold text-yellow-500 flex items-center gap-1.5">
            <span>📏</span> ¿Cómo medir tu pie en casa?
          </p>
          <p className="text-[11px] text-gray-400 leading-relaxed font-light">
            1. Coloca tu pie descalzo sobre una hoja de papel pegada a la pared.<br />
            2. Marca el punto más largo de tu dedo y mide los centímetros con una regla.<br />
            3. Si estás entre dos tallas o tienes el empeine alto, te sugerimos pedir la mayor.
          </p>
        </div>

        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="w-full mt-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest rounded transition"
        >
          Entendido, Volver al Producto
        </button>

      </div>

    </div>
  );
};
