import React from "react";
import { Link } from "react-router-dom";
// important
import { ProfileHeader, ProfileSideNav } from "../Profile";
export { ProfileHeader, ProfileSideNav };

function Funding() {
  return (
    <section className="sectionFunding">
      <div className="profilePageContainer">
        <aside className="asideProfile">
          <div className="profileAsideCont">
            <ProfileSideNav
              class1="profileLinks "
              class2="profileLinks active"
              class3="profileLinks "
              class4="profileLinks "
            />
          </div>
        </aside>
        <div className="prifleCont">
          <div className="profileSliderPage">
            <ProfileHeader />
            <div className="profileBalance">
              <h2>Funding</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Funding;
