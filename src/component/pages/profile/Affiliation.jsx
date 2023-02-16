import React from "react";
// Components
import AffiliationInfo from "../../company/AffiliationInfo";
// important
import { ProfileHeader, ProfileSideNav } from "../Profile";



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
              <AffiliationInfo />
              <p>My Name Is Mijin Nana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Affiliation;
