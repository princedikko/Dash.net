import React from "react";
import MtnLogo from "../logos/mtna.jpg"
function DataSubscription() {
    return (
        <section className="sectionDataSubs">
            <div className="dataSubConts"> 
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
            <form action="#" id="dataForm" className="transForm">
                <div>
                <label htmlFor="network">Network</label>
                <select name="dataNet" id="" required>
                    <option value=" " disabled selected hidden >select network</option>
                    <option value="mtn">MTN NG</option>
                    <option value="glo">Glo NG</option>
                    <option value="airtel">Airtel NG</option>
                    <option value="9mobile">9mobile NG</option>
                </select>
                </div>

                <div>
                    <label htmlFor="dataplan">Data Plan</label>
                    <select name="dataplan" id="dataplan" required>

                        <option value=" " disabled selected hidden>choose data plan</option>
                        <option value="mb">500MB</option>
                        <option value="mb">1.00 GB</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="number" >Phone Number:</label>
                    <input type="number" name="dataNumber" placeholder="Enter number..." required/>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>
                    Purchase data
                </button>

            </form>
            </div>
        </section>
    )
}

export default DataSubscription;