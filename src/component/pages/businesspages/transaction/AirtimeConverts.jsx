import React from "react";
import ConvertCashDetails from "./ConvertCashDetails";

// ?logos
import MtnLogo from "../logos/mtna.jpg"
import GloLogo from "../logos/glod.png"
import AirtelLogo from "../logos/airteld.jpg"
import EtisLogo from "../logos/etid.jpg"
// icons 
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';



function AirtimeConverts() {
   
    const [convertAirtime, setConvertAirtime] = React.useState(false);
    function DashNumber() {
        setConvertAirtime(true)
    }

function ConvertingAirtime() {
    const [switchNetwork, setSwitchNetwork ] = React.useState("");

    const toggleNet = function() {
        switch (switchNetwork) {
            case "mtn":
                return <img src={MtnLogo} alt="dash data" /> 
            case "glo":
                return <img src={GloLogo} alt="dash data" /> 
            case "airtel":
                return <img src={AirtelLogo} alt="dash data" /> 
            case "etisalat":
                return <img src={EtisLogo} alt="dash data" /> 

            default:
                break;
        }
    }
 
    return (
        <div className="convertMainCont">
 <h2 className="subscriptionTitle"><CurrencyExchangeIcon style={{fontSize: "3.4rem"}}/> <span>Converting Airtime </span></h2>

            <figure className="priceDisp ">
                <div className="cnvtLogoDis">
                {toggleNet()}
                    {/* <img src={MtnLogo} alt="dash data" /> */}
                </div>
                <div>

               <h5 className="recievingAmount">
                 $678.90
                </h5>
                <span>you will recieve</span>
                </div>
            </figure>
            <form action="#" id="dataForm" className="convertForm transForm">
                <div>
                <label htmlFor="network">Network</label>
               <div className="radiusCheck flex">
                    <figure>
                <input type="radio" name="mtn" id="" onChange={() => setSwitchNetwork("mtn")}/><span>MTN</span>
                    </figure>
                    <figure>
                <input type="radio" name="mtn" id="" onChange={() => setSwitchNetwork("glo")}/><span>Glo</span>
                    </figure>
                    <figure>
                <input type="radio" name="mtn" id="" onChange={() => setSwitchNetwork("airtel")}/><span>Airtel</span>
                    </figure>
                    <figure>
                <input type="radio" name="mtn" id="" onChange={() => setSwitchNetwork("etisalat")}/><span>9Mobile</span>
                    </figure>
                </div>
                {/* <label htmlFor="convertNetwork">Network Type</label>
                <select name="airToCash" id="airToCash" required>
                    <option value="" selected hidden disabled>select option</option>
                    <option value="mtn">MTN NG</option>
                    <option value="glo">GLO NG</option>
                    <option value="celtel">Airtel NG</option>
                    <option value="9mobile">9Mobile NG</option>
                </select> */}
                </div>

                <div>
                    <label htmlFor="amount">Airtime amount:</label>
                    <input type="number" placeholder="please enter amount.."  required/>
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
            <div className="airtConvMainCont"> 
           <div className="airtimeConvertsCont">  
           {convertAirtime ? <ConvertCashDetails /> : <ConvertingAirtime /> }
            </div>
            <div className="dataSubIllustration">illustrations</div>
            </div>

        </section>
    )
}

export default AirtimeConverts;