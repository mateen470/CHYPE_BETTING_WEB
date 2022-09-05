import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./rightmenu.css";
import casseteIcon from "./assets/RouletteChips.png";
import expandArrow from "./assets/ExpandArrow.png";
import ethereum from "./assets/Ethereum.png";
import funnel from "./assets/Funnel.png";
import rightarrow from "./assets/Arrow.png";
const RightMenu = () => {
  // DUMMY VALUE
  const betData = [
    { team1: " PITSBURGH PIRATE", team2: "PHILEDELPHIA PHILLIES" },
    { team1: " LIVERPOOL", team2: "REAL MADRID" },
    { team1: " BARCELONA", team2: "MANCHESTER CITY" },
  ];

  let active = {
    background: "#212134",
    borderRadius: "5px",
  };
  let inActive = {
    background: "none",
  };

  return (
    <div className="rightPullOutMenu_main">
      <div className="betSlipAnd_casseteIcon_main">
        <img src={casseteIcon} alt="#" className="betSlipAnd_casseteIcon_img" />
        <span className="betSlipAnd_casseteIcon_dropDown">
          BET SLIP <img src={expandArrow} alt="" />
        </span>
      </div>
      <div className="single_parley_bitcoinDropDown_main">
        <div className="single_parley_main">
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? active : inActive)}
            className="single"
          >
            SINGLE
          </NavLink>
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? active : inActive)}
            className="parley"
          >
            PARLEY
          </NavLink>
        </div>
        <div className="bitcoinDropDown_main">
          <img src={ethereum} className="currency" alt="#" />
          <img src={expandArrow} className="currency_dropDown" alt="#" />
        </div>
      </div>
      <div className="selectOdds_filterIcon_main">
        <span className="selectOdds_span">SELECT ODDS</span>
        <img src={funnel} className="slectodds_filterIcon" alt="#" />
      </div>
      {betData.map((bets) => (
        <div className="betComponent_main">
          <div className="matchDetailsForBet">
            <div className="rightPanel_liveBox_main">
              <span className="Live_Span">LIVE</span>
            </div>
            <div className="TeamsName">
              <div className="rightPanel_teamsName_main">
                <span className="team1_span">
                  {bets.team1} - {bets.team2}
                </span>
              </div>
            </div>
            <div className="betDetails_main">
              <span className="winner_extraInning_span">
                WINNER (INCL. EXTRA INNINGS)
              </span>
              <div className="Winner_team_name_main">
                <span className="winnerTameName"> {bets.team2}</span>
                <span className="winnerTeamPoints">7.0</span>
              </div>

              <div className="currency_blackBox_main">
                <div className="currency_blackBox1">
                  <span className="blackBox1_points">0.00000</span>{" "}
                  <img
                    src={ethereum}
                    className="blackBox_currencyIcon"
                    alt="#"
                  />
                </div>
                <div className="currency_blackBox2">
                  <span className="blackBox1_points">0.00000</span>
                  <img
                    src={ethereum}
                    className="blackBox_currencyIcon"
                    alt="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
      <div className="totalStake_payOut_est_main">
        <div className="totalStake_main">
          TOTAL STAKE: <span className="totalStake_amnt">0.0000000</span>{" "}
          <img src={ethereum} alt="#" className="etheruem_totalStak" />
        </div>
        <div className="payout_Est_main">
          PAYOUT EST: <span className="totalStake_amnt">0.0000000</span>{" "}
          <img src={ethereum} alt="#" className="etheruem_totalStak" />
        </div>
      </div>
      <div className="placeBets_main">
        <span className="placeBets_span">Place Bet</span>
        <img src={rightarrow} className="placeBets_arrow" alt="#" />
      </div>
    </div>
  );
};

export default RightMenu;
