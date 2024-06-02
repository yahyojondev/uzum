import React from "react";
import NavbarTop from "../../components/navbartop/NavbarTop";
import Hero from "../../components/hero/Hero";
import Product from "../../components/product/Product";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Product />
    </div>
  );
};

export default Home;
