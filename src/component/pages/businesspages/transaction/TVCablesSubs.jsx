import React from "react";
import MtnLogo from "../logos/stm.jpg"

function TVCableSubs() {
    return (
        <section className="sectionCableTvSubs">
 <div className="TvCableSubs"> 
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
                <label htmlFor="service">Service</label>
                <select name="dataNet" id="" required>
                    <option value="" disabled selected hidden>select option</option>
                    <option value="startimes">Startimes</option>
                    <option value="gotv">GoTv</option>
                    <option value="DSTV">DSTV</option>
                </select>
                </div>

                <div>
                    <label htmlFor="tvType">Network Type:</label>
                    <select name="tvNetType" id="tvSubsType" required>
                        <option value="" disabled selected hidden >choose an option</option>
                        <option value="nova">Startimes Nova</option>
                        <option value="basic">Startimes Basic [Antenna]</option>
                        <option value="classic">Startimes Classic [Antenna]</option>
                        <option value="smart">Startimes Smart [Dish]</option>
                        <option value="super">Startimes Super [Dish]</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="tvDuratoin">Duration:</label>
                    <select name="tvNetType" id="tvSubsType" required>
                        <option value="" hidden disabled selected>Select option</option>
                        <option value="day">One Day</option>
                        <option value="week">One Week</option>
                        <option value="month">One Month</option>
                        
                    </select>
                </div>
                <div>
                    <label htmlFor="smartcard">Smart-Card Number:</label>
                    <input type="number" name="dataNumber" placeholder="Enter number..." required/>
                </div>
                <button>
                    Purchase data
                </button>

            </form>
            </div>
        </section>
    )
}

export default TVCableSubs;
