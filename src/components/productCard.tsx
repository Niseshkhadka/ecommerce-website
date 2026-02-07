import { useState } from "react";
import { useCart } from "../context/CartContext";
import type { products } from "@/types/product";

type Props = { product: products };

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="p-4 border rounded flex flex-col items-center shadow-md hover:shadow-gray-700 transition-shadow duration-250">
      {/* content */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain rounded-md"
      />
      <h3 className="font-medium mt-2">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={handleAdd}
        className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 cursor-pointer hover:bg-purple-200 hover:text-black"
      >
        Add to Cart
      </button>
      {added && (
        <p className="mt-2 text-green-600 text-sm text-center">
          Item added to cart
        </p>
      )}
    </div>
  );
};

export default ProductCard;
