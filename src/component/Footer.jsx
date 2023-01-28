import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { fontSize } from "@mui/system";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footerStart">
        <div className="headingFooter">
          <h2>dash.net</h2>
          <button className="langbtn" type="lang">
            <LanguageIcon style={{ fontSize: "3rem" }} /> English
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
        <figure className="footerMediaIcons flex">
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
        </figure>
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
