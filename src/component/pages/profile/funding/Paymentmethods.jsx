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
            <PaymentsIcon />
            <Link>Card</Link>
          </li>
          <li>
            <StyleIcon />
            <Link>Pay with Airtime</Link>
          </li>
          <li>
            <SyncAltIcon />
            <Link>Bank Transfer</Link>
          </li>
          <li>
            <Wallet />
            <Link>Wallet</Link>
          </li>
          <li>
            <QrCode />
            <Link>Coupons</Link>
          </li>
        </ul>
      </div>
    </figure>
  );
}

export default Paymentmethods;
