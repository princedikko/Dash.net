import React from "react";
import { airteldatabundleinn } from "./databunldeinn";

function AirtelDataEntry(props) {
  return (
    <figure className="mediumCard">
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </figure>
  );
}

function CreateGloCard(e) {
  return <AirtelDataEntry heading={e.heading} text={e.text} />;
}

function DataBundleAirtel() {
  return (
    <div className="airtelContainer flex ">
      <h2>Airtel Data Plans</h2>
      <figure className="airtelCards flex">
        {airteldatabundleinn.map(CreateGloCard)}
      </figure>
    </div>
  );
}

export default DataBundleAirtel;
