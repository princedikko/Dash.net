import React from "react";
import MtnLogo from "../logos/glod.png"

function Airtime() {
    return (
        <section className="sectionAirtimeSubs">
            <div className="AirtimeRechargeConts"> 
            <figure className="priceDisp">
                <div>
                    <img src={MtnLogo} alt="dash data" />
                </div>
                <div>

               <h5>
                 $678.90
                </h5>
                <span>Your Price</span>
                </div>
            </figure>
            <form action="#" id="airtimeForm" className="transForm">
                <div>
                <label htmlFor="network">Network</label>
                <select name="airtimeNet" id="">
                    <option value="">select network</option>
                    <option value="mtn">MTN NG</option>
                    <option value="glo">Glo NG</option>
                    <option value="airtel">Airtel NG</option>
                    <option value="9mobile">9mobile NG</option>
                </select>
                </div>

                <div>
                    <label htmlFor="airtimeamount">Amount</label>
                    <input type="number" placeholder="Enter amount..."/>
                </div>
                <div>
                    <label htmlFor="number">Phone Number:</label>
                    <input type="number" name="airtimeNumber" placeholder="Enter number..."/>
                </div>
                <button>
                    Proceed
                </button> 
            </form>
            </div>
            
        </section>
    )
}

export default Airtime;