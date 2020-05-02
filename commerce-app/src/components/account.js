import React from "react";
import {Button, Table} from "react-bootstrap";
import "./account.css";

export default function Account(props) {
    const account_number = props.match.params.account_number;
  
    return (
        <div className='Account'>
            <div className = 'header'>
                <h4>{`Account ${account_number} -- Primary Savings`}</h4> 
                <h6>Current Balance: $65687.00</h6>
            </div>
            <Table bordered striped>
    
                <thead className='commerce-text'> 
                    <tr>
                        <th className = 'commerce-text'>Transaction Number</th>
                        <th className = 'commerce-text'>Description</th>
                        <th className = 'commerce-text'>Ammount</th>
                        <th className = 'commerce-text'>Category</th>
                        <th className = 'commerce-text'>Date</th>
                        <th className = 'commerce-text'>End Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Starbucks POS</td> 
                        <td>$10</td>
                        <td>Coffee</td> 
                        <td>04/26/2020</td>
                        <td>$990</td>
                        <td><Button>Edit</Button>{' '}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Vietnamese Cafe</td> 
                        <td>$20</td>
                        <td>Food</td> 
                        <td>04/26/2020</td>
                        <td>$970</td>
                        <td><Button>Edit</Button>{' '}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Beauty Salon</td> 
                        <td>$50</td>
                        <td>Products</td> 
                        <td>04/26/2020</td>
                        <td>$920</td>
                        <td><Button>Edit</Button>{' '}</td>
                    </tr>
                </tbody>
            </Table>
        <div> <Button variant="link" id="right-panel-link">Download Transactions in a CSV File</Button> </div>
        </div>
    
    );
}