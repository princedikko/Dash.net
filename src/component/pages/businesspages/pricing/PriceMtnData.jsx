import React from "react";
import { databundlesMtnpricing } from "./pricingTablesEntry";

function DataPriceTableRow(props) {
    return (
<tr>
                        <td>{props.net}</td>
                        <td>{props.data}</td>
                        <td>{props.dura}</td>
                        <td>{props.mprice}</td>
                        <td>{props.vprice}</td>
                    </tr>
    )
}


function PriceMtnData() {
function CreatDataPriceEntry(e) {
    return (

        <DataPriceTableRow key={e.id} net={e.network} data={e.dataplan} dura={e.period} mprice={e.member} vprice={e.visitor} />
    )
}

    return (
        <figure className="mtnDataPriceCont">
            <table className="dataPricingTable">
                <thead>
                    <th>Network</th>
                    <th>Data Plan </th>
                    <th>Duration</th>
                    <th>Member</th>
                    <th>Visitor</th>
                </thead>
                <tbody>
                    {databundlesMtnpricing.map(CreatDataPriceEntry)}

                </tbody>
            </table>
        </figure>
    )
}

export default PriceMtnData;