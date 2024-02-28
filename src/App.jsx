import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";

const App = () => {
  const { auth } = useSelector((state) => state.shop);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
