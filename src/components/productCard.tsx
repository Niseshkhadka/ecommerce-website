import type { products } from "@/types/product";

interface Props {
  product: products;
}
const ProductCard = ({ product }: Props) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-3 text-lg font-semibold"> {product.name}</h3>
      <p className="text-gray-600 mt-1">रु {product.price}</p>
      <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Add to card
      </button>
    </div>
  );
};
export default ProductCard;
