import React from "react";
import MtnLogo from "../logos/aita.jpg"

function NepaBill() {
    return (
        <section className="sectionNepaPayment">
           <div className="nepaBillConts"> 
            <figure className="priceDisp">
                <div>
                    <img src={MtnLogo} alt="dash data" />
                </div>
                <div>

               <h5>
                 Abuja Electricity [AEDC]
                </h5>
                <span>Prepaid</span>
                </div>
            </figure>
            <form action="#" id="dataForm" className="transForm">
                <div>
                <label htmlFor="location">Electric Location</label>
                <select name="dataNet" id="" required>
                    <option value="" disabled hidden selected>select type</option>
                    <option value="abuja">Abuja Electricity</option>
                    <option value="kaduna">Kaduna Electricity</option>
                    <option value="kano">Kano Electricity</option>
                    
                </select>
                </div>

                <div>
                    <label htmlFor="dataplan">Bill Type</label>
                    <select name="dataplan" id="dataplan" required>
                        <option value="" disabled hidden selected>select type</option>
                        <option value="prepaid">Prepaid</option>
                        <option value="postpaid">Postpaid</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="number">Amount:</label>
                    <input type="number" name="dataNumber" placeholder="Enter amount..." required/>
                </div>
                <button>
                    Purchase data
                </button>

            </form>
            </div>
        </section>
    )
}

export default NepaBill;