import React from "react";
import "./Home.css";

import NavBar from "../../Components/NavBar/NavBar";
import SportsBar from "../../Components/SportsBar/SportsBar";
import Section from "../../Components/SectionNavBar/SectionBar";
import Slider from "../../Components/Carousel/Carousel";
const Home = () => {
  return (
    <div>
      <div className="NavBar_HomePage_root">
        <NavBar />
      </div>
      <div className="SportsBar_HomePage_root">
        <SportsBar />
      </div>
      <div className="carousel_HomePage_root">
        <Slider />
      </div>
      <div className="SectionBar_HomePage_root">
        <Section />
      </div>
    </div>
  );
};

export default Home;
