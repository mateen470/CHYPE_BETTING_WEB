import React from "react";
import "./Stats.css";
import bars from "../Assets/stats 1.png";
import versus from "../Assets/vs 1.png";
import standings from "../Assets/standings 1.png";
import microphone from "../Assets/microphone 1.png";
import football from "../Assets/Rectangle 375.png";
import FBC from "../Assets/pngwing 2.png";
import RMD from "../Assets/pngwing 1.png";
import snooker from "../Assets/snooker.jpg";
import basketball from "../Assets/basketBall.jpg";
import Arrow from "../Assets/Vector.png";
import FullMatchStats from "../FullMatchStats/FullMatchStats";

const Stats = () => {
  const [Flag, SetFlag] = React.useState(false);
  const [view, setView] = React.useState(1);
  const gameName = "football";
  const CardsData = {
    Team1YellowCards: 0,
    Team1RedCards: 0,
    Team2YellowCards: 0,
    Team2RedCards: 0,
    Team1Corners: 6,
    Team2Corners: 4,
    Team1Passes: 600,
    Team2Passes: 900,
    Team1Fouls: 8,
    Team2Fouls: 5,
    Team1Possession: 85,
    Team2Possession: 15,
  };
  const PlayedMatches = {
    MatchespLayed: 12,
    WonMatches: 6,
    DrawMatches: 2,
    Win2Matches: 4,
    Team1GoalRatio: 0.9,
    Team2GoalRatio: 0.6,
    Team1GoalConceded: 0.1,
    Team2GoalConceded: 0.4,
    Team1Possession: 85,
    Team2Possession: 15,
  };

  const Table = [
    {
      Pos: 1,
      Team: "Arsenal",
      MP: 4,
      W: 4,
      D: 0,
      L: 0,
      GF: 11,
      GA: 3,
      GD: 8,
      Pts: 12,
      Last5: ["won", "won", "lose", "draw", "won"],
    },
    {
      Pos: 1,
      Team: "Arsenal",
      MP: 4,
      W: 4,
      D: 0,
      L: 0,
      GF: 11,
      GA: 3,
      GD: 8,
      Pts: 12,
      Last5: ["won", "won", "lose", "draw", "won"],
    },
  ];
  return (
    <>
      {!Flag ? (
        <div className="Stats">
          <div className="statsLeft">
            <div className="BarAndText">
              <div className="statsBar">
                <div
                  style={{
                    background:
                      view === 1 &&
                      "linear-gradient(102.63deg, #121212 8.63%, #000000 101.21%)",
                    borderTopLeftRadius: "30px",
                    borderBottomLeftRadius: "30px",
                  }}
                >
                  <img src={bars} alt="BarsIcon" onClick={() => setView(1)} />
                </div>
                <div
                  style={{
                    background:
                      view === 2 &&
                      "linear-gradient(102.63deg, #121212 8.63%, #000000 101.21%)",
                  }}
                >
                  <img src={versus} alt="VSIcon" onClick={() => setView(2)} />
                </div>
                <div
                  style={{
                    background:
                      view === 3 &&
                      "linear-gradient(102.63deg, #121212 8.63%, #000000 101.21%)",
                  }}
                >
                  <img
                    src={standings}
                    alt="standingsIcon"
                    onClick={() => setView(3)}
                  />
                </div>
                <div
                  style={{
                    background:
                      view === 4 &&
                      "linear-gradient(102.63deg, #121212 8.63%, #000000 101.21%)",
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                  }}
                >
                  <img
                    src={microphone}
                    alt="micIcon"
                    style={{ color: "white" }}
                    onClick={() => setView(4)}
                  />
                </div>
              </div>
              <div onClick={() => SetFlag(!Flag)} className="FullDetailsText">
                <span>Full</span>
                <span>Details</span>
                <img src={Arrow} className="fullDetail_Arrow" />
              </div>
            </div>
            {view === 1 ? (
              <>
                <div className="Cards">
                  <p>{CardsData.Team1RedCards}</p>
                  <img src="https://img.icons8.com/office/16/000000/red-yellow-cards.png" />
                  <p>{CardsData.Team1YellowCards}</p>
                  <p className="cardsText">Cards</p>
                  <p>{CardsData.Team2YellowCards}</p>
                  <img src="https://img.icons8.com/office/16/000000/red-yellow-cards.png" />
                  <p>{CardsData.Team2RedCards}</p>
                </div>
                <div className="Stats1Data">
                  <p>Corners</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>{CardsData.Team1Corners}</p>
                    <div class="progress">
                      <div
                        style={{
                          width:
                            (CardsData.Team1Corners /
                              (CardsData.Team1Corners +
                                CardsData.Team2Corners)) *
                              100 +
                            "%",
                        }}
                        class="progress-bar"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>{CardsData.Team2Corners}</p>
                  </div>
                </div>
                <div className="Stats1Data">
                  <p>Passes</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>{CardsData.Team1Passes}</p>
                    <div class="progress">
                      <div
                        style={{
                          width:
                            (CardsData.Team1Passes /
                              (CardsData.Team1Passes + CardsData.Team2Passes)) *
                              100 +
                            "%",
                        }}
                        class="progress-bar"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>{CardsData.Team2Passes}</p>
                  </div>
                </div>
                <div className="Stats1Data">
                  <p>Fouls</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>{CardsData.Team1Fouls}</p>
                    <div class="progress">
                      <div
                        style={{
                          width:
                            (CardsData.Team1Fouls /
                              (CardsData.Team1Fouls + CardsData.Team2Fouls)) *
                              100 +
                            "%",
                        }}
                        class="progress-bar"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>{CardsData.Team2Fouls}</p>
                  </div>
                </div>
                <div className="Stats1Data">
                  <p>Possession</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>{CardsData.Team1Possession}%</p>
                    <div class="progress">
                      <div
                        style={{
                          width:
                            (CardsData.Team1Possession /
                              (CardsData.Team1Possession +
                                CardsData.Team2Possession)) *
                              100 +
                            "%",
                        }}
                        class="progress-bar"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>{CardsData.Team2Possession}%</p>
                  </div>
                </div>
              </>
            ) : view === 2 ? (
              <div className="Stats2Data">
                <div className="MatchesPlayed">
                  <p className="MtachesPlayedText">MatchesPlayed</p>
                  <p className="MatchesPlayedNumber">
                    {PlayedMatches.MatchespLayed}
                  </p>
                </div>
                <div className="WinDrawBar">
                  <div className="Headings">
                    <p className="WinText">Win</p>
                    <p className="DrawText">Draw</p>
                    <p className="WinText2">Win</p>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{
                        width:
                          (PlayedMatches.WonMatches /
                            PlayedMatches.MatchespLayed) *
                            100 +
                          "%",
                      }}
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      class="progress-bar bg-secondary"
                      role="progressbar"
                      style={{
                        width:
                          (PlayedMatches.DrawMatches /
                            PlayedMatches.MatchespLayed) *
                            100 +
                          "%",
                      }}
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="MatchesNumber">
                    <p className="WinNumber">{PlayedMatches.WonMatches}</p>
                    <p className="DrawNumber">{PlayedMatches.DrawMatches}</p>
                    <p className="WinNumber2">{PlayedMatches.Win2Matches}</p>
                  </div>
                </div>
                <div className="Stats2Bar">
                  <p className="goalRatioText">Goal Ratio</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>{PlayedMatches.Team1GoalRatio}</p>
                    <div class="progress">
                      <div
                        style={{
                          width:
                            (PlayedMatches.Team2GoalRatio /
                              (PlayedMatches.Team1GoalRatio +
                                PlayedMatches.Team2GoalRatio)) *
                              100 +
                            "%",
                        }}
                        class="progress-bar"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>{PlayedMatches.Team2GoalRatio}</p>
                  </div>
                </div>
                <div className="Stats2Bar">
                  <p className="goalsConcededText">Gaols Conceded</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>{PlayedMatches.Team1GoalConceded}</p>
                    <div class="progress">
                      <div
                        style={{
                          width:
                            (PlayedMatches.Team1GoalConceded /
                              (PlayedMatches.Team1GoalConceded +
                                PlayedMatches.Team2GoalConceded)) *
                              100 +
                            "%",
                        }}
                        class="progress-bar"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>{PlayedMatches.Team2GoalConceded}</p>
                  </div>
                </div>
                <div className="Stats2Bar">
                  <p className="possessionText">Possession</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>{PlayedMatches.Team1Possession}%</p>
                    <div class="progress">
                      <div
                        style={{
                          width:
                            (PlayedMatches.Team1Possession /
                              (PlayedMatches.Team1Possession +
                                PlayedMatches.Team2Possession)) *
                              100 +
                            "%",
                        }}
                        class="progress-bar"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>{PlayedMatches.Team2Possession}%</p>
                  </div>
                </div>
              </div>
            ) : view === 3 ? (
              <div className="PointsTable">
                <p className="LeagueName">England - Premier League</p>
                <table>
                  <thead className="HeadingsStats">
                    <tr>
                      <td>Pos</td>
                      <td>Team</td>
                      <td>MP</td>
                      <td>W</td>
                      <td>D</td>
                      <td>L</td>
                      <td>GF</td>
                      <td>GA</td>
                      <td>GD</td>
                      <td>Pts</td>
                      <td>Last 5</td>
                    </tr>
                  </thead>
                  <tbody className="DataStats">
                    {Table.map((item) => (
                      <tr>
                        <td>{item.Pos}</td>
                        <td>{item.Team}</td>
                        <td>{item.MP}</td>
                        <td>{item.W}</td>
                        <td>{item.D}</td>
                        <td>{item.L}</td>
                        <td>{item.GF}</td>
                        <td>{item.GA}</td>
                        <td>{item.GD}</td>
                        <td>{item.Pts}</td>
                        <td>
                          <div style={{ display: "flex" }}>
                            {item.Last5.map((item1) => (
                              <div
                                style={{
                                  height: "0.48vw",
                                  width: "0.48vw",
                                  backgroundColor:
                                    item1 === "lose"
                                      ? "red"
                                      : item1 === "won"
                                      ? "green"
                                      : item1 === "draw"
                                      ? "grey"
                                      : "",
                                  borderRadius: "50%",
                                  marginRight: "0.3rem",
                                }}
                              ></div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : view === 4 ? (
              <div className="Commentatory">
                <p className="TimeLineText">TimeLine</p>
                <div style={{ display: "flex" }}>
                  <div className="Status">
                    <p>FT</p>
                    <hr className="line"></hr>
                  </div>
                  <div className="Text">
                    <p>Match ends, Lens 2, rennes 1.</p>
                    <hr></hr>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="Status">
                    <p>90-5'</p>
                    <hr className="line"></hr>
                  </div>
                  <div className="Text">
                    <p>Second half ends, Lens 2, rennes 1.</p>
                    <hr></hr>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="Status">
                    <p>90-5'</p>
                    <hr className="line"></hr>
                  </div>
                  <div className="Text">
                    <p>Lens</p>
                    <p className="Commentator">Wesley Said</p>
                    <p>Foul by Wesley Said (Lens)</p>
                    <hr></hr>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="statsRight">
            <div className="TimeAndHalf_Stats">
              <p className="Time_Stats">39'</p>
              <p className="Half_Stats">First Half</p>
            </div>
            <div className="ScoreAndClub">
              <img src={FBC} />
              <p className="Club1Name">FCB</p>
              <p className="Points">0:1</p>
              <div className="Club2Info">
                <p className="Club2Name">RMA</p>
                <p className="Club2"> K.Benz..</p>
              </div>

              <img src={RMD} />
            </div>
            <img
              className="groundPic"
              src={
                gameName === "football"
                  ? football
                  : gameName === "basketball"
                  ? basketball
                  : gameName === "snooker"
                  ? snooker
                  : ""
              }
            ></img>
            {console.log}
          </div>
        </div>
      ) : Flag ? (
        <FullMatchStats Flag={Flag} SetFlag={SetFlag} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Stats;
