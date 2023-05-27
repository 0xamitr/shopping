import React from "react"
import "./Navigation.css"

const Shop = (props) => {
    const cartfunc = (e) =>{
        if(props.cartstatus === false){
            props.setCartstatus(true)
            props.Addtocart(e)
        }
    }
    return(
        <div className="left">
            <div className="items">            
            {props.items.map((item, index)=>(
                <div className="item" onClick={()=> cartfunc(index)}>
                    <img className="shop-image" src={item.src} alt="product_image"/>
                    <div>
                        <h2>{item.text}</h2>
                        <p>Rs.{item.price}</p>
                    </div>
                </div>)
            )}
            </div>
        </div>
    )
}

export default Shop