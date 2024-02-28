import React from "react";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import FeatreProducts from "../components/FeatureProduct";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatreProducts />
      <Slider />
    </div>
  );
};

export default Home;