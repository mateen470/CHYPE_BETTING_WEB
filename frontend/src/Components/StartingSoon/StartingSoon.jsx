import React from "react";
import "./StartingSoon.css";
import Stats from "../Stats/Stats";
import dropDownLogo from "../Assets/Vector.png";
import statsLogo from "../Assets/stats (1) 1.png";
const StartingSoon = () => {
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
      LeagueName: "Egypt - Premier League",
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
    <div className="StartingSoonContainer">
      {Leagues.map((item, index) => (
        <div id={index} className="League_StartingSoon">
          <div id={index} className="MainMenu_StartingSoon">
            <p className="LeagueName_StartingSoon">{item.Name}</p>
            <img
              className="dropDownIcon_StartingSoon"
              onClick={toggle}
              src={dropDownLogo}
              alt="dropDownIcon"
            />
          </div>
          {filteredMatches.map(
            (item, index2) =>
              flag == index && (
                <div className="DashboardRoot">
                  <div key={index2} className="DashboardMatch_StartingSoon">
                    <div className="LeftMain_StartingSoon">
                      <p className="UpcomingText_StartingSoon">Upcoming</p>

                      <div className="TeamsName_StartingSoon">
                        <p className="Team1Name_StartingSoon">
                          {item.Team1Name}
                        </p>
                        <p className="Team2Name_StartingSoon">
                          {item.Team2Name}
                        </p>
                      </div>
                    </div>
                    <div className="RightMain_StartingSoon">
                      <div className="Predictions_StartingSoon">
                        {item.PredictionValue1 === "Suspended" ? (
                          <>
                            <div className="Team1Prediction_StartingSoon">
                              <p className="TeamNameSuspended_StartingSoon">
                                {item.Team1Name}
                              </p>
                              <p className="PredictionValueSuspended_StartingSoon">
                                {item.PredictionValue1}
                              </p>
                            </div>
                            <div className="Team2Prediction_StartingSoon">
                              <p className="TeamNameSuspended_StartingSoon">
                                {item.Team2Name}
                              </p>
                              <p className="PredictionValueSuspended_StartingSoon">
                                {item.PredictionValue2}
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="Team1Prediction_StartingSoon">
                              <p className="TeamName_StartingSoon">
                                {item.Team1Name}
                              </p>
                              <p className="PredictionValue_StartingSoon">
                                {item.PredictionValue1}
                              </p>
                            </div>
                            <div className="DrawPrediction_StartingSoon">
                              <p className="DrawText_StartingSoon">Draw</p>
                              <p className="PredictionValue_StartingSoon">
                                {item.DrawPredictionValue}
                              </p>
                            </div>
                            <div className="Team2Prediction_StartingSoon">
                              <p className="TeamName_StartingSoon">
                                {item.Team2Name}
                              </p>
                              <p className="PredictionValue_StartingSoon">
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

export default StartingSoon;
