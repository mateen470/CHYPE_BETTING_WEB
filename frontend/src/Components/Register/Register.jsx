import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../FireBase/FireBase";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Register.css";

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
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="login">
      <div className="login__container">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <input
          type="email"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input type="name" className="login__textBox" placeholder="username" />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          className="login__textBox"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Password"
        />
        <div style={{ float: "left" }}>
          <input
            className="login__textBox"
            type="date"
            id="birthday"
            name="birthday"
          ></input>
        </div>
        <input
          type="Referral Code"
          className="login__textBox"
          placeholder="Code (Optional)"
        />
        <button className="login__btn" onClick={register}>
          Register
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Register with Google
        </button>

        <div style={{ color: "white" }}>
          Have an account Already? <Link to="/">Sign in</Link> now.
        </div>
      </div>
    </div>
  );
};
export default Register;
