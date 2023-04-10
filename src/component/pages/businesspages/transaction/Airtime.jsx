import React from "react";
import MtnLogo from "../logos/glod.png"
// icons 
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';


function Airtime() {
    return (
        <section className="sectionAirtimeSubs">
            <div className="AirtimeRechargeConts"> 
 <h2 className="subscriptionTitle"><PhonelinkRingIcon style={{fontSize: "3.4rem"}}/> <span>Airtime Recharge</span></h2>

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
                <div className="golf golf2">
                <div>
                <label htmlFor="network">Network</label>
                <select name="airtimeNet" id=""required>
                    <option value="" disabled selected hidden>select network</option>
                    <option value="mtn">MTN NG</option>
                    <option value="glo">Glo NG</option>
                    <option value="airtel">Airtel NG</option>
                    <option value="9mobile">9mobile NG</option>
                </select>
                </div>

                <div>
                    <label htmlFor="airtimeamount">Amount</label>
                    <input type="number" placeholder="Enter amount..."required/>
                </div>
                </div>
                <div>
                    <label htmlFor="number">Phone Number:</label>
                    <input type="number" name="airtimeNumber" placeholder="Enter number..."required/>
                </div>
                <button>
                    Proceed
                </button> 
            </form>
            </div>
            <div className="dataSubIllustration">illustrations</div>

            
        </section>
    )
}

export default Airtime;