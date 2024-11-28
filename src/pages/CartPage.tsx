import { useCart } from "../context/CartContext";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between text-center" 
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 truncate">{item.title}</h3>
                  <p className="text-blue-600 font-bold text-xl mt-2">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Quantity: {item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800">Total: ${total.toFixed(2)}</h2>
              <button className="mt-4 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300">
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
