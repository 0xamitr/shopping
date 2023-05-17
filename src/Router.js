import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage.js"
import Shop from "./Shop.js"
import Navigation from "./Navigation.js"

const Router = () => {
    return(
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/shop" element={<Shop/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router