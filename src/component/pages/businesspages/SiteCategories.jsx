import React from "react";
import { Link } from "react-router-dom";
//  pagaes
import businessEntry from "./businessEntry";

// Icons
import SearchIcon from "@mui/icons-material/Search";

function BusinessCard(props) {
  return (
    <figure className="bizCard">
      <div className="bizCardLogo">
        <img src={props.logo} alt="dash.net" />
      </div>
      <div className="bizCardName">{props.name}</div>
      <div className="bizCardDiscription"> {props.discription}</div>
      <div className="bizCardbuttom flex">
        <p>{props.only}</p>
        <span>{props.price}</span>
        <Link style={{ color: "#fff" }} className="bizBtnSub">
          {props.btn}
        </Link>
      </div>
    </figure>
  );
}

function SiteCategories() {
  return (
    <div>
      <div className="bizSearchCont">
        <div className="bizSearch">
          <h5>Choose your items comfortably</h5>
          <div className="bizSearchInp">
            <SearchIcon style={{ fontSize: "1.8rem" }} />
            <input type="search" name="bizsearch" placeholder="Search..." />
          </div>
        </div>
        <div className="bizNote">
          <p>Othman O. Dikko, a proud Software engineer</p>
        </div>
      </div>
      <div className="bizCardsCont">
        <div className="bizCardSlider golf golf4">
          {businessEntry.map(BusinessCard)};
        </div>
      </div>
    </div>
  );
}

export default SiteCategories;
