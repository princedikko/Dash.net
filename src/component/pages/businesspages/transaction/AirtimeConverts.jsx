import React from "react";
import ConvertCashDetails from "./ConvertCashDetails";
import MtnLogo from "../logos/stm.jpg"



function AirtimeConverts() {
   
    const [convertAirtime, setConvertAirtime] = React.useState(false);
    function DashNumber() {
        setConvertAirtime(true)
    }
function ConvertingAirtime() {
 
    return (
        <div>
 <figure className="priceDisp">
                <div>
                    <img src={MtnLogo} alt="dash data" />
                </div>
                <div>

               <h5 className="recievingAmount">
                 $678.90
                </h5>
                <span>you will recieve</span>
                </div>
            </figure>
            <form action="#" id="dataForm" className="transForm">
                <div>
                <label htmlFor="convertNetwork">Network Type</label>
                <select name="airToCash" id="airToCash" required>
                    <option value="">select option</option>
                    <option value="mtn">MTN NG</option>
                    <option value="glo">GLO NG</option>
                    <option value="celtel">Airtel NG</option>
                    <option value="9mobile">9Mobile NG</option>
                </select>
                </div>

                <div>
                    <label htmlFor="amount">Airtime amount:</label>
                    <input type="number" placeholder="please enter amount.."  required/>
                </div>
                
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis soluta molestias iure.</p>
                </div>
                <button onClick={DashNumber}>
                    Convert airtime to cash
                </button>

            </form>
        </div>
    )
}

    return (
        <section className="sectionAirtimeConverts">
           <div className="airtimeConvertsCont"> 
            
           {convertAirtime ? <ConvertCashDetails /> : <ConvertingAirtime /> }
            </div>
        </section>
    )
}

export default AirtimeConverts;