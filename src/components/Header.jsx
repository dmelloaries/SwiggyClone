import { LOGO_URL } from "../utils/constants"; //named export
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="Logo" src={LOGO_URL} />
      </div>
      <div className="Navbar">
        <ul>
          <li>Home</li>
          <li>about us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
            >
              {btnNameReact}
            </button>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
