import React from "react";
import { databundlesAirtelpricing } from "./pricingTablesEntry";


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
function PriceAirtelData() { 
    function CreatDataPriceEntry(e) {
        return (
    
            <DataPriceTableRow key={e.id} net={e.network} data={e.dataplan} dura={e.period} mprice={e.member} vprice={e.visitor} />
        )
    }
            
            return (
                <figure className="airtelDataPriceCont">
                    <table className="dataPricingTable">
                        <thead>
                            <th>Network airtel</th>
                            <th>Data Plan </th>
                            <th>Duration</th>
                            <th>Member</th>
                            <th>Visitor</th>
                        </thead>
                        <tbody>
                            {databundlesAirtelpricing.map(CreatDataPriceEntry)}
                        </tbody>
                    </table>
                </figure>
            )
        }
        
export default PriceAirtelData;