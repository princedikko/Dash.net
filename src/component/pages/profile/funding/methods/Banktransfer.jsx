import React from "react";
import { Link } from "react-router-dom";

function BanktransDe() {
  return (
    <figure className="bankTransfer">
      <div className="aPheading">
        <span>Dash.net</span>
        <span className="apNetwork">
          <h4>$8,000</h4>
          <p>O.D_Othman</p>
        </span>
      </div>
      <p>Transfer Airtime to complete this funding</p>
      <figure className="aPCard">
        <div>
          <h4>ACCOUNT NUMBER</h4>
          <p>017-694-50870</p>
        </div>
        <div>
          <h4>BANK NAME</h4>
          <p>ZENITH BANK</p>
        </div>
        <div>
          <h4>BENEFICIARY</h4>
          <p>Dash.net</p>
        </div>
        <div className="aPbottom">
          the account details is Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eaque!
        </div>
      </figure>
      <Link className="aPBtn">Complete funding</Link>
    </figure>
  );
}

function Banktransfer() {
  const [transclick, setTransclick] = React.useState(false);

  function updateTransClick() {
    setTransclick(true);
  }

  function BanktransEnter() {
    return (
      <form action="php" id="enBnk">
        <p>Please enter amount to fund your account</p>
        <input type="number" placeholder="Enter amount..." />
        <Link onClick={updateTransClick}>
          <button>Proceed to transfer</button>
        </Link>
      </form>
    );
  }

  return (
    <div>
      {transclick ? <BanktransDe /> : <BanktransEnter />}
      {/* <BanktransEnter /> */}
    </div>
  );
}

export default Banktransfer;
