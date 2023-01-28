import React from "react";

// SwipterJs
import { Swiper, SwiperSlide } from "swiper/react";

// Component
import { airteldatabundleinn } from "./databunldeinn";

function AirtelDataEntry(props) {
  return (
    <figure className="acMediumCard flex">
      <span>Airtel Data Plan</span>
      <figure className="acImage">
        <img src={props.imgUrl} alt="dash.net" />
      </figure>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
      <a href="#" className="acBtn">
        Buy Now
      </a>
    </figure>
  );
}

function CreateAirtelCard(e) {
  return <AirtelDataEntry imgUrl={e.Image} heading={e.heading} text={e.text} />;
}

function DataBundleAirtel() {
  return (
    <div className="airtelContainer ff flex ">
      <h2>Airtel Data Plans</h2>
      <figure className="airtelCards flex">
        {airteldatabundleinn.map(CreateAirtelCard)}
      </figure>
    </div>
  );
}

export default DataBundleAirtel;
