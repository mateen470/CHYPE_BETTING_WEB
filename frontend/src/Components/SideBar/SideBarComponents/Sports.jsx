import React from "react";
import { NavLink } from "react-router-dom";
import "../SideBar.css";
import americanFootball from "../assets/rugby.png";
import baseball from "../assets/baseball.png";
import basektball from "../assets/basketball.png";
import boxing from "../assets/boxing.png";
import cricket from "../assets/cricket.png";
import snooker from "../assets/snooker.png";
import tennis from "../assets/tennisball.png";
import soccer from "../assets/football.png";
import tableTennis from "../assets/pinpong.png";
const Sports = () => {
  const sportsList = [
    {
      path: "/",
      sportsName: "American Football",
      sportsIcon: americanFootball,
    },
    { path: "/", sportsName: "Baseball", sportsIcon: baseball },
    { path: "/", sportsName: "Basketball", sportsIcon: basektball },
    { path: "/", sportsName: "Boxing", sportsIcon: boxing },
    { path: "/", sportsName: "Cricket", sportsIcon: cricket },
    { path: "/", sportsName: "Snooker", sportsIcon: snooker },
    { path: "/", sportsName: "Soccer", sportsIcon: soccer },
    { path: "/", sportsName: "Tennis", sportsIcon: tennis },
    { path: "/", sportsName: "Table Tennis", sportsIcon: tableTennis },
  ];
  return (
    <div className="sideBar_sports_section_root_div">
      {sportsList.map((sport, sportIndex) => (
        <div className="sportsName_section_item">
          <NavLink to={sport.path} key={sportIndex}>
            <div className="sportsName_item">
              <img src={sport.sportsIcon} />
              <span>{sport.sportsName}</span>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Sports;
