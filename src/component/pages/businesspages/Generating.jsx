import React from "react";
import { Link } from "react-router-dom";
import { AsideBusiness, BusinessHeader } from "../Business";
import NepaBill from './transaction/NepaBill'



function Generating() {
  return (
    <section className="sectionGeneration">
      <div className="businessPagaContainer">
        <aside>
          <div className="bizNav">
            <AsideBusiness
              classa="sideNavItemBiz "
              classb="sideNavItemBiz "
              classc="sideNavItemBiz active"
              classd="sideNavItemBiz "
            />
          </div>
        </aside>
        <div className="bizContent">
          <div>
            <BusinessHeader heading="Generate Pins" />
          </div>
          <div className="bizDisp">
            {/* <h2>Generate Pin here</h2> */}
            <NepaBill />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Generating;
