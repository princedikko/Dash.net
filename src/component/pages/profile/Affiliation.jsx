import React from "react";
// important
import { ProfileHeader, ProfileSideNav } from "../Profile";
export { ProfileHeader, ProfileSideNav };

function Affiliation() {
  return (
    <section className="sectionAffiliationPage">
      <div className="profilePageContainer">
        <aside className="asideProfile">
          <div className="profileAsideCont">
            <ProfileSideNav
              class1="profileLinks "
              class2="profileLinks "
              class3="profileLinks active"
              class4="profileLinks "
            />
          </div>
        </aside>
        <div className="prifleCont">
          <div className="profileSliderPage">
            <ProfileHeader />
            <div className="profileBalance">
              <h2>Become an Affiliate</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Affiliation;
