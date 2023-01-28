import React from "react";
import DataBundleMtn from "./network component/DataBundleMtn";
import DataBundleGlo from "./network component/DataBundleGlo";
import DataBundleEtisalat from "./network component/DataBundleEtisalat";
import DataBundleAirtel from "./network component/DataBundleAirtel";
import AirtimeComp from "./network component/AirtimeComp";

function NetworkComponent() {
  return (
    <section id="DataPlan" className="sectionNetworks merg">
      <DataBundleMtn />
      <DataBundleGlo />
      <DataBundleEtisalat />
      <DataBundleAirtel />
      <AirtimeComp />
    </section>
  );
}

export default NetworkComponent;
