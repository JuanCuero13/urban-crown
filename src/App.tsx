import { Carrito } from "./pages/Carrito";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Productos } from "./pages/Productos";
import { Nosotros } from "./pages/Nosotros";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { ProductoDetalle } from "./pages/ProductoDetalle";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/productos"
            element={<Productos />}
          />

          <Route
            path="/producto/:id"
            element={<ProductoDetalle />}
          />

          <Route
            path="/carrito"
            element={<Carrito />}
          />
          <Route
            path="/nosotros"
            element={<Nosotros />}
          />

        </Routes>

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;