import React from "react";
import NavBar from "../header/NavBar";
import "./css/Registration.css";
import { Link } from "react-router-dom";

// Images
import Logo from "../images/logo.png";
import Logo2 from "../images/logo2.png";

function Register() {
  return (
    <section className="sectionRegistration">
      <div className="registrationContainer">
        <div className="regForms">
          <Link to="/">
            <img src={Logo} alt="Image logo" className="regLogo" />
          </Link>
          <h2 className="HeadingRegistration">Create your Dash Account</h2>
          <span className="regSubheading">to continue to Dash</span>
          <form action="php">
            <div className="namesReg">
              <div>
                {/* <label htmlFor="firstname">First Name</label> */}
                <input
                  type="text"
                  z
                  name="fname"
                  id="fname"
                  placeholder="First name"
                />
              </div>

              <div>
                {/* <label htmlFor="lastname">Last Name</label> */}
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              {/* <label htmlFor="email">Email</label> */}
              <input type="email" placeholder="Email" />
            </div>
            <input type="tel" placeholder="Phone number" />
            <div>
              <div className="regPassword">
                <div className="logginPassword">
                  {/* <label htmlFor="password">Password</label> */}
                  <input type="password" placeholder="Password" />
                </div>
                <div className="logginPassword">
                  {/* <label htmlFor="password">Comfirm password</label> */}
                  <input type="password" placeholder="Confirm password" />
                </div>
              </div>
              <p className="passwordinfo">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
              <div className="agreeCheck">
                <input type="checkbox" name="agree" id="agree" />
                <span>i agree to Dash terms & condition</span>
              </div>
            </div>
          </form>

          <div className="regSubmit">
            <Link to="/login">Sign in instead</Link>
            <Link>
              <button type="submit">Create account</button>
            </Link>
          </div>
        </div>
        <div className="regFormImage">
          <img src={Logo2} alt="dash.net" />
          <p>
            ...Welcome to Data Airtime and <br /> Subscriptions Hub!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
