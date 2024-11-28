import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-800 shadow-md text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold tracking-wide transition duration-300">Myntra</h1>
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-lg font-medium hover:text-blue-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="relative text-lg font-medium hover:text-blue-300 transition duration-300"
          >
            Cart
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
