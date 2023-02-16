import React from "react";
import "./login/login.css";
import { Link } from "react-router-dom";

// Icons
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

// Pictures
import Photo from "./login/logImage/photo2.png";

function AdminLogin() {
  return (
    <section className="sectionAdminLogin">
      <div className="loginCont">
        {/* Login Information */}
        <div className="loginInfo">
          <figure className="loginImg">
            <img src={Photo} alt="Dash Photo" />
          </figure>
          <h3>Improve your wellbeing, this includes finance and work-life</h3>

          <p>&nbsp;</p>
          <div className="baseLogs">
            <p>© Dash 2023 - All rights reserved.</p>
            <div className="baseLogItems">
              <Link>Terms</Link>
              <Link>Privacy</Link>
              <Link>Cookie</Link>
            </div>
          </div>
        </div>
        {/* Login Form */}
        <div className="containerForm">
          <form action="php" id="loginForm">
            <h2 className="loginHeading">Admin Login </h2>
            <span className="loginSubHeading">
              Welcome back! Continue to DASH
            </span>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email address..." required/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="logginPassword">
                <input type="password" placeholder="Password" required/>
                <VisibilityOutlinedIcon fontSize="large" className="show" />
              </div> 
                <button className="loginBtn">Login</button> 
            </div>
            <p>Keep your code safe </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;
