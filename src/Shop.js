import React from "react"
import "./Navigation.css"

const Shop = (props) => {
    const cartfunc = (e) =>{
        props.setCartstatus(true)
        props.Addtocart(e)
    }
    return(
        <div className="left">
            <h1>This is the shop</h1>
            <div className="items">            
            {props.items.map((item, index)=>(
                <div className="item" onClick={()=> cartfunc(index)}>{item.text}</div>)
            )}
            </div>
        </div>
    )
}

export default Shop