import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import {logo} from "../utils/image_link";
import useOnlineStatus from "../utils/useOnlineStatus";
import User from "../utils/UserContext";
import {useSelector } from "react-redux";

let Header=()=>
{
    let cartItems=useSelector((a)=>a.cart.items)
    // console.log(cartItems);
    const data=useContext(User);
    // console.log(data.logged);
    const [log_btn,setlog_btn]=useState("Login")
        return (<div className="flex justify-between bg-orange-300 shadow-sm px-4 h-[70] sticky top-0">
            <div className="flex items-center">
                <Link to="/">
                <img className="w-16 rounded-full" src={logo}/>
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex space-x-10">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                <button className="log_btn" onClick={()=>
                log_btn==="Login"?setlog_btn("Logout"):setlog_btn("Login")}>
                {log_btn}</button>
                    <li><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <li>{data.logged}</li>
                </ul>
            </div>
        </div>);
}


export default Header;