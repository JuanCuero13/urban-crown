import { useState } from "react";

export interface AccordionItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export const Accordion = ({ items, allowMultiple = false }: AccordionProps) => {
  // Manejamos un array de IDs abiertos
  const [openIds, setOpenIds] = useState<string[]>(() => {
    return items.filter((item) => item.defaultOpen).map((item) => item.id);
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((openId) => openId !== id);
      } else {
        return allowMultiple ? [...prev, id] : [id];
      }
    });
  };

  return (
    <div className="divide-y divide-white/10 border-y border-white/10 my-6">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div key={item.id} className="py-1">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full py-4 flex items-center justify-between text-left text-sm font-semibold tracking-wide text-gray-200 hover:text-yellow-500 transition-colors focus:outline-none group"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                {item.icon && (
                  <span className="text-yellow-500 text-base">{item.icon}</span>
                )}
                <span className="uppercase text-xs tracking-wider font-semibold">
                  {item.title}
                </span>
              </span>

              {/* Icono de acordeón (+ / - o Chevron) */}
              <span className="ml-4 shrink-0 p-1 rounded-full text-gray-400 group-hover:text-yellow-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-180 text-yellow-500" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            {/* Contenido desplegable */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-5"
                  : "grid-rows-[0fr] opacity-0 pb-0"
              }`}
            >
              <div className="overflow-hidden text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
