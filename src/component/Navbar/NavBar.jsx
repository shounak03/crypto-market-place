import React from "react";
import './Navbar.css'
import logo from "../../assets/logo.png"
import arrow_icon from "../../assets/arrow_icon.png"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            {/* <img src={logo} alt="" className="logo" /> */}
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>

            </ul>
            <div className="nav-right">
                <select name= "" id="">
                    <option value="usd">USD</option>
                    <option value="inr">INR</option>
                    <option value="eur">EUR</option>
                </select>
                <button>Sign Up <img src={arrow_icon} alt="" /></button>

            </div>
        </div>
    )
}
export default Navbar