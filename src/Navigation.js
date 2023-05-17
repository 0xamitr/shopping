import React from "react"
import "./Navigation.css"
import {Link} from "react-router-dom"

const Navigation = () => {
    return(
        <div className="nav">
            <ul className="nav-Links">
                <Link to="/">
                    <li>HOME</li>
                </Link>
                <Link to="/shop">
                    <li>SHOP</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navigation