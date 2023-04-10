import React from "react";
import { ProfileHeader, ProfileSideNav } from "../Profile";
// Icons
import DoneAllIcon from '@mui/icons-material/DoneAll';

function History() {

  function ActivilogEntry() {
    return (
      <tr>
        <td>
          <figure className="actLogIcon">
            <DoneAllIcon fontSize="large"/>
          </figure>
        </td>
      <td className="actLogDate"><span>16/02/2023</span><span>09:53pm</span></td>
      <td>Account funding from O.D Othman/ Zenith Bank Plc/ Card Payment</td>
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
                    <th>Statue</th>
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
