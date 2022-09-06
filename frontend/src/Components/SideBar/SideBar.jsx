import React from "react";
import "./SideBar.css";
import Logo from "./assets/mainlogo.png";
import line from "./assets/line.png";
import menu from "./assets/menu.png";
import search from "./assets/search.png";
import slip from "./assets/slip.png";
import profile from "./assets/profile.png";
import home from "./assets/home.png";
import NavigationSection from "./SideBarComponents/Navigation";
import LeagueSection from "./SideBarComponents/Leagues";
import SportsSection from "./SideBarComponents/Sports";
const SideBar = () => {
  return (
    <div>
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
      <div className="BottomBar">
        <div className="Home">
          <div>
            <img src={home} alt="homeIcon" className="HomeIcon" />
          </div>
          <div className="HomeText">Home</div>
        </div>
        <div className="Search">
          <div>
            <img src={search} alt="searchIcon" className="SearchIcon" />
          </div>
          <div className="SearchText">Search</div>
        </div>
        <div className="BetSlip">
          <div>
            {" "}
            <img src={slip} alt="betSlipIcon" className="BetSlipIcon" />
          </div>
          <div className="BetSlipText">Bet Slip</div>
        </div>
        <div className="Profile">
          <div>
            <img src={profile} alt="profileIcon" className="ProfileIcon" />
          </div>
          <div className="ProfileText">Profile</div>
        </div>
        <div className="MenuBottomBar">
          <div>
            <img src={menu} alt="menuIcon" className="MenuIcon" />
          </div>
          <div className="MenuText">Menu</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
