import React  from "react";
import {bulksTextDetails} from './pricingTablesEntry'


function BulkPriceCard(props) {
    return (
<tr>
                    <td>{props.amount}</td>
                    <td>{props.price}</td>
                    <td>{props.percent}</td>
                </tr>
    )
}

function CreateBulksCard(grops) {
    return ( 
           <BulkPriceCard key={grops.id} amount={grops.qty} price={grops.pricing} percent={grops.percentage} />
        
    )
}

function BulksPrice() {
    return (
        <figure className="bulksPriceCont">
            <table>
            <thead> 
                <th>
                    <td>Amount</td>
                    <td>Price</td>
                    <td>Discount</td> 
                </th>
            </thead>
            <tbody> 
           { bulksTextDetails.map(CreateBulksCard)}
            </tbody>
           </table>
        </figure>
    )
}

export default BulksPrice;