import React from "react";
import Logo from "./images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import HomeScroller from "./header/HomeScroller";

function Header() {
  function closeNotf() {
    alert("i got clicked");
  }
  return (
    <header className="header">
      <div className="notificationBar flex">
        <p>...Welcome to Data Airtime & Subscriptions Hub!</p>
        <span className="notifClose" onClick={closeNotf}>
          <CloseIcon fontSize="2.4rem" />
        </span>
      </div>
      <div className="navBar">
        <a href="#">
          <img
            className="navLogo"
            src={Logo}
            alt="Nandic logo, logo, online computer training"
          />
        </a>
        <div className="navBarItems">
          <a href="#" className="navItem">
            Category
          </a>
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
          <a href="#" className="navItem">
            Course
          </a>
          <a href="#" className="navItem">
            Company
          </a>
        </div>
        <figure className="navFigure flex">
          <a href="#" className="navBtn" id="login">
            Login
          </a>
          <a href="#" className="navBtn" id="reg">
            Create Account
          </a>
          <a href="#" className="navLang">
            <LanguageIcon fontSize="large" />
          </a>
        </figure>
      </div>
      <HomeScroller />
    </header>
  );
}

export default Header;
