import ProductCard from "@/components/ProductCard";
import { product } from "@/data/products";

const Home = () => {
  return (
<div>
{/*Hero section*/}
<section className="relative w-full h-[60vh]">
<img src="/heroimage.jpg"
alt="hero"
className="w-full h-full object-cover"/>

<div className="absolute inset-0 bg-black/40 flex-col items-center justify-center text-white text-center px-4">
<h1 className="text-4xl md:text-5xl font-bold mb-4">
  Premium Electronics
   </h1>
 <p className="mb-6 text-lg">
 Quality Gadgets at the best prices
 </p>
 <button className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200">
  Shop Now
 </button>
</div>
</section>
{/* products */}
    <div className="p-6 bg-">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
