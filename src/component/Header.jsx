import React, { useState } from "react";
import { Link } from "react-router-dom";
//  Pages
// import business from "./pages/Business";
// Images
import Logo from "./images/logo.png";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import CloseIcon from "@mui/icons-material/Close";
import HomeScroller from "./header/HomeScroller";
import MenuIcon from "@mui/icons-material/Menu";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Header() {
  // new codes
  const [ShowNotification, setShowNotification] = useState(true);

  function updatNotification() {
    setShowNotification(false);
  }

  function NotificationBar() {
    return (
      <div className="notificationBar flex">
        <p>...Welcome to Data Airtime & Subscriptions Hub!</p>
        <span className="notifClose">
          <CloseIcon fontSize="2.4rem" onClick={updatNotification} />
        </span>
      </div>
    );
  }
  // end of new codes
  return (
    <header className="header">
      <div className="ntfBar">
        {ShowNotification ? <NotificationBar /> : null}
      </div>
      <div className="navBar">
        <Link to="/">
          <img
            className="navLogo"
            src={Logo}
            alt="Nandic logo, logo, online computer training"
          />
        </Link>
        <div className="navBarItems">
          <Link to="/categories" className="navItem flex">
            {/* <a href="#" className="navItem flex"> */}
            <text>Category</text>
            <MenuIcon fontSize="medium" />
            {/* </a> */}
          </Link>

          <form action="" className="navForm flex">
            <input
              type="text"
              name="search"
              id="navSearch"
              placeholder="Search.."
            />
            <button type="navSearch">
              <SearchIcon fontSize="large" color="red" />
            </button>
          </form>

          <Link to="/business" className="navItem flex">
            <span>Business</span>
            <span>
              <KeyboardArrowRightIcon />
            </span>
          </Link>

          <Link to="/company" className="navItem flex">
            <span>Company</span>
            <span>
              <KeyboardArrowRightIcon />
            </span>
          </Link>
        </div>
        <figure className="navFigure flex">
          <Link to="/login" className="navBtn" id="login">
            Login
          </Link>
          <Link to="/register" className="navBtn" id="reg">
            Create Account
          </Link>
          <a href="#" className="navLang ">
            <NightlightRoundIcon style={{ fontSize: "3.6rem" }} />
          </a>
        </figure>
      </div>
      <HomeScroller />
    </header>
  );
}

export default Header;
