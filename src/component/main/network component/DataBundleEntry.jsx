import React from "react";
import { Link } from "react-router-dom";
function DataBundleEntry(props) {
  return (
    <div className="dataCard ">
      <h3>{props.heading}</h3>
      <div className="cardDisc">
        <p className="periodA">
          {props.discription}
          {/* <span>Period/Duration: </span> */}
        </p>
        <aside className="flex">
          <div className="dataPriceCont">
            <div className="dataPrice">$538</div>
            <Link className="dataCardSubscribe">Subscribe!</Link>
          </div>
          <figure className="mbImg">
            <img src={props.imgUrl} alt="dash.net data and subscription site" />
          </figure>
        </aside>
      </div>
    </div>
  );
}

export default DataBundleEntry;
