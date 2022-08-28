import React from "react";
import { NavLink } from "react-router-dom";
import "../SideBar.css";
import mybetsIcon from "../assets/mybetsicon.png";
import liveEventIcon from "../assets/liveeventicon.png";
import dashboardIcon from "../assets/dashboard.png";
import startsoonIcon from "../assets/startsoonicon.png";
import sportslistIcon from "../assets/sportsicon.png";
const Navigation = () => {
  const Navigationitems = [
    { path: "/", name: "Dashboard", icon: dashboardIcon },
    { path: "/mybets", name: "My Bet", icon: mybetsIcon },
    { path: "/liveevents", name: "Live Events", icon: liveEventIcon },
    { path: "/startsoon", name: "Starting Soon", icon: startsoonIcon },
    { path: "/sportslist", name: "Sports Lists", icon: sportslistIcon },
  ];

  return (
    <div className="sideBar_navigation_section_root_div">
      {Navigationitems.map((item, itemkey) => (
        <div className="navigation_section_item">
          <NavLink  to={item.path} key={itemkey}>
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
