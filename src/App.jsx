import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";

function App() {
  return (
    <div className="app-container">
        <BrowserRouter>
          <CartProvider> {/* Envolvemos toda la app con CartProvider */}
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Bienvenidos a la tienda" />
              }
            />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer greeting="Bienvenidos" />}
            />
            <Route
              path="/detail/:idProduct"
              element={<ItemDetailContainer />}
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
