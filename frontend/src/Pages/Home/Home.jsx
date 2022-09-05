import React, { useState } from "react";
import "./Home.css";
import rightArrow from "./assets/chevronRight.png";
import leftArrow from "./assets/ChevronLeft.png";
import NavBar from "../../Components/NavBar/NavBar";
import SportsBar from "../../Components/SportsBar/SportsBar";
import Section from "../../Components/SectionNavBar/SectionBar";
import Slider from "../../Components/Carousel/Carousel";
import RightMenu from "../../Components/RightPullOutMenu/RightMenu";
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const Toggle = () => setMenuOpen(!menuOpen);
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
      <div className="rightPullOutMenu_root">
        <button
          className="btn_rightPullOutMenu"
          onClick={Toggle}
          style={{
            marginTop: menuOpen ? "20rem" : "15rem",
            transition: menuOpen ? "0.3s ease-in" : "none",
          }}
        >
          <img
            className="leftArrow_rightMenu"
            src={menuOpen ? rightArrow : leftArrow}
            alt="#"
          />
        </button>
        <div
          style={{
            display: menuOpen ? "flex" : "none",
          }}
        >
          <RightMenu />
        </div>
      </div>
    </div>
  );
};

export default Home;
