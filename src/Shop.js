import React from "react"
import "./Navigation.css"

const Shop = (props) => {
    const cartfunc = (e) =>{
        props.setCartstatus(true)
        props.setCartnumber(props.cartnumber+1)
        props.Addtocart(e)
    }
    return(
        <div className="left">
            <h1>This is the shop</h1>
            <div className="items">            
                <div className="item" onClick={(e)=> cartfunc(e)}>1</div>
                <div className="item" onClick={(e)=> cartfunc(e)}>2</div>
                <div className="item" onClick={(e)=> cartfunc(e)}>3</div>
                <div className="item" onClick={(e)=> cartfunc(e)}>4</div>
                <div className="item" onClick={(e)=> cartfunc(e)}>5</div>
            </div>
        </div>
    )
}

export default Shop