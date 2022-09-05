import React, { useState } from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
import Counter from "./CounterRightMenu";
import "./rightmenu.css";
import greenARROW from "./assets/greenArrow.png";
import cross from "./assets/cross.png";

const RightMenu = () => {
  const cryptoCoin = useSelector((state) => state.withdrawReducer.value);
  const [toggleSingleScreen, setToggleSingleScreen] = useState("block");
  const [toggleMultipleScreen, setToggleMultipleScreen] = useState("none");
  const [activeClassBorderSingle, setActiveClassBorderSingle] =
    useState("3px solid #356dfe");
  const [activeClassBorderMultiple, setActiveClassBorderMultiple] =
    useState("");
  const toggleSingleScreenFunction = () => {
    setToggleSingleScreen("block");
    setToggleMultipleScreen("none");
    setActiveClassBorderSingle("3px solid #356dfe");
    setActiveClassBorderMultiple("");
  };
  const toggleMultipleScreenFunction = () => {
    setToggleSingleScreen("none");
    setToggleMultipleScreen("block");
    setActiveClassBorderMultiple("3px solid #356dfe");
    setActiveClassBorderSingle("");
  };
  const betSlipDropDownOption = [
    {
      value: "BSC",
      label: <div style={{ fontFamily: "SF pro", color: "white" }}>dummy</div>,
    },
  ];
  const noOddsAcceptedOption = [
    {
      value: "BSC",
      label: (
        <div
          style={{
            fontFamily: "SF pro",
            color: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          dummy
        </div>
      ),
    },
  ];
  const customStyles = {
    menu: () => ({
      background: "black",
      borderRadius: "0.3rem",
      marginTop: "0.5rem",
      position: "absolute",
    }),
    option: () => ({
      background: "none",
      cursor: "pointer",
      borderRadius: "0.4rem",
      padding: "0.5rem",
      zIndex: "10",
    }),
    control: () => ({
      background: "linear-gradient(90.62deg, #212121 1.53%, #141315 120.08%)",
      borderRadius: "30px",
      display: "flex",
      width: "6.5rem",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: () => ({
      display: "flex",
      color: "#787878",
      paddingRight: "0.5rem",
    }),
  };
  const noOddsAcceptedDropDownStyle = {
    menu: () => ({
      background: "black",
      borderRadius: "0.3rem",
      position: "absolute",
      width: "22rem",
      marginLeft: "1.5rem",
      marginBottom: "0.5rem",
    }),
    option: () => ({
      background: "none",
      cursor: "pointer",
      borderRadius: "0.4rem",
      padding: "0.5rem",
      zIndex: "10",
    }),
    control: () => ({
      background: "linear-gradient(90.62deg, #212121 1.53%, #141315 120.08%)",
      borderRadius: "30px",
      display: "flex",
      marginLeft: "1.5rem",
      marginTop: "1rem",
      marginBottom: "0.5rem",
      width: "22rem",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: () => ({
      display: "flex",
      color: "#787878",
      paddingRight: "0.5rem",
    }),
  };
  const betData = [
    {
      team1: " PITSBURGH PIRATE",
      team2: "PHILEDELPHIA PHILLIES",
      winner: "PHILEDELPHIA PHILLIES",
      points: "3.084",
    },
    {
      team1: " PITSBURGH PIRATE",
      team2: "PHILEDELPHIA PHILLIES",
      winner: "PHILEDELPHIA PHILLIES",
      points: "3.084",
    },
    {
      team1: " PITSBURGH PIRATE",
      team2: "PHILEDELPHIA PHILLIES",
      winner: "PHILEDELPHIA PHILLIES",
      points: "3.084",
    },
  ];
  const multipleScreenData = [];

  return (
    <div className="rightPullOutMenu_main">
      <div className="upperPortion_rightMenu">
        <div className="betSlip_dropDown">
          <Select
            placeholder={
              <div style={{ fontFamily: "SF pro", color: "white" }}>
                Bet Slip
              </div>
            }
            styles={customStyles}
            options={betSlipDropDownOption}
          />
        </div>
        <div className="single_multiple_tags_upperPortion">
          <button
            onClick={toggleSingleScreenFunction}
            style={{ borderBottom: activeClassBorderSingle }}
          >
            SINGLE
          </button>
          <button
            onClick={toggleMultipleScreenFunction}
            style={{ borderBottom: activeClassBorderMultiple }}
          >
            MULTIPLE
          </button>
        </div>
      </div>
      <div className="noOdds_accepted_dropDown">
        <Select
          placeholder={
            <div style={{ fontFamily: "SF pro", color: "white" }}>
              No Odds Change Accepted
            </div>
          }
          styles={noOddsAcceptedDropDownStyle}
          options={noOddsAcceptedOption}
        />
      </div>
      <div className="clearAll">
        <button>Clear All</button>
      </div>
      {betData.map((bets) => (
        /* SINGLECREEN */
        <div style={{ display: toggleSingleScreen }}>
          <div className="betComponent_main">
            <div className="matchDetailsForBet">
              <div className="TeamsName_rightMenu">
                <div className="rightPanel_teamsName_main">
                  <span className="team1_span">
                    {bets.team1} - {bets.team2}
                    <span className="Live_Span">LIVE &#11044;</span>
                  </span>
                </div>
              </div>
              <button className="closeButtonOfSingleBet">
                <img src={cross} alt="CLOSE ICON" />
              </button>
              <hr />
              <div className="betDetails_main">
                <span className="winner_extraInning_span">
                  1 x 2
                  <span className="winnerTeamPoints">
                    <img src={greenARROW} />
                    {bets.points}
                  </span>
                </span>
                <div className="Winner_team_name_main">
                  <span className="winnerTameName"> {bets.winner}</span>
                </div>
                <div className="counter_below_winnerTeam">
                  <Counter props={cryptoCoin.coinImage} />
                </div>
                <div className="estimatePayout_below_winnerTeam">
                  <span>Est. Payout</span>
                  <span
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    0.0000000
                    {cryptoCoin.coinImage}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {multipleScreenData.map((bets) => (
        /* MULTIPLE SCREEN */
        <div style={{ display: toggleMultipleScreen }}>
          <div className="betComponent_main">
            <div className="matchDetailsForBet">
              <div className="TeamsName_rightMenu">
                <div className="rightPanel_teamsName_main">
                  <span className="team1_span">
                    {bets.team1} - {bets.team2}
                    <span className="Live_Span">LIVE &#11044;</span>
                  </span>
                </div>
              </div>
              <hr />
              <div className="betDetails_main">
                <span className="winner_extraInning_span">
                  1 x 2
                  <span className="winnerTeamPoints">
                    <img src={greenARROW} />
                    {bets.points}
                  </span>
                </span>
                <div className="Winner_team_name_main">
                  <span className="winnerTameName"> {bets.winner}</span>
                </div>
                <div className="counter_below_winnerTeam">
                  <Counter props={cryptoCoin.coinImage} />
                </div>
                <div className="estimatePayout_below_winnerTeam">
                  <span>Est. Payout</span>
                  <span style={{ color: "white" }}>
                    0.0000000
                    {cryptoCoin.coinImage}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="lowerPortion_rightMenu">
        <div className="totalStake_payOut_est_main">
          <div className="totalStake_main">
            TOTAL STAKE :{" "}
            <span className="totalStake_amnt">
              0.0000000 {cryptoCoin.coinImage}
            </span>{" "}
          </div>
          <div className="payout_Est_main">
            EST. PAYOUT :
            <span className="totalStake_amnt">
              0.0000000 {cryptoCoin.coinImage}
            </span>
          </div>
        </div>
        <div className="placeBets_main">
          <span className="placeBets_span">Place Bet</span>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
