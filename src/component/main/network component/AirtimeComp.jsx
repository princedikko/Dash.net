import React from "react";

function AirtimeCard(props) {
  return (
    <figure className={props.class}>
      <h3>{props.network}</h3>
      <p>{props.price}</p>
    </figure>
  );
}

function AirtimeComp() {
  return (
    <div id="Airtime" className="airTimeComp">
      <div className="ctaAirtime flex">
        <h2>Transform your life through Technology</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. MollitiLorem
          ipsum dolor sit, amet consectetur adipisicing elit. Molliti
        </p>
        <a href="#">Explore!</a>
      </div>
      <div className="cardsAirtime golf golf2">
        <AirtimeCard
          class="airtimeCard mtnairtime"
          network="MTN"
          price="5% off"
          className="dikko"
        />
        <AirtimeCard
          class="airtimeCard gloairtime"
          network="Glo"
          price="15% off"
        />
        <AirtimeCard
          class="airtimeCard airairtime"
          network="Airtel"
          price="12% off"
        />
        <AirtimeCard
          class="airtimeCard etiairtime"
          network="Etisalat"
          price="0.5% off"
        />
      </div>
    </div>
  );
}

export default AirtimeComp;
