import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Login from "../SignIn/Login";
import Register from "../Register/Register";
import Btn from "../ConnectWallet/ConnectWallet";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <div className="navbar_root_div">
      <div>{isOpen && <Login handleClose={togglePopup}></Login>}</div>
      <div>{isOpen2 && <Register handleClose={togglePopup2}></Register>}</div>
      <div className="top_bar">
        <div className="btn_topBar_main">
          <div className="btn_topBar">
            <NavLink to={"/"}>
              <span onClick={togglePopup} className="topBar_signIn">
                Sign in
              </span>
            </NavLink>
            <NavLink to={"/"}>
              <span onClick={togglePopup2} className="topBar_register">
                Register
              </span>
            </NavLink>
            <Btn className="connect_wallet_btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
