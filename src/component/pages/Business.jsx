import React from "react";
import NavBar from "../header/NavBar";
import "./css/business.css";
// pages
// import businessEntry from "./businesspages/businessEntry";
import SiteCategories from "./businesspages/SiteCategories";
import Transaction from "./businesspages/Transaction";
// Dependencies
import { Link } from "react-router-dom";
// images
import Logobiz from "../images/logo.png";

//  icons
import BusinessIcon from "@mui/icons-material/Business";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import SearchIcon from "@mui/icons-material/Search";

// Coddings

// function Testing() {
//   return <div>In the Name of Allah! Display me</div>;
// }

function Business() {
  // .........................................
  // PAGINATIONS GOES HERE
  // .........................................
  const [Categories, setCategories] = React.useState(true);

  function updateBizTransaction() {
    setCategories(false);
  }
  // --------------------------------------------------
  const [Transaction, setTransaction] = React.useState(true);
  function updatTransaction() {
    setTransaction(false);
  }
  return (
    <section className="sectionBusiness">
      <div className="businessPagaContainer">
        <aside>
          <div className="bizNav">
            <figure className="asideheader">
              <div className="bizLogo">
                <Link to="/">
                  <img src={Logobiz} alt="dash.net" />
                </Link>
              </div>
              <div>
                <Link className="bizBtn" style={{ color: "#fff" }}>
                  Link to
                </Link>
              </div>
            </figure>
            <div className="bizAsideLink">
              <Link style={{ color: "#999" }} onClick={updateBizTransaction}>
                <BusinessIcon /> &nbsp; Our Categories
              </Link>
              <Link style={{ color: "#999" }} onClick={updatTransaction}>
                <ArchitectureIcon /> &nbsp; Transaction
              </Link>
              <Link style={{ color: "#999" }}>
                <PhoneInTalkIcon /> &nbsp; Link 3
              </Link>
              <Link style={{ color: "#999" }}>
                <BrightnessMediumIcon /> &nbsp;Link 4
              </Link>
            </div>
            <div className="bizAsideButtom">
              <span>Company</span>
              <Link style={{ color: "#999" }}>
                {" "}
                <PhoneInTalkIcon /> &nbsp; Report a problem
              </Link>
              <Link style={{ color: "#999" }}>
                <BrightnessMediumIcon /> &nbsp; Contact us
              </Link>
              <Link style={{ color: "#999" }}>
                <BusinessIcon /> &nbsp; Terms of Service
              </Link>
              <Link style={{ color: "#999" }}>
                <PhoneInTalkIcon /> &nbsp; Cookies
              </Link>
            </div>
          </div>
        </aside>
        <div className="bizContent">
          <div className="bizHeader">
            <div className="headerBiz flex">
              <ShoppingCartIcon
                style={{ fontSize: "3.4rem", color: "#00acee" }}
              />
              <span>Business</span>
            </div>
            <ul className="bizHeadItems">
              <li>Constents</li>
              <li>Constents</li>
              <li>Constents</li>
              <li>Constents</li>
            </ul>
          </div>
          <div className="bizDisp">
            {Categories ? <SiteCategories /> : null};
          </div>
        </div>
      </div>
    </section>
  );
}

export default Business;
