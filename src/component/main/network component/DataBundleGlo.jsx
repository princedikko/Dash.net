import React from "react";
import { glodatabundleinn } from "./databunldeinn";

function GloDataEntry(props) {
  return (
    <figure className="mediumCard">
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </figure>
  );
}

function CreateGloCard(e) {
  return <GloDataEntry heading={e.heading} text={e.text} />;
}

function DataBundleGlo() {
  return (
    <div className="gloComponent flex">
      <h2>This is Glo Service Data Discrition</h2>
      <figure className="gloDataCards golf golf6">
        {glodatabundleinn.map(CreateGloCard)}
      </figure>
    </div>
  );
}

export default DataBundleGlo;
