import React from "react";
import "./Security.css";
import DropDownArrow from "../Assets/Vector.png";
import Back from "../Assets/Vector6.png";
const Security = ({ View, SetView }) => {
  const [NewPassword, SetNewPassword] = React.useState("");
  const [ConfirmNewPassword, SetConfirmNewPassword] = React.useState("");
  const [Flag, SetFlag] = React.useState(false);
  return (
    <div
      style={{ display: View === 2 && "block" }}
      className="SecurityContainer"
    >
      <div className="BackAndHeading">
        <div onClick={() => SetView(0)} className="imageContainer">
          <img src={Back}></img>
        </div>
        <div className="SecurityHeading">Security</div>
      </div>
      <div className="ChangePassword">
        <p className="ChangePasswordText">Change Password</p>
        <img
          alt="DownArrow"
          onClick={() => SetFlag(!Flag)}
          src={DropDownArrow}
          className="downArrow_security_dashboard"
        ></img>
      </div>
      <form>
        <label className="OldPassLabel">
          Old Password<p className="star">*</p>
        </label>
        <input className="OldPassInput" type="password" />
        {Flag === true && (
          <>
            <label className="NewPassLabel">
              New Password<p className="star">*</p>
            </label>
            <input
              className="NewPassInput"
              type="password"
              value={NewPassword}
              onChange={(e) => SetNewPassword(e.target.value)}
            />
            <label className="ConfPassLabel">
              Confirm New Password
              <p className="star">*</p>
            </label>
            <input
              className="ConfPassInput"
              type="password"
              value={ConfirmNewPassword}
              onChange={(e) => SetConfirmNewPassword(e.target.value)}
            />
          </>
        )}
        <input className="SubmitButton" type="button" value="Change Password" />
      </form>
    </div>
  );
};

export default Security;
