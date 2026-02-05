import ProductCard from "@/components/productCard";
import { product } from "@/data/products";
import React from "react";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
