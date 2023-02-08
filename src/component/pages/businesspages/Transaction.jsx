import React from "react";
import { Link } from "react-router-dom";
import { AsideBusiness, BusinessHeader } from "../Business";
// import transactionLink from "./transactionLink.js";

import myImage from "./logos/mtna.jpg";
import Nepa from "./logos/download.jpg";
import Nepas from "./logos/download.png";
import Glo from "./logos/glod.png";
import Tv from "./logos/stm.jpg";
import Air from "./logos/airteld.jpg";

// icon

function TransCard(props) {
  return (
    <Link className="transLink">
      <figure className="transCardCont">
        <figure className="transCardLogo">
          <img src={props.Logo} alt={props.attribute} />
        </figure>
        <span>{props.text}</span>
      </figure>
    </Link>
  );
}

function TrasactionCategories() {
  return (
    <div className="transCont golf golf2">
      <TransCard
        Logo={myImage}
        attribute="Dash.net/buy data"
        text="Buy Data Bundle"
      />
      <TransCard
        Logo={Tv}
        attribute="Dash.net/buy data"
        text="Pay Television"
      />
      <TransCard Logo={Air} attribute="Dash.net/buy data" text="Buy Airtime" />
      <TransCard
        Logo={Nepa}
        attribute="Dash.net/buy data"
        text="Pay Electricity"
      />
      <TransCard
        Logo={Nepas}
        attribute="Dash.net/buy data"
        text="Convert Airtime to Cash"
      />
      <TransCard
        Logo={Glo}
        attribute="Dash.net/buy data"
        text="Send SMS in Bulks"
      />
    </div>
  );
}

function Transaction() {
  return (
    <section className="sectionTransactionpage">
      <div className="businessPagaContainer">
        <aside>
          <div className="bizNav">
            <AsideBusiness
              classa="sideNavItemBiz"
              classb="sideNavItemBiz active"
              classc="sideNavItemBiz "
              classd="sideNavItemBiz "
            />
          </div>
        </aside>
        <div className="bizContent">
          <div>
            <BusinessHeader heading="Transaction" />
          </div>
          <div className="bizDisp">
            <TrasactionCategories />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transaction;
