import { useState } from "react";
import image from "./logo.jpg";

const Header = () => {

    const [btnName, setBtnName] = useState("login");

    return (
        <div className="header">
            <img id="logo" src={image} />
        <div className="navItems">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <button id="login" onClick={
                    () => btnName === "login" ? setBtnName("logout") : setBtnName("login")
                }>{btnName}</button>
            </ul>
        </div>
        </div>
    );
}


export default Header;