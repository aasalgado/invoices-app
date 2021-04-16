import React, { Component } from 'react';
import {Table, Button} from 'reactstrap'

class App extends Component {
    state = { 
        isLoading : false,
        invoices : [
            {
                "id" : "100",
                "Vendor" : "Hankook",
                "Amount" : "$18,000",
                "Invoice" : "1234",
                "Date" : "08/21/2019"
            },
            {
                "id" : "101",
                "Vendor" : "Hankook",
                "Amount" : "$18,000",
                "Invoice" : "1234",
                "Date" : "08/21/2019"
            },
            // {
            //     "id" : "102",
            //     "Vendor" : "Hankook",
            //     "Amount" : "$18,000",
            //     "Invoice" : "1234",
            //     "Date" : "08/21/2019"
            // },
        ]
     }

    render() { 
        const isLoading = this.state.isLoading;
        const allinvoices = this.state.invoices;
        
        

        if (isLoading)
            return (<div>Loading...</div>);

        let invoices = allinvoices.map( invoice => 
            <tr key={invoice.id}>
                <td>{invoice.Vendor}</td>
                <td>{invoice.Amount}</td>
                <td>{invoice.Invoice}</td>
                <td>{invoice.Date}</td>
            </tr>
            )

        return (
            <div className="container border border-secondary rounded center">
                <div className="row">
                    <div className="col-12">
                        <h4>Pending Invoices - The Test Company</h4>
                    </div>
                </div>
                <div className="row">
                    <div className=".col-xs-12 center text-center">
                        <Table dark responsive stripped bordered hover>
                            <thead>
                                <th>Vendor</th>
                                <th>Amount</th>
                                <th>Invoice #</th>
                                <th>Date</th>
                                <th colSpan="4">Actions</th>
                                <th>Image</th>
                            </thead>
                            <tbody>
                                {this.state.invoices.length === 0 ? <td colSpan="9">All caught up!</td> : invoice}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
};
 
export default App;