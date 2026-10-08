export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  tallas: number[];
  colores: string[];
  etiqueta?: string;
  categoria?: string;
  materiales?: string;
}

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Off-White Out Of Office White Black",
    precio: 420000,
    descripcion:
      "Silueta icónica de estética retro inspirada en el tenis de los 90. Confeccionada con la emblemática flecha lateral de Virgil Abloh, etiqueta colgante Zip-Tie y cordones impresos 'SHOELACES'.",
    imagen: "/productos/off-white-out-of-office.jpg",
    tallas: [38, 39, 40, 41, 42, 43, 44],
    colores: ["Blanco y Negro"],
    etiqueta: "DROP EXCLUSIVO",
    categoria: "Sneakers",
    materiales: "Cuero vacuno premium seleccionado, suela bicolor con inserciones de goma dentada y plantilla acolchada de alto confort.",
  },

  {
    id: 2,
    nombre: "Balenciaga Track LED White Edition",
    precio: 460000,
    descripcion:
      "El pináculo del diseño de calzado futurista. Construcción multicapa hiperestructurada con sistema de iluminación LED recargable en el talón. Incluye cable USB de carga y cordones de recambio.",
    imagen: "/productos/balenciaga-track-led-blanco.jpg",
    tallas: [39, 40, 41, 42, 43, 44],
    colores: ["Blanco / Off-White"],
    etiqueta: "SISTEMA LED",
    categoria: "Sneakers",
    materiales: "Estructura jaula de 176 paneles superpuestos, malla técnica transpirable y suela dinámica con batería recargable integrada.",
  },

  {
    id: 3,
    nombre: "Louis Vuitton LV Skate Blue Marine",
    precio: 400000,
    descripcion:
      "Silueta de culto inspirada en la cultura del skate de los 90. Destaca por sus cordones gruesos sobredimensionados, la flor Monogram en los laterales y acabados aterciopelados de máxima categoría.",
    imagen: "/productos/louis-vuitton-skate-azul.jpg",
    tallas: [38, 39, 40, 41, 42, 43, 44],
    colores: ["Azul Cielo / Marino"],
    etiqueta: "TOP SELLER",
    categoria: "Sneakers",
    materiales: "Gamuza técnica de acabado aterciopelado combinada con malla acolchada transpirable y suela de caucho bicolor.",
  },

  {
    id: 4,
    nombre: "Gucci Reb-Web Sky",
    precio: 350000,
    descripcion:
      "Elegancia retro indiscutible con tejido Jacquard monograma GG en tono azul celeste, ribetes de cuero marfil y cinta Web verde y roja en la lengüeta. Distinción pura para cualquier ocasión.",
    imagen: "/productos/gucci-mac80-celeste.jpg",
    tallas: [38, 39, 40, 41, 42, 43],
    colores: ["Celeste y Marfil"],
    etiqueta: "TENDENCIA",
    categoria: "Sneakers",
    materiales: "Lona Jacquard con monograma GG bordado, remates en cuero liso marfil y suela de goma con tracción estriada.",
  },

  {
    id: 5,
    nombre: "Balenciaga Track Pink Monochrome",
    precio: 460000,
    descripcion:
      "Propuesta maximalista en tono rosa pastel de gran carácter. Diseño de silueta chunky con cordones dobles entrecruzados, paneles calados y presencia imponente.",
    imagen: "/productos/balenciaga-track-pink.jpg",
    tallas: [36, 37, 38, 39, 40],
    colores: ["Rosa Monocromático"],
    etiqueta: "NUEVO DROP",
    categoria: "Sneakers",
    materiales: "Malla técnica multicapa reforzada con paneles articulados de nylon y suela sobredimensionada con absorción de impacto.",
  },

  {
    id: 6,
    nombre: "Alexander McQueen Classic White",
    precio: 360000,
    descripcion:
      "Silueta minimalista de lujo contemporáneo con suela de plataforma sobredimensionada. El equilibrio perfecto entre elegancia limpia y cultura streetwear.",
    imagen: "/productos/alexander-mcqueen.jpg",
    tallas: [40, 41, 42, 43, 44],
    colores: ["Blanco Puro"],
    etiqueta: "CLÁSICO",
    categoria: "Sneakers",
    materiales: "Capellada lisa de alta resistencia, talón reforzado, cordones planos anchos y suela ergonómica de caucho blanco.",
  },

  {
    id: 7,
    nombre: "Gucci Rhyton Blue Edition",
    precio: 450000,
    descripcion:
      "Diseño urbano de estilo chunky y presencia imponente. Confeccionado con paneles de alta durabilidad y detalles en contraste para destacar en cualquier ocasión.",
    imagen: "/productos/gucci-rhyton-azul.jpg.jpeg",
    tallas: [38, 39, 40, 41, 42, 43, 44],
    colores: ["Azul, Negro y Beige"],
    etiqueta: "DESTACADO",
    categoria: "Sneakers",
    materiales: "Cuero sintético premium de alta densidad, suela chunky de amortiguación vulcanizada y plantilla acolchada.",
  },

  {
    id: 8,
    nombre: "Gucci Sandalias Slide",
    precio: 360000,
    descripcion:
      "Diseño limpio y ergonómico que combina confort de descanso con distinción urbana para los días cálidos.",
    imagen: "/productos/gucci-sandalias.jpg.jpeg",
    tallas: [39, 40, 41, 42, 43, 44],
    colores: ["Blanco"],
    etiqueta: "LÍNEA SUMMER",
    categoria: "Sandalias",
    materiales: "Banda superior acolchada de ajuste suave y plantilla moldeada en goma anatómica.",
  },

  {
    id: 9,
    nombre: "Sandalias Gucci Dama Doble G",
    precio: 370000,
    descripcion:
      "Una propuesta sofisticada para dama, diseñada con detalles icónicos y estructura ligera para un look urbano refinado.",
    imagen: "/productos/sandalias-doble G-dama.jpg.jpeg",
    tallas: [36, 37, 38, 39, 40],
    colores: ["Beige y Marrón"],
    etiqueta: "LÍNEA SUMMER",
    categoria: "Sandalias",
    materiales: "Correas en textil estampado monograma, herraje con acabado dorado y suela antideslizante.",
  },
];