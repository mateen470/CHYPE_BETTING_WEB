import React from "react";
import { NavLink } from "react-router-dom";
import "../SideBar.css";

import footballIcon from "../assets/football.png";
import tennisballIcon from "../assets/tennisball.png";
import rugbyIcon from "../assets/rugby.png";

const Leagues = () => {
  // DUMMY
  const Leagues = [
    {
      path: "/",
      leaguename: "Premiere League",
      icon: footballIcon,
    },
    {
      path: "/",
      leaguename: "Bundesliga",
      icon: footballIcon,
    },
    {
      path: "/",
      leaguename: "NFL",
      icon: rugbyIcon,
    },
    {
      path: "/",
      leaguename: "US Open",
      icon: tennisballIcon,
    },
  ];
  return (
    <div className="sideBar_league_section_root_div">
      {Leagues.map((leagueItem, leagueIndex) => (
        <div className="leagueName_section_item">
          <NavLink to={leagueItem.path} key={leagueIndex}>
            <div className="leagueName_item">
              <img src={leagueItem.icon} alt="LEAGUE SPORT ICON" />
              <span>{leagueItem.leaguename}</span>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Leagues;
