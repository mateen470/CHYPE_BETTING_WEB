import React, { useState } from "react";
import "./forget.css";
import cross from "./assets/Vector.png";
const Forget = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="forgtePassword_root_container">
      <div className="forgetPassword_main">
        <div className="forgetPass_Heading_and_CrossButton">
          <h1>Forget Password?</h1>
          <button>
            <img src={cross} alt="CROSS" />
          </button>
        </div>
        <div className="inputTag_with_Label_forgetPass">
          <label htmlFor="emailRegister">Email</label>
          <input
            type="email"
            id="emailRegister"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="submitBtn">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Forget;
