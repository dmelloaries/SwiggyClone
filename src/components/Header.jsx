import { LOGO_URL } from "../utils/constants"; //named export
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import {
  Bars3Icon,
  BuildingOfficeIcon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="drop-shadow-xl bg-white">
      <div className="flex justify-between items-center p-4">
        <div className="logo-container">
          <Link to="/">
            <img className="w-48" alt="Logo" src={LOGO_URL} />
          </Link>
        </div>
        <div className="">
          {/* <ul className="flex m-4 space-x-7">
        <li>
          <div className="magnifying glass leading-loose"></div>
        </li>
        
        <li>
          <Link to="/Search">Search</Link>
        </li>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/Contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
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
      </ul> */}
          <ul className="text-zinc-700 ml-auto gap-2 md:gap-4 items-center hidden md:flex">
            <li>
              <Link
                to="/search"
                className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <MagnifyingGlassIcon className="w-4 h-4 text-gray-700" />{" "}
                <p className="hidden md:block">Search</p>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <HomeIcon className="w-4 h-4 text-gray-700" />{" "}
                <p className="hidden md:block">Home</p>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <BuildingOfficeIcon className="w-4 h-4 text-gray-700" />{" "}
                <p className="hidden md:block">About</p>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <PhoneIcon className="w-4 h-4 text-gray-700" />{" "}
                <p className="hidden md:block">Contact</p>
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
              >
                <ShoppingBagIcon className="w-4 h-4 text-gray-700" />{" "}
                <p className="hidden md:block">Cart</p>
                {
                  // <p className='absolute -top-1 -right-1 bg-orange-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'>
                  //   {items.length}
                  // </p>
                }
              </Link>
            </li>
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
    </div>
  );
};

export default Header;
