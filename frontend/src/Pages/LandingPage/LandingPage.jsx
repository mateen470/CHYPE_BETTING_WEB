import React from "react";
import "../../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SideBar from "../../Components/SideBar/SideBar";
import Home from "../Home/Home";

const LandingPage = () => {
  return (
    <div className="App">
      <div className="SideBar_APPJS_div">
        <SideBar />
      </div>
      <div className="Home_APPJS_div">
        <Home />
      </div>
    </div>
  );
};

export default LandingPage;
