import React from "react";
import CableTvSubEntry from "./cabletvsub/CableTvSubEntry";
import tvCardContent from "./cabletvsub/cabletvinn";

function CreateTvCard(ex) {
  return (
    <CableTvSubEntry key={ex.id} frontDisc={ex.frontDisc} backDisc={ex.bDisc} />
  );
}

function CableTvSub() {
  return (
    <section className="sectionTvCable">
      <div className="tvCableSubContainer merg flex">
        {tvCardContent.map(CreateTvCard)}
      </div>
    </section>
  );
}

export default CableTvSub;
