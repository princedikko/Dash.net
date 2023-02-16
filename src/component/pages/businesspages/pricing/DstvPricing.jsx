import React from "react";
import { dstvPricingDetails } from "./pricingTablesEntry";
function CreactdstvTd(props) {
    return (
<tr>
                        <td>{props.srv}</td>
                        <td>{props.net}</td>
                        <td>{props.price}</td>
                        <td>{props.dura}</td>
                    </tr>
    )
}

function DstvPricing() {

function CreateDstvCardDetails(e) {
    return (
        <CreactdstvTd srv ={e.service} net={e.network} price={e.price} dura={e.period}
                />
    )
}

    return (
        <figure className="dstvCard">
            <table>
                <thead>
                    <th>Service</th>
                    <th>Network</th>
                    <th>Price</th>
                    <th>Period</th>
                </thead>
                <tbody>
                { dstvPricingDetails.map(CreateDstvCardDetails)}
                </tbody>
            </table>
        </figure>
    )
}

export default DstvPricing;