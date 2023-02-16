import React from "react";
import Convt from '@mui/icons-material/CurrencyExchange';
function PriceConvert() {
    return (
        <div className="priceConvertCont">
            <figure className="convertCard">
                <h5>Airtime to cash</h5>
                <p className="flex">
                    <span className="flex"><Convt fontSize="large"/> <span>MTN</span></span><span className="percent">15%</span>
                </p>
                <div className="percentBarCont">
                    <div className="percentBar"> &nbsp;</div>
                </div>
            </figure>
            <figure className="convertCard">
                <h5>Airtime to cash</h5>
                <p className="flex">
                    <span className="flex"><Convt fontSize="large"/> <span>Glo</span></span><span className="percent">25%</span>
                </p>
                <div className="percentBarCont gloC">
                    <div className="percentBar"> &nbsp;</div>
                </div>
            </figure>
            <figure className="convertCard">
                <h5>Airtime to cash</h5>
                <p className="flex">
                    <span className="flex"><Convt fontSize="large"/> <span>Airtel</span></span><span className="percent">19%</span>
                </p>
                <div className="percentBarCont">
                    <div className="percentBar acc"> &nbsp;</div>
                </div>
            </figure>
            <figure className="convertCard">
                <h5>Airtime to cash</h5>
                <p className="flex">
                    <span className="flex"><Convt fontSize="large"/> <span>9Mobile</span></span><span className="percent ccmobile">15%</span>
                </p>
                <div className="percentBarCont">
                    <div className="percentBar"> &nbsp;</div>
                </div>
            </figure> 
        </div>
    )
}

export default PriceConvert;