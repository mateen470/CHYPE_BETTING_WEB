import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

import Dashboard from "../Assets/menu 1.png";
import Fundings from "../Assets/money 1.png";
import Bets from "../Assets/casino-chip (2) 1.png";
import Settings from "../Assets/settings 1.png";
import Dashboardblue from "../Assets/menu 1blue.png";
import Fundingsblue from "../Assets/money 1blue.png";
import Betsblue from "../Assets/bet 1.png";
import Settingsblue from "../Assets/settings 1blue.png";
import userIcon from "../Assets/Vector3.png";
import back from "../Assets/Vector6.png";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

const SideBar = () => {
  let activeStyle = {
    textDecoration: "none",
    background: "rgba(44, 44, 44, 0.8)",
    borderRadius: "80px",
  };
  let inActiveStyle = {
    background: "none",
    textDecoration: "none",
  };
  const [Flag, SetFlag] = React.useState(0);
  console.log(Flag);
  return (
    <div className="SideBarContainer">
      <div className="DesktopBar">
        <div className="Back">
          <img src={back} alt="backArrow" className="backArrow" />
        </div>

        <div className="profilePicContainer">
          <img src={userIcon} alt="userIcon" className="userIcon" />
        </div>
        <div className="FullName">Adam Smith</div>
        <div className="userName">Adamsmith123</div>

        <NavLink
          onClick={() => SetFlag(1)}
          to="/profile"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          <div
            onClick={() => SetFlag(1)}
            style={{ background: Flag === 1 && "rgba(44, 44, 44, 0.8)" }}
            className="Dashboard"
          >
            <img
              onClick={() => SetFlag(1)}
              src={Dashboard}
              alt="dashboardIcon"
              className="DashboardLogo"
            />
            <p onClick={() => SetFlag(1)} className="DashboardText">
              Dashboard
            </p>
          </div>
        </NavLink>
        <NavLink
          onClick={() => SetFlag(2)}
          to="/Fundings"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          <div
            style={{ background: Flag === 2 && "rgba(44, 44, 44, 0.8)" }}
            onClick={() => SetFlag(2)}
            className="Fundings"
          >
            <img
              onClick={() => SetFlag(2)}
              src={Fundings}
              alt="fundingsIcon"
              className="FundingsLogo"
            />
            <p onClick={() => SetFlag(2)} className="FundingsText">
              Fundings
            </p>
          </div>
        </NavLink>
        <NavLink
          onClick={() => SetFlag(3)}
          to="/bets"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          <div
            style={{ background: Flag === 3 && "rgba(44, 44, 44, 0.8)" }}
            onClick={() => SetFlag(3)}
            className="Bets"
          >
            <img
              onClick={() => SetFlag(3)}
              src={Bets}
              alt="betsIcon"
              className="BetsLogo"
            />
            <p onClick={() => SetFlag(3)} className="BetsText">
              Bets
            </p>
          </div>
        </NavLink>
        <NavLink
          onClick={() => SetFlag(4)}
          to="/setting"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          <div
            style={{ background: Flag === 4 && "rgba(44, 44, 44, 0.8)" }}
            onClick={() => SetFlag(4)}
            className="Settings"
          >
            <img
              onClick={() => SetFlag(4)}
              src={Settings}
              alt="settingsIcon"
              className="SettingsLogo"
            />
            <p onClick={() => SetFlag(4)} className="SettingsText">
              Settings
            </p>
          </div>
        </NavLink>
      </div>
      <div className="MobileBar">
        <NavLink
          onClick={() => SetFlag(1)}
          to="/Dashboard"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          <div onClick={() => SetFlag(1)} className="Dashboard">
            <img
              onClick={() => SetFlag(1)}
              src={Flag === 1 ? Dashboardblue : Dashboard}
              alt="dashboardIcon"
              className="DashboardLogo"
            />
            <p
              style={{ color: Flag === 1 && "#1AB5FD" }}
              onClick={() => SetFlag(1)}
              className="DashboardText"
            >
              Dashboard
            </p>
          </div>
        </NavLink>
        <NavLink
          onClick={() => SetFlag(2)}
          to="/Fundings"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          <div onClick={() => SetFlag(2)} className="Fundings">
            <img
              onClick={() => SetFlag(2)}
              src={Flag === 2 ? Fundingsblue : Fundings}
              alt="fundingsIcon"
              className="FundingsLogo"
            />
            <p
              style={{ color: Flag === 2 && "#1AB5FD" }}
              onClick={() => SetFlag(2)}
              className="FundingsText"
            >
              Fundings
            </p>
          </div>
        </NavLink>
        <NavLink
          onClick={() => SetFlag(3)}
          to="/Bets"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          <div onClick={() => SetFlag(3)} className="Bets">
            <img
              onClick={() => SetFlag(3)}
              src={Flag === 3 ? Betsblue : Bets}
              alt="betsIcon"
              className="BetsLogo"
            />
            <p
              style={{ color: Flag === 3 && "#1AB5FD" }}
              onClick={() => SetFlag(3)}
              className="BetsText"
            >
              Bets
            </p>
          </div>
        </NavLink>
        <NavLink
          onClick={() => SetFlag(4)}
          to="/Settings"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          <div onClick={() => SetFlag(4)} className="Settings">
            <img
              onClick={() => SetFlag(4)}
              src={Flag === 4 ? Settingsblue : Settings}
              alt="settingsIcon"
              className="SettingsLogo"
            />
            <p
              style={{ color: Flag === 4 && "#1AB5FD" }}
              onClick={() => SetFlag(4)}
              className="SettingsText"
            >
              Settings
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
