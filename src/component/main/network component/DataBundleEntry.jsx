import React from "react";

function DataBundleEntry(props) {
  return (
    <div className="dataCard ">
      <h3>{props.heading}</h3>
      <div className="cardDisc flex">
        <p>
          <span>Period/Duration: </span>
          {props.discription}
        </p>
        <aside className="flex">
          <a href="#" className="dataCardSubscribe">
            Subscribe!
          </a>
          <figure className="mbImg">
            <img src={props.imgUrl} alt="dash.net data and subscription site" />
          </figure>
        </aside>
      </div>
    </div>
  );
}

export default DataBundleEntry;
