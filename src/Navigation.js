import React from "react"
import "./Navigation.css"
import {Link} from "react-router-dom"

const Navigation = (props) => {
    const changeCartstatus = () =>{
        if(props.cartstatus === true)
            props.setCartstatus(false)
        else if (props.cartstatus === false)
            props.setCartstatus(true)
    }
    return(
        <div className="nav">
            <ul className="nav-links">
                <Link to="/">
                    <li>HOME</li>
                </Link>
                <Link to="/shop">
                    <li>SHOP</li>
                </Link>
                <Link onClick= {changeCartstatus}>
                    <li>CART</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navigation