import { useEffect, useState } from "react";

import ProductCard from "../component/ProductCard";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<string>(""); 
  const [filterText, setFilterText] = useState<string>(""); 

  useEffect(() => {
    axios.get<Product[]>("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) =>
    product.title.toLowerCase().includes(filterText.toLowerCase())
  );

  if (loading) return <p className="text-center mt-10 text-xl">Loading products...</p>;

  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="flex justify-end items-center flex-col sm:flex-row text-end">
        <div className="mb-6 mr-4">
        <input
          type="text"
          placeholder="Filter by product name"
          className="p-2 border border-blue-800 rounded"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <select
          className="p-2 border border-blue-800 rounded"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
