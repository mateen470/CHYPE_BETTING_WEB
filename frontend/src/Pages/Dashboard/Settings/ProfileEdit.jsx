import React from "react";
import ProfilePic from "../Assets/Vector3.png";
import DatePicker from "react-datepicker";
import Cal from "../Assets/Vector5.png";
import "react-datepicker/dist/react-datepicker.css";
import Back from "../Assets/Vector6.png";

import "./ProfileEdit.css";
const ProfileEdit = ({ View, SetView }) => {
  const [FullName, SetFullName] = React.useState("Adam Smith");
  const [Email, SetEmail] = React.useState("test@gmail.com");
  const [Username, SetUserName] = React.useState("adamsmith123");

  const [TimeZone, SetTimeZone] = React.useState("Karachi, UTC +5");
  const [startDate, setStartDate] = React.useState(
    new Date("january 22, 2022")
  );
  console.log(View);
  return (
    <div
      style={{ display: View === 1 && "block" }}
      className="ProfileEditContainer"
    >
      <div className="BackAndHeading">
        <div onClick={() => SetView(0)} className="imageContainer">
          <img src={Back}></img>
        </div>
        <div className="ProfileEditHeading">Profile Edit</div>
      </div>
      <div className="ProfilePic">
        <img src={ProfilePic}></img>
      </div>

      <form className="ProfileForm">
        <label className="FullNameLabel">
          Full Name<p className="star">*</p>
        </label>
        <input
          onChange={(e) => SetFullName(e.target.value)}
          className="FullNameInput"
          value={FullName}
          type="text"
        />
        <label className="EmailLabel">
          Email<p className="star">*</p>
        </label>
        <input
          onChange={(e) => SetEmail(e.target.value)}
          className="EmailInput"
          value={Email}
          type="email"
        />
        <label className="UsernameLabel">
          Username<p className="star">*</p>
        </label>
        <input
          onChange={(e) => SetUserName(e.target.value)}
          className="UsernameInput"
          value={Username}
          type="text"
        />
        <label className="DateOfBirthLabel">
          Date Of Birth<p className="star">*</p>
        </label>
        <div className="Date">
          <DatePicker
            className="DateOfBirthInput"
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            dateFormat="MMMM dd, yyyy"
          />
          <img alt="claender" className="Calender" src={Cal}></img>
        </div>
        <label className="TimeZoneLabel">
          Time Zone<p className="star">*</p>
        </label>
        <input
          onChange={(e) => SetTimeZone(e.target.value)}
          className="TimeZoneInput"
          value={TimeZone}
          type="text"
        />
        <input className="SubmitButton" value="Save Changes" type="submit" />
      </form>
    </div>
  );
};

export default ProfileEdit;
