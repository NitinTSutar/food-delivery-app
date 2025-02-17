import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      
      
      <div className="nav-items">
        
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
          <a href="/about">About</a>

          </li>
          <li>
          <a href="/contact">Contact</a>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              // the whole function will be rendered again and again.
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;