import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../profileScript.js";
// mini Pages
import AirtimePayment from "./methods/AirtimePayment";
import Banktransfer from "./methods/Banktransfer";
import DebitCard from "./DebitCard";
import WalletMethod from "./WalletMethod";
import Coupons from "./Coupon";

// icons
import PaymentsIcon from "@mui/icons-material/Payments";
import StyleIcon from "@mui/icons-material/Style";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import Wallet from "@mui/icons-material/AccountBalanceWallet";
import QrCode from "@mui/icons-material/QrCodeScanner";

function Paymentmethods() {
  // const HidenContainers = document.querySelectorAll(".hidenCont").style.display = "none";
  
const [paymentMethod, setPaymentMethod] = useState(" ");
const togglePaymentMethod = function() {
  switch (paymentMethod) {
    case "alpha":
      return <DebitCard />;
    case "bravo":
      return <AirtimePayment />;
    case "charlie": 
    return <Banktransfer />;
    case "delta":
    return <WalletMethod />;
    case "golf": 
    return <Coupons />;
    
    default:
      return null;
  }
}

  return (
    <figure className="paymentMethods golf">
      <div className="paymentDisplay"> 
      {togglePaymentMethod()}
       
      </div>
      <div className="paymentItems ">
        <ul>
          <h6>SELECT PAYMENT OPTION</h6>
            <Link className="methods" onClick={() => setPaymentMethod("alpha")}>
          <li>
            <PaymentsIcon className="iconMth" />
              Card
          </li>
            </Link>
            <Link className="methods" onClick={() => setPaymentMethod("bravo")}>
          <li>
            <StyleIcon className="iconMth" />
              Pay with Airtime
          </li>
            </Link>
            <Link className="methods" onClick={() => setPaymentMethod("charlie")}>
          <li>
            <SyncAltIcon className="iconMth" />
              Bank Transfer
          </li>
            </Link>
            <Link className="methods" onClick={() => setPaymentMethod("delta")}>
          <li>
            <Wallet className="iconMth" />
              Wallet
          </li>
            </Link>
            <Link className="methods" onClick={() => setPaymentMethod("golf")}>
          <li>
            <QrCode className="iconMth" />
              Coupons
          </li>
              </Link>
        </ul>
      </div>
    </figure>
  );
}

export default Paymentmethods;
