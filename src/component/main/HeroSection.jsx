import React from "react";
import heroOne from "../images/hero/banner.jpg";
import imgHeroCard from "../images/hero/heroCard.jpg";
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
        <figure>
          <img src={heroOne} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default HeroSection;
