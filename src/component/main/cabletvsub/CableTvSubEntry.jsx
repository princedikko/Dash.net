import React from "react";

// Icons
// import LightModeIcon from "@mui/icons-material/LightMode";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import NextWeekIcon from "@mui/icons-material/NextWeek";
import WeekendIcon from "@mui/icons-material/Weekend";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

function CableTvSubEntry(props) {
  return (
    <div className="tvCardCont">
      <figure className="theTvCard">
        <figure className="tvCardFront">
          <div className="tvcImg">
            <figure className="tvCardLogo">
              <img src={props.imgUrl} alt="dash.net sub!" />
            </figure>
          </div>
          <aside className="tvStation">{props.station}</aside>
          <p className="tvCardDisc">{props.discription}</p>

          <div className="tvcBottom flex">
            <div className="tVdaily">
              <figure className="tvCardIcon d">
                <LightModeOutlinedIcon fontSize="large" />
              </figure>
              <span className="tvSubPrice">{props.dPrice}</span>
              <span className="DurationTv">Daily</span>
            </div>
            <div className="tVweekly">
              <figure className="tvCardIcon w">
                <WeekendIcon fontSize="large" />
              </figure>
              <span className="tvSubPrice">{props.wPrice}</span>
              <span className="DurationTv">Weekly</span>
            </div>
            <div className="tVmonthly">
              <figure className="tvCardIcon m">
                <CalendarMonthOutlinedIcon fontSize="large" />
              </figure>
              <span className="tvSubPrice">{props.mPrice}</span>
              <span className="DurationTv">Monthly</span>
            </div>
          </div>
        </figure>
        <figure className="tvCardRear">
          <p>Only</p>
          <div className="tvRearPrice">{props.backDisc}</div>
          <div className="tvCardBtnCont">
            <a href="#" className="tvCardBtn">
              Subscribe Tv
            </a>
          </div>
        </figure>
      </figure>
    </div>
  );
}

export default CableTvSubEntry;
