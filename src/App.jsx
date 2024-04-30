/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import Menu from "./components/Menu/Menu";
import MenuCard from "./components/MenuCard/MenuCard";
import Contact from "./components/Contact/Contact";

const App = () => {

  return (
    <>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item" element={<Menu />} />
          <Route path="/item/:id" element= {<MenuCard />} />  
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/login" element={<LoginSignup/>}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
