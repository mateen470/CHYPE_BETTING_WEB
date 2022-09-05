import React from "react";
import "./FullMatchStats.css";
import football from "../Assets/Rectangle 375.png";
import FBC from "../Assets/pngwing 2.png";
import RMD from "../Assets/pngwing 1.png";
import snooker from "../Assets/snooker.jpg";
import basketball from "../Assets/basketBall.jpg";
import Back from "../Assets/Vector6.png";

const FullMatchStats = ({ Flag, SetFlag }) => {
  const [view, setView] = React.useState();
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
    <div className="Stats_Full">
      <div className="statsRight_Full">
        <div onClick={() => SetFlag(!Flag)} className="imageContainer_Full">
          <img src={Back}/>
        </div>
        <div className="TimeAndHalf_Stats_Full">
          <p className="Time_Stats_Full">39'</p>
          <p className="Half_Stats_Full">First Half</p>
        </div>
        <div className="ScoreAndClub_Full">
          <img src={FBC} />
          <p className="Club1Name_Full">FCB</p>
          <p className="Points_Full">0:1</p>
          <div className="Club2Info_Full">
            <p className="Club2Name_Full">RMA</p>
            <p className="Club2_Full"> K.Benz..</p>
          </div>

          <img src={RMD} />
        </div>
        <img
          className="groundPic_Full"
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
      </div>
      <div className="statsLeft_Full">
        <div className="LiveStats_Full">
          <p className="LiveStatsHeading_Full">Live Stats</p>
          <div className="Cards_Full">
            <p>{CardsData.Team1RedCards}</p>
            <img src="https://img.icons8.com/office/16/000000/red-yellow-cards.png" />
            <p>{CardsData.Team1YellowCards}</p>
            <p className="cardsText_Full">Cards</p>
            <p>{CardsData.Team2YellowCards}</p>
            <img src="https://img.icons8.com/office/16/000000/red-yellow-cards.png" />
            <p>{CardsData.Team2RedCards}</p>
          </div>
          <div className="Stats1Data_Full">
            <p>Corners</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>{CardsData.Team1Corners}</p>
              <div class="progress">
                <div
                  style={{
                    width:
                      (CardsData.Team1Corners /
                        (CardsData.Team1Corners + CardsData.Team2Corners)) *
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
          <div className="Stats1Data_Full">
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
          <div className="Stats1Data_Full">
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
          <div className="Stats1Data_Full">
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
        </div>
        <div className="Stats2Data_Full">
          <p className="HeadToHeadHeading_Full">Head To Head</p>
          <div className="MatchesPlayed_Full">
            <p className="MtachesPlayedText_Full">MatchesPlayed</p>
            <p className="MatchesPlayedNumber_Full">
              {PlayedMatches.MatchespLayed}
            </p>
          </div>
          <div className="WinDrawBar_Full">
            <div className="Headings_Full">
              <p className="WinText_Full">Win</p>
              <p className="DrawText_Full">Draw</p>
              <p className="WinText2_Full">Win</p>
            </div>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{
                  width:
                    (PlayedMatches.WonMatches / PlayedMatches.MatchespLayed) *
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
                    (PlayedMatches.DrawMatches / PlayedMatches.MatchespLayed) *
                      100 +
                    "%",
                }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="MatchesNumber_Full">
              <p className="WinNumber_Full">{PlayedMatches.WonMatches}</p>
              <p className="DrawNumber_Full">{PlayedMatches.DrawMatches}</p>
              <p className="WinNumber2_Full">{PlayedMatches.Win2Matches}</p>
            </div>
          </div>
          <div className="Stats2Bar_Full">
            <p className="goalRatioText_Full">Goal Ratio</p>
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
          <div className="Stats2Bar_Full">
            <p className="goalsConcededText_Full">Gaols Conceded</p>
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
          <div className="Stats2Bar_Full">
            <p className="possessionText_Full">Possession</p>
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
        <div className="PointsTable_Full">
          <p className="StandingsHeading_Full">Standings</p>
          <p className="LeagueName_Full">England - Premier League</p>
          <table>
            <thead>
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
            <tbody>
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
                            height: "1rem",
                            width: "1rem",
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
        <div className="Commentatory_Full">
          <p className="TimeLineHeading_Full">Time Line</p>
          <p className="TimeLineText_Full">TimeLine</p>
          <div style={{ display: "flex" }}>
            <div className="Status_Full">
              <p>FT</p>
              <hr className="line_Full"></hr>
            </div>
            <div className="Text_Full">
              <p>Match ends, Lens 2, rennes 1.</p>
              <hr></hr>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="Status_Full">
              <p>90-5'</p>
              <hr className="line_Full"></hr>
            </div>
            <div className="Text_Full">
              <p>Second half ends, Lens 2, rennes 1.</p>
              <hr></hr>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="Status_Full">
              <p>90-5'</p>
              <hr className="line_Full"></hr>
            </div>
            <div className="Text_Full">
              <p>Lens</p>
              <p className="Commentator_Full">Wesley Said</p>
              <p>Foul by Wesley Said (Lens)</p>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMatchStats;
