import React from "react";
import { etisalatdatainn } from "./databunldeinn.js";
import Mtnflyer from "../../images/hero/heroCard.jpg";

function DataBundleEntry(props) {
  return (
    <div className="dataCard">
      <h3>{props.heading}</h3>
      <p>{props.discription}</p>
    </div>
  );
}

function CreateDataCard(othman) {
  return (
    <DataBundleEntry
      key={othman.id}
      heading={othman.heading}
      discription={othman.text}
    />
  );
}

function DataBundleEtisalat() {
  return (
    <div className="mtnComponent flex">
      <figure className="imgComponent">
        <img src={Mtnflyer} alt="dash data subscription website" />
        <a href="#" className="btnExplore">
          Explore more!
        </a>
      </figure>
      <figure className="cardComponent golf golf5">
        {etisalatdatainn.map(CreateDataCard)}
      </figure>
    </div>
  );
}

export default DataBundleEtisalat;
