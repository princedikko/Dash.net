import React from "react";
import { startimesPricingDetails } from "./pricingTablesEntry";

function StartimeTBody(props) {
    return(
        <tr>
                    <td>{props.logo}</td>
                    <td>{props.name}</td>
                    <td>{props.net}</td>
                    <td>{props.d}</td>
                    <td>{props.w}</td>
                    <td>{props.m}</td>
                </tr>
    )
}

function StartimePricing() {

    function CreateStartimesCardDetails(e) {
        return (
            <StartimeTBody key={e.id} logo={e.icon} name={e.bouquet} net={e.network} d={e.daily} w={e.weekly} m={e.monthly}/>

        )
    }

    return (
        <figure className="staPriceCont">
           <table>
            <thead>  
                    <th>Service</th>
                    <th>Bouquet</th>
                    <th>Network</th>
                    <th>Daily</th>
                    <th>Weekly</th>
                    <th>Monthly</th> 
            </thead>
            <tbody>
                {startimesPricingDetails.map(CreateStartimesCardDetails)}
            </tbody>
           </table>
        </figure>
    )
}

export default StartimePricing;