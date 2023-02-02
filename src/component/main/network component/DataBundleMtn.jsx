import React from "react";
import DataBundleEntry from "./DataBundleEntry";
import { databundleinn } from "./databunldeinn.js";
import Mtnflyer from "../../images/hero/heroCard.jpg";

// importing Images

function CreateDataCard(props) {
  return (
    <DataBundleEntry
      key={props.id}
      heading={props.heading}
      discription={props.discription}
      imgUrl={props.img}
    />
  );
}

function DataBundleMtn() {
  return (
    <div className="mtnComponent">
      <figure className="imgComponent">
        <img src={Mtnflyer} alt="dash data subscription website" />
        <a href="#" className="btnExplore">
          Explore more!
        </a>
      </figure>
      <figure className="cardComponent golf golf4">
        {databundleinn.map(CreateDataCard)}
      </figure>
    </div>
  );
}

export default DataBundleMtn;
