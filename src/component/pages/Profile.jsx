import React from "react";
import { Link } from "react-router-dom";
import "./profile/profile.css";
// Images
import Dp from "./profile/othman.jpg";
// Icons
// import DashBicon from "@mui/icons-material/DashboardOutlined";
import DashBicon from "@mui/icons-material/PixOutlined";
import BankIcon from "@mui/icons-material/AccountBalanceOutlined";
import AffiliateIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import HelpIcon from "@mui/icons-material/HelpCenterOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import FeedbackIcon from "@mui/icons-material/FeedbackOutlined";
import TermsIcon from "@mui/icons-material/GavelOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsActiveOutlined";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

function Profile() {
  return (
    <section className="sectionProfile">
      <div className="profilePageContainer">
        <aside className="asideProfile">
          <div className="profileAsideCont">
            <div className="profileSideTop">
              <Link>
                <div className="profileAccount">
                  <figure className="accountImg">
                    <img src={Dp} alt="dikko" />
                  </figure>
                  <h2>O.D Othman</h2>
                  <p>$5467.80</p>
                </div>
              </Link>
            </div>
            <div className="profileAsidePrimary">
              <ul>
                <li>
                  <Link className="profileLinks active">
                    <DashBicon fontSize="large" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link className="profileLinks ">
                    <BankIcon fontSize="large" />
                    <span>Funding</span>
                  </Link>
                </li>
                <li>
                  <Link className="profileLinks">
                    <AffiliateIcon fontSize="large" />
                    <span>Affiliation</span>
                  </Link>
                </li>
                <li>
                  <Link className="profileLinks">
                    <HelpIcon fontSize="large" />
                    <span>Help</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="profileCompLink">
              <p>Dash Hub</p>
              <ul>
                <li>
                  <Link className="profileLinks ">
                    <SettingsIcon fontSize="large" />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link className="profileLinks ">
                    <FeedbackIcon fontSize="large" />
                    <span>Feedback</span>
                  </Link>
                </li>
                <li>
                  <Link className="profileLinks">
                    <TermsIcon fontSize="large" />
                    <span>Terms</span>
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="profileLinks">
                    <PowerSettingsNewIcon fontSize="large" />
                    <span>Logout?</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <div className="prifleCont">
          <div className="profileSliderPage">
            <header className="profileHeader flex">
              <div className="flex">
                <Link to="/business" className="profileNav">
                  <WorkHistoryOutlinedIcon fontSize="large" />
                  <span>Business</span>
                </Link>
              </div>
              <div className="prRighNav flex">
                <Link>
                  <NotificationsIcon style={{ fontSize: "2.4rem" }} />
                </Link>
                <Link className="profileInfo flex">
                  <span>O.D Othman</span>
                  <figure className="dpIconImg">
                    <img src={Dp} alt="" />
                  </figure>
                </Link>
              </div>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
