import React from "react";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

import { fontSize } from "@mui/system";
import SocialMediaIcons from "./footer/SocialMediaIcon";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footerStart">
        <div className="headingFooter">
          <h2>dash.net</h2>
          <Link to="/adminlogin">
            <button className="langbtn" type="lang">
              <SupervisorAccountIcon style={{ fontSize: "3rem" }} /> Admin
            </button>
          </Link>
        </div>
        <div className="footerItems">
          <ul>
            <li>
              <Link to="/aboutcompany">About DASH</Link>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <Link to="/help">Guidelines</Link>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">About Nandic</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Press & Media</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">About Nandic</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Press & Media</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerMiddle">
        <p className="subscribe">Subscribe to our news letter</p>
        <form action="#" name="footerForm" className="flex">
          <input
            type="footerInput"
            name="subscribe"
            placeholder="Email address"
          />
          <button type="footerSubmit">Subscribe</button>
        </form>
        <SocialMediaIcons />
        {/* <figure className="footerMediaIcons flex">
          <a href="#">
            <TwitterIcon style={{ fontSize: "2.1rem" }} />
          </a>
          <a href="#">
            <FacebookIcon style={{ fontSize: "2.1rem" }} />
          </a>
          <a href="#">
            <LinkedInIcon style={{ fontSize: "2.1rem" }} />
          </a>
          <a href="#">
            <InstagramIcon style={{ fontSize: "2.1rem" }} />
          </a>
          <a href="#">
            <WhatsAppIcon style={{ fontSize: "2.1rem" }} />
          </a>
          <a href="#">
            <TelegramIcon style={{ fontSize: "2.1rem" }} />
          </a>
        </figure> */}
      </div>
      <div className="footerEnd">
        <div className="copyRight">
          <p>Copyright © {currentYear} Dash All rights reserved.</p>
          <ul className="listEnd">
            <li>
              <a href="#">Terms of services</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Cookie setting</a>
            </li>
            <li>
              <a href="#">Affiliation Terms of services</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
