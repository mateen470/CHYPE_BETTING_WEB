import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ProfileDash from "./Pages/Dashboard/Profile/MainDashboard";
// import ProfileDashboard from "./Pages/Dashboard/Profile/Profile";
// import FundingsMain from "./Pages/Dashboard/Profile/FundingsMain";
// import Bets from "./Pages/Dashboard/Profile/Bets";
// import Settings from "./Pages/Dashboard/Settings/Main";
// import MyBets from "./Components/MyBets/MyBets";
// import LiveEvents from "./Components/LiveEvents/LiveEvents";
// import StartingSoon from "./Components/StartingSoon/StartingSoon";
// import LobbySection from "./Components/Lobby/Lobby";
function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <ProfileDash />
      {/* I DID THE DUMMY ROUTING OF DASHBOARD IN DashboardMain FILE IN DASHBOARD FOLDER OF PAGES */}
      {/* <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route path="/Dashboard" element={<ProfileDashboard />}></Route>
        <Route path="/profile" element={<ProfileDash />}></Route>
        <Route path="/Fundings" element={<FundingsMain />}></Route>
        <Route path="/Bets" element={<Bets />}></Route>
        <Route path="/Settings" element={<Settings />}></Route>
        <Route path="/" element={<LobbySection />}></Route>
        <Route path="/MyBets" element={<MyBets />}></Route>
        <Route path="/LiveEvents" element={<LiveEvents />}></Route>
        <Route path="/StartingSoon" element={<StartingSoon />}></Route>
        <Route path="/" element={<Navigate replace to="/" />} />
      </Routes> */}
    </div>
  );
}

export default App;
