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
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
