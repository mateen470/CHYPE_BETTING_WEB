import React, { useEffect, useState, useNavigate } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginStatusCheck } from "../redux/features/Login";
import cross from "./assets/Vector.png";
import google from "./assets/google.png";
import facebook from "./assets/facebook.png";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../FireBase/FireBase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = (props) => {
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const registerSubmit = () => {
    setLoginState(true);
  };
  useEffect(() => {
    dispatch(
      LoginStatusCheck({
        login: loginState,
      })
    );
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user);
  }, [user, loading, loginState]);
  return (
    <div className="SignIn_root_conatiner">
      <div className="signIn_main_conatiner">
        <div className="SignInHeading_and_CrossButton">
          <h1>Welcom Back to Chype!</h1>
          <button onClick={props.handleClose}>
            <img src={cross} alt="CROSS" />
          </button>
        </div>
        <div className="inputTag_with_Label_Login">
          <label htmlFor="userNameLogIn">Username or Email</label>
          <input
            type="text"
            id="userNameLogIn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Username or Email"
          />
        </div>
        <div className="inputTag_with_Label_Login">
          <label htmlFor="passwordSignin">Password</label>
          <input
            type="password"
            id="passwordSignin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <div className="rememberMe">
          <input type="checkbox" />
          Remember me
        </div>
        <div className="loginButton_LoginPage">
          <button onClick={() => logInWithEmailAndPassword(email, password)}>
            Sign In
          </button>
        </div>
        {/* THIS IS DUMMY BUTTON TO  CHANGE THE REDUX STATE TO 
        HIDE LOGIN AND SIGNOUT BUTTON AND SHOW RIGHT MENU
         AFTER SIGNING IN, PUT THIS FUNCTION
        ON BACKEDND INTEGERATION PROPERLY  */}
        <button onClick={registerSubmit}>change</button>
        <div className="forgetPassword">
          <NavLink to="/reset"> Forget Password?</NavLink>
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
          Don't have an account? <NavLink to="/Register">Register</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
