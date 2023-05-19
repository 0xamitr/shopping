import React from "react"

const Cart = (props) =>{
    return(
        <div className="cart">
            <h1>Cart: {props.cartnumber}</h1>
            {props.cart.map((element, index) => (
                <h2 key={index}>{element}</h2>
            ))}

        </div>
    )
}

export default Cart