import React from "react";
import { Link } from "react-router-dom";
import { AsideBusiness, BusinessHeader } from "../Business";

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
            <h2>Pricing Table Discriptions here</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
