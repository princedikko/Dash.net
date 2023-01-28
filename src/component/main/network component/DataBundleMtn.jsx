import React from "react";
import DataBundleEntry from "./DataBundleEntry";
import { databundleinn } from "./databunldeinn.js";
import Mtnflyer from "../../images/hero/heroCard.jpg";

// importing Images
import imageBravo from "../../images/our-services/mtncad.png";

function CreateDataCard(mtn) {
  return (
    <DataBundleEntry
      key={mtn.id}
      heading={mtn.heading}
      discription={mtn.discription}
      imgUrl={imageBravo}
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
