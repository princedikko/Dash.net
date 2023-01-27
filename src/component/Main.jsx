import React from "react";
import HeroSection from "./main/HeroSection";
import GalleryImage from "./main/GalleryImage";
import OurServices from "./main/OurServices";
import NetworkComponent from "./main/NetworkComponent";
import SectionInfo from "./main/SectionInfo";
import SectionFeature from "./main/SectionFeature";
import CableTvSub from "./main/CableTvSub";

function Main() {
  return (
    <main>
      <div className="heroBackground">
        <HeroSection />
      </div>
      <GalleryImage />
      <OurServices />
      <NetworkComponent />
      <CableTvSub />
      <SectionInfo />
      <SectionFeature />
    </main>
  );
}

export default Main;
