import React from "react";
import { etisalatdatainn } from "./databunldeinn.js";
import Mtnflyer from "../../images/hero/heroCard.jpg";

import imageNet from "../../images/our-services/test.jpg";

function DataBundleEntry(props) {
  return (
    <div className="dataCard naijMobile">
      <h3>{props.heading}</h3>
      <p>{props.discription}</p>
      <aside className="naijMobileFigure flex ">
        <a href="#" className="dataCardSubscribe">
          Subscribe!
        </a>
        <figure className="mbImg naijMobileImg">
          <img src={props.imgUrl} alt="dash.net data and subscription site" />
        </figure>
      </aside>
    </div>
  );
}

function CreateDataCard(etisalat) {
  return (
    <DataBundleEntry
      key={etisalat.id}
      heading={etisalat.heading}
      discription={etisalat.text}
      imgUrl={imageNet}
    />
  );
}

function DataBundleEtisalat() {
  return (
    <div className="NmobileComponent">
      <figure className="etiImgComponent">
        <a href="#" className="etibtnExplore">
          Explore more!
        </a>
      </figure>
      <figure className="cardComponent golf golf4">
        {etisalatdatainn.map(CreateDataCard)}
      </figure>
    </div>
  );
}

export default DataBundleEtisalat;
