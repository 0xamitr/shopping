import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage.js";
import Shop from "./Shop.js";
import Navigation from "./Navigation.js";
import Cart from "./Cart.js";
import "./index.css";

const Router = () => {
  const [cartstatus, setCartstatus] = useState(false);
  const [cartnumber, setCartnumber] = useState(0)
  const [cart, setCart] = useState([])
  const [itemcartnum, setItemcartnum] = useState([0,0,0,0,0])

  const increaseCart = (e)=>{
    setItemcartnum(itemcartnum.map((item, index) =>{
      return (index === e - 1) ? Number(item) + 1 : item
    }))
  }
  const decreaseCart = (e)=>{
    setItemcartnum(itemcartnum.map((item, index) =>{
      return (index === e - 1) ? Number(item) - 1 : item
    }))
  }
  const Addtocart = (e)=>{
    if(!cart.includes(e.target.innerHTML))
      setCart([...cart, e.target.innerHTML]) 
      increaseCart(e.target.textContent)
    }
  return (
    <BrowserRouter>
      <Navigation cartstatus={cartstatus} setCartstatus={setCartstatus} />
      <div className="main">
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/shop" element={<Shop Addtocart={Addtocart} cartnumber={cartnumber} setCartstatus={setCartstatus} setCartnumber={setCartnumber}/>}/>
        </Routes>
        {cartstatus && <Cart decreaseCart={decreaseCart} increaseCart={increaseCart} itemcartnum={itemcartnum} cart={cart} cartnumber={cartnumber}/>}
      </div>
    </BrowserRouter>
  );
};

export default Router;