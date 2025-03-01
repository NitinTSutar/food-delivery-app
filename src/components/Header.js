import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const onlineStatus = useOnlineStatus();

  // Selector / subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-cyan-50 shadow-xl">
      <div className="logo-container pl-10">
        <img className="w-10 " src={LOGO_URL} alt="Logo" />
      </div>

      <div className="flex items-center ">
        <ul className="flex p-4 m-4 gap-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2 font-bold text-xl">
            <Link to="/cart">Cart-({cartItems.length})</Link>{" "}
          </li>
          <li className="px-2">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
