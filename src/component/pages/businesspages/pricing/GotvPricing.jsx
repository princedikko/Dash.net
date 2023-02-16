import React from "react";
import { goTvPricingDetails } from "./pricingTablesEntry";
function CreactGotvTd(props) {
    return (
<tr>
                        <td>{props.srv}</td>
                        <td>{props.net}</td>
                        <td>{props.price}</td>
                        <td>{props.dura}</td>
                    </tr>
    )
}

function GotvPricing() {

function CreateGoTvCardDetails(e) {
    return (
        <CreactGotvTd srv ={e.service} net={e.network} price={e.price} dura={e.period}
                />
    )
}

    return (
        <figure className="dstvCard GotvCard">
            <table>
                <thead>
                    <th>Service</th>
                    <th>Network</th>
                    <th>Price</th>
                    <th>Period</th>
                </thead>
                <tbody>
                { goTvPricingDetails.map(CreateGoTvCardDetails)}
                </tbody>
            </table>
        </figure>
    )
}

export default GotvPricing;