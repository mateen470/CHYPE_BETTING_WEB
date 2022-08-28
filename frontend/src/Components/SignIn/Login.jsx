import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../FireBase/FireBase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import React, { useEffect, useState, useNavigate } from "react";
import Register from "../Register/Register";

import "./Login.css";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user);
  }, [user, loading]);
  return (
    <div className="login">
      <div className="login__container">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div style={{ color: "white" }}>
          Don't have an account? <Link to="/Register">Register</Link> now.
        </div>
      </div>
    </div>
  );
};
export default Login;
