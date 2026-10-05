export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  tallas: number[];
  colores: string[];
  etiqueta?: string;
}

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Gucci Rhyton",
    precio: 450000,
    descripcion:
      "Diseño urbano de estilo premium, para que destaques en cualquier ocasión.",
    imagen: "/productos/gucci-rhyton-azul.jpg.jpeg",
    tallas: [ 38,39, 40, 41, 42, 43, 44],
    colores: ["Azul, Negro y Beige"],
    etiqueta: "EDICIÓN ESPECIAL",
  },

  {
    id: 2,
    nombre: "Gucci Sandalias",
    precio: 360000,
    descripcion:
      "Diseño limpio y moderno que combina elegancia y estilo urbano.",
    imagen: "/productos/gucci-sandalias.jpg.jpeg",
    tallas: [39, 40, 41, 42, 43, 44],
    colores: ["Blanco"],
  },

  {
    id: 3,
    nombre: "Sandalias Gucci Dama doble G",
    precio: 370000,
    descripcion:
      "Una propuesta versátil para quienes buscan un estilo sofisticado y urbano.",
    imagen: "/productos/sandalias-doble G-dama.jpg.jpeg",
    tallas: [36, 37, 38, 39, 40],
    colores: ["Beige y marrón oscuro"],
  },

  /*{ /// LUEGO CONTINUI CON ESTO
    id: 4,
    nombre: "Sandalias Gucci con plataforma Dama ",
    precio: 370000,
    descripcion:
      "Una propuesta versátil para quienes buscan un estilo sofisticado y urbano.",
    imagen: "/productos/sandalias-doble G-dama.jpg.jpeg",
    tallas: [36, 37, 38, 39, 40],
    colores: ["Camel y marrón oscuro"],
  }, */
];