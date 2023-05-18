import React from "react"
import "./Navigation.css"

const Shop = (props) => {
    const cartfunc = () =>{
        props.setCartstatus(true)
        props.setCartnumber(props.cartnumber+1)
    }
    return(
        <div className="left">
            <h1>This is the shop</h1>
                <div className="items">            
                <div className="item" onClick={()=> cartfunc()}>1</div>
                <div className="item" onClick={()=> cartfunc()}>2</div>
                <div className="item" onClick={()=> cartfunc()}>3</div>
                <div className="item" onClick={()=> cartfunc()}>4</div>
                <div className="item" onClick={()=> cartfunc()}>5</div>
            </div>
        </div>
    )
}

export default Shop