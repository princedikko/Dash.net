import React from "react";
import infoImage from "../images/info.png";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import VoiceOverOffIcon from "@mui/icons-material/VoiceOverOff";
function SectionInfo() {
  return (
    <section className="sectionInfo">
      <div className="infoContainer ff merg">
        <div className="infoDiscription flex">
          <h2 className="infoHeading">
            <span>Our</span> Transaction Methods
          </h2>
          <p className="infoContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            dolores magnam eveniet, in accusantium natus rerum quibusdam quaerat
            iusto veniam autem aut ex voluptatum voluptas corrupti sint,
            mollitia sequi voluptatem asperiores consequatur sequi voluptatem
            asperiores consequatur laborum eaque esse.
          </p>
          <div className="regTransaction flex">
            <div className="infoRegIcon">
              <RecordVoiceOverIcon style={{ fontSize: "4rem" }} />
            </div>
            <div className="theInfo flex">
              <h4>Info On Registered Transaction</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                hic enim consequuntur! Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Sit hic enim consequuntur!
              </p>
            </div>
          </div>
          <div className="noneTransaction flex">
            <div className="infoNoneIcon">
              <VoiceOverOffIcon style={{ fontSize: "4rem" }} />
            </div>
            <div className="theInfo flex">
              <h4>Info None-Registered Transaction</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                hic enim consequuntur! Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Sit hic enim consequuntur!
              </p>
            </div>
          </div>
        </div>
        <div className="infoIllustration">
          <div className="infoCycle">
            <div className="infoCycleLeft">&nbsp;</div>
            <div className="infoCycleRight">&nbsp;</div>
          </div>
          <figure className="infoImage ">
            <img src={infoImage} alt="Lorem Ipsum" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default SectionInfo;
