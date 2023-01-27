import React from "react";

function DataBundleEntry(props) {
  return (
    <div className="dataCard">
      <h3>{props.heading}</h3>
      <p>{props.discription}</p>
    </div>
  );
}

export default DataBundleEntry;
