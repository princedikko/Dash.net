import React from "react";

function AirtimeCard(props) {
  return (
    <figure className="airtimeCard">
      <h3>{props.network}</h3>
      <p>{props.price}</p>
    </figure>
  );
}

function AirtimeComp() {
  return (
    <div className="airTimeComp flex">
      <div className="ctaAirtime flex">
        <h2>Transform your life through Technology</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. MollitiLorem
          ipsum dolor sit, amet consectetur adipisicing elit. Molliti
        </p>
        <a href="#">Explore!</a>
      </div>
      <div className="cardsAirtime golf golf2">
        <AirtimeCard network="MTN" price="5% off" />
        <AirtimeCard network="Glo" price="15% off" />
        <AirtimeCard network="Airtel" price="12% off" />
        <AirtimeCard network="Etisalat" price="0.5% off" />
      </div>
    </div>
  );
}

export default AirtimeComp;
