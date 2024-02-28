import React, { useEffect, useState } from "react";
import Card from "./SharedCard";
import { useSelector } from "react-redux"

const FeatreProducts = () => {
  const [featureProducts, setFeatureProducts] = useState([]);
  const { products } = useSelector(state=>state.shop)

  useEffect(() => {
    fetch("/featureProduct.json")
      .then((res) => res.json())
      .then((data) => setFeatureProducts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl  font-extrabold underline text-center mt-10">
        Feature Products
      </h2>
      <div className="mt-5 grid  gap-10 grid-cols-12">
        {products?.slice(5, 11).map((product, index) => (
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

export default FeatreProducts;
