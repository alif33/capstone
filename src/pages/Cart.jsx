import React from "react";
import Item from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector(state=>state.shop)

  return (
    <div className="h-screen">
      <h2 className="max-w-5xl mx-auto text-4xl font-bold my-5 bg-slate-900 text-white py-3 px-5 rounded-md">
        CART
      </h2>
      <div className=" max-w-6xl mx-auto">
        <div className="border-b-2 border-slate-400 mb-10">
          <h3 className="text-2xl font-semibold">Total : 2010</h3>
        </div>
        <div className=" h-full  overflow-y-auto">
          {cart?.map((item, index)=> <Item 
            key={index}
            name={item.name}
            image={item.image}
            price={item.price}
          />)}
        </div>
      </div>
    </div>
  );
};

export default Cart;
