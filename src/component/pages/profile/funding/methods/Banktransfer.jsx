import React from "react";
import { Link } from "react-router-dom";
function Banktransfer() {
  return (
    <figure className="bankTransfer">
      <div className="aPheading">
        <span>
          <form action="php">
            <select name="aPamount" id="aPAmount">
              <option>Choose amount</option>
              <option value="500">NGN 500</option>
              <option value="500">NGN 1000</option>
              <option value="500">NGN 1500</option>
              <option value="500">NGN 2000</option>
            </select>
          </form>
        </span>
        <span className="apNetwork">
          <h4>$8,000</h4>
          <select name="network" id="apNetwork">
            <option value="">Select network</option>
            <option value="MTN">Mtn Ng</option>
            <option value="glo">Glo Ng</option>
            <option value="airtel">Airtel Ng</option>
            <option value="9mobile">9Mobile Ng</option>
          </select>
        </span>
      </div>
      <p>Transfer Airtime to complete this funding</p>
      <figure className="aPCard">
        <div>
          <h4>PHONE NUMBER</h4>
          <p>+23480-694-50870</p>
        </div>
        <div>
          <h4>NETWORK</h4>
          <p>MTN NG</p>
        </div>
        <div>
          <h4>BENEFICIARY</h4>
          <p>Dash Company</p>
        </div>
        <div className="aPbottom">
          the phone number is only valid for transfering/sending airtime. calls
          are not being recieved
        </div>
      </figure>
      <Link className="aPBtn">Complete funding</Link>
    </figure>
  );
}

export default Banktransfer;
