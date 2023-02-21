import React from "react";
import { Link } from "react-router-dom";

import PaymentsIcon from "@mui/icons-material/Payments";


function DebitCard() {
  return (<div>
              <h2 className="paymenttitle"><PaymentsIcon style={{fontSize: "3.4rem"}}/> <span>Card payment</span></h2>

    <form action="php" id="debitCardform">
      <label htmlFor="amount">Amount:</label>
      <input type="number" placeholder="Enter amount..." required />
        <button>Proceed to funding</button> 
    </form>
  </div>
  );
}

export default DebitCard;
