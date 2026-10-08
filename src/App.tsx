import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Productos } from "./pages/Productos";
import { ProductoDetalle } from "./pages/ProductoDetalle";
import { Carrito } from "./pages/Carrito";
import { Nosotros } from "./pages/Nosotros";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
          <Navbar />
          
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/producto/:id" element={<ProductoDetalle />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;