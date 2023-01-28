import React from "react";
import heroOne from "../images/hero/banner2.jpg";
import imgHeroCard from "../images/hero/heroCard2.jpg";

// Icons
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function HeroSection() {
  return (
    <div className="heroContainer flex">
      <div className="heroCard golf golf2">
        <a href="#">
          <img src={imgHeroCard} alt="my image" />
        </a>
        <a href="#">
          <img src={imgHeroCard} alt="my image" />
        </a>
        <a href="#">
          <img src={imgHeroCard} alt="my image" />
        </a>
        <a href="#">
          <img src={imgHeroCard} alt="my image" />
        </a>
      </div>
      <div className="heroSlide ">
        <figure className="heroSlider">
          <img src={heroOne} alt="dikko" />
        </figure>
        <div className="arrow forward">
          <ArrowForwardIosOutlinedIcon />
        </div>
        <div className="arrow backword">
          <ArrowBackIosOutlinedIcon />
        </div>
        <div className="dots">
          <div className="dotsItems 1">&nbsp;</div>
          <div className="dotsItems 2">&nbsp;</div>
          <div className="dotsItems 2">&nbsp;</div>
          <div className="dotsItems 3">&nbsp;</div>
          <div className="dotsItems 4">&nbsp;</div>
          <div className="dotsItems 5">&nbsp;</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
