import React from "react";
import "./Register.css";
import cross from "./assets/Vector.png";
const Reg = () => {
  return (
    <div className="Regitser_root_div">
      <div className="Register_Main_container">
        <div className="RegisterHeading_and_CrossButton">
          <h1>Register</h1>
          <button>
            <img src={cross} alt="CROSS" />
          </button>
        </div>
        <div className="inputTag_with_Label">
          <label htmlFor="emailRegister">Email</label>
          <input type="email" id="emailRegister" placeholder="Enter Email" />
        </div>
        <div className="inputTag_with_Label">
          <label htmlFor="nameRegister">Username</label>
          <input type="text" id="nameRegister" placeholder="Enter Username" />
        </div>
        <div className="inputTag_with_Label">
          <label htmlFor="passwordRegister">Password</label>
          <input
            type="password"
            id="passwordRegister"
            placeholder="Enter Password"
          />
        </div>
        <div className="inputTag_with_Label">
          <label htmlFor="date">Date Of Birth</label>
          <input type="date" id="date" />
        </div>
        <div className="inputTag_with_Label">
          <label htmlFor="codeRegister">Code (Optional)</label>
          <input type="text" id="codeRegister" placeholder="Enter Code" />
        </div>
        <div className="terms_agreements_check_box">
          <input type="checkbox" />
          <span>
            By clicking the checkbox, you are indicating that you have read &
            acknowlegde the Terms & Conditions
          </span>
        </div>
      </div>
    </div>
  );
};

export default Reg;
