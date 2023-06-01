import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage.js";
import Shop from "./Shop.js";
import Navigation from "./Navigation.js";
import Cart from "./Cart.js";
import "./index.css";

const Router = () => {
  const [cartstatus, setCartstatus] = useState(false)
  const [cartnumber, setCartnumber] = useState(0)
  const [bill, setBill] = useState(0)
  const [items] = useState([
    {text: "product1", price: 10, src: "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"},
    {text: "product2", price: 20, src: "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"},
    {text: "product3", price: 30, src: "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"},
    {text: "product4", price: 40, src: "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"},
    {text: "product5", price: 50, src: "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"},
    {text: "product6", price: 60, src: "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"},
    {text: "product7", price: 70, src: "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"},
    {text: "product8", price: 80, src: "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"},
    {text: "product9", price: 90, src: "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"},
    {text: "product10", price: 100, src: "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"}])
  const [cart, setCart] = useState([])

  const disableCart = () =>{
    setCartstatus(false)
  }

  useEffect(() => {
    setBill(calculateBill(cart));
  }, [cart]);

  const increaseCart = (e) => {
    setCartnumber(cartnumber + 1)
    const updatedItems = [...cart]; 
    const productIndex = updatedItems.findIndex(item => item.index === e); 
    console.log(cart);
    if (productIndex !== -1) {
      updatedItems[productIndex] = { ...updatedItems[productIndex], count: cart[productIndex].count + 1 };
      setCart(updatedItems); 
    }
  };

  const calculateBill = (cart) =>{
    let total = 0
    cart.forEach(element => {
      total += element.count * element.price
    });
    return total
  }      
  const decreaseCart = (e)=>{
    setCartnumber(cartnumber - 1)
    let updatedItems = [...cart];
    const productIndex = updatedItems.findIndex(item => item.index === e);
    if (productIndex !== -1) {
      console.log("hello1");
      updatedItems[productIndex] = { ...updatedItems[productIndex], count: cart[productIndex].count - 1 };
      if(updatedItems[productIndex].count === 0){
        updatedItems = deleteElement(updatedItems, productIndex)
      }
      setCart(updatedItems); 
    }
  }

  const deleteElement = (cart, indice) =>{
    return cart.filter((item, index)=>{
      return (index !== indice)
    })
  }
  const Addtocart = (e)=>{
  const productIndex = cart.findIndex((item) => item.index === e);
  if (productIndex === -1) {
      let obj = items[e]
      obj.index = e
      obj.count = 1
      setCart([...cart, obj]) 
    }
    increaseCart(e)
  }
  console.log(cartstatus)
  return (
    <BrowserRouter>
      <Navigation cartstatus={cartstatus} setCartstatus={setCartstatus} />
      <div className= {cartstatus ? "main blur": "main"}>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/shop" element={<Shop items={items} cartstatus={cartstatus} Addtocart={Addtocart} cartnumber={cartnumber} setCartstatus={setCartstatus}/>}/>
        </Routes>
        {cartstatus && <Cart cartstatus={cartstatus} setCartstatus={setCartstatus} disableCart={disableCart} bill={bill} decreaseCart={decreaseCart} increaseCart={increaseCart}  cart={cart} cartnumber={cartnumber}/>}
      </div>
    </BrowserRouter>
  );
};

export default Router;
