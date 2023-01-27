import React from "react";
import DataBundleEntry from "./DataBundleEntry";
import { databundleinn } from "./databunldeinn.js";
import Mtnflyer from "../../images/hero/heroCard.jpg";

function CreateDataCard(othman) {
  return (
    <DataBundleEntry
      key={othman.id}
      heading={othman.heading}
      discription={othman.discription}
    />
  );
}

function DataBundleMtn() {
  return (
    <div className="mtnComponent flex">
      <figure className="imgComponent">
        <img src={Mtnflyer} alt="dash data subscription website" />
        <a href="#" className="btnExplore">
          Explore more!
        </a>
      </figure>
      <figure className="cardComponent golf golf5">
        {databundleinn.map(CreateDataCard)}
      </figure>
    </div>
  );
}

export default DataBundleMtn;
