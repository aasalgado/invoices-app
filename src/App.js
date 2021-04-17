import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { faImage, faThumbsUp, faThumbsDown, faMoneyCheckAlt, faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                "id" : "200",
                "Vendor" : "Hankook",
                "Amount" : "$18,000",
                "Invoice" : "1234",
                "Date" : "08/21/2019"
            },
            {
                "id" : "300",
                "Vendor" : "Hankook",
                "Amount" : "$18,000",
                "Invoice" : "1234",
                "Date" : "08/21/2019"
            },
        ]
     }

     remove(id) {
         let updatedInvoices = [...this.invoices].filter( x => x.id !== id);
         this.setState({invoices : updatedInvoices});
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
                <td><Button className="btn btn-lg btn-success" onClick={() => this.remove(invoice.id)}> <FontAwesomeIcon icon={faThumbsUp} /> OK </Button></td>
                <td><Button className="btn btn-lg btn-danger" onClick={() => this.remove(invoice.id)}> <FontAwesomeIcon icon={faThumbsDown} /> NOK </Button></td>
                <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.id)}> <FontAwesomeIcon icon={faMoneyCheckAlt} /> 50% </Button></td>
                <td><Button className="btn btn-lg btn-warning" onClick={() => this.remove(invoice.id)}> <FontAwesomeIcon icon={faSearchDollar} /> ?? </Button></td>
                <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.id)}> <FontAwesomeIcon icon={faImage} /> Image </Button></td>
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
                                {this.state.invoices.length === 0 ? <td colSpan="9">All caught up!</td> : invoices}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
};
 
export default App;