import { LOGO_URL } from "../common/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../common/useOnlineStatus";

const Header = () => {
  const [btnlogin, setBtnLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();

  console.log(onlineStatus)

  return (
    <div className="header flex justify-between bg-pink-100 shadow-2xl items-center sm:bg-yellow-100 lg:bg-blue-200">
      <div className="logo-container">
        <img className="logo w-20" src={LOGO_URL} alt="Company Logo" />
      </div>

      <div className="nav-items">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">
            Online Status :  {onlineStatus?"🟢":"🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login-btn p-4 py-2 bg-green-100 m-4"
            onClick={() => {
              btnlogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
          >
            {btnlogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
