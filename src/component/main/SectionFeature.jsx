import React from "react";
import featureImg from "../images/feature.jpg";
function SectionFeature() {
  return (
    <section className="sectionFeature ff">
      <div className="featureContainer">
        <div className="featureDiscription">
          <h2 className="featureHeading">System Development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            veritatis pariatur eaque cumque, non unde Officiis veritatis
            pariatur .
          </p>
          <a className="featureBtn" href="#">
            Explore more
          </a>
          <h4>
            <a href="#" className="underHover">
              Developers and Property Owners &rarr;
            </a>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit
            eos libero iste ad quos ullam deserunt voluptatum accusamu.
          </p>
        </div>
        <div className="featureIllustration">
          <img src={featureImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SectionFeature;
