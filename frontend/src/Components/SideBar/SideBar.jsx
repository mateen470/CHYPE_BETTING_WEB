import React from "react";
import "./SideBar.css";
import Logo from "./assets/mainlogo.png";
import line from "./assets/line.png";
import NavigationSection from "./SideBarComponents/Navigation";
import LeagueSection from "./SideBarComponents/Leagues";
import SportsSection from "./SideBarComponents/Sports";
const SideBar = () => {
  return (
    <div className="SideBar_root_div">
      <div className="Navigation_section_and_logo">
        <img src={Logo} alt="LOGO" />
        <div className="navigationSection_SideBar_main">
          <NavigationSection />
        </div>
        <div className="sidebar_separater">
          <img src={line} alt="LINE" />
        </div>
      </div>
        <div className="LeagueName_section_SideBar_main">
          <LeagueSection />
        </div>
        <div className="sidebar_separater">
          <img src={line} alt="LINE" />
        </div>
        <div className="SportsName_section_SideBar_main">
          <SportsSection />
        </div>
    </div>
  );
};

export default SideBar;
