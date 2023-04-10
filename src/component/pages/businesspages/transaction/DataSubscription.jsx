import React from "react";
// ?logos
import MtnLogo from "../logos/mtna.jpg"
import GloLogo from "../logos/glod.png"
import AirtelLogo from "../logos/airteld.jpg"
import EtisLogo from "../logos/etid.jpg"
// ?icons 
import CellTowerIcon from '@mui/icons-material/CellTower';

function DataSubscription() {
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
    // const [switchPrice, setSwitchPrice ] = React.useState("");
    const dataInnerHtml = "myname";
    const togglePrices = function() {
        switch (dataInnerHtml) {
            case "500MB":
                return alert("Masha Allah")
            case "1GB":
                return <h5>$1GB</h5> 
            case "1.5GB":
                return <h5>$1.5GB</h5> 
            case "2GB":
                return <h5>2GB</h5>

            default:
                break;
        }
    }
    return (
        <section className="sectionDataSubs">
            <div className="dataSubConts"> 
            <div className="dataSubForms">
            <h2 className="subscriptionTitle"><CellTowerIcon style={{fontSize: "3.4rem"}}/> <span>Data Subscription</span></h2>
            <figure className="priceDisp">
                <div className="dataLogoDis">
                    {toggleNet()}
                </div>
                <div>
               {/* {togglePrices()} */}
                <span>Your price</span>
                </div>
            </figure>
            <form action="" id="dataForm" className="transForm">
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
                {/* <select name="dataNet" id="toggleNetwork" required >
                    <option value=" " disabled selected hidden >select network</option>
                    <option value="mtn" onMouseEnter={() => setSwitchNetwork("mtn")}>MTN NG</option>
                    <option value="glo">Glo NG</option>
                    <option value="airtel">Airtel NG</option>
                    <option value="9mobile">9mobile NG</option>
                </select> */}
                </div>

                <div>
                    <label htmlFor="dataplan">Data Plan</label>
                    <select name="dataplan" id="dataplan" onChange={togglePrices()} required >
                        <option value=" "  disabled selected hidden>choose data plan</option>
                        <option value="mb" >500MB</option>
                        <option value="mb" >1.00GB</option>
                        <option value="mb" >1.50GB</option>
                        <option value="mb" >2.00GB</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="number" >Phone Number:</label>
                    <input type="number" name="dataNumber" placeholder="Enter number..." required/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                {/* <a onClick={() => setSwitchNetwork("mtn")}>Clickme</a> */}
                <button>
                    Purchase data
                </button>

            </form>
            </div>
            <div className="dataSubIllustration">illustrations</div>
            </div>
        </section>
    )
}

export default DataSubscription;