import React from "react";
import { Link } from "react-router-dom";
function DebitCard() {
  return (
    <form action="php" id="debitCardform">
      <label htmlFor="amount">Amount:</label>
      <input type="number" placeholder="Enter amount..." />
      <Link>
        <button>Proceed to funding</button>
      </Link>
    </form>
  );
}

export default DebitCard;
