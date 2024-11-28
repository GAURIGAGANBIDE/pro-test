import "react-tooltip/dist/react-tooltip.css";

import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image }) => {
  const navigate = useNavigate();
  
  const handleImageClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
       <img
        className="w-full h-48 object-cover mb-4 rounded-md cursor-pointer hover:opacity-90 transition duration-200"
        src={image}
        alt={title}
        onClick={handleImageClick}
      />
      <h3
        className="text-lg font-semibold mb-2 truncate cursor-pointer"
        data-tooltip-id={`title-tooltip-${id}`}
        data-tooltip-content={title}
      >
        {title}
      </h3>
      <Tooltip id={`title-tooltip-${id}`} />
      <p className="text-blue-600 font-bold mb-4">${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
