import React from "react";
import CableTvSubEntry from "./cabletvsub/CableTvSubEntry";
import tvCardContent from "./cabletvsub/cabletvinn";
// Image imports
import startimeImg from "../images/our-services/startimes.png";

function CreateTvCard(ex) {
  return (
    <CableTvSubEntry
      key={ex.id}
      station={ex.tvStation}
      discription={ex.cardDisc}
      imgUrl={startimeImg}
      dPrice={ex.daily}
      wPrice={ex.weekly}
      mPrice={ex.monthly}
      backDisc={ex.rearPrice}
    />
  );
}

function CableTvSub() {
  return (
    <section id="CableTvSubs" className="sectionTvCable">
      <div className="tvCableSubContainer merg flex">
        {tvCardContent.map(CreateTvCard)}
      </div>
    </section>
  );
}

export default CableTvSub;
