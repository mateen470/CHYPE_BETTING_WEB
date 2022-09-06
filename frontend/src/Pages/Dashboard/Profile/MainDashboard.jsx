import React from "react";
import "./maindash.css";
import SideBarDashboard from "../Sidebar/SideBar";
import DropDown1 from "../DropDownProfile/BetsCryptoDropDown";
import DropDown2 from "../DropDownProfile/BetsSettledOptionDropDown";
import Profile from "./Profile";
import Funding from "./FundingsMain";
import Bets from "./Bets";
import Settings from "../Settings/Main";

import { Route, Routes } from "react-router-dom";
const MainDasboard = () => {
  return (
    <>
      <div className="profileDashboard_root_div">
        <SideBarDashboard />
        <div>
        <div className="dropdown_rootDiv_profile">
          <div className="dropdown1_rootDiv">
            <DropDown1 />
          </div>
          <div className="dropdown2_rootDiv">
            <DropDown2 />
          </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/Fundings" element={<Funding />} />
          <Route path="/bets" element={<Bets />} />
          <Route path="/setting" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
};

export default MainDasboard;
