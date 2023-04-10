import React from "react";
import { Link } from "react-router-dom";

function ConvertCashDetails() {
    return (
        <section className="sectionConvertToCash">

      <div className="airtimePay">
        
        <div className="convertHeading">
        <span className="apNetwork">
            <h4>NGN9,800</h4>
            <p>Amount of Airtime</p>
          </span>
          <span className="apNetwork">
            <h4>$8,540</h4>
            <p>You will recieve</p>
          </span>
        </div>
        <p>Send or Transfer Airtime to the details below to complete the convertion</p>
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
            <p>www.dash.net</p>
          </div>
          <div className="aPbottom">
            the phone number is only valid for transfering/sending airtime.
            calls are not being recieved
          </div>
        </figure>
        <Link className="aPBtn">I Complete this transfer</Link>
      </div>
        </section>
    );
  }

  export default ConvertCashDetails;