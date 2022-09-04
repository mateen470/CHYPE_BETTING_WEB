import React from "react";
import "./lobby.css";
import dropDownIcon from "../Assets/Vector.png";
const Dashboard = () => {
  const [flag, setFlag] = React.useState(-1);
  const [filteredMatches, setfilteredMatches] = React.useState([]);
  const Leagues = [
    {
      Name: "Egypt - Premier League",
    },
    {
      Name: "League1",
    },
    {
      Name: "League2",
    },
  ];
  const allMatches = [
    {
      LeagueName: "Egypt - Premier League",
      Team1Name: "Smouaha SC",
      Team2Name: "Al Ahly",
      Team1Score: "2",
      Team2Score: "0",
      Time: "39'",
      Half: "1st Half",
      PredictionValue1: "Suspended",
      PredictionValue2: "Suspended",
      DrawPredictionValue: "1.08",
    },
    {
      LeagueName: "Egypt - Premier League",
      Team1Name: "Smouaha SC",
      Team2Name: "Al Ahly",
      Team1Score: "2",
      Team2Score: "0",
      Time: "39'",
      Half: "1st Half",
      PredictionValue1: "1.9",
      PredictionValue2: "2.0",
      DrawPredictionValue: "1.08",
    },
    {
      LeagueName: "League2",
      Team1Name: "Smouaha SC",
      Team2Name: "Al Ahly",
      Team1Score: "2",
      Team2Score: "0",
      Time: "39'",
      Half: "1st Half",
      PredictionValue1: "1.08",
      PredictionValue2: "1.08",
      DrawPredictionValue: "1.08",
    },
    {
      LeagueName: "League1",
      Team1Name: "Smouaha SC",
      Team2Name: "Al Ahly",
      Team1Score: "2",
      Team2Score: "0",
      Time: "39'",
      Half: "1st Half",
      PredictionValue1: "1.08",
      PredictionValue2: "1.08",
      DrawPredictionValue: "1.08",
    },
  ];
  function toggle(event) {
    const key = event.target.id;
    setfilteredMatches(
      allMatches.filter(
        (item) =>
          item.LeagueName === event.target.parentElement.children[0].innerHTML
      )
    );
    if (flag === -1) setFlag(key);
    else if (flag === key) setFlag(-1);
    else setFlag(key);
  }
  return (
    <div className="DashboardContainer">
      {Leagues.map((item, index) => (
        <div className="League">
          <div className="MainMenu">
            <p
              className="LeagueName"
              style={{
                fontSize: "1.5rem",
                fontFamily: "SF pro",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {item.Name}
            </p>
            <img
              id={index}
              onClick={toggle}
              src={dropDownIcon}
              alt="dropDownIcon"
              className="dropDownLobbySection"
            />
          </div>

          {filteredMatches.map(
            (item, index2) =>
              flag == index && (
                <div key={index2} className="DashboardMatch">
                  <div className="LeftMain">
                    <div className="Live">
                      {item.PredictionValue1 === "Suspended" ? (
                        <p className="FTText">FT</p>
                      ) : (
                        <>
                          <p className="LiveText">LIVE</p>
                          <div className="LiveDot"></div>
                        </>
                      )}
                    </div>

                    <div className="TeamsName">
                      <p className="Team1Name">{item.Team1Name}</p>
                      <p className="Team2Name">{item.Team2Name}</p>
                    </div>
                    <div className="TeamsScore">
                      <p className="Team1Score">{item.Team1Score}</p>
                      <p className="Team2Score">{item.Team2Score}</p>
                    </div>
                    <div className="TimeAndHalf">
                      <p className="Time">{item.Time}</p>
                      <p className="Half">{item.Half}</p>
                    </div>
                  </div>
                  <div className="RightMain">
                    <div className="Predictions">
                      {item.PredictionValue1 === "Suspended" ? (
                        <>
                          <div className="Team1Prediction">
                            <p className="TeamNameSuspended">
                              {item.Team1Name}
                            </p>
                            <p className="PredictionValueSuspended">
                              {item.PredictionValue1}
                            </p>
                          </div>
                          <div className="Team2Prediction">
                            <p className="TeamNameSuspended">
                              {item.Team2Name}
                            </p>
                            <p className="PredictionValueSuspended">
                              {item.PredictionValue2}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="Team1Prediction">
                            <p className="TeamName">{item.Team1Name}</p>
                            <p className="PredictionValue">
                              {item.PredictionValue1}
                            </p>
                          </div>
                          <div className="DrawPrediction">
                            <p className="DrawText">Draw</p>
                            <p className="PredictionValue">
                              {item.DrawPredictionValue}
                            </p>
                          </div>
                          <div className="Team2Prediction">
                            <p className="TeamName">{item.Team2Name}</p>
                            <p className="PredictionValue">
                              {item.PredictionValue2}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
