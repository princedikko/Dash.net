import React from "react";
import { ProfileHeader, ProfileSideNav } from "../Profile";

function History() {
  return (
    <section className="sectionHistory">
      <div className="profilePageContainer">
        <aside className="asideProfile">
          <div className="profileAsideCont">
            <ProfileSideNav
              class1="profileLinks "
              class2="profileLinks "
              class3="profileLinks "
              class4="profileLinks active"
            />
          </div>
        </aside>
        <div className="prifleCont">
          <div className="profileSliderPage">
            <ProfileHeader />
            <div className="profileBalance">
              <h2>Account Activity Log</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
