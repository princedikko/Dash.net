import React from "react";
// ?images
import StmLogo from "../logos/stm.jpg"
import GotvLogo from "../logos/gotv.jpg"
import DstvLogo from "../logos/dstv.jpg"
// icons 
import LiveTvIcon from '@mui/icons-material/LiveTv';

function TVCableSubs() {
    const [switchTv, setSwitchTv] = React.useState(" ")
    const toggleTvService = function() {
        switch (switchTv) {
            case "startimes" :
                return <img src={StmLogo} alt="dash data" /> 
            case "dstv" :
                return <img src={DstvLogo} alt="dash data" /> 
            case "gotv" :
                return <img src={GotvLogo} alt="dash data" /> 
            default:
                break;
                
        }
    }

    return (
        <section className="sectionCableTvSubs">
            <div className="tvMainCont">

            
 <div className="TvCableSubs"> 
 <h2 className="subscriptionTitle"><LiveTvIcon style={{fontSize: "3.4rem"}}/> <span>Cable Tv</span></h2>

            <figure className="priceDisp">
                <div className="TvLogoDis">
                    {toggleTvService()}
                </div>
                <div>

               <h5>
                 $678.90
                </h5>
                <span>Your Price</span>
                </div>
            </figure>
            <form action="" id="dataForm" className="transForm">
                <div>
                <label htmlFor="service">Service</label>
                <div className="radiusCheck golf golf3">
                    <figure>
                <input type="radio" name="tvService" id="" onChange={() => setSwitchTv("startimes")} /><span>Startimes</span>
                    </figure>
                    <figure>
                <input type="radio" name="tvService" id="" onChange={() => setSwitchTv("gotv")}/><span>GoTv</span>
                    </figure>
                    <figure>
                <input type="radio" name="tvService" id="" onChange={() => setSwitchTv("dstv")}/><span>DSTV</span>
                    </figure>
                </div>
                {/* <select name="dataNet" id="" required>
                    <option value="" disabled selected hidden>select option</option>
                    <option value="startimes">Startimes</option>
                    <option value="gotv">GoTv</option>
                    <option value="DSTV">DSTV</option>
                </select> */}
                </div>

                <div className="golf golf2"> 
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
            <div className="dataSubIllustration">illustrations</div>

            </div>
        </section>
    )
}

export default TVCableSubs;
