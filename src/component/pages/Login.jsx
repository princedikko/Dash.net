import React from "react";
import "./login/login.css";
import { Link } from "react-router-dom";
import SocialMediaIcons from "../footer/SocialMediaIcon";

// Icons
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

// Pictures
import Photo from "./login/logImage/photo2.png";

function Login() {
  return (
    <section className="sectionLogin">
      <div className="loginCont">
        {/* Login Information */}
        <div className="loginInfo">
          <figure className="loginImg">
            <img src={Photo} alt="Dash Photo" />
          </figure>
          <h3>Improve your wellbeing, this includes finance and work-life</h3>

          <p>
            Discover a new way to go to work — one that puts you in charge of{" "}
            <br />
            how you earn, and how you progress your career.
          </p>
          <div className="baseLogs">
            <p>© Dash 2023 - All rights reserved.</p>
            <div className="baseLogItems">
              <Link>Terms</Link>
              <Link>Privacy</Link>
              <Link>Affiliation Terms</Link>
              <Link>Cookie</Link>
            </div>
          </div>
        </div>
        {/* Login Form */}
        <div className="containerForm">
          <form action="php" id="loginForm">
            <h2 className="loginHeading">Hi, welcome back!</h2>
            <span className="loginSubHeading">Continue where you left off</span>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email or phone number" required/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="logginPassword">
                <input type="password" placeholder="Password" required/>
                <VisibilityOutlinedIcon fontSize="large" className="show" />
              </div> 
                <button className="loginBtn">Login</button>
            </div>
            <p>
              Don't have an account yet?{" "}
              <Link to="/register">Sign up here</Link>
            </p>
          </form>
          <div className="icons">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
