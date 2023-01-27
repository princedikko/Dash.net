import React from "react";

function CableTvSubEntry(props) {
  return (
    <div className="tvCardCont">
      <figure className="theTvCard">
        <figure className="tvCardFront">{props.frontDisc}</figure>
        <figure className="tvCardRear">{props.backDisc}</figure>
      </figure>
    </div>
  );
}

export default CableTvSubEntry;
