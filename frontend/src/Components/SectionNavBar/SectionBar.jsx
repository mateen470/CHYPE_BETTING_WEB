import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./sectionbar.css";
import { Routes, Route } from "react-router-dom";
import LobbySection from "../Lobby/Lobby";
import MyBets from "../MyBets/MyBets";
import LiveEvents from "../LiveEvents/LiveEvents";
import StartingSoon from "../StartingSoon/StartingSoon";
import ProfileDash from "../../Pages/Dashboard/Profile/MainDashboard";
import FundingsMain from "../../Pages/Dashboard/Profile/FundingsMain";
import Bets from "../../Pages/Dashboard/Profile/Bets";
import Settings from "../../Pages/Dashboard/Settings/Main";
// import { run } from "../Scripts/game";
const SectionBar = () => {
  let activeStyle = {
    background: " linear-gradient(102.63deg, #1A1A1A 8.63%, #000000 101.21%)",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    color: " #1BB2FD",
  };
  let inActiveStyle = {
    background: "none",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  };
  let activeStyleMobileView = {
    fontWeight: "bold",
    fontSize: "22px",
  };
  let inActiveStyleMobileView = {
    opacity: "0.5",
  };
  // FOR MOBILE VIEW SECTIONBAR-STARTS
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  // FOR MOBILE VIEW SECTIONBAR-ENDS
  return (
    <div>
      <div className="navbar_main_div">
        <div className="navbar_elements_main">
          <ul className="navbar_ul">
            <li className="navbar_list_elements">
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
                to={"/"}
                className="lobby_link"
              >
                LOBBY
              </NavLink>
            </li>
            <li className="navbar_list_elements">
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
                to={"/MyBets"}
              >
                MY BETS
              </NavLink>
            </li>
            <li className="navbar_list_elements">
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
                to={"/LiveEvents"}
              >
                LIVE EVENTS
              </NavLink>
            </li>
            <li className="navbar_list_elements favourites_link">
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
                to={""}
              >
                FAVOURITES
              </NavLink>
            </li>
            <li className="navbar_list_elements">
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
                to={"/StartingSoon"}
                className="startSoon_link"
              >
                STARTING SOON
              </NavLink>
            </li>
          </ul>
          {/* <div className="select_sports_btn" onClick={run}> */}
          {/* <div className="select_sports_btn"> */}
          {/* <NavLink to={"/"}><img src={soccerBall} alt="" /></NavLink> */}
          {/* </div> */}
        </div>
      </div>
      {/* MOBILEVIEW SECTIONBAR-STARTS */}
      <motion.div ref={carousel} className="carousel_sectionBar">
        <motion.div
          drag="x"
          dragConstraints={{ right: width, left: -width }}
          className="inner-carousel"
        >
          <motion.div className="item">
            <NavLink
              to="/MyBets"
              style={({ isActive }) =>
                isActive ? activeStyleMobileView : inActiveStyleMobileView
              }
              className="mobile_view_sectionBar_link"
            >
              MY BETS
            </NavLink>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? activeStyleMobileView : inActiveStyleMobileView
              }
              className="mobile_view_sectionBar_link"
            >
              LOBBY
            </NavLink>
            <NavLink
              to="/LiveEvents"
              style={({ isActive }) =>
                isActive ? activeStyleMobileView : inActiveStyleMobileView
              }
              className="mobile_view_sectionBar_link"
            >
              LIVE EVENTS
            </NavLink>
            <NavLink
              to="/StartingSoon"
              style={({ isActive }) =>
                isActive ? activeStyleMobileView : inActiveStyleMobileView
              }
              className="mobile_view_sectionBar_link"
            >
              STARTING SOON
            </NavLink>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* MOBILEVIEW SECTION BAR ENDS */}
      <Routes>
        <Route path="/" element={<LobbySection />}></Route>
        <Route path="/MyBets" element={<MyBets />}></Route>
        <Route path="/LiveEvents" element={<LiveEvents />}></Route>
        <Route path="/StartingSoon" element={<StartingSoon />}></Route>
        {/* dashboard routing=> not working properly */}
        <Route path="/profile" element={<ProfileDash />}></Route>
        <Route path="/Fundings" element={<FundingsMain />}></Route>
        <Route path="/Bets" element={<Bets />}></Route>
        <Route path="/Settings" element={<Settings />}></Route>
      </Routes>
    </div>
  );
};

export default SectionBar;
