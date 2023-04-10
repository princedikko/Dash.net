import React from "react";

import QrCode from "@mui/icons-material/QrCodeScanner";
import Wallet from "@mui/icons-material/AccountBalanceWallet";

function WalletMethod() {
  return (
    <div>
              <h2 className="paymenttitle"><Wallet style={{fontSize: "3.4rem"}}/> <span>Pay with wallet</span></h2>
    <form action="php" id="walletPay">
      <div>
        <label htmlFor="WlmAmount">Amount</label>
        <input type="number" placeholder="Enter amount.." required/>
      </div>
      <div>
        <label htmlFor="wallet">Wallet</label>
        <select name="select" id="Wlmselect" required>
          <option value="" selected hidden disabled>Select your Wallet</option>
          <option value="Paypal">Paypal</option>
          <option value="opay">Opay</option>
          <option value="wstunion">Wester Union</option>
        </select>
      </div>
      <button type="wlmSubmit">Proceed to Wallet</button>
    </form>
    </div>
  );
}

export default WalletMethod;
