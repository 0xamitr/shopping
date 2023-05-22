import React from "react"
import "./Navigation.css"

const Cart = (props) =>{
    return(
        <div className="cart">
            <h1>Cart: {props.cartnumber}</h1>
            <button id="close" onClick={props.disableCart}></button>
            {props.cart.map((element) => (
                <div className="cart-item">
                    <h2 key={element.index}>{element.text}</h2>
                    <button onClick={()=> props.decreaseCart(element.index)}></button>
                    <p>{element.count}</p>
                    <button onClick={()=> props.increaseCart(element.index)}></button>
                    <p>Rs.{element.price}</p>
                    <p></p>
                </div>
            ))}
            <h2>Total: Rs.{props.bill}</h2>
        </div>
    )
}

export default Cart