import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import  { useSelector, useDispatch } from "react-redux"
import { setProducts } from "../store/shop/action";

const MainLayout = () => {
  const { products } = useSelector(state=>state.shop)
  const dispatch = useDispatch()


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(data=>{
        dispatch(setProducts({
          products: data
        }))
      })
      .catch(err=>console.log(err))
  }, [])


  console.log(products);
  return (
    <div className="">
      {products? <>
        <Navbar />
        <Footer />
      </>: <div className="flex h-screen justify-center items-center">
          <h1>loading...</h1>
        </div>}
    </div>
  );
};

export default MainLayout;
