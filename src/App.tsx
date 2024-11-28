import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import HomePage from "./pages/HomePage";
import Navbar from "./component/Navbar";
import ProductDetailPage from "./pages/ProductDetailPage";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
