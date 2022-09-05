import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import americanFootball from "./assets/rugby.png";
import baseball from "./assets/baseball.png";
import basektball from "./assets/basketball.png";
import boxing from "./assets/boxing.png";
import cricket from "./assets/cricket.png";
import snooker from "./assets/snooker.png";
import tennis from "./assets/tennisball.png";
import soccer from "./assets/football.png";
import ufc from "./assets/pinpong.png";
import "./sports.css";
const SportsBar = () => {
  const sportsBarList = [
    { path: "#", image: soccer, sportsName: "soccer" },
    { path: "#", image: tennis, sportsName: "tennis" },
    { path: "#", image: cricket, sportsName: "formula" },
    { path: "#", image: snooker, sportsName: "hockey" },
    { path: "#", image: boxing, sportsName: "boxing" },
    { path: "#", image: basektball, sportsName: "basketball" },
    { path: "#", image: baseball, sportsName: "baseball" },
    { path: "#", image: americanFootball, sportsName: "rugby" },
    { path: "#", image: ufc, sportsName: "UFC" },
  ];
  const [width, setWidth] = useState(0);
  // const [leftWidth, setLeftWidth] = useState(0);

  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    // let log = width + carousel.current.offsetWidth - 1000;
    // setLeftWidth(log);
  }, []);

  return (
    <div className="sportsCarousel_main">
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: width, left: -width }}
          className="inner-carousel"
        >
          {sportsBarList.map((sportsItem, index) => (
            <div className="item">
              <NavLink
                to={sportsItem.path}
                className="item_NavLink"
                key={index}
              >
                <div className="itemSports">
                  <img src={sportsItem.image} />
                </div>
                <span className="item_sportsName">{sportsItem.sportsName}</span>
              </NavLink>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SportsBar;
