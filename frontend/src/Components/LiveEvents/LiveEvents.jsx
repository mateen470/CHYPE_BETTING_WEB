import React from "react";
import "./LiveEvents.css";
import Stats from "../Stats/Stats";
import StatsLogo from "../Assets/stats (1) 1.png";
import DropdownLogo from "../Assets/Vector.png";
const LiveEvents = () => {
  const [flag, setFlag] = React.useState(-1);
  const [flag1, setFlag1] = React.useState(-1);
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
  ];
  function toggle(event) {
    console.log(event.target.parentElement);
    const key = event.target.parentElement.id;
    setfilteredMatches(
      allMatches.filter(
        (item) =>
          item.LeagueName === event.target.parentElement.children[0].innerHTML
      )
    );

    if (flag === -1) setFlag(key);
    else if (flag === key) {
      setFlag(-1);
      setFlag1(-1);
    } else {
      setFlag(key);
      setFlag1(-1);
    }
  }

  function toggle1(event) {
    const key = event.target.id;
    if (flag1 === -1) setFlag1(key);
    else if (flag1 === key) setFlag1(-1);
    else setFlag1(key);
  }
  return (
    <div className="LiveEventsContainer">
      {Leagues.map((item, index) => (
        <div className="League_LiveEvents">
          <div id={index} className="MainMenu">
            <p className="LeagueName_LiveEvents">{item.Name}</p>
            <img
              className="dropDownIcon_LiveEvents"
              onClick={toggle}
              src={DropdownLogo}
              alt="dropDownIcon"
            />
          </div>
          {filteredMatches.map(
            (item, index2) =>
              flag == index && (
                <div className="DashboardRoot">
                  <div id={index2} className="DashboardMatch_LiveEvents">
                    <div className="LeftMain_LiveEvents">
                      <div className="Live_LiveEvents">
                        {item.PredictionValue1 === "Suspended" ? (
                          <p className="FTText_LiveEvents">FT</p>
                        ) : (
                          <>
                            <p className="LiveText_LiveEvents">LIVE</p>
                            <div className="LiveDot_LiveEvents"></div>
                          </>
                        )}
                      </div>

                      <div className="TeamsName_LiveEvents">
                        <p className="Team1Name_LiveEvents">{item.Team1Name}</p>
                        <p className="Team2Name_LiveEvents">{item.Team2Name}</p>
                      </div>
                      <div className="TeamsScore_LiveEvents">
                        <p className="Team1Score_LiveEvents">
                          {item.Team1Score}
                        </p>
                        <p className="Team2Score_LiveEvents">
                          {item.Team2Score}
                        </p>
                      </div>
                      <div className="TimeAndHalf_LiveEvents">
                        <p className="Time_LiveEvents">{item.Time}</p>
                        <p className="Half_LiveEvents">{item.Half}</p>
                      </div>
                      <img
                        className="statsIcon_LiveEvents"
                        src={StatsLogo}
                        onClick={toggle1}
                        id={index2}
                      />
                    </div>
                    <div className="RightMain_LiveEvents">
                      <div className="Predictions_LiveEvents">
                        {item.PredictionValue1 === "Suspended" ? (
                          <>
                            <div className="Team1Prediction_LiveEvents">
                              <p className="TeamNameSuspended_LiveEvents">
                                {item.Team1Name}
                              </p>
                              <p className="PredictionValueSuspended_LiveEvents">
                                {item.PredictionValue1}
                              </p>
                            </div>
                            <div className="Team2Prediction_LiveEvents">
                              <p className="TeamNameSuspended_LiveEvents">
                                {item.Team2Name}
                              </p>
                              <p className="PredictionValueSuspended_LiveEvents">
                                {item.PredictionValue2}
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="Team1Prediction_LiveEvents">
                              <p className="TeamName_LiveEvents">
                                {item.Team1Name}
                              </p>
                              <p className="PredictionValue_LiveEvents">
                                {item.PredictionValue1}
                              </p>
                            </div>
                            <div className="DrawPrediction_LiveEvents">
                              <p className="DrawText_LiveEvents">Draw</p>
                              <p className="PredictionValue_LiveEvents">
                                {item.DrawPredictionValue}
                              </p>
                            </div>
                            <div className="Team2Prediction_LiveEvents">
                              <p className="TeamName_LiveEvents">
                                {item.Team2Name}
                              </p>
                              <p className="PredictionValue_LiveEvents">
                                {item.PredictionValue2}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  {flag1 == index2 && <Stats />}
                </div>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default LiveEvents;
