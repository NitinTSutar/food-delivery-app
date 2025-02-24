import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Selector / subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-blue-50 shadow-xl">
      <div className="logo-container pl-10">
        <img className="w-20 " src={LOGO_URL} alt="Logo" />
      </div>

      <div className="flex items-center ">
        <ul className="flex p-4 m-4 gap-10">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl"
          ><Link to="/cart">Cart-({cartItems.length})</Link> </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              // the whole function will be rendered again and again.
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
