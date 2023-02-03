import React from "react";
import { Link } from "react-router-dom";
import "./css/profile.css";
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

function ProfileSideNav(props) {
  return (
    <div>
      <div className="profileSideTop">
        <Link to="/account">
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
            <Link to="/profile" className={props.class1}>
              <DashBicon fontSize="large" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/funding" className={props.class2}>
              <BankIcon fontSize="large" />
              <span>Funding</span>
            </Link>
          </li>
          <li>
            <Link to="/affiliation" className={props.class3}>
              <AffiliateIcon fontSize="large" />
              <span>Affiliation</span>
            </Link>
          </li>
          <li>
            <Link to="/help" className={props.class4}>
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
            <Link to="/accountsetting" className="profileLinks ">
              <SettingsIcon fontSize="large" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/feedback" className="profileLinks ">
              <FeedbackIcon fontSize="large" />
              <span>Feedback</span>
            </Link>
          </li>
          <li>
            <Link to="/company" className="profileLinks">
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
  );
}

function ProfileHeader() {
  return (
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
        <Link to="/account" className="profileInfo flex">
          <span>O.D Othman</span>
          <figure className="dpIconImg">
            <img src={Dp} alt="" />
          </figure>
        </Link>
      </div>
    </header>
  );
}

function Profile() {
  return (
    <section className="sectionProfile">
      <div className="profilePageContainer">
        <aside className="asideProfile">
          <div className="profileAsideCont">
            <ProfileSideNav
              class1="profileLinks active"
              class2="profileLinks "
              class3="profileLinks "
              class4="profileLinks "
            />
          </div>
        </aside>
        <div className="prifleCont">
          <div className="profileSliderPage">
            <ProfileHeader />
            <div className="profileBalance">
              <ul className="profileBlist">
                <li className="profileHead">
                  <h3>
                    <HelpIcon
                      fontSize="large"
                      style={{ color: "#cccccc", fontSize: "3.4rem" }}
                    />
                    <span>647</span>
                  </h3>
                  <p>Total certificates</p>
                </li>
                <li className="profileHead">
                  <h3>
                    <HelpIcon
                      fontSize="large"
                      style={{ color: "#cccccc", fontSize: "3.4rem" }}
                    />
                    <span>34</span>
                  </h3>
                  <p>Total Transaction</p>
                </li>
                <li className="profileHead">
                  <h3>
                    <HelpIcon
                      fontSize="large"
                      style={{ color: "#cccccc", fontSize: "3.4rem" }}
                    />
                    <span>897</span>
                  </h3>
                  <p>Data Purchases</p>
                </li>
                <li className="profileHead">
                  <h3>
                    <HelpIcon
                      style={{ color: "#cccccc", fontSize: "3.4rem" }}
                    />
                    <span>253</span>
                  </h3>
                  <p>Lorem ipsum dolor sit.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
export { ProfileHeader, ProfileSideNav };
