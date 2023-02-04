import React from "react";
import { Link } from "react-router-dom";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HelpIcon from "@mui/icons-material/Help";

// Images
import Logo from "../images/logo.png";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img
          className="navLogo"
          src={Logo}
          alt="Nandic logo, logo, online computer training"
        />
      </Link>
      <div className="navBarItems">
        <Link className="navItem flex">
          {/* <a href="#" className="navItem flex"> */}
          <span>Category</span>
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
        <Link to="/help" className="navLang ">
          <HelpIcon style={{ fontSize: "3.6rem" }} />
        </Link>
      </figure>
    </div>
  );
}

export default NavBar;
