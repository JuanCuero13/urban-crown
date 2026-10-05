import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import type { Producto } from "../data/productos";

export interface ItemCarrito {
  producto: Producto;
  talla: number;
  color: string;
  cantidad: number;
}

interface CartContextType {
  carrito: ItemCarrito[];

  agregarAlCarrito: (
    producto: Producto,
    talla: number,
    color: string,
    cantidad: number
  ) => void;

  actualizarCantidad: (
    productoId: number,
    talla: number,
    color: string,
    cantidad: number
  ) => void;

  eliminarDelCarrito: (
    productoId: number,
    talla: number,
    color: string
  ) => void;

  vaciarCarrito: () => void;

  cantidadProductos: number;
}

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({
  children,
}: {
  children: ReactNode;
}) => {

  const [carrito, setCarrito] = useState<ItemCarrito[]>(() => {
    const carritoGuardado = localStorage.getItem("urban-crown-carrito");

    if (carritoGuardado) {
      try {
        return JSON.parse(carritoGuardado);
      } catch {
        return [];
      }
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      "urban-crown-carrito",
      JSON.stringify(carrito)
    );
  }, [carrito]);

  const agregarAlCarrito = (
    producto: Producto,
    talla: number,
    color: string,
    cantidad: number
  ) => {
    setCarrito((carritoActual) => {

      const existe = carritoActual.find(
        (item) =>
          item.producto.id === producto.id &&
          item.talla === talla &&
          item.color === color
      );

      if (existe) {
        return carritoActual.map((item) =>
          item.producto.id === producto.id &&
          item.talla === talla &&
          item.color === color
            ? {
                ...item,
                cantidad: item.cantidad + cantidad,
              }
            : item
        );
      }

      return [
        ...carritoActual,
        {
          producto,
          talla,
          color,
          cantidad,
        },
      ];
    });
  };

  const actualizarCantidad = (
    productoId: number,
    talla: number,
    color: string,
    cantidad: number
  ) => {

    if (cantidad < 1) return;

    setCarrito((carritoActual) =>
      carritoActual.map((item) =>
        item.producto.id === productoId &&
        item.talla === talla &&
        item.color === color
          ? {
              ...item,
              cantidad,
            }
          : item
      )
    );
  };

  const eliminarDelCarrito = (
    productoId: number,
    talla: number,
    color: string
  ) => {

    setCarrito((carritoActual) =>
      carritoActual.filter(
        (item) =>
          !(
            item.producto.id === productoId &&
            item.talla === talla &&
            item.color === color
          )
      )
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const cantidadProductos = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        actualizarCantidad,
        eliminarDelCarrito,
        vaciarCarrito,
        cantidadProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {

  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart debe utilizarse dentro de CartProvider"
    );
  }

  return context;
};