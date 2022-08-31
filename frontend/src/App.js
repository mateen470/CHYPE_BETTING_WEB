import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
      <div className="SideBar_APPJS_div">
        <SideBar />
      </div>
      <div className="Home_APPJS_div">
        <Home />
      </div>
    </div>
  );
}

export default App;
