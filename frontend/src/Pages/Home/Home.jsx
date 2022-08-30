import React from "react";
import "./Home.css";
import NavBar from "../../Components/NavBar/NavBar";
import SportsBar from "../../Components/SportsBar/SportsBar";
const Home = () => {
  return (
    <div>
      <div className="NavBar_HomePage_root">
        <NavBar />
      </div>
      <div className="SportsBar_HomePage_root">
        <SportsBar />
      </div>
    </div>
  );
};

export default Home;
