import React from "react";
import { Link } from "react-router-dom";
import { AsideBusiness, BusinessHeader } from "../Business";
import BulksPrice from "./pricing/BulksPrice";
import DstvPricing from "./pricing/DstvPricing";
import GotvPricing from "./pricing/GotvPricing"
import PriceConvert from "./pricing/PriceConverting";
import StartimePricing from "./pricing/StartimePricing";
import PriceMtnData from "./pricing/PriceMtnData";
import PriceGloData from "./pricing/PriceGloData";
import PriceAirtelData from "./pricing/PriceAirtelData";
import Price9MobileData from "./pricing/Price9MobileData";
import PriceMtnAirtime from "./pricing/PriceMtnAirtime";


function Pricing() {
  return (
    <section className="sectionPricingPage">
      <div className="businessPagaContainer">
        <aside>
          <div className="bizNav">
            <AsideBusiness
              classa="sideNavItemBiz "
              classb="sideNavItemBiz "
              classc="sideNavItemBiz "
              classd="sideNavItemBiz active"
            />
          </div>
        </aside>
        <div className="bizContent">
          <div>
            <BusinessHeader heading="Pricing Tables " />
          </div>
          <div className="bizDisp">
            <div>
            <PriceConvert />
            </div>
            <div className="secondRow">
            <div className="bulksPrc">
              <BulksPrice />
            </div>
            <div className="startimePrCont">
              <StartimePricing />
            </div>
            </div>
            <div className="thirdRow">
              <DstvPricing />
              <GotvPricing />
            </div>
            <div className="mtnComponentC">
              <PriceMtnData />
              <PriceMtnAirtime />
            </div>
            <div className="gloComponentC">
              <PriceMtnAirtime />
              <PriceGloData />
            </div>
            <div className="airtelComponentC">
              <PriceAirtelData />
              <PriceMtnAirtime />
            </div>
            <div className="mobileComponentC">
              <PriceMtnAirtime />
              <Price9MobileData />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
