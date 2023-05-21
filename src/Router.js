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
    {text: "product1", price: 10},
    {text: "product2", price: 20},
    {text: "product3", price: 30},
    {text: "product4", price: 40},
    {text: "product5", price: 50}])
  const [cart, setCart] = useState([])

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
        console.log(updatedItems);
        console.log(productIndex)
        updatedItems = deleteElement(updatedItems, productIndex)
      }
      setCart(updatedItems); 
    }
  }

  const deleteElement = (cart, indice) =>{
    return cart.filter((item, index)=>{
      console.log(index !== item.index)
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
  console.log(cart)
  return (
    <BrowserRouter>
      <Navigation cartstatus={cartstatus} setCartstatus={setCartstatus} />
      <div className="main">
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/shop" element={<Shop items={items} Addtocart={Addtocart} cartnumber={cartnumber} setCartstatus={setCartstatus}/>}/>
        </Routes>
        {cartstatus && <Cart bill={bill} decreaseCart={decreaseCart} increaseCart={increaseCart}  cart={cart} cartnumber={cartnumber}/>}
      </div>
    </BrowserRouter>
  );
};

export default Router;
