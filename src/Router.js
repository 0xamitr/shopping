import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage.js";
import Shop from "./Shop.js";
import Navigation from "./Navigation.js";
import Cart from "./Cart.js";
import "./index.css";

const Router = () => {
  const [cartstatus, setCartstatus] = useState(false)
  const [cartnumber, setCartnumber] = useState(0)
  const [itemcartnum, setItemcartnum] = useState([[0,10],[0,20],[0,30],[0,40],[0,50]])
  const [bill, setBill] = useState(0)
  const [items, setItems] = useState([
    {text: "product1", index: 0},
    {text: "product2", index: 1},
    {text: "product3", index: 2},
    {text: "product4", index: 3},
    {text: "product5", index: 4}])
  const [cart, setCart] = useState([])


  const increaseCart = (e)=>{
    setCartnumber(cartnumber + 1)
    setBill(bill + itemcartnum[e][1])
    setItemcartnum(itemcartnum.map((item, index) =>{
      return (index === e) ? [Number(item[0]) + 1 ,item[1]]: [item[0],item[1]]
    }))
  }
  const decreaseCart = (e)=>{
    setBill(bill - itemcartnum[e][1])
    setCartnumber(cartnumber - 1)
    setItemcartnum(itemcartnum.map((item, index) =>{
      if(index === e && item[0] === 1){
        setCart(cart.filter((item) =>{
          return(item.index !== e)
        }))
      }
      if(item !== 0){
        return (index === e) ? [Number(item[0]) - 1,item[1]] : [item[0],item[1]]
      }
      else{
        return (index === e) ? [item[0],item[1]] : [item[0],item[1]]
      }
      
    }))
  }
  const Addtocart = (e)=>{
    setBill(bill + itemcartnum[e][1])
    if(!itemcartnum[e][0]){
      setCart([...cart, items[e]]) 
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
          <Route path="/shop" element={<Shop items={items} Addtocart={Addtocart} cartnumber={cartnumber} setCartstatus={setCartstatus} setCartnumber={setCartnumber}/>}/>
        </Routes>
        {cartstatus && <Cart bill={bill} decreaseCart={decreaseCart} increaseCart={increaseCart} itemcartnum={itemcartnum} cart={cart} cartnumber={cartnumber}/>}
      </div>
    </BrowserRouter>
  );
};

export default Router;