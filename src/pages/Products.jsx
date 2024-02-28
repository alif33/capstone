import React, { useEffect, useState } from "react";
import Card from "../components/SharedCard";
import { useSelector } from "react-redux"

const Products = () => {
  const { products } = useSelector(state=>state.shop)

  return (
    <div>
      <h2 className="max-w-5xl mx-auto text-4xl font-bold my-5 bg-slate-900 text-white py-3 px-5 rounded-md">
        All Products
      </h2>
      <div className="my-5 grid max-w-6xl mx-auto  gap-10 grid-cols-12">
        {products?.map((product, index) => (
          <Card
            key={index}
            img={product?.image}
            name={product?.title}
            description={product?.description}
            price={product?.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
