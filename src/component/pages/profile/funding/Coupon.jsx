import React from "react";

function Coupons() {
  return (
    <form action="#" id="dashGift">
      <label htmlFor="coupon">Coupon Code</label>
      <input
        type="text"
        name="coupon"
        id="dashCoupon"
        placeholder="Enter coupon code"
      />
      <button>Fund account</button>
    </form>
  );
}

export default Coupons;
