import { useEffect, useState } from "react";

import axios from "axios";
import { useCart } from "../context/CartContext";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios.get<Product>(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mt-9 mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain mb-4"
      />
      <p className="text-gray-700 text-center mb-4">{(product.description)}</p>
      <p className="text-xl text-center font-semibold text-blue-600 mb-6">
        ${product.price.toFixed(2)}
      </p>
      <div className="text-center"> 
        <button
        onClick={() => addToCart({ ...product, quantity: 1 })}
        className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transition"
      >
        Add to Cart
      </button></div>
     
    </div>
  );
};

export default ProductDetailPage;
