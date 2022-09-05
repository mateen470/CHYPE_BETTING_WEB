import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css";
import Login from "../SignIn/Login";
import Register from "../Register/Register";
import Btn from "../ConnectWallet/ConnectWallet";
import SearchIcon from "./assets/search.png";
const NavBar = () => {
  const logincurrentStatus = useSelector((state) => state.loginReducer.value);
  const [isOpen, setIsOpen] = useState(false);
  const [searchBarData, setSearchBarData] = useState("");
  const setSearchInput = (e) => {
    const { name, value } = e.target;
    searchBarData((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };
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
        <div className="searchBar_NavBar_root_div">
          <input
            defaultValue={searchBarData}
            type="text"
            onChange={setSearchInput}
            placeholder="Search"
          />
          <img src={SearchIcon} alt="SEARCH BAR" />
        </div>
        <div className="btn_topBar_main">
          <div className="btn_topBar">
            {!logincurrentStatus.login && (
              <>
                <NavLink to={"/"}>
                  <span onClick={togglePopup} className="topBar_signIn">
                    Sign in
                  </span>
                </NavLink>
                <NavLink to={"/"}>
                  <span onClick={togglePopup2} className="topBar_register">
                    Register
                  </span>
                </NavLink>{" "}
              </>
            )}
            <div
              className="connect_wallet_btn"
              style={{ marginLeft: logincurrentStatus.login ? "13rem" : "" }}
            >
              <Btn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
