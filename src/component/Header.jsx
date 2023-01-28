import React, { useState } from "react";
import { Link } from "react-router-dom";
//  Pages
import NavBar from "./header/NavBar";
// import business from "./pages/Business";
// Images
// import Logo from "./images/logo.png";

// Icons
// import SearchIcon from "@mui/icons-material/Search";
// import LanguageIcon from "@mui/icons-material/Language";
// import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import CloseIcon from "@mui/icons-material/Close";
import HomeScroller from "./header/HomeScroller";
// import MenuIcon from "@mui/icons-material/Menu";
// // import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// // import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
      <NavBar />
      <HomeScroller />
    </header>
  );
}

export default Header;
