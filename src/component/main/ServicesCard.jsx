import React from "react";

function ServicesCard(props) {
  return (
    <div className="OurServiceCard">
      <div className="cardHeadingOS flex">
        <figure className="iconOS">{props.statusIcon} </figure>
        <h1>{props.heading}</h1>
      </div>
      <div className="statusImage flex">
        <figure className="imgOS flex">
          <img src={props.statusImage} alt="" />
          <span>{props.textOne}</span>
        </figure>
        <figure className="imgOS flex">
          <img src={props.statusImageTwo} alt="" />
          <span>{props.textTwo}</span>
        </figure>
        <figure className="imgOS flex">
          <img src={props.statusImageThree} alt="" />
          <span>{props.textThree}</span>
        </figure>

        {/* {props.statusImage}  */}
      </div>
    </div>
  );
}

export default ServicesCard;
