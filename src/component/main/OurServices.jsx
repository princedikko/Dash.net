import React from "react";
import OurServicesInn from "./OurServicesInn";
import ServicesCard from "./ServicesCard";

function OurServices() {
  return (
    <section className="sectionServices">
      <div className="ourServices merg golf golf3">
        <ServicesCard
          heading="im inn good job"
          text="Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."
        />
        <ServicesCard
          heading="im inn good job"
          text="Lorem ipsum dolor sit amet."
        />
        <ServicesCard
          heading="im inn good job"
          text="Lorem ipsum dolor sit amet."
        />
        <ServicesCard
          heading="im inn good job"
          text="Lorem ipsum dolor sit amet."
        />
        <ServicesCard
          heading="im inn good job"
          text="Lorem ipsum dolor sit amet."
        />
        <ServicesCard
          heading="im inn good job"
          text="Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."
        />
      </div>
    </section>
  );
}

export default OurServices;
