import React from "react";
import { glodatabundleinn } from "./databunldeinn";

function GloDataEntry(props) {
  return (
    <a href="#" className="gloCardLink">
      <figure className="mediumCardGlo">
        <p>Data Bundle Glo</p>
        <figure className="gloCardImg">
          <img src={props.imgUrl} alt="" />
        </figure>
        <h3>{props.heading}</h3>
        <div className="gloCardTag flex">
          <span>{props.gb}</span>
          <span>{props.price}</span>
        </div>
      </figure>
    </a>
  );
}

function CreateGloCard(e) {
  return (
    <GloDataEntry
      text={e.text}
      imgUrl={e.imgUrlG}
      heading={e.heading}
      gb={e.megaBit}
      price={e.fee}
    />
  );
}

function DataBundleGlo() {
  return (
    <div className="gloComponent ff">
      <h2>This is Glo Service Data Discrition</h2>
      <figure className="gloDataCards golf golf6">
        {glodatabundleinn.map(CreateGloCard)}
      </figure>
    </div>
  );
}

export default DataBundleGlo;
