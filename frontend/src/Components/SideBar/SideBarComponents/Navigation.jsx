import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../SideBar.css";
import mybetsIcon from "../assets/mybetsicon.png";
import liveEventIcon from "../assets/liveeventicon.png";
import dashboardIcon from "../assets/dashboard.png";
import startsoonIcon from "../assets/startsoonicon.png";
import home from "../assets/home.png";
const Navigation = () => {
  const logincurrentStatus = useSelector((state) => state.loginReducer.value);
  const Navigationitems = [
    logincurrentStatus.login
      ? { path: "/profile", name: "Dashboard", icon: dashboardIcon }
      : { path: "/", name: "Home", icon: home },
    { path: "/MyBets", name: "My Bet", icon: mybetsIcon },
    { path: "/LiveEvents", name: "Live Events", icon: liveEventIcon },
    { path: "/StartingSoon", name: "Starting Soon", icon: startsoonIcon },
  ];

  return (
    <div className="sideBar_navigation_section_root_div">
      {Navigationitems.map((item, itemkey) => (
        <div className="navigation_section_item">
          <NavLink to={item.path} key={itemkey}>
            <div className="navigation_item">
              <img src={item.icon} />
              <span>{item.name}</span>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
