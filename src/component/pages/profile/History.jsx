import React from "react";
import { ProfileHeader, ProfileSideNav } from "../Profile";

function History() {

  function ActivilogEntry() {
    return (
      <tr>
      <td>16/02/2023 9:53pm</td>
      <td>Lorem ipsum dolor sit amet consectetur.</td>
      <td>N9,500,000</td>
      <td>Null</td>
      <td>N95,4500,000</td>
    </tr>
    )
  }
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
              <div className="activityLogCont">
                <table>
                  <thead>
                    <th>Date</th>
                    <th>Discription</th>
                    <th>Credit</th>
                    <th>Debit</th>
                    <th>Balacne</th>
                  </thead>
                  <tbody>
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                    <ActivilogEntry />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
