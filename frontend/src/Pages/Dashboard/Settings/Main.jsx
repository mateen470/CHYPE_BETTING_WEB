import React, { useState } from "react";
import Arrow from "../Assets/vector2.png";
import Security from "./Security";
import ProfileEdit from "./ProfileEdit";
import Logout from "./Logout";
import "./Main.css";

const Main = () => {
  const [Flag, SetFlag] = React.useState(false);
  const [View, SetView] = React.useState(0);

  return (
    <div className="SettingContainer">
      <div
        style={{
          display: (View === 1 && "none") || (View === 2 && "none"),
        }}
        className="Menu"
      >
        <div onClick={() => SetView(1)} className="ProfileEdit">
          <p
            style={{ color: View === 1 && "#1AB5FD" }}
            className="ProfileEditText"
          >
            Profile Edit
          </p>
          <img className="Arrow" src={Arrow} alt="Arrow"></img>
        </div>
        <div onClick={() => SetView(2)} className="Security">
          <p
            style={{ color: View === 2 && "#1AB5FD" }}
            className="SecurityText"
          >
            Security
          </p>
          <img className="Arrow" src={Arrow} alt="Arrow"></img>
        </div>

        <div onClick={() => SetFlag(!Flag)} className="LogOut">
          <p className="LogOutText">Log Out</p>
          <img className="Arrow" src={Arrow} alt="Arrow"></img>
        </div>
      </div>
      <div className="MenuResponsive">
        <div onClick={() => SetView(1)} className="ProfileEdit">
          <p
            style={{ color: View === 1 && "#1AB5FD" }}
            className="ProfileEditText"
          >
            Profile Edit
          </p>
          <img className="Arrow" src={Arrow} alt="Arrow"></img>
        </div>
        <div onClick={() => SetView(2)} className="Security">
          <p
            style={{ color: View === 2 && "#1AB5FD" }}
            className="SecurityText"
          >
            Security
          </p>
          <img className="Arrow" src={Arrow} alt="Arrow"></img>
        </div>

        <div onClick={() => SetFlag(!Flag)} className="LogOut">
          <p className="LogOutText">Log Out</p>
          <img className="Arrow" src={Arrow} alt="Arrow"></img>
        </div>
      </div>

      {View === 1 ? (
        <ProfileEdit View={View} SetView={SetView} />
      ) : View === 2 ? (
        <Security View={View} SetView={SetView} />
      ) : (
        <></>
      )}
      <Logout Flag={Flag} SetFlag={SetFlag} />
    </div>
  );
};

export default Main;
