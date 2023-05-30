
import React, { useEffect, useState, useRef } from "react";
import "./Navigation.css";

const Cart = (props) => {
  let menuRef = useRef(null);
  const [firstcart, setFirstcart] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && firstcart === true) {
        props.setCartstatus(false);
      } else {
        setFirstcart(true);
      }
    };
    document.addEventListener("click", handler);

    setCartVisible(true);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  return (
    <div className={`cart${cartVisible ? " trans" : ""}`} ref={menuRef}>
      <h1>Cart: {props.cartnumber}</h1>
      <button id="close" onClick={props.disableCart}></button>
      {props.cart.map((element) => (
        <div className="cart-item" key={element.index}>
          <img className="cart-image" src={element.src} alt="earth" />
          <h2>{element.text}</h2>
          <button onClick={() => props.decreaseCart(element.index)}></button>
          <p>{element.count}</p>
          <button onClick={() => props.increaseCart(element.index)}></button>
          <p>Rs.{element.price}</p>
          <p></p>
        </div>
      ))}
      <h2>Total: Rs.{props.bill}</h2>
    </div> 
  );
};

export default Cart;
