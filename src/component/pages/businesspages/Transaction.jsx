import React from "react";
import { Link } from "react-router-dom";
import { AsideBusiness, BusinessHeader } from "../Business";

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
            <h2>Transaction page here</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transaction;
