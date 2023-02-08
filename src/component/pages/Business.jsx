import React from "react";
import NavBar from "../header/NavBar";
import "./css/business.css";
// pages
// import businessEntry from "./businesspages/businessEntry";
import SiteCategories from "./businesspages/SiteCategories";
import Transaction from "./businesspages/Transaction.jsx";
// Dependencies
import { Link } from "react-router-dom";
// images
// import Logobiz from "../images/logo.png";
import Logobiz from "./businesspages/dashh.png";

//  icons
import BusinessIcon from "@mui/icons-material/Business";
import PaidIcon from "@mui/icons-material/Paid";
// import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AffiliateIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import AppsIcon from "@mui/icons-material/Apps";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import FiberPinIcon from "@mui/icons-material/FiberPin";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import GavelIcon from "@mui/icons-material/Gavel";
import CookieIcon from "@mui/icons-material/Cookie";

function AsideBusiness(props) {
  return (
    <div>
      <figure className="asideheader">
        <div className="bizLogo">
          <Link to="/">
            <img src={Logobiz} alt="dash.net" />
          </Link>
        </div>
        <div>
          <Link className="bizBtn" style={{ color: "#fff" }} to="/profile">
            Profile
          </Link>
        </div>
      </figure>
      <div className="bizAsideLink">
        <Link to="/business" className={props.classa}>
          <AppsIcon style={{ fontSize: "1.9rem" }} />{" "}
          <span> Our Categories</span>
        </Link>
        <Link to="/transaction" className={props.classb}>
          <ReceiptLongIcon style={{ fontSize: "1.9rem" }} />
          <span>Transaction</span>
        </Link>
        <Link to="/generate" className={props.classc}>
          <FiberPinIcon style={{ fontSize: "1.9rem" }} />
          <span> Generate Pins</span>
        </Link>
        <Link to="/pricing" className={props.classd}>
          <PaidIcon style={{ fontSize: "1.9rem" }} />
          <span> Pricing</span>
        </Link>
      </div>
      <div className="bizAsideButtom">
        <h6>Company</h6>
        <Link
          to="/reportproblems"
          style={{ color: "#999" }}
          className="sideNavItemBiz"
        >
          <ReportProblemIcon style={{ fontSize: "1.5rem" }} />
          <span>Report a problem</span>
        </Link>
        <Link
          to="/contactcompany"
          style={{ color: "#999" }}
          className="sideNavItemBiz"
        >
          <ContactSupportIcon style={{ fontSize: "1.7rem" }} />{" "}
          <span>Contact us</span>
        </Link>
        <Link
          to="/company"
          style={{ color: "#999" }}
          className="sideNavItemBiz"
        >
          <GavelIcon style={{ fontSize: "1.7rem" }} />{" "}
          <span> Terms of Service</span>
        </Link>
        <Link
          to="/company"
          style={{ color: "#999" }}
          className="sideNavItemBiz"
        >
          <CookieIcon style={{ fontSize: "1.7rem" }} /> <span> Cookies</span>
        </Link>
      </div>
    </div>
  );
}

function BusinessHeader(props) {
  return (
    <div className="bizHeader">
      <div className="headerBiz flex">
        {" "}
        {props.icon}
        <span>{props.heading}</span>
      </div>
      <ul className="bizHeadItems">
        <Link to="/affiliation" className="profileLinks">
          <AffiliateIcon fontSize="large" />
          <span>Affiliation</span>
        </Link>
        <li>
          <Link to="/register">Sign up</Link>
        </li>
      </ul>
    </div>
  );
}
function Business() {
  return (
    <section className="sectionBusiness">
      <div className="businessPagaContainer">
        <aside>
          <div className="bizNav">
            <AsideBusiness
              classa="sideNavItemBiz active"
              classb="sideNavItemBiz "
              classc="sideNavItemBiz "
              classd="sideNavItemBiz "
            />
          </div>
        </aside>
        <div className="bizContent">
          <div>
            <BusinessHeader
              heading="Business New"
              icon={
                <ShoppingCartIcon
                  style={{ fontSize: "3.4rem", color: "#00acee" }}
                />
              }
            />
          </div>
          <div className="bizDisp">
            <SiteCategories />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Business;
export { AsideBusiness, BusinessHeader };
