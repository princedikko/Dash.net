import React from "react";

function WalletMethod() {
  return (
    <form action="php" id="walletPay">
      <div>
        <label htmlFor="WlmAmount">Amount</label>
        <input type="number" placeholder="Enter amount.." />
      </div>
      <div>
        <label htmlFor="wallet">Wallet</label>
        <select name="select" id="Wlmselect">
          <option value="">Select your Wallet</option>
          <option value="Paypal">Paypal</option>
          <option value="opay">Opay</option>
          <option value="wstunion">Wester Union</option>
        </select>
      </div>
      <button type="wlmSubmit">Proceed to Wallet</button>
    </form>
  );
}

export default WalletMethod;
