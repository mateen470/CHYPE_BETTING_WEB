import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../FireBase/FireBase";
import { useAuthState } from "react-firebase-hooks/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import cross from "./assets/Vector.png";
import google from "./assets/google.png";
import facebook from "./assets/facebook.png";
const Register = (props) => {
  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        alert("Passwords does not match");
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    alert("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((err) => alert(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="Regitser_root_div">
      <div className="Register_Main_container">
        <div className="RegisterHeading_and_CrossButton">
          <h1>Register</h1>
          <button onClick={props.handleClose}>
            <img src={cross} alt="CROSS" />
          </button>
        </div>
        <div className="inputTag_with_Label">
          <label htmlFor="emailRegister">Email</label>
          <input
            type="email"
            id="emailRegister"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputTag_with_Label">
          <label htmlFor="nameRegister">Username</label>
          <input
            type="text"
            id="nameRegister"
            placeholder="Enter Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputTag_with_Label">
          <label htmlFor="passwordRegister">Password</label>
          <input
            type="password"
            id="passwordRegister"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputTag_with_Label">
          <label htmlFor="date">Date Of Birth</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
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
        <div className="loginButton">
          <button onClick={register}>Sign Up</button>
        </div>
        <div className="Continue_with_text">or continue with</div>
        <div className="google_facebook_login">
          <div className="login_google">
            <button>
              <img src={facebook} alt="FACEBOOK ICON" /> Facebook
            </button>
          </div>
          <div className="login_google">
            <button onClick={signInWithGoogle}>
              <img src={google} alt="GOOGLE ICON" /> Google
            </button>
          </div>
        </div>
        <div className="already_acc">
          Already have an account? <NavLink to="/">Sign In</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
