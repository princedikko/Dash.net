import React from "react";
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




  const [debitCard, setDebitCard] = React.useState(false);
  function updateDebitCard() {
    setDebitCard(true);
  }

  const [airtimePay, setAirtimePay] = React.useState(false);
  function updateAirtimePay() {
    setAirtimePay(true);
  }

  const [bankTrans, setBankTrans] = React.useState(false);

  function updateBankTrans() {
    setBankTrans(true);
  }

function updateDebitCard(){
  document.querySelector(".methodCard").style.display = "block"; 
}
function updateAirtimePay(){

  // document.querySelectorAll(".hidenCont").classList.remove(".hidenCont");
  document.querySelector(".methodAir").style.display = "block"; 
  // document.querySelectorAll(".hidenCont").style.display = "none"
}
function updateBankTrans(){
  document.querySelector(".methodBank").style.display = "block"; 
}
function updateWalllet(){
  document.querySelector(".methodWallet").style.display = "block"; 
}
function updateCoupon(){
  document.querySelector(".methodCoupon").style.display = "block"; 

}

  return (
    <figure className="paymentMethods golf">
      <div className="paymentDisplay">

       <div className="methodCard hidenCont">
        <DebitCard />
       </div>
       <div className="methodAir hidenCont">
       <AirtimePayment />
       </div>
        
       <div className="methodBank hidenCont">
       <Banktransfer />
       </div>
       <div className="methodWallet hidenCont">
       <WalletMethod />
       </div>
       <div className="methodCoupon hidenCont">
       <Coupons /> 
       </div>
      </div>
      <div className="paymentItems ">
        <ul>
          <h6>SELECT PAYMENT OPTION</h6>
            <Link className="methods" onClick={updateDebitCard}>
          <li>
            <PaymentsIcon className="iconMth" />
              Card
          </li>
            </Link>
            <Link className="methods" onClick={updateAirtimePay}>
          <li>
            <StyleIcon className="iconMth" />
              Pay with Airtime
          </li>
            </Link>
            <Link className="methods" onClick={updateBankTrans}>
          <li>
            <SyncAltIcon className="iconMth" />
              Bank Transfer
          </li>
            </Link>
            <Link className="methods" onClick={updateWalllet}>
          <li>
            <Wallet className="iconMth" />
              Wallet
          </li>
            </Link>
            <Link className="methods" onClick={updateCoupon}>
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
