import React from "react";
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footerStart">
        <div className="headingFooter">
          <h2>dash.net</h2>
          <button className="langbtn" type="lang">
            <LanguageIcon fontSize="large" /> English
          </button>
        </div>
        <div className="footerItems">
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
      </div>
      <div className="footerEnd">
        <div className="copyRight">
          <p>Copyright © {currentYear} Nandic All rights reserved.</p>
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
