import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero h-96"
      style={{
        backgroundImage:
          "url(https://t4.ftcdn.net/jpg/02/30/72/41/360_F_230724124_ZWlHSZBIvqvdJQj9at15WaKRqAtCUKTu.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-6xl">
          <h1 className="mb-5 text-3xl font-bold">
            Welcome to eShop Emporium - Your Digital Retail Haven!
          </h1>
          <p className="mb-5">
            Description: Step into the digital realm of shopping bliss at eShop
            Emporium! Explore our diverse array of products ranging from fashion
            essentials to cutting-edge gadgets, all at your fingertips. With our
            commitment to quality and convenience, we strive to make your online
            shopping experience seamless and satisfying. Dive in now and
            discover the joys of e-commerce done right, only at eShop Emporium!
          </p>
          <Link to={"/products"} className="btn btn-primary">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
