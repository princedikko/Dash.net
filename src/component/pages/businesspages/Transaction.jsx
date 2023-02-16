import React from "react";
import { Link } from "react-router-dom";
import { AsideBusiness, BusinessHeader } from "../Business";
// Pages of Transactions
import DataSubscription from "./transaction/DataSubscription";
import Airtime from "./transaction/Airtime"
import BulksText from "./transaction/BulksText"
import NepaBill from "./transaction/NepaBill"
import TVCablesSubs from "./transaction/TVCablesSubs"
import AirtimeConverts from "./transaction/AirtimeConverts"

// import transactionLink from "./transactionLink.js";
// import Deen from "./transactionScript"
import myImage from "./logos/mtna.jpg";
import Nepa from "./logos/download.jpg";
import Nepas from "./logos/download.png";
import Glo from "./logos/glod.png";
import Tv from "./logos/stm.jpg";
import Air from "./logos/airteld.jpg";

// icon

function TransCard(props) {

  return (
    <Link className="transLink" onClick={props.page}>
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
  function DataPage(){
    document.querySelector('.transCont').style.display = "none" ;
    document.querySelector('.dataPage').style.display = "block" ;
}
  function TvPage(){
    document.querySelector('.transCont').style.display = "none" ;
    document.querySelector('.tvPage').style.display = "block" ;
}
  function AirtimePage(){
    document.querySelector('.transCont').style.display = "none" ;
    document.querySelector('.airtimPage').style.display = "block" ;
}
  function NepaPage(){
    document.querySelector('.transCont').style.display = "none" ;
    document.querySelector('.nepaPage').style.display = "block" ;
}
  function ConvertPage(){
    document.querySelector('.transCont').style.display = "none" ;
    document.querySelector('.convtPage').style.display = "block" ;
}
  function BulksPage(){
    document.querySelector('.transCont').style.display = "none" ;
    document.querySelector('.bulkssPage').style.display = "block" ;
}

  return (
    <div className="transCont golf golf2">
      <TransCard page={DataPage}
        Logo={myImage}
        attribute="Dash.net/buy data"
        text="Buy Data Bundle"
      />
      <TransCard page={TvPage} 
        Logo={Tv}
        attribute="Dash.net/buy data"
        text="Pay Television"
      />
      <TransCard  page={AirtimePage} Logo={Air} attribute="Dash.net/buy data" text="Buy Airtime" />
      <TransCard page={NepaPage} 
        Logo={Nepa}
        attribute="Dash.net/buy data"
        text="Pay Electricity"
      />
      <TransCard page={ConvertPage} 
        Logo={Nepas}
        attribute="Dash.net/buy data"
        text="Convert Airtime to Cash"
      />
      <TransCard page={BulksPage} 
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
          <div className="dataPage">
            <DataSubscription />
          </div>
          <div className="tvPage">
            <TVCablesSubs />
          </div>
          <div className="airtimPage">
            <Airtime />
          </div>
          <div className="nepaPage">
            <NepaBill />
          </div>
          <div className="convtPage">
            <AirtimeConverts />
          </div>
          <div className="bulkssPage">
            <BulksText />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transaction;
