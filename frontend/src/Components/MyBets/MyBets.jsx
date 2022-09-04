import React from "react";
import "./MyBets.css";

import Select from "react-select";

const MyBets = () => {
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
                <div className="TeamNames">
                  <p>{item.EventTeam1}</p>
                  <p className="dash">-</p>
                  <p>{item.EventTeam2}</p>
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
