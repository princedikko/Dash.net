import React from "react";
import QrCode from "@mui/icons-material/QrCodeScanner";

function Coupons() {
  return (
    <div>
      <h2 className="paymenttitle"><QrCode style={{fontSize: "3.4rem"}}/> <span>Coupons Code</span></h2>
    <form action="#" id="dashGift">
      <label htmlFor="coupon">Enter Code</label>
      <input
        type="text"
        name="coupon"
        id="dashCoupon"
        placeholder="Enter coupon code"
      />
      <button>Fund account</button>
    </form>
        </div>
  );
}

export default Coupons;
