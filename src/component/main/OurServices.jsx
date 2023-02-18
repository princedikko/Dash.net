import React from "react";
import ServicesCard from "./ServicesCard";
import MainHeading from "./MainHeading";

// Images
import mtnImg from "../images/our-services/mtnphn.png";
import gloImg from "../images/our-services/glophn.png";
import stertimeImg from "../images/our-services/startimes.png";
import dstvImg from "../images/our-services/dstv.png";
import gotvImg from "../images/our-services/gotvv.png";
import pay1 from "../images/our-services/pay1.png";
import pay2 from "../images/our-services/pay2.png";
import pay3 from "../images/our-services/pay3.png";
import nepa1 from "../images/our-services/nepa1.png";
import nepa2 from "../images/our-services/nepa2.png";
import nepa3 from "../images/our-services/nepa3.png";

import airTleImg from "../images/our-services/airtel9Mbl.png";
// Material ui icons
import LiveTvIcon from "@mui/icons-material/LiveTv";
import CellTowerIcon from "@mui/icons-material/CellTower";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

function OurServices() {
  return (
    <section className="sectionServices" id="OurServices">
      <MainHeading />
      <div className="ourServices merg golf golf3">
        <ServicesCard
          statusIcon={<SatelliteAltIcon fontSize="large" />}
          heading="Data Bundles Subscription"
          statusImage={mtnImg}
          statusImageTwo={gloImg}
          statusImageThree={airTleImg}
          textOne="MTN Data"
          textTwo="GLO Data"
          textThree="Airtel & 9Mobile"
        />
        <ServicesCard
          statusIcon={<LiveTvIcon fontSize="large" />}
          heading="Cable TV Subscriptions"
          textOne="Startimes"
          textTwo="DSTV"
          textThree="GO TV"
          statusImage={stertimeImg}
          statusImageTwo={dstvImg}
          statusImageThree={gotvImg}
        />
        <ServicesCard
          statusIcon={<CellTowerIcon fontSize="large" />}
          heading="Airtime Recharge"
          textOne="Lorem ipsum dolor"
          statusImage={nepa1}
          statusImageTwo={pay3}
          statusImageThree={pay2}
        />
        <ServicesCard
          statusIcon={<SatelliteAltIcon fontSize="large" />}
          heading="NEPA Bills Payment"
          textOne="Lorem ipsum dolor"
          statusImage={nepa1}
          statusImageTwo={nepa3}
          statusImageThree={nepa2}
        />
        <ServicesCard
          statusIcon={<AccountBalanceIcon fontSize="large" />}
          heading="Convert's Aitime to Cash"
          textOne="Lorem ipsum dolor"
          statusImage={pay1}
          statusImageTwo={pay3}
          statusImageThree={pay2}
        />
        <ServicesCard
          statusIcon={<CurrencyExchangeIcon fontSize="large" />}
          heading="Bulky Text Messages"
          textOne="Lorem ipsum dolor"
          statusImage={mtnImg}
          statusImageTwo={gloImg}
          statusImageThree={airTleImg}
        />
      </div>
    </section>
  );
}

export default OurServices;
