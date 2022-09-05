import React from "react";
import "./Logout.css";
import Cross from "../Assets/vector4.png";
import Dash from "../Assets/Line 43.png";

const Logout = ({ Flag, SetFlag }) => {
  return (
    <div
      style={{
        display: Flag === true ? "flex" : Flag === false ? "none" : "",
      }}
      className="LogoutContainer"
    >
      <img
        onClick={() => SetFlag(!Flag)}
        className="Line"
        src={Dash}
        alt="Line"
      ></img>
      <img
        onClick={() => SetFlag(!Flag)}
        className="Cross"
        src={Cross}
        alt="cross"
      ></img>
      <div className="Prompt">Are you sure, you want to log out</div>
      <div className="Button">
        <button onClick={() => SetFlag(!Flag)} className="CancelButton">
          Cancel
        </button>
        <button className="LogoutButton">Logout</button>
      </div>
    </div>
  );
};

export default Logout;
