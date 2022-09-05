import React from "react";
import "./maindash.css";
import SideBarDashboard from "../Sidebar/SideBar";
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
        <Profile />
        {/* <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/Fundings" element={<Funding />} />
          <Route path="/bets" element={<Bets />} />
          <Route path="/setting" element={<Settings />} />
        </Routes> */}
      </div>
    </>
  );
};

export default MainDasboard;
