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
// import myImage from "./logos/mtna.jpg";
// import Nepa from "./logos/download.jpg";
// import Nepas from "./logos/download.png";
// import Glo from "./logos/glod.png";
// import Tv from "./logos/stm.jpg";
import Air from "./logos/airteld.jpg";

// icon
import CellTowerIcon from '@mui/icons-material/CellTower';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TungstenIcon from '@mui/icons-material/Tungsten';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';

function TransCard(props) {

  return (
    <Link className="transLink" onClick={props.page}>
      <figure className="transCardCont">
        <figure id="transCardLogo" className={props.class}>
          {props.logo} 
        </figure>
        <div className="transCardDisc"> 
        <span>{props.text}</span>
        <p>{props.parag}</p>
        </div>
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
        logo={<CellTowerIcon style={{fontSize: "3.4rem"}} />}
        attribute="Dash.net/buy data"
        text="Buy Data Bundle" parag=" Lorem ipsum, dolor sit amet consectetur sicing elit. Distinctio!
        "
        class="dataGrad"
      />
      <TransCard page={TvPage} 
        logo={<LiveTvIcon style={{fontSize: "3.4rem"}} />} 
        attribute="Dash.net/buy data"
        text="Pay Television" parag="Lorem ipsum, dolor sit amet consectetur sicing elit. Distinctio!"
        class="dataGrad"
        />
      <TransCard  page={AirtimePage} Logo={Air} 
      attribute="Dash.net/buy data" text="Buy Airtime" 
      parag="Lorem ipsum, dolor sit amet consectetur sicing elit. Distinctio!"
      class="dataGrad"
      logo={<PhonelinkRingIcon style={{fontSize: "3.4rem"}} />} 
         />

      <TransCard page={NepaPage} 
        // Logo={Nepa}
        attribute="Dash.net/buy data"
        text="Pay Electricity" parag="Lorem ipsum, dolor sit amet consectetur sicing elit. Distinctio!"
        class="dataGrad"
        logo={<TungstenIcon style={{fontSize: "3.4rem"}} /> }
        />
      <TransCard page={ConvertPage} 
        
        logo={<CurrencyExchangeIcon style={{fontSize: "3.4rem"}} /> }
        attribute="Dash.net/buy data"
        text="Convert Airtime to Cash" parag="Lorem ipsum, dolor sit amet consectetur sicing elit. Distinctio!"
        class="dataGrad"
        />
      <TransCard page={BulksPage} 
      logo={<MarkUnreadChatAltIcon style={{fontSize: "3.4rem"}} /> }
        attribute="Dash.net/buy data"
        text="Send SMS in Bulks" parag="Lorem ipsum, dolor sit amet consectetur sicing elit. Distinctio!"
        class="dataGrad"
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
