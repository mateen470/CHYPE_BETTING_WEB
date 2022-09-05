import React from "react";
import ETH from "../Assets/ethereum 3.png";
import BetsCryptoDropDown from "./BetsCryptoDropDown";
import SettledOptionDropDown from "./BetsSettledOptionDropDown";
import "./Bets.css";
const Bets = () => {
  const Currency = ETH;
  const Data = [
    {
      Team1Name: "Smouaha SC",
      Team2Name: "Al Ahly",
      Team1Score: 2,
      Team2Score: 0,
      Sports: "Soccer",
      Outcome: "Won",
      Ods: 1.08,
      Stake: "0.0000000000",
      Payout: "0.0000000000",
    },
    {
      Team1Name: "Smouaha SC",
      Team2Name: "Al Ahly",
      Team1Score: 2,
      Team2Score: 0,
      Sports: "Soccer",
      Outcome: "Loss",
      Ods: 1.08,
      Stake: "0.0000000000",
      Payout: "0.0000000000",
    },
    {
      Team1Name: "Smouaha SC",
      Team2Name: "Al Ahly",
      Team1Score: 2,
      Team2Score: 0,
      Sports: "Soccer",
      Outcome: "Pending",
      Ods: 1.08,
      Stake: "0.0000000000",
      Payout: "0.0000000000",
    },
  ];
  return (
    <div className="BetsContainer">
      <div className="dropDowns_bets">
        <BetsCryptoDropDown />
        <SettledOptionDropDown />
      </div>
      <table className="BetsTable">
        <thead className="BetsHeadings">
          <tr>
            <td>Event</td>
            <td>Score</td>
            <td>Sports</td>
            <td>Outcome</td>
            <td>Ods</td>
            <td>Total Stake</td>
            <td>Est. Payout</td>
          </tr>
        </thead>
        <tbody className="DashboardBetsData">
          {Data.map((item) => (
            <>
              <tr className="Data">
                <td>
                  <div className="EventHeading">Event</div>
                  <div className="EventData">
                    <p>{item.Team1Name}</p>
                    <p className="Dash">-</p>
                    <p>{item.Team2Name}</p>
                  </div>
                </td>
                <td>
                  <div className="ScoreHeading">Score</div>
                  <div className="ScoreData">
                    <p>{item.Team1Score}</p>
                    <p className="Dash">-</p>
                    <p>{item.Team2Score}</p>
                  </div>
                </td>
                <td>
                  <div className="SportsHeading">Sports</div>
                  <div className="SportsData">{item.Sports}</div>
                </td>
                <td>
                  <div className="OutcomeHeading">Outcome</div>
                  <div
                    className="OutcomeData"
                    style={{
                      color:
                        item.Outcome === "Won"
                          ? "#00FF19"
                          : item.Outcome === "Loss"
                          ? "#FF0B0B"
                          : "",
                    }}
                  >
                    {item.Outcome}
                  </div>
                </td>
                <td>
                  <div className="OdsHeading">Ods</div>
                  <div className="OdsData">
                    <p>{item.Ods}</p>
                  </div>
                </td>
                <td>
                  <div className="TotalStakeHeading">Total Stake</div>
                  <div className="TotalStakeData">
                    <p className="Amount">{item.Stake}</p>
                    <img className="Logo" src={Currency} alt="Ethereum"></img>
                  </div>
                </td>
                <td>
                  <div className="EstPayOutHeading">Est. Payout</div>
                  <div className="EstPayOutData">
                    <p className="Amount">{item.Payout}</p>
                    <img className="Logo" src={Currency} alt="Ethereum"></img>
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bets;
