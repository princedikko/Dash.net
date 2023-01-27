import React from "react";
// import OurServices from "./OurServices";
function ServicesCard(props) {
  return (
    <div className="OurServiceCard">
      <h1> {props.heading}</h1>
      <p> {props.text} </p>
    </div>
  );
}

export default ServicesCard;
