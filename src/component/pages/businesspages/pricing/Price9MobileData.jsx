import React from "react";
import { databundles9mobilepricing } from "./pricingTablesEntry"; 

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
function Price9MobileData() { 
    function CreatDataPriceEntry(e) {
        return (
    
            <DataPriceTableRow key={e.id} net={e.network} data={e.dataplan} dura={e.period} mprice={e.member} vprice={e.visitor} />
        )
    }
            
            return (
                <figure className="etisalatDataPriceCont">
                    <table className="dataPricingTable">
                        <thead>
                            <th>Network Etisalat</th>
                            <th>Data Plan </th>
                            <th>Duration</th>
                            <th>Member</th>
                            <th>Visitor</th>
                        </thead>
                        <tbody>
                            {databundles9mobilepricing.map(CreatDataPriceEntry)}
                        </tbody>
                    </table>
                </figure>
            )
        }
        
export default Price9MobileData;