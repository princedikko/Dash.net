import React from "react";
import { Link } from "react-router-dom";

import AirtimePayment from "./methods/AirtimePayment";
import Banktransfer from "./methods/Banktransfer";
// icons
import PaymentsIcon from "@mui/icons-material/Payments";
import StyleIcon from "@mui/icons-material/Style";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import Wallet from "@mui/icons-material/AccountBalanceWallet";
import QrCode from "@mui/icons-material/QrCodeScanner";
function Paymentmethods() {
  return (
    <figure className="paymentMethods golf">
      <div className="paymentDisplay">
        {/* <AirtimePayment /> */}
        <Banktransfer />
      </div>
      <div className="paymentItems">
        <ul>
          <h6>SELECT PAYMENT OPTION</h6>
          <li>
            <PaymentsIcon className="iconMth" />
            <Link className="methods">Card</Link>
          </li>
          <li>
            <StyleIcon className="iconMth" />
            <Link className="methods">Pay with Airtime</Link>
          </li>
          <li>
            <SyncAltIcon className="iconMth" />
            <Link className="methods">Bank Transfer</Link>
          </li>
          <li>
            <Wallet className="iconMth" />
            <Link className="methods">Wallet</Link>
          </li>
          <li>
            <QrCode className="iconMth" />
            <Link className="methods">Coupons</Link>
          </li>
        </ul>
      </div>
    </figure>
  );
}

export default Paymentmethods;
