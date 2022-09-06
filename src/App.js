import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";
import Shoes from "./components/Shoes";
import Bags from "./components/Bags";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Categories></Categories>
      <Shoes></Shoes>
      <Bags></Bags>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
};

export default App;
