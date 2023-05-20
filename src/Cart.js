import React from "react"
import "./Navigation.css"

const Cart = (props) =>{
    return(
        <div className="cart">
            <h1>Cart: {props.cartnumber}</h1>
            {props.cart.map((element, index) => (
                <div className="cart-item">
                    <h2 key={index}>{element}</h2>
                    <button onClick={()=> props.decreaseCart(element)}></button>
                    <p>{props.itemcartnum[element-1]}</p>
                    <button onClick={()=> props.increaseCart(element)}></button>
                </div>
            ))}

        </div>
    )
}

export default Cart