import React, { useState } from "react";
import "./MyBets.css";
import Select from "react-select";
const customStyles = {
  menu: () => ({
    background: "linear-gradient(96.51deg, #18BBFD -4.59%, #3769FE 100%)",
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
    width: "7rem",
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

const MyBets = () => {
  const [myBetsDropDownValue, setMyBetsDropDownValue] = useState("");

  const MyBetsOption = [
    {
      value: "Active",
      label: (
        <div
          style={{
            fontFamily: "SF pro",
            color: "white",
            FontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Active
        </div>
      ),
    },
    {
      value: "Settled",
      label: (
        <div
          style={{
            fontFamily: "SF pro",
            color: "white",
            FontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Settled
        </div>
      ),
    },
  ];
  const Data = [
    {
      EventTeam1: "Smouaha SC",
      EventTeam2: "Al Alhly",
      EventScore1: 2,
      EventScore2: 0,
      Sports: "Soccer",
      Time: "23:00 PM",
      Odds: 1.08,
    },
    {
      EventTeam1: "jokovic",
      EventTeam2: "Raphel",
      EventScore1: 2,
      EventScore2: 0,
      Sports: "Tennis",
      Time: "23:00 PM",
      Odds: 1.08,
    },
    {
      EventTeam1: "jokovic",
      EventTeam2: "Raphel",
      EventScore1: 2,
      EventScore2: 0,
      Sports: "Tennis",
      Time: "23:00 PM",
      Odds: 1.08,
    },
  ];

  return (
    <div className="MyBetsContainer">
      <div className="dropDown_MyBets">
        <Select
          options={MyBetsOption}
          placeholder={<div className="plceholder_react_select">STATUS</div>}
          styles={customStyles}
          onChange={(e) => setMyBetsDropDownValue(e.label)}
        />
      </div>
      <table style={{ width: "100%" }}>
        <thead className="MyBetsHeadings">
          <tr>
            <td>Event</td>
            <td>Outcome</td>
            <td>Sports</td>
            <td>Time</td>
            <td>Odds</td>
          </tr>
        </thead>
        <tbody className="MyBetsData">
          {Data.map((item) => (
            <tr className="Data">
              <td className="EventData">
                <div className="EventHeading">
                  <p>Event</p>
                </div>
                <div className="MyBets_Team_Names">
                  <p style={{ fontSize: "1.3vw", lineHeight: "1vw" }}>
                    {item.EventTeam1}
                  </p>
                  <p className="dash">-</p>
                  <p style={{ fontSize: "1.3vw", lineHeight: "1vw" }}>
                    {item.EventTeam2}
                  </p>
                </div>
              </td>
              <td className="OutcomeData">
                <div className="OutComeHeading">
                  <p className="OutComeHeading">Outcome</p>
                </div>
                <div className="TeamsScores">
                  <p>{item.EventScore1}</p>
                  <p className="dash">-</p>
                  <p>{item.EventScore2}</p>
                </div>
              </td>
              <td className="SportsData">
                <p className="SportsHeading">Sports</p>
                <p className="SportsName">{item.Sports}</p>
              </td>
              <td className="TimeData">
                <p className="TimeHeading">Time</p>
                <p className="TimeText">{item.Time}</p>
              </td>
              <td className="OddsMain">
                <p className="OddsHeading">Odds</p>
                <div className="OddsData">
                  <p className="Odds">{item.Odds}</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBets;
