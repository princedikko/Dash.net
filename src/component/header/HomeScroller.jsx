import React, { useState } from "react";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";

function HomeScroller() {
  return (
    <div className="homeScroll ">
      <ul className="flex">
        <li>
          <a href="#" className="category flex">
            <ViewCompactIcon fontSize="large" /> <span>Site Overview</span>
          </a>
        </li>
        <li>
          <a href="#OurServices">Services we provide</a>
        </li>
        <li>
          <a href="#DataPlan">Data Plans</a>
        </li>
        <li>
          <a href="#Airtime">Airtime recharge</a>
        </li>
        <li>
          <a href="#CableTvSubs">TV Cable Subscribption</a>
        </li>
        <li>
          <a href="#">Airtime to Cash</a>
        </li>

        <li>
          <a href="#">Bulk text messages</a>
        </li>
        <li>
          <a href="#">NEPA Bill</a>
        </li>
      </ul>
    </div>
  );
}

export default HomeScroller;
